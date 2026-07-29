const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
};

function jsonResponse(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
      ...headers,
    },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    if (request.method !== "POST") {
      return jsonResponse(
        {
          success: false,
          message: "Method not allowed.",
        },
        405
      );
    }

    let payload;

    try {
      payload = await request.json();
    } catch {
      return jsonResponse(
        {
          success: false,
          message: "Invalid JSON payload.",
        },
        400
      );
    }

    const name = payload?.name?.trim() || "";
    const company = payload?.company?.trim() || "";
    const email = payload?.email?.trim() || "";
    const phone = payload?.phone?.trim() || "";
    const service = payload?.service?.trim() || "";
    const message = payload?.message?.trim() || "";

    const missingFields = [];

    if (!name) missingFields.push("name");
    if (!company) missingFields.push("company");
    if (!email) missingFields.push("email");
    if (!phone) missingFields.push("phone");
    if (!service) missingFields.push("service");
    if (!message) missingFields.push("message");

    if (missingFields.length > 0) {
      return jsonResponse(
        {
          success: false,
          message: "Please complete all required fields.",
          missingFields,
        },
        400
      );
    }

    const resendApiKey = env.RESEND_API_KEY;
    const fromEmail = env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const recipientEmail = env.CONTACT_TO_EMAIL || "theauditpulse@gmail.com";

    if (!resendApiKey) {
      return jsonResponse(
        {
          success: false,
          message: "The contact email service is not configured yet.",
        },
        500
      );
    }

    const html = `
      <h2>New Contact Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service Required:</strong> ${service}</p>
      <p><strong>Message:</strong><br />${message.replace(/\n/g, "<br />")}</p>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [recipientEmail],
        subject: `New contact enquiry from ${name}`,
        html,
        text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nService Required: ${service}\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Resend send failed", errorBody);

      return jsonResponse(
        {
          success: false,
          message: "We could not send your enquiry right now. Please try again later.",
        },
        502
      );
    }

    return jsonResponse({
      success: true,
      message: "Thank you! Your enquiry has been received and we will be in touch shortly.",
    });
  },
};
