import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
} from "lucide-react";

function Contact() {
  return (
    <>
      <Header />

      <main>

        {/* Hero */}

        <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">

            <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
              Contact Us
            </span>

            <h1 className="mt-4 text-5xl font-bold text-[#0F3D91] lg:text-6xl">
              Let's Discuss Your
              <br />
              Business Requirements
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              Whether you need tax filing, accounting, GST compliance or
              business registration, we're here to help.
            </p>

          </div>
        </section>

        {/* Contact Section */}

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">

            {/* Left */}

            <div>

              <h2 className="text-4xl font-bold text-[#0F3D91]">
                Get in Touch
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                We respond quickly through WhatsApp, phone and email.
              </p>

              <div className="mt-10 space-y-8">

                <div className="flex gap-4">
                  <Phone className="text-[#FF8C00]" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>+91 90259 73127</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-[#FF8C00]" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>theauditpulse@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-[#FF8C00]" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p>Chennai, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock3 className="text-[#FF8C00]" />
                  <div>
                    <h3 className="font-semibold">Working Hours</h3>
                    <p>Mon – Fri : 9 AM – 6 PM</p>
                    <p>Saturday : 9 AM – 2 PM</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-2xl bg-slate-50 p-10 shadow-lg">

              <h2 className="text-3xl font-bold text-[#0F3D91]">
                Contact Instantly
              </h2>

              <p className="mt-4 text-gray-600">
                Click below to start a conversation on WhatsApp.
              </p>

              <a
                href="https://wa.me/919025973127"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 font-semibold text-white transition hover:-translate-y-1"
              >
                <MessageCircle size={22} />
                Chat on WhatsApp
              </a>

              <a
                href="tel:+919025973127"
                className="mt-6 block rounded-xl border-2 border-[#0F3D91] px-8 py-4 text-center font-semibold text-[#0F3D91] transition hover:bg-[#0F3D91] hover:text-white"
              >
                Call Now
              </a>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Contact;