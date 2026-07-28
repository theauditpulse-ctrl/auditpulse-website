import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import {
  FileText,
  Receipt,
  Calculator,
  Building2,
  Landmark,
  Briefcase,
  CheckCircle,
} from "lucide-react";

import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      icon: FileText,
      title: "Income Tax Filing",
      description:
        "Preparation and filing of Income Tax Returns for salaried individuals, professionals and businesses.",
    },
    {
      icon: Receipt,
      title: "GST Services",
      description:
        "GST registration, return filing, notices, amendments and complete GST compliance.",
    },
    {
      icon: Calculator,
      title: "Accounting & Bookkeeping",
      description:
        "Professional bookkeeping, MIS reports, financial statements and accounting support.",
    },
    {
      icon: Building2,
      title: "Business Registration",
      description:
        "Private Limited Company, LLP, OPC, Partnership and Proprietorship registrations.",
    },
    {
      icon: Landmark,
      title: "ROC Compliance",
      description:
        "Annual ROC filings, director compliances and statutory company compliance services.",
    },
    {
      icon: Briefcase,
      title: "Business Advisory",
      description:
        "Practical advice to improve compliance, financial management and business growth.",
    },
  ];

  const whyChoose = [
    "Qualified Professional Support",
    "Transparent Communication",
    "Accurate Documentation",
    "Timely Compliance",
    "Affordable Pricing",
    "Completely Online Process",
  ];

  return (
    <>
      <Header />

      <main>

        {/* Hero */}

        <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">

            <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
              Our Services
            </span>

            <h1 className="mt-4 text-5xl font-bold text-[#0F3D91] lg:text-6xl">
              Professional Financial
              <br />
              Services Under One Roof
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              From tax filing and accounting to company registration and
              compliance, Audit Pulse provides reliable financial solutions
              for individuals, professionals and businesses across India.
            </p>

          </div>
        </section>

        {/* Services Grid */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    whileHover={{ y: -8 }}
                    className="rounded-2xl bg-white p-8 shadow-lg transition"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-[#0F3D91]">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-[#0F3D91]">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-600">
                      {service.description}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>
        </section>

        {/* Why Choose */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
                Why Audit Pulse
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#0F3D91]">
                Why Clients Choose Us
              </h2>

            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {whyChoose.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl bg-white p-6 shadow"
                >
                  <CheckCircle
                    className="text-[#FF8C00]"
                    size={24}
                  />

                  <span className="font-medium text-[#0F3D91]">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* CTA */}

        <section className="bg-[#0F3D91] py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 text-center">

            <h2 className="text-4xl font-bold">
              Need Professional Assistance?
            </h2>

            <p className="mt-6 text-lg text-blue-100">
              Let Audit Pulse take care of your accounting, taxation and
              compliance while you focus on growing your business.
            </p>

            <a
              href="https://wa.me/919025973127"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#0F3D91] transition hover:-translate-y-1"
            >
              Chat on WhatsApp
            </a>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Services;