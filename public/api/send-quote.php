<?php
/**
 * Goga Stainless - Production Email API Endpoint
 * Handles "Get Quote / Enquiry" form submissions.
 * Supports direct Google SMTP (SSL 465 / TLS 587) with fallback to PHP mail().
 */

// Disable direct HTML error display to avoid corrupting JSON responses
ini_set('display_errors', '0');
error_reporting(E_ALL);

// Security & CORS Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Max-Age: 86400");
header("X-Content-Type-Options: nosniff");

// Handle Preflight Request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header("Content-Type: application/json; charset=UTF-8");

// Load .env if present
function loadEnvFile() {
    $envPaths = [
        __DIR__ . '/.env',
        __DIR__ . '/../.env',
        __DIR__ . '/../../.env',
        dirname(dirname(__DIR__)) . '/.env'
    ];
    foreach ($envPaths as $path) {
        if (file_exists($path) && is_readable($path)) {
            $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            foreach ($lines as $line) {
                $line = trim($line);
                if ($line !== '' && strpos($line, '#') !== 0 && strpos($line, '=') !== false) {
                    list($key, $val) = explode('=', $line, 2);
                    $key = trim($key);
                    $val = trim($val, " \t\n\r\0\x0B\"'");
                    if (!getenv($key)) {
                        putenv("$key=$val");
                        $_ENV[$key] = $val;
                    }
                }
            }
            break;
        }
    }
}
loadEnvFile();

function getEnvVar($key, $default = '') {
    $val = getenv($key);
    if ($val !== false && trim($val) !== '') {
        return trim($val);
    }
    if (isset($_ENV[$key]) && trim($_ENV[$key]) !== '') {
        return trim($_ENV[$key]);
    }
    if (isset($_SERVER[$key]) && trim($_SERVER[$key]) !== '') {
        return trim($_SERVER[$key]);
    }
    return $default;
}

// SMTP & Business Configuration
$smtpHost      = getEnvVar('SMTP_HOST', 'smtp.gmail.com');
$smtpPort      = (int)getEnvVar('SMTP_PORT', '465');
$smtpUser      = getEnvVar('SMTP_USER', 'info.gogastainless@gmail.com');
$smtpPass      = preg_replace('/\s+/', '', getEnvVar('SMTP_PASS', 'yohojenkwvzpgnvn'));
$smtpFrom      = getEnvVar('SMTP_FROM', '"Goga Stainless" <' . $smtpUser . '>');
$businessEmail = getEnvVar('BUSINESS_EMAIL', 'info.gogastainless@gmail.com');
$businessCc    = getEnvVar('BUSINESS_CC_EMAIL', 'gogastainless@gmail.com');

// 1. Healthcheck for GET requests
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode([
        'status'         => 'ok',
        'endpoint'       => '/api/send-quote',
        'runtime'        => 'PHP ' . PHP_VERSION,
        'smtpConfigured' => !empty($smtpPass),
        'message'        => 'Goga Stainless Email API is online and ready.'
    ]);
    exit;
}

// Allow only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error'   => 'Method Not Allowed. Please send a POST request with inquiry data.'
    ]);
    exit;
}

// Parse JSON Body
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    // Also check standard form post
    if (!empty($_POST)) {
        $data = $_POST;
    } else {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error'   => 'Invalid JSON payload received.'
        ]);
        exit;
    }
}

// Anti-Spam Honeypot Check
$honeypot = trim($data['website'] ?? $data['honeypot'] ?? $data['companyWebsite'] ?? '');
if (!empty($honeypot)) {
    // Silently succeed for bots
    echo json_encode([
        'success' => true,
        'message' => 'Your inquiry has been sent successfully.'
    ]);
    exit;
}

// Helper sanitizers
function cleanStr($val) {
    return is_string($val) ? trim($val) : '';
}

$name          = cleanStr($data['name'] ?? '');
$company       = cleanStr($data['company'] ?? '');
$email         = cleanStr($data['email'] ?? '');
$phone         = cleanStr($data['phone'] ?? '');
$product       = cleanStr($data['product'] ?? '');
$quantity      = cleanStr($data['quantity'] ?? '');
$specification = cleanStr($data['specification'] ?? 'Standard / Commercial Specification');
$message       = cleanStr($data['message'] ?? '');

// Strict Validation
if (mb_strlen($name) < 2) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Representative name is required (minimum 2 characters).']);
    exit;
}
if (empty($company)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Company name is required.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'A valid corporate email address is required.']);
    exit;
}
$cleanPhone = preg_replace('/[\s\-\(\)\+]/', '', $phone);
if (strlen($cleanPhone) < 7) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'A valid phone number is required (minimum 7 digits).']);
    exit;
}
if (empty($product)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please specify the product or material required.']);
    exit;
}
if (empty($quantity)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please specify the quantity or volume needed.']);
    exit;
}
if (mb_strlen($message) < 5) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please describe your requirements (minimum 5 characters).']);
    exit;
}

// Set timezone for IST timestamp
date_default_timezone_set('Asia/Kolkata');
$submissionDate = date('l, F j, Y \a\t g:i A') . ' IST';

// HTML escaping helper
function esc($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

// -------------------------------------------------------------
// 1. Prepare Business Email Content
// -------------------------------------------------------------
$businessSubject = "New Get Quote Inquiry – Goga Stainless";

$businessPlainText = "New Quote Request\n\n"
    . "--------------------------------\n"
    . "CUSTOMER INFORMATION\n"
    . "--------------------------------\n\n"
    . "Name: $name\n"
    . "Company Name: $company\n"
    . "Email: $email\n"
    . "Phone: $phone\n\n"
    . "--------------------------------\n"
    . "REQUIREMENT\n"
    . "--------------------------------\n\n"
    . "Product / Material: $product\n"
    . "Quantity / Volume: $quantity\n"
    . "Component Specification / Grade: $specification\n"
    . "Requirement / Message: $message\n\n"
    . "--------------------------------\n"
    . "This enquiry was submitted through the Goga Stainless website.\n"
    . "Submission Date & Time: $submissionDate\n";

$businessHtml = '<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Get Quote Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 30px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">
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
          <tr>
            <td style="background-color: #f8fafc; padding: 14px 32px; border-bottom: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 13px; color: #475569;">
                A new quote enquiry has been submitted through the <strong>Goga Stainless Website</strong>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 32px 14px 32px;">
              <h2 style="margin: 0 0 12px 0; font-size: 12px; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; color: #D92B20;">Customer Details</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                <tr>
                  <td width="35%" style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Name</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 700; border-bottom: 1px solid #e2e8f0;">' . esc($name) . '</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Company</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 600; border-bottom: 1px solid #e2e8f0;">' . esc($company) . '</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Email</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #173F52; font-weight: 600; border-bottom: 1px solid #e2e8f0;"><a href="mailto:' . esc($email) . '" style="color: #173F52; text-decoration: underline;">' . esc($email) . '</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase;">Phone</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 600;">' . esc($phone) . '</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 32px 14px 32px;">
              <h2 style="margin: 0 0 12px 0; font-size: 12px; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; color: #D92B20;">Requirement Details</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                <tr>
                  <td width="35%" style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Product</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 700; border-bottom: 1px solid #e2e8f0;">' . esc($product) . '</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Specification</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 500; border-bottom: 1px solid #e2e8f0;">' . esc($specification) . '</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase;">Quantity</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 700;">' . esc($quantity) . '</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 32px 20px 32px;">
              <h2 style="margin: 0 0 10px 0; font-size: 12px; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; color: #D92B20;">Message / Requirement Notes</h2>
              <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #173F52; border-radius: 6px; padding: 14px; font-size: 13px; line-height: 1.6; color: #334155; white-space: pre-wrap;">' . esc($message) . '</div>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 0 32px 24px 32px;">
              <a href="mailto:' . esc($email) . '?subject=Re:%20Quote%20Request%20-%20' . urlencode($product) . '%20-%20Goga%20Stainless" style="display: inline-block; background-color: #173F52; color: #ffffff; text-decoration: none; padding: 11px 26px; border-radius: 8px; font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;">Reply Directly to Customer</a>
            </td>
          </tr>
          <tr>
            <td style="background-color: #0f172a; padding: 18px 32px; text-align: center; border-top: 1px solid #1e293b;">
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">Submitted from: <strong>Goga Stainless Website (www.gogastainless.com)</strong></p>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #64748b;">Date &amp; Time: ' . esc($submissionDate) . '</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>';

// -------------------------------------------------------------
// 2. Prepare Customer Confirmation Email Content
// -------------------------------------------------------------
$customerSubject = "Goga Stainless — Quote Request Confirmation";

$customerPlainText = "Dear $name,\n\n"
    . "Thank you for reaching out to Goga Stainless. We have received your technical quote request.\n\n"
    . "Here is a copy of your submitted requirement:\n"
    . "--------------------------------------------------\n"
    . "Product       : $product\n"
    . "Specification : $specification\n"
    . "Quantity      : $quantity\n"
    . "Company       : $company\n"
    . "Message       : $message\n"
    . "--------------------------------------------------\n\n"
    . "Our sales engineering team is currently reviewing your specifications and will respond with a formal quotation and delivery schedule shortly.\n\n"
    . "If you have any urgent queries, please contact us:\n"
    . "• Phone   : +91 845 282 8260\n"
    . "• Email   : $businessEmail\n"
    . "• Website : www.gogastainless.com\n\n"
    . "Warm regards,\nSales & Engineering Team\nGoga Stainless\n";

$customerHtml = '<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Goga Stainless — Quote Request Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 30px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">
          <tr>
            <td style="background-color: #173F52; padding: 28px 32px; border-bottom: 4px solid #D92B20; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;">GOGA STAINLESS</h1>
              <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;">Premier Stainless &amp; Alloy Manufacturer</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 26px 32px 14px 32px;">
              <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 14px 18px; margin-bottom: 18px;">
                <p style="margin: 0; color: #065f46; font-size: 14px; font-weight: 600;">✓ Your quote request has been received by Goga Stainless.</p>
              </div>
              <p style="margin: 0 0 12px 0; font-size: 14px; color: #334155; line-height: 1.6;">Dear <strong>' . esc($name) . '</strong>,</p>
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #334155; line-height: 1.6;">Thank you for reaching out to Goga Stainless. Your requirement has been sent to our sales engineering team, and a confirmation copy has been sent to your email address. We will review your specifications and get back to you with a formal quotation shortly.</p>
              <h2 style="margin: 18px 0 10px 0; font-size: 12px; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; color: #173F52;">Summary of Submitted Requirement</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                <tr>
                  <td width="35%" style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Product</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 700; border-bottom: 1px solid #e2e8f0;">' . esc($product) . '</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Specification</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 500; border-bottom: 1px solid #e2e8f0;">' . esc($specification) . '</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; border-bottom: 1px solid #e2e8f0;">Quantity</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 700;">' . esc($quantity) . '</td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase;">Company</td>
                  <td style="padding: 10px 14px; font-size: 13px; color: #0f172a; font-weight: 600;">' . esc($company) . '</td>
                </tr>
              </table>
              <div style="margin-top: 14px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 14px;">
                <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b;">Message / Requirement Details:</p>
                <p style="margin: 0; font-size: 12px; color: #334155; line-height: 1.5; white-space: pre-wrap;">' . esc($message) . '</p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 32px 24px 32px;">
              <div style="background-color: #173F52; border-radius: 8px; padding: 14px; text-align: center; color: #ffffff;">
                <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Need Immediate Assistance?</p>
                <p style="margin: 0; font-size: 13px; color: #cbd5e1;">Direct Line: <strong style="color: #ffffff;">+91 845 282 8260</strong> &nbsp;|&nbsp; Email: <a href="mailto:' . esc($businessEmail) . '" style="color: #ffffff; text-decoration: underline;">' . esc($businessEmail) . '</a></p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #0f172a; padding: 18px 32px; text-align: center; border-top: 1px solid #1e293b;">
              <p style="margin: 0; font-size: 11px; color: #94a3b8;"><strong>Goga Stainless</strong> — Plot No-408, Har-Har Wala Bldg, Office No-62 3rd Floor, P.B. Marg, Mumbai-400 004, India</p>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #64748b;">Website: <a href="https://www.gogastainless.com" style="color: #94a3b8; text-decoration: underline;">www.gogastainless.com</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>';

// -------------------------------------------------------------
// 3. Reliable Native PHP SMTP Implementation
// -------------------------------------------------------------

function smtpGetResponse($socket) {
    $response = '';
    while (!feof($socket)) {
        $line = fgets($socket, 515);
        if ($line === false) break;
        $response .= $line;
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }
    return $response;
}

function smtpSendCommand($socket, $cmd, $expectedCode) {
    if ($cmd !== null) {
        fputs($socket, $cmd . "\r\n");
    }
    $response = smtpGetResponse($socket);
    $code = (int)substr($response, 0, 3);
    if ($code !== $expectedCode) {
        throw new Exception("SMTP Error: Expected $expectedCode but got $code: " . trim($response));
    }
    return $response;
}

function sendSmtpEmail($host, $port, $user, $pass, $from, $recipients, $replyTo, $subject, $plainBody, $htmlBody) {
    $isSsl = ($port == 465);
    $scheme = $isSsl ? 'ssl://' : 'tcp://';
    $remote = $scheme . $host . ':' . $port;

    $context = stream_context_create([
        'ssl' => [
            'verify_peer'       => false,
            'verify_peer_name'  => false,
            'allow_self_signed' => true
        ]
    ]);

    $socket = @stream_socket_client($remote, $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $context);
    if (!$socket) {
        throw new Exception("Connection to $remote failed: $errstr ($errno)");
    }
    stream_set_timeout($socket, 15);

    // Initial greeting
    smtpGetResponse($socket);

    // EHLO
    smtpSendCommand($socket, "EHLO " . (gethostname() ?: 'localhost'), 250);

    // TLS upgrade if port 587
    if ($port == 587) {
        smtpSendCommand($socket, "STARTTLS", 220);
        if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            throw new Exception("STARTTLS negotiation failed");
        }
        smtpSendCommand($socket, "EHLO " . (gethostname() ?: 'localhost'), 250);
    }

    // Authenticate
    smtpSendCommand($socket, "AUTH LOGIN", 334);
    smtpSendCommand($socket, base64_encode($user), 334);
    smtpSendCommand($socket, base64_encode($pass), 235);

    // Envelope From
    smtpSendCommand($socket, "MAIL FROM:<$user>", 250);

    // Envelope To
    foreach ($recipients as $rcpt) {
        if (!empty($rcpt)) {
            smtpSendCommand($socket, "RCPT TO:<$rcpt>", 250);
        }
    }

    // Data command
    smtpSendCommand($socket, "DATA", 354);

    // Build MIME message
    $boundary = "----=_NextPart_" . md5(uniqid(time(), true));
    $headers  = [];
    $headers[] = "Date: " . date('r');
    $headers[] = "From: $from";
    $headers[] = "To: " . implode(', ', array_slice($recipients, 0, 1));
    if (count($recipients) > 1) {
        $headers[] = "Cc: " . implode(', ', array_slice($recipients, 1));
    }
    if (!empty($replyTo)) {
        $headers[] = "Reply-To: $replyTo";
    }
    $headers[] = "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=";
    $headers[] = "Message-ID: <" . md5(uniqid(time(), true)) . "@" . ($host ?: 'gogastainless.com') . ">";
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-Type: multipart/alternative; boundary=\"$boundary\"";
    $headers[] = "X-Mailer: GogaStainlessMailer/1.0";

    $body  = implode("\r\n", $headers) . "\r\n\r\n";
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($plainBody)) . "\r\n";
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($htmlBody)) . "\r\n";
    $body .= "--$boundary--\r\n";

    // Escape dots at line start for SMTP
    $body = preg_replace('/^\./m', '..', $body);

    fputs($socket, $body . "\r\n.\r\n");
    $dataResp = smtpGetResponse($socket);
    $dataCode = (int)substr($dataResp, 0, 3);
    if ($dataCode !== 250) {
        throw new Exception("Failed to send message data: $dataResp");
    }

    // Quit cleanly
    @fputs($socket, "QUIT\r\n");
    @fclose($socket);

    return true;
}

// -------------------------------------------------------------
// 4. Execution: Send Business Inquiry + Customer Confirmation
// -------------------------------------------------------------
$businessRecipients = array_unique(array_filter([$businessEmail, $businessCc]));
$replyToHeader = "\"$name\" <$email>";

$sentSuccessfully = false;
$lastError = '';

// Try 1: Google SMTP via SSL Port 465
try {
    sendSmtpEmail(
        $smtpHost,
        $smtpPort,
        $smtpUser,
        $smtpPass,
        $smtpFrom,
        $businessRecipients,
        $replyToHeader,
        $businessSubject,
        $businessPlainText,
        $businessHtml
    );
    $sentSuccessfully = true;
} catch (Exception $e1) {
    $lastError = $e1->getMessage();
    error_log("[GOGA SMTP SSL:465 ERROR] " . $lastError);

    // Try 2: Google SMTP via TLS Port 587 if SSL failed
    try {
        sendSmtpEmail(
            'smtp.gmail.com',
            587,
            $smtpUser,
            $smtpPass,
            $smtpFrom,
            $businessRecipients,
            $replyToHeader,
            $businessSubject,
            $businessPlainText,
            $businessHtml
        );
        $sentSuccessfully = true;
    } catch (Exception $e2) {
        $lastError = $e2->getMessage();
        error_log("[GOGA SMTP TLS:587 ERROR] " . $lastError);

        // Try 3: Fallback to PHP native mail() if hosting firewall blocks outbound sockets
        $mailHeaders  = "From: $smtpFrom\r\n";
        $mailHeaders .= "Reply-To: $replyToHeader\r\n";
        if (!empty($businessCc) && $businessCc !== $businessEmail) {
            $mailHeaders .= "Cc: $businessCc\r\n";
        }
        $mailHeaders .= "MIME-Version: 1.0\r\n";
        $mailHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";

        $mailSent = @mail($businessEmail, $businessSubject, $businessHtml, $mailHeaders);
        if ($mailSent) {
            $sentSuccessfully = true;
        } else {
            error_log("[GOGA PHP MAIL() ERROR] Native mail() also failed.");
        }
    }
}

if (!$sentSuccessfully) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error'   => 'Unable to send your inquiry at this moment. Please try again or contact us directly.',
        'details' => 'Email delivery failed on production host.'
    ]);
    exit;
}

// Send Customer Confirmation Copy (Non-blocking failure)
try {
    sendSmtpEmail(
        $smtpHost,
        $smtpPort,
        $smtpUser,
        $smtpPass,
        $smtpFrom,
        [$email],
        $businessEmail,
        $customerSubject,
        $customerPlainText,
        $customerHtml
    );
} catch (Exception $eCust) {
    // If SMTP failed, attempt mail() for confirmation
    $custMailHeaders  = "From: $smtpFrom\r\n";
    $custMailHeaders .= "Reply-To: $businessEmail\r\n";
    $custMailHeaders .= "MIME-Version: 1.0\r\n";
    $custMailHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
    @mail($email, $customerSubject, $customerHtml, $custMailHeaders);
    error_log("[GOGA CUSTOMER COPY NOTICE] " . $eCust->getMessage());
}

// Clean success output
echo json_encode([
    'success' => true,
    'message' => 'Your inquiry has been sent successfully.'
]);
