// src/services/emailService.js
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, isEmailJsConfigured } from "../config/emailjs.js";

/**
 * Send Get Quote enquiry using EmailJS
 *
 * @param {Object} formData
 * @param {string} ticketId
 * @returns {Promise<{success: boolean, response: any}>}
 */
export const sendQuoteEnquiry = async (formData, ticketId) => {
  if (!isEmailJsConfigured()) {
    throw new Error(
      "EmailJS credentials are not configured yet. Please configure your Service ID, Template ID, and Public Key."
    );
  }

  const currentDate = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const cleanName = formData.name.trim();
  const cleanEmail = formData.email.trim();
  const cleanPhone = formData.phone.trim();
  const cleanCompany = formData.company ? formData.company.trim() : "Not Specified";
  const cleanProduct = formData.product.trim();
  const cleanQuantity = formData.quantity.trim();
  const cleanSpec = formData.specification ? formData.specification.trim() : "Standard / As per enquiry";
  const cleanUserMessage = formData.message.trim();

  // Construct complete, professional enquiry body ensuring all details
  // appear in the received email even if the EmailJS template only prints {{message}}
  const messageBlocks = [
    cleanUserMessage,
    "",
    "--------------------------------------------------",
    "PRODUCT & TECHNICAL SPECIFICATIONS",
    "--------------------------------------------------",
    `• Product / Material: ${cleanProduct}`,
    `• Quantity: ${cleanQuantity}`,
    `• Specification / Grade: ${cleanSpec}`,
    `• Company Name: ${cleanCompany}`,
    `• Reference Ticket: ${ticketId}`,
    `• Submitted On: ${currentDate}`,
  ];
  const combinedMessage = messageBlocks.join("\n");

  // Comprehensive template params mapped to all standard variable names
  const templateParams = {
    // 1. Required Template Variables
    name: cleanName,
    from_name: cleanName,
    email: cleanEmail,
    from_email: cleanEmail,
    reply_to: cleanEmail,
    phone: cleanPhone,
    phone_number: cleanPhone,
    company: cleanCompany,
    company_name: cleanCompany,
    message: combinedMessage,

    // 2. Specific Field Variables (for templates using dedicated tags)
    product: cleanProduct,
    product_name: cleanProduct,
    quantity: cleanQuantity,
    specification: cleanSpec,
    grade_specification: cleanSpec,
    customer_notes: cleanUserMessage,
    enquiry: combinedMessage,

    // 3. System Metadata & Routing
    ticket_id: ticketId,
    ticketId: ticketId,
    submission_date: currentDate,
    date: currentDate,
    to_email: EMAILJS_CONFIG.recipientEmail,
    recipient_email: EMAILJS_CONFIG.recipientEmail,
  };

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    return {
      success: true,
      response,
    };
  } catch (error) {
    console.error("[EmailJS] Delivery error:", error);
    const message =
      (typeof error === "string" ? error : error?.text || error?.message) ||
      "Unable to send enquiry. Please check your network or try again.";
    throw new Error(message);
  }
};
