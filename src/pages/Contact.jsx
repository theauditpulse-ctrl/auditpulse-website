import { Helmet } from "react-helmet-async";
import { useState } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { company, seoDefaults } from "../data/company";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9\s()-]{7,15}$/;

import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
} from "lucide-react";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const contactEndpointUrl = "/api/contact";

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailPattern.test(form.email.trim())) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    if (!phonePattern.test(form.phone.trim())) {
      setStatus({ type: "error", message: "Please enter a valid phone number." });
      return;
    }

    if (form.message.trim().length < 10) {
      setStatus({ type: "error", message: "Please share a little more detail so we can help effectively." });
      return;
    }

    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const payload = {
        name: form.name.trim(),
        company: form.company.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: form.service.trim(),
        message: form.message.trim(),
      };

      const response = await fetch(contactEndpointUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok && response.status >= 500) {
        throw new Error("Our contact service is temporarily unavailable. Please email info@theauditpulse.com directly.");
      }

      let data;

      try {
        data = await response.json();
      } catch {
        data = { success: false, message: "The contact service returned an unexpected response." };
      }

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to send enquiry.");
      }

      setStatus({
        type: "success",
        message: data.message || "Thank you! Your enquiry has been sent successfully.",
      });

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: err.message || "Failed to send enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact {seoDefaults.siteName} | Get Expert Accounting & Tax Assistance</title>

        <meta
          name="description"
          content={`Contact ${seoDefaults.siteName} for professional accounting, income tax, GST, bookkeeping, ROC compliance and business advisory services. Based in Chennai, serving clients across India.`}
        />

        <meta
          name="keywords"
          content={`Contact ${seoDefaults.siteName}, Chartered Accountant Chennai, GST Consultant, Income Tax Filing, Accounting Services, Bookkeeping, ROC Compliance`}
        />

        <link
          rel="canonical"
          href={`${seoDefaults.canonicalBaseUrl}/contact`}
        />

        <meta
          property="og:title"
          content={`Contact ${seoDefaults.siteName}`}
        />

        <meta
          property="og:description"
          content={`Get in touch with ${seoDefaults.siteName} for accounting, taxation, GST and compliance services.`}
        />

        <meta
          property="og:url"
          content={`${seoDefaults.canonicalBaseUrl}/contact`}
        />

        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${seoDefaults.canonicalBaseUrl}/og-image.jpg`} />
      </Helmet>

      <Header />

      <main>
        <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
              Contact {company.name}
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-[#0F3D91] sm:text-5xl">
              Let's Talk About Your Business
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              Whether you need help with taxation, GST, accounting or business
              compliance, we're here to assist you.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="text-4xl font-bold text-[#0F3D91]">
                Get in Touch
              </h2>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <Phone />
                  <p>{company.phone}</p>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <MessageCircle />
                  <p>WhatsApp: {company.phone}</p>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <Mail />
                  <p>{company.email}</p>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <MapPin />
                  <p>{company.location}</p>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <Clock3 />
                  <p>{company.hours.weekdays.replace(" :", " ")}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-xl sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                <label htmlFor="contact-name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  className="w-full rounded-xl border border-gray-300 p-4 transition focus:border-[#0F3D91] focus:outline-none focus:ring-2 focus:ring-[#0F3D91]/20"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={80}
                  required
                />

                <label htmlFor="contact-company" className="sr-only">
                  Company Name
                </label>
                <input
                  id="contact-company"
                  className="w-full rounded-xl border border-gray-300 p-4 transition focus:border-[#0F3D91] focus:outline-none focus:ring-2 focus:ring-[#0F3D91]/20"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  maxLength={80}
                  required
                />

                <label htmlFor="contact-phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  className="w-full rounded-xl border border-gray-300 p-4 transition focus:border-[#0F3D91] focus:outline-none focus:ring-2 focus:ring-[#0F3D91]/20"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  inputMode="tel"
                  autoComplete="tel"
                  maxLength={20}
                  required
                />

                <label htmlFor="contact-email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  className="w-full rounded-xl border border-gray-300 p-4 transition focus:border-[#0F3D91] focus:outline-none focus:ring-2 focus:ring-[#0F3D91]/20"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  maxLength={80}
                  required
                />

                <label htmlFor="contact-service" className="sr-only">
                  Select a Service
                </label>
                <select
                  id="contact-service"
                  className="w-full rounded-xl border border-gray-300 p-4 transition focus:border-[#0F3D91] focus:outline-none focus:ring-2 focus:ring-[#0F3D91]/20"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Service</option>
                  <option>Income Tax Return Filing</option>
                  <option>GST Registration & Returns</option>
                  <option>Accounting & Bookkeeping</option>
                  <option>Business Registration</option>
                  <option>ROC Compliance</option>
                  <option>Business Advisory</option>
                  <option>Other</option>
                </select>

                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className="w-full rounded-xl border border-gray-300 p-4 transition focus:border-[#0F3D91] focus:outline-none focus:ring-2 focus:ring-[#0F3D91]/20"
                  rows="5"
                  name="message"
                  placeholder="Tell us how we can help..."
                  value={form.message}
                  onChange={handleChange}
                  maxLength={1000}
                  required
                />

                {status.message ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`rounded-xl border px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "border-green-200 bg-green-50 text-green-700"
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}
                  >
                    {status.message}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-[#0F3D91] py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-900 active:translate-y-0 disabled:translate-y-0 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;