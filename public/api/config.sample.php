<?php
/**
 * Goga Stainless - Server-Side Email Configuration Sample Template
 * -------------------------------------------------------------
 * Copy this file to `config.php` inside the `api/` directory on your cPanel server.
 *
 * INSTRUCTIONS FOR CPANEL:
 * 1. Log in to cPanel File Manager -> public_html -> api
 * 2. Copy config.sample.php to config.php (or edit config.php)
 * 3. Paste your 16-character Google App Password into SMTP_PASS below:
 */

return [
    'SMTP_HOST'         => 'smtp.gmail.com',
    'SMTP_PORT'         => 465,
    'SMTP_SECURE'       => 'true',
    'SMTP_USER'         => 'info.gogastainless@gmail.com',
    'SMTP_PASS'         => 'YOUR_16_CHAR_GMAIL_APP_PASSWORD_HERE', // 16 characters from Google App Passwords
    'SMTP_FROM'         => '"Goga Stainless" <info.gogastainless@gmail.com>',
    'BUSINESS_EMAIL'    => 'info.gogastainless@gmail.com',
    'BUSINESS_CC_EMAIL' => 'gogastainless@gmail.com',
];
