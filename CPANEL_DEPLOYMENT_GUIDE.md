# Goga Stainless — Production cPanel Deployment & EmailJS Setup Guide

This guide explains how to configure **EmailJS** for the **Get Quote** RFQ form and deploy the website to your **cPanel** hosting (`gogastainless.com`).

---

## 1. EmailJS Configuration Checklist

Follow these 5 steps in your EmailJS dashboard (https://dashboard.emailjs.com/):

### Step 1: Create an Email Service
1. Log in to your [EmailJS Dashboard](https://dashboard.emailjs.com/).
2. Navigate to **Email Services** > **Add New Service**.
3. Select **Gmail** (or your corporate email provider).
4. Click **Connect Account** and connect `info.gogastainless@gmail.com`.
5. Note your **Service ID** (e.g., `service_xxxxxxx`).

### Step 2: Create an Email Template
1. Navigate to **Email Templates** > **Create New Template**.
2. Set the Template Name (e.g., `Goga RFQ Quote Request`).
3. Set the **Subject line**:
   ```
   New Get Quote Request: {{product}} [{{ticket_id}}]
   ```
4. Set the **To Email** field in the template settings:
   ```
   {{to_email}}
   ```
   *(or enter `info.gogastainless@gmail.com` directly)*
5. Set the **Reply-To** field:
   ```
   {{reply_to}}
   ```
6. In the **Content** body of the template, design the email layout using the template variables:
   ```html
   <h3>New Quote Enquiry Received</h3>
   <p><strong>Enquiry Ticket:</strong> {{ticket_id}}</p>
   <p><strong>Date & Time:</strong> {{submission_date}}</p>
   <hr/>
   <h4>Customer Details:</h4>
   <ul>
     <li><strong>Name:</strong> {{name}}</li>
     <li><strong>Email:</strong> {{email}}</li>
     <li><strong>Phone Number:</strong> {{phone}}</li>
     <li><strong>Company Name:</strong> {{company}}</li>
   </ul>
   <hr/>
   <h4>Requirement Details:</h4>
   <ul>
     <li><strong>Product / Material Required:</strong> {{product}}</li>
     <li><strong>Quantity:</strong> {{quantity}}</li>
     <li><strong>Specification / Grade:</strong> {{specification}}</li>
   </ul>
   <hr/>
   <h4>Detailed Message / Specifications:</h4>
   <p>{{message}}</p>
   ```
7. Click **Save** and copy your **Template ID** (e.g., `template_xxxxxxx`).

### Step 3: Get Your Public Key
1. Go to **Account** > **API Keys** in the EmailJS dashboard.
2. Copy your **Public Key** (e.g., `user_xxxxxxxxxxxxxxxx` or public key string).

### Step 4: Recommended Security Settings
1. In your EmailJS dashboard, go to **Account** > **Security**.
2. In **Allowed Domains**, add your domain:
   - `gogastainless.com`
   - `www.gogastainless.com`
   - `localhost` (for local development)
3. This ensures only requests originating from your website can use your EmailJS service.

---

## 2. Setting Credentials in Your Website

Open `.env` in the project root and add your details:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
VITE_RECIPIENT_EMAIL=info.gogastainless@gmail.com
```

*(Alternatively, you can edit fallback strings in `src/config/emailjs.js` if you prefer not to use `.env`)*

---

## 3. Template Variables Reference Table

The frontend sends the following variables with every enquiry:

| Template Variable | Form Field / Source | Description |
|---|---|---|
| `{{name}}` or `{{from_name}}` | Name | Customer's full name |
| `{{email}}` or `{{reply_to}}` | Email | Customer's email address |
| `{{phone}}` or `{{phone_number}}` | Phone Number | Customer's contact phone number |
| `{{company}}` or `{{company_name}}` | Company Name | Customer's company (or "Not Specified") |
| `{{product}}` or `{{product_name}}` | Product / Material Required | Requested stainless steel product/material |
| `{{quantity}}` | Quantity | Quantity (e.g. 500 Meters, 10 Tons) |
| `{{specification}}` or `{{grade_specification}}` | Component Specification | Material grade/standards (or "Standard / As per enquiry") |
| `{{message}}` or `{{enquiry}}` | Requirement / Message | Customer's requirement message |
| `{{ticket_id}}` or `{{ticketId}}` | System Generated | Unique reference ID (e.g., `GS-RFQ-583921`) |
| `{{submission_date}}` or `{{date}}` | System Generated | Date and time of enquiry submission |
| `{{to_email}}` or `{{recipient_email}}` | Configured Recipient | Destination inbox (`info.gogastainless@gmail.com`) |

---

## 4. cPanel Deployment Instructions

Deploying the website is now straightforward with zero server-side dependencies:

1. **Build the production package**:
   ```bash
   npm run build
   ```
2. Compress the contents of `dist` into `dist.zip` (already prepared).
3. **Upload to cPanel**:
   - Log in to your **cPanel** dashboard.
   - Open **File Manager** and open `public_html/`.
   - Remove any old files or previous `api/` folders if they still exist.
   - Upload `dist.zip`.
   - Right-click `dist.zip` and select **Extract**.
   - Make sure files are in `public_html/` directly (such as `index.html`, `.htaccess`, and `assets/`).
4. **Verify**:
   - Open `https://gogastainless.com/contact#quote-form` in your browser.
   - Fill in a test quote inquiry and click **Send Requirement**.
   - You will see the clear message: **"Your enquiry has been sent successfully!"**
   - The email will land directly in `info.gogastainless@gmail.com`.
