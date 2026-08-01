const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
};

const rateLimitEntries = new Map();
const MAX_BODY_SIZE = 6000;
const MAX_REQUESTS_PER_MINUTE = 5;

function getClientIp(request) {
  const forwarded = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(request) {
  const ip = getClientIp(request);
  const now = Date.now();
  const windowMs = 60 * 1000;
  const existing = rateLimitEntries.get(ip);

  if (!existing) {
    rateLimitEntries.set(ip, [{ timestamp: now }]);
    return false;
  }

  const recentRequests = existing.filter((entry) => now - entry.timestamp < windowMs);

  if (recentRequests.length >= MAX_REQUESTS_PER_MINUTE) {
    return true;
  }

  recentRequests.push({ timestamp: now });
  rateLimitEntries.set(ip, recentRequests);
  return false;
}

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

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const isContactEndpoint = url.pathname === "/api/contact" || url.pathname === "/contact";

  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (!isContactEndpoint) {
    return jsonResponse(
      {
        success: false,
        message: "Not found.",
      },
      404
    );
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

  if (isRateLimited(request)) {
    return jsonResponse(
      {
        success: false,
        message: "Too many requests. Please try again in a minute.",
      },
      429
    );
  }

  const contentLength = request.headers.get("content-length");
  if (contentLength && Number(contentLength) > MAX_BODY_SIZE) {
    return jsonResponse(
      {
        success: false,
        message: "The request is too large.",
      },
      413
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

  const honeypot = payload?.website?.trim() || "";
  if (honeypot) {
    return jsonResponse(
      {
        success: false,
        message: "Your submission was rejected.",
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

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\+?[0-9\s()-]{7,15}$/;

  if (!emailPattern.test(email)) {
    return jsonResponse(
      {
        success: false,
        message: "Please enter a valid email address.",
      },
      400
    );
  }

  if (!phonePattern.test(phone)) {
    return jsonResponse(
      {
        success: false,
        message: "Please enter a valid phone number.",
      },
      400
    );
  }

  if (message.length < 10) {
    return jsonResponse(
      {
        success: false,
        message: "Please add a bit more detail so we can help you better.",
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
}
