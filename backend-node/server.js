import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import sendQuoteHandler from "./api/send-quote.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env
dotenv.config({ path: path.resolve(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Healthcheck
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "Goga Stainless Email API",
    endpoint: "/api/send-quote",
    timestamp: new Date().toISOString(),
  });
});

// Route handlers for both /api/send-quote and /api/send-quote.php
app.all(["/api/send-quote", "/api/send-quote.php"], async (req, res) => {
  try {
    await sendQuoteHandler(req, res);
  } catch (error) {
    console.error("API Route Error:", error);
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        error: "Internal Server Error in email handler.",
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Goga Stainless Email API listening on port ${PORT}`);
  console.log(`Endpoint ready at: http://localhost:${PORT}/api/send-quote`);
});
