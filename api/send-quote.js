// api/send-quote.js
// Permanent, direct server-side email handler for Goga Stainless Get Quote
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import dns from "dns";

// Optimize DNS resolution for serverless environments (e.g. AWS Lambda / Vercel)
if (dns && dns.setDefaultResultOrder) {
  try {
    dns.setDefaultResultOrder("ipv4first");
  } catch {
    // Ignore if not supported
  }
}

function loadEnvFallback() {
  if (process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD) return;
  try {
    const envPath = path.resolve(process.cwd(), ".env");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      content.split("\n").forEach((line) => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith("#")) {
          const [key, ...rest] = trimmed.split("=");
          const val = rest.join("=").trim().replace(/^["']|["']$/g, "");
          if (key && val && !process.env[key.trim()]) {
            process.env[key.trim()] = val;
          }
        }
      });
    }
  } catch {
    // Ignore if not present or accessible
  }
}

function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeInput(str) {
  if (typeof str !== "string") return "";
  return str.trim();
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof email === "string" && re.test(email.trim());
}

function getSmtpConfig() {
  const possiblePassKeys = [
    "SMTP_PASS",
    "SMTP_PASSWORD",
    "GMAIL_APP_PASSWORD",
    "GMAIL_PASSWORD",
    "EMAIL_PASSWORD",
    "EMAIL_PASS",
    "MAIL_PASSWORD",
    "MAIL_PASS",
    "APP_PASSWORD",
    "VITE_SMTP_PASS",
    "VITE_GMAIL_APP_PASSWORD",
    "GMAIL_PASS",
  ];

  let rawPass = "";
  let matchedKey = null;

  for (const k of possiblePassKeys) {
    if (process.env[k] && typeof process.env[k] === "string" && process.env[k].trim()) {
      rawPass = process.env[k];
      matchedKey = k;
      break;
    }
  }

  // If still not matched, dynamically scan any environment variable containing pass or secret
  if (!rawPass) {
    for (const [k, v] of Object.entries(process.env)) {
      if (/pass|secret|app_pass/i.test(k) && typeof v === "string" && v.trim().length >= 10) {
        rawPass = v;
        matchedKey = k;
        break;
      }
    }
  }

  // Strip surrounding quotes and whitespace
  const smtpPass = rawPass
    ? rawPass.trim().replace(/^["']|["']$/g, "").replace(/\s+/g, "")
    : "";

  const possibleUserKeys = [
    "SMTP_USER",
    "GMAIL_USER",
    "EMAIL_USER",
    "MAIL_USER",
    "VITE_SMTP_USER",
    "USER_EMAIL",
  ];
  let smtpUser = "";
  for (const k of possibleUserKeys) {
    if (process.env[k] && typeof process.env[k] === "string" && process.env[k].trim()) {
      smtpUser = process.env[k].trim();
      break;
    }
  }
  if (!smtpUser) {
    smtpUser = "info.gogastainless@gmail.com";
  }

  const smtpHost = (process.env.SMTP_HOST || "smtp.gmail.com").trim();
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpSecure =
    process.env.SMTP_SECURE !== undefined
      ? String(process.env.SMTP_SECURE).toLowerCase() === "true"
      : smtpPort === 465;

  const smtpFrom = process.env.SMTP_FROM || `"Goga Stainless" <${smtpUser}>`;

  const businessEmail = (
    process.env.BUSINESS_EMAIL ||
    process.env.BUSINESS_RECEIVER_EMAIL ||
    "info.gogastainless@gmail.com"
  ).trim();

  const businessCc = (
    process.env.BUSINESS_CC_EMAIL ||
    "gogastainless@gmail.com"
  ).trim();

  return {
    smtpUser,
    smtpPass,
    smtpHost,
    smtpPort,
    smtpSecure,
    smtpFrom,
    businessEmail,
    businessCc,
    matchedKey,
  };
}

export default async function handler(req, res) {
  loadEnvFallback();

  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Safe readiness check (GET) for deployment verification (never leaks sensitive data)
  if (req.method === "GET") {
    const config = getSmtpConfig();
    const isConfigured = Boolean(config.smtpPass);
    const emailKeysFound = Object.keys(process.env).filter((k) =>
      /smtp|mail|pass|secret/i.test(k)
    );

    return res.status(200).json({
      status: "ok",
      endpoint: "/api/send-quote",
      smtpConfigured: isConfigured,
      matchedPasswordKey: config.matchedKey,
      detectedKeysInVercel: emailKeysFound,
      message: isConfigured
        ? "Email API is configured and ready to accept inquiries."
        : "SMTP_PASS is not configured in Vercel environment variables. Please add SMTP_PASS in Vercel Settings > Environment Variables, and Redeploy.",
    });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST, OPTIONS");
    return res.status(405).json({
      success: false,
      error: "Method Not Allowed. Please send a POST request with inquiry data.",
    });
  }

  try {
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({
          success: false,
          error: "Something went wrong. Please try again.",
        });
      }
    }

    if (!body || typeof body !== "object") {
      return res.status(400).json({
        success: false,
        error: "Something went wrong. Please try again.",
      });
    }

    const honeypot = sanitizeInput(body.website || body.honeypot || body.companyWebsite || "");
    if (honeypot) {
      return res.status(400).json({
        success: false,
        error: "Something went wrong. Please try again.",
      });
    }

    const name = sanitizeInput(body.name);
    const company = sanitizeInput(body.company);
    const email = sanitizeInput(body.email);
    const phone = sanitizeInput(body.phone);
    const product = sanitizeInput(body.product);
    const quantity = sanitizeInput(body.quantity);
    const specification = sanitizeInput(body.specification);
    const message = sanitizeInput(body.message);

    // Validation
    if (!name || name.length < 2) {
      return res.status(400).json({
        success: false,
        error: "Representative name is required (minimum 2 characters).",
      });
    }
    if (!company) {
      return res.status(400).json({
        success: false,
        error: "Company name is required.",
      });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        error: "A valid email address is required.",
      });
    }
    const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, "");
    if (!cleanPhone || cleanPhone.length < 7) {
      return res.status(400).json({
        success: false,
        error: "A valid phone number is required (minimum 7 digits).",
      });
    }
    if (!product) {
      return res.status(400).json({
        success: false,
        error: "Please specify the product or material required.",
      });
    }
    if (!quantity) {
      return res.status(400).json({
        success: false,
        error: "Please specify the quantity or volume needed.",
      });
    }
    if (!message || message.length < 5) {
      return res.status(400).json({
        success: false,
        error: "Please describe your requirements (minimum 5 characters).",
      });
    }

    // SMTP Configuration
    const {
      smtpUser,
      smtpPass,
      smtpHost,
      smtpPort,
      smtpSecure,
      smtpFrom,
      businessEmail,
      businessCc,
    } = getSmtpConfig();

    // If SMTP credentials are missing, fail cleanly with customer-friendly error
    if (!smtpPass) {
      console.error(
        "[SERVER CONFIG ERROR] Neither SMTP_PASS nor GMAIL_APP_PASSWORD is set in Vercel Environment Variables. Please configure SMTP_PASS in Vercel Project Settings > Environment Variables and redeploy."
      );
      return res.status(500).json({
        success: false,
        error: "Unable to send your inquiry at this moment. Please try again or contact us directly.",
        debugCode: "CONFIG_MISSING_SMTP_PASS",
      });
    }

    const submissionDate = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });

    // 1. Business Email Content (Sent to business recipient)
    const businessSubject = `New Get Quote Inquiry – Goga Stainless`;

    const businessPlainText = `
New Quote Request

--------------------------------
CUSTOMER INFORMATION
--------------------------------

Name:
${name}

Company Name:
${company}

Email:
${email}

Phone:
${phone}

--------------------------------
REQUIREMENT
--------------------------------

Product / Material:
${product}

Quantity / Volume:
${quantity}

Component Specification / Grade:
${specification || "Standard / Commercial Specification"}

Requirement / Message:
${message}

--------------------------------

This enquiry was submitted through the Goga Stainless website.
Submission Date & Time: ${submissionDate}
`.trim();

    const businessHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Get Quote Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 30px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">
          <!-- Header -->
          <tr>
            <td style="background-color: #173F52; padding: 28px 32px; border-bottom: 4px solid #D92B20;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;">GOGA STAINLESS</h1>
                    <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;">New Get Quote Request</p>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: rgba(217, 43, 32, 0.2); color: #ff6b6b; border: 1px solid #D92B20; border-radius: 6px; padding: 4px 10px; font-size: 11px; font-weight: 700; text-transform: uppercase;">Inquiry</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Banner -->
          <tr>
            <td style="background-color: #f8fafc; padding: 14px 32px; border-bottom: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 13px; color: #475569;">
                A new quote enquiry has been submitted through the <strong>Goga Stainless Website</strong>.
              </p>
            </td>
          </tr>

          <!-- Customer Details -->
          <tr>
            <td style="padding: 24px 32px 14px 32px;">
              <h2 style="margin: 0 0 12px 0; font-size: 12px; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; color: #D92B20;">
                Customer Details
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                <tr>
                  <td width="35%" style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Name</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 700; border-bottom: 1px solid #e2e8f0;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Company</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 600; border-bottom: 1px solid #e2e8f0;">${escapeHtml(company)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Email</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #173F52; font-weight: 600; border-bottom: 1px solid #e2e8f0;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #173F52; text-decoration: underline;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase;">Phone</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 600;">${escapeHtml(phone)}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Requirement Details -->
          <tr>
            <td style="padding: 6px 32px 14px 32px;">
              <h2 style="margin: 0 0 12px 0; font-size: 12px; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; color: #D92B20;">
                Requirement Details
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                <tr>
                  <td width="35%" style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Product</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 700; border-bottom: 1px solid #e2e8f0;">${escapeHtml(product)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Specification</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 500; border-bottom: 1px solid #e2e8f0;">${escapeHtml(specification || "Standard / Commercial")}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase;">Quantity</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 700;">${escapeHtml(quantity)}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 6px 32px 20px 32px;">
              <h2 style="margin: 0 0 10px 0; font-size: 12px; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; color: #D92B20;">
                Message / Requirement Notes
              </h2>
              <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #173F52; border-radius: 6px; padding: 14px; font-size: 13px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${escapeHtml(message)}</div>
            </td>
          </tr>

          <!-- Reply Button -->
          <tr>
            <td align="center" style="padding: 0 32px 24px 32px;">
              <a href="mailto:${escapeHtml(email)}?subject=Re:%20Quote%20Request%20-%20${encodeURIComponent(product)}%20-%20Goga%20Stainless" style="display: inline-block; background-color: #173F52; color: #ffffff; text-decoration: none; padding: 11px 26px; border-radius: 8px; font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;">
                Reply Directly to Customer
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 18px 32px; text-align: center; border-top: 1px solid #1e293b;">
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                Submitted from: <strong>Goga Stainless Website (www.gogastainless.com)</strong>
              </p>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #64748b;">
                Date &amp; Time: ${submissionDate}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

    // 2. Customer Confirmation Email Content
    const customerSubject = "Goga Stainless — Quote Request Confirmation";

    const customerPlainText = `
Dear ${name},

Thank you for reaching out to Goga Stainless. We have received your technical quote request.

Here is a copy of your submitted requirement:
--------------------------------------------------
Product       : ${product}
Specification : ${specification || "Standard / Commercial"}
Quantity      : ${quantity}
Company       : ${company}
Message       : ${message}
--------------------------------------------------

Our sales engineering team is currently reviewing your specifications and will respond with a formal quotation and delivery schedule shortly.

If you have any urgent queries, please contact us:
• Phone   : +91 845 282 8260
• Email   : ${businessEmail}
• Website : www.gogastainless.com

Warm regards,
Sales & Engineering Team
Goga Stainless
`.trim();

    const customerHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Goga Stainless — Quote Request Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 30px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">
          <!-- Header -->
          <tr>
            <td style="background-color: #173F52; padding: 28px 32px; border-bottom: 4px solid #D92B20; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;">GOGA STAINLESS</h1>
              <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;">Premier Stainless &amp; Alloy Manufacturer</p>
            </td>
          </tr>

          <!-- Confirmation Banner -->
          <tr>
            <td style="padding: 26px 32px 14px 32px;">
              <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 14px 18px; margin-bottom: 18px;">
                <p style="margin: 0; color: #065f46; font-size: 14px; font-weight: 600;">
                  ✓ Your quote request has been received by Goga Stainless.
                </p>
              </div>

              <p style="margin: 0 0 12px 0; font-size: 14px; color: #334155; line-height: 1.6;">
                Dear <strong>${escapeHtml(name)}</strong>,
              </p>
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #334155; line-height: 1.6;">
                Thank you for reaching out to Goga Stainless. Your requirement has been sent to our sales engineering team, and a confirmation copy has been sent to your email address. We will review your specifications and get back to you with a formal quotation shortly.
              </p>

              <h2 style="margin: 18px 0 10px 0; font-size: 12px; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; color: #173F52;">
                Summary of Submitted Requirement
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                <tr>
                  <td width="35%" style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Product</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 700; border-bottom: 1px solid #e2e8f0;">${escapeHtml(product)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Specification</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 500; border-bottom: 1px solid #e2e8f0;">${escapeHtml(specification || "Standard / Commercial")}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Quantity</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 700;">${escapeHtml(quantity)}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase;">Company</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 600;">${escapeHtml(company)}</td>
                </tr>
              </table>

              <div style="margin-top: 14px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 14px;">
                <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b;">Message / Requirement Details:</p>
                <p style="margin: 0; font-size: 12px; color: #334155; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(message)}</p>
              </div>
            </td>
          </tr>

          <!-- Contact Bar -->
          <tr>
            <td style="padding: 10px 32px 24px 32px;">
              <div style="background-color: #173F52; border-radius: 8px; padding: 14px; text-align: center; color: #ffffff;">
                <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Need Immediate Assistance?</p>
                <p style="margin: 0; font-size: 13px; color: #cbd5e1;">
                  Direct Line: <strong style="color: #ffffff;">+91 845 282 8260</strong> &nbsp;|&nbsp; Email: <a href="mailto:${businessEmail}" style="color: #ffffff; text-decoration: underline;">${businessEmail}</a>
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 18px 32px; text-align: center; border-top: 1px solid #1e293b;">
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                <strong>Goga Stainless</strong> — Plot No-408, Har-Har Wala Bldg, Office No-62 3rd Floor, P.B. Marg, Mumbai-400 004, India
              </p>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #64748b;">
                Website: <a href="https://www.gogastainless.com" style="color: #94a3b8; text-decoration: underline;">www.gogastainless.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

    // Create Authenticated Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 15000,
      greetingTimeout: 12000,
      socketTimeout: 20000,
    });

    // 1. Send Business Email
    // From: Authenticated account (automatically placed in Gmail Sent folder!)
    // To: businessEmail
    // CC: businessCc
    // Reply-To: Customer's email
    const businessMailOptions = {
      from: smtpFrom,
      to: businessEmail,
      ...(businessCc && businessCc !== businessEmail ? { cc: businessCc } : {}),
      replyTo: `"${name}" <${email}>`,
      subject: businessSubject,
      text: businessPlainText,
      html: businessHtml,
      encoding: "utf-8",
    };

    const businessResult = await transporter.sendMail(businessMailOptions);

    if (!businessResult || !businessResult.messageId) {
      console.error("[SMTP REJECTED]: Server did not return messageId.", businessResult);
      return res.status(500).json({
        success: false,
        error: "Unable to send your inquiry at this moment. Please try again or contact us directly.",
      });
    }

    console.log(`[SMTP ACCEPTED] Quote enquiry sent. MessageId: ${businessResult.messageId}`);

    // 2. Send Customer Confirmation Copy
    try {
      await transporter.sendMail({
        from: smtpFrom,
        to: email,
        subject: customerSubject,
        text: customerPlainText,
        html: customerHtml,
        encoding: "utf-8",
      });
    } catch (custError) {
      console.warn("[CUSTOMER CONFIRMATION WARNING]:", custError.message);
    }

    return res.status(200).json({
      success: true,
      messageId: businessResult.messageId,
      message: "Your inquiry has been sent successfully.",
    });

  } catch (error) {
    console.error("[QUOTE SUBMISSION EXCEPTION]:", error && error.stack ? error.stack : error);
    return res.status(500).json({
      success: false,
      error: "Unable to send your inquiry at this moment. Please try again or contact us directly.",
    });
  }
}
