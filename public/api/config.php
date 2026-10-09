<?php
/**
 * Goga Stainless - Server-Side Email Configuration
 * -------------------------------------------------------------
 * This file runs strictly on the server and is protected from direct
 * web access by .htaccess.
 *
 * For Gmail delivery:
 * 1. Ensure 2-Step Verification is active on info.gogastainless@gmail.com
 * 2. Generate a 16-character App Password at: https://myaccount.google.com/apppasswords
 * 3. Enter the 16 characters in SMTP_PASS below (without spaces) or in your server .env
 */

return [
    'SMTP_HOST'         => getenv('SMTP_HOST') ?: 'smtp.gmail.com',
    'SMTP_PORT'         => (int)(getenv('SMTP_PORT') ?: 465),
    'SMTP_SECURE'       => getenv('SMTP_SECURE') ?: 'true',
    'SMTP_USER'         => getenv('SMTP_USER') ?: 'info.gogastainless@gmail.com',
    'SMTP_PASS'         => getenv('SMTP_PASS') ?: '', // Set your 16-character Google App Password here or in .env
    'SMTP_FROM'         => getenv('SMTP_FROM') ?: '"Goga Stainless" <info.gogastainless@gmail.com>',
    'BUSINESS_EMAIL'    => getenv('BUSINESS_EMAIL') ?: 'info.gogastainless@gmail.com',
    'BUSINESS_CC_EMAIL' => getenv('BUSINESS_CC_EMAIL') ?: 'gogastainless@gmail.com',
];
