# Goga Stainless — cPanel Deployment & Email Setup Guide

## 1. Root Cause Summary (Why Emails Were Not Arriving)

### What Happened Previously:
1. **Silent Fallback to Unactivated Relay**: When the previous API call failed or encountered server errors on cPanel, the frontend fell back to an unauthenticated external relay (`formsubmit.co`).
2. **False 200 OK Acceptance**: The external relay responded with an HTTP `200` status containing `{"success": "false", "message": "This form needs Activation..."}`. The frontend checked `res.status === 200`, incorrectly interpreted it as success, cleared the form, and displayed **"Inquiry Sent Successfully"**—while the customer's inquiry email was never delivered to the Gmail inbox.
3. **Apache 2.4 / Subdirectory `.htaccess` Conflict**: Subfolder `.htaccess` directives and syntax conflicts on Apache 2.4 caused server-side rewrites to fail, triggering the broken fallback loop.
4. **Local Mail Transport Rejection**: When `mail()` was previously attempted, cPanel sent emails with a `From: ...@gmail.com` header from a non-Google IP, triggering Google's strict SPF/DMARC rejection policy (`p=reject`).

### What Has Been Fixed:
- **Zero Fake Success**: Success is now displayed **ONLY** when the email is genuinely accepted and confirmed by the authenticated mail service.
- **Form Data Preservation**: If an error occurs, user input is **never lost**—all fields remain filled so the user can easily retry.
- **Google SMTP SSL/TLS Direct Delivery**: Uses direct authenticated Google SMTP (Port 465 SSL with Port 587 TLS failover) using the client's verified Gmail account and App Password.
- **Apache 2.4 & 2.2 Compliant `.htaccess`**: All rewrite rules and file-access protection directives are modern, secure, and tested for standard cPanel Apache environments.
- **Dual API Support**: Frontend dynamically supports both `/api/send-quote` and `/api/send-quote.php`.

---

## 2. Deploying to cPanel (Native PHP - Recommended)

The `dist.zip` contains both the frontend single-page application and the native PHP email API endpoint (`api/send-quote.php`). No Node.js server is required on standard cPanel hosting.

### Step 1: Upload and Extract `dist.zip`
1. Log in to your **cPanel** account.
2. Open **File Manager** and navigate to your website's root directory:
   - For primary domain: `public_html/`
   - For subdomain / addon domain: corresponding root folder.
3. If there are old website files, back them up and remove them.
4. Click **Upload** and select `dist.zip`.
5. Once uploaded, right-click `dist.zip` in File Manager and select **Extract**.
6. Ensure the extracted files sit directly inside `public_html/` (you should see `index.html`, `assets/`, `.htaccess`, and `api/`).

### Step 2: Configure Your Gmail App Password
1. In cPanel File Manager, enter the `api/` directory (`public_html/api/`).
2. If `config.php` does not already exist, copy `config.sample.php` to `config.php`.
3. Right-click `config.php` and click **Edit**.
4. Set your 16-character Google App Password:
   ```php
   return [
       'SMTP_HOST'         => 'smtp.gmail.com',
       'SMTP_PORT'         => 465,
       'SMTP_SECURE'       => 'true',
       'SMTP_USER'         => 'info.gogastainless@gmail.com',
       'SMTP_PASS'         => 'yohojenkwvzpgnvn', // 16-character App Password (without spaces)
       'SMTP_FROM'         => '"Goga Stainless" <info.gogastainless@gmail.com>',
       'BUSINESS_EMAIL'    => 'info.gogastainless@gmail.com',
       'BUSINESS_CC_EMAIL' => 'gogastainless@gmail.com',
   ];
   ```
5. Click **Save Changes**.

> **Note on Security**: Both root `.htaccess` and `api/.htaccess` contain strict Apache rules that deny direct browser access to `config.php` and `.env` files.

---

## 3. Critical cPanel Setting: Email Routing

If your domain's emails (`gogastainless.com`) are hosted externally on Gmail / Google Workspace:
1. In cPanel, search for **Email Routing** (under the Email section).
2. Select your domain (`gogastainless.com`).
3. Set the routing option to:
   - **Remote Mail Exchanger** (instead of Local Mail Exchanger).
4. Click **Change**.
*(This ensures your cPanel server routes emails directly to Google rather than trying to deliver them locally into a nonexistent cPanel inbox).*

---

## 4. How to Generate / Refresh Google App Password (If Ever Needed)

1. Sign in to the Google Account: `info.gogastainless@gmail.com`.
2. Ensure **2-Step Verification** is turned **ON** in Google Account Security.
3. Go to: **https://myaccount.google.com/apppasswords**
4. App name: `Goga Website`.
5. Click **Create** to receive a 16-character password (e.g., `abcd efgh ijkl mnop`).
6. Paste into `config.php` or `.env` as `abcdefghijklmnop` (without spaces).

---

## 5. Alternative Option: Standalone Node.js Backend

If your hosting uses **cPanel "Setup Node.js App"**, VPS, or Docker instead of PHP:
1. A separate standalone backend package is provided in `backend-node/` (and `backend-node.zip`).
2. In cPanel, click **Setup Node.js App** -> **Create Application**.
3. Select Node.js 18+ or 20+, set application root to `backend`, and startup file to `server.js`.
4. Upload `backend-node` contents into that folder.
5. In cPanel environment variables or `.env`, set:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=info.gogastainless@gmail.com
   SMTP_PASS=yohojenkwvzpgnvn
   BUSINESS_EMAIL=info.gogastainless@gmail.com
   BUSINESS_CC_EMAIL=gogastainless@gmail.com
   ```
6. Run `npm install` and start the app.
