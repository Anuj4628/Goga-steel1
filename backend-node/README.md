# Goga Stainless — Node.js Email Backend Service

This is the standalone Node.js backend for the Goga Stainless **Get Quote / Inquiry** form.

---

## Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Open `.env` and fill in the Google Gmail App Password:
```env
SMTP_PASS=xxxx xxxx xxxx xxxx
```

### 3. Start the Server
```bash
npm start
```
By default, the server runs at `http://localhost:5000` and provides:
- `POST /api/send-quote`
- `POST /api/send-quote.php`

---

## Deployment Options

### Option A: cPanel "Setup Node.js App"
1. In cPanel, open **Setup Node.js App**.
2. Click **Create Application**.
3. Set **Node.js version** to 18.x, 20.x, or newer.
4. Set **Application root** to `backend` (or your chosen directory).
5. Set **Application startup file** to `server.js`.
6. Click **Create**.
7. Click **Run NPM Install**.
8. In Environment Variables, add `SMTP_USER`, `SMTP_PASS`, `BUSINESS_EMAIL`, `BUSINESS_CC_EMAIL`.
9. Click **Restart**.

### Option B: VPS / Cloud (PM2 / Ubuntu / Render / Railway)
```bash
npm install -g pm2
pm2 start server.js --name "goga-email-api"
pm2 save
```
