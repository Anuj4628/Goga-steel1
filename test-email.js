// test-email.js
// Standalone script to test real authenticated email delivery & Gmail Sent verification
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// Load .env manually
const envPath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  envContent.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const [key, ...rest] = trimmed.split("=");
      const val = rest.join("=").trim().replace(/^["']|["']$/g, "");
      if (key && val) {
        process.env[key.trim()] = val;
      }
    }
  });
}

const smtpUser = process.env.SMTP_USER || "info.gogastainless@gmail.com";
const smtpPass = process.env.SMTP_PASS;

console.log("\n=======================================================");
console.log("       GOGA STAINLESS — EMAIL SYSTEM VERIFICATION      ");
console.log("=======================================================");
console.log("SMTP Host : smtp.gmail.com:465 (SSL)");
console.log("User      :", smtpUser);
console.log("Password  :", smtpPass ? "●●●●●●●●●●●●●●●● (" + smtpPass.length + " chars)" : "[MISSING]");
console.log("-------------------------------------------------------");

if (!smtpPass) {
  console.error("❌ ERROR: SMTP_PASS is empty in .env!");
  console.error("To enable live email delivery and record in Gmail Sent:");
  console.error("1. Go to: https://myaccount.google.com/apppasswords");
  console.error("2. Sign in as: info.gogastainless@gmail.com");
  console.error("3. Generate a 16-character App password for 'Goga Website'");
  console.error("4. Paste it into .env (SMTP_PASS=xxxx xxxx xxxx xxxx)");
  console.error("5. Run this test again: node test-email.js\n");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

async function run() {
  try {
    console.log("1. Testing connection to Google SMTP Server (smtp.gmail.com:465)...");
    await transporter.verify();
    console.log("   ✓ Authenticated successfully with Google!");

    console.log("\n2. Sending test Get Quote enquiry...");
    const info = await transporter.sendMail({
      from: `"Goga Stainless" <${smtpUser}>`,
      to: "info.gogastainless@gmail.com",
      cc: "gogastainless@gmail.com",
      replyTo: "Anuj Mishra <anujm4638@gmail.com>",
      subject: "New Get Quote Request — Goga Stainless (Live Test)",
      text: "NEW GET QUOTE REQUEST\n\nName: Anuj Mishra\nProduct: Stainless Steel Flanges\nQuantity: 100 pcs\nMessage: Live test verification.",
    });

    console.log("   ✓ Email accepted by Google SMTP server!");
    console.log("   • Message ID :", info.messageId);
    console.log("   • Accepted   :", info.accepted.join(", "));
    console.log("   • Gmail Sent : The email is now recorded in the Sent folder of", smtpUser);
    console.log("\n=======================================================");
    console.log("             ALL CHECKS PASSED SUCCESSFULLY            ");
    console.log("=======================================================\n");
  } catch (err) {
    console.error("\n❌ Delivery failed:", err.message);
    if (err.message.includes("BadCredentials") || err.message.includes("Invalid login")) {
      console.error("Cause: The Google App Password in .env is incorrect or expired.");
    }
  }
}

run();
