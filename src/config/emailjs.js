// src/config/emailjs.js
/**
 * EmailJS Configuration for Goga Stainless
 *
 * Configured with live EmailJS service credentials:
 * - Public Key: RSD8kpccewUWZX1tX
 * - Service ID: service_vajb4bh
 * - Template ID: template_ljynovp
 * - Recipient Email: info.gogastainless@gmail.com
 */

const getEnvVar = (key, fallback = "") => {
  try {
    if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env[key]) {
      return import.meta.env[key];
    }
  } catch {
    // Ignore in non-bundler environments
  }
  try {
    if (typeof process !== "undefined" && process.env && process.env[key]) {
      return process.env[key];
    }
  } catch {
    // Ignore
  }
  return fallback;
};

export const EMAILJS_CONFIG = {
  serviceId: getEnvVar("VITE_EMAILJS_SERVICE_ID", "service_vajb4bh"),
  templateId: getEnvVar("VITE_EMAILJS_TEMPLATE_ID", "template_ljynovp"),
  publicKey: getEnvVar("VITE_EMAILJS_PUBLIC_KEY", "RSD8kpccewUWZX1tX"),
  recipientEmail: getEnvVar("VITE_RECIPIENT_EMAIL", "info.gogastainless@gmail.com"),
};

/**
 * Check if the required EmailJS parameters are configured
 * @returns {boolean}
 */
export const isEmailJsConfigured = () => {
  return Boolean(
    EMAILJS_CONFIG.serviceId &&
    EMAILJS_CONFIG.templateId &&
    EMAILJS_CONFIG.publicKey &&
    !EMAILJS_CONFIG.serviceId.includes("your_emailjs") &&
    !EMAILJS_CONFIG.templateId.includes("your_emailjs") &&
    !EMAILJS_CONFIG.publicKey.includes("your_emailjs")
  );
};
