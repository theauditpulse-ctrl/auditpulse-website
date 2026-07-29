import { Helmet } from "react-helmet-async";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  FileText,
  Receipt,
  Calculator,
  Building2,
  Landmark,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Income Tax Return Filing",
    description:
      "Accurate income tax return preparation for salaried individuals, professionals and businesses.",
    points: [
      "ITR Filing",
      "Tax Planning",
      "Capital Gains",
      "Notice Assistance",
    ],
  },
  {
    icon: Receipt,
    title: "GST Services",
    description:
      "Complete GST registration, return filing and compliance support.",
    points: [
      "GST Registration",
      "Monthly/Quarterly Returns",
      "Annual Returns",
      "GST Advisory",
    ],
  },
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description:
      "Reliable bookkeeping and financial reporting for growing businesses.",
    points: [
      "Bookkeeping",
      "Bank Reconciliation",
      "Financial Statements",
      "MIS Reports",
    ],
  },
  {
    icon: Building2,
    title: "Business Registration",
    description:
      "Start your business with the right legal structure.",
    points: [
      "Proprietorship",
      "Partnership",
      "LLP",
      "Private Limited Company",
    ],
  },
  {
    icon: Landmark,
    title: "ROC Compliance",
    description:
      "Stay compliant with statutory ROC requirements.",
    points: [
      "Annual Filing",
      "Director KYC",
      "DIN Services",
      "Company Compliance",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    description:
      "Practical financial guidance to help your business grow.",
    points: [
      "Financial Planning",
      "Cash Flow",
      "Business Growth",
      "Compliance Strategy",
    ],
  },
];

function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Audit Pulse</title>

        <meta
          name="description"
          content="Explore Audit Pulse's professional accounting, income tax, GST, bookkeeping, ROC compliance, business registration and advisory services across India."
        />

        <meta
          name="keywords"
          content="Accounting Services, GST Services, Income Tax Filing, Bookkeeping, ROC Compliance, Business Registration, Audit Pulse"
        />

        <link
          rel="canonical"
          href="https://www.theauditpulse.com/services"
        />

        <meta
          property="og:title"
          content="Professional Accounting & Tax Services | Audit Pulse"
        />

        <meta
          property="og:description"
          content="Comprehensive accounting, taxation and business compliance services tailored for individuals, startups and businesses."
        />

        <meta
          property="og:url"
          content="https://www.theauditpulse.com/services"
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <Header />

      <main>
        <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
              Our Services
            </span>

            <h1 className="mt-4 text-5xl font-bold text-[#0F3D91] lg:text-6xl">
              Professional Accounting & Tax Solutions
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              End-to-end accounting, taxation and compliance services designed
              for individuals, startups and businesses.
            </p>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="rounded-2xl border border-transparent bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#FF8C00] hover:shadow-2xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-[#0F3D91]">
                      <Icon size={28} />
                    </div>

                    <h2 className="mt-6 text-2xl font-bold text-[#0F3D91]">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-gray-600">
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-2 text-gray-700">
                      {service.points.map((point) => (
                        <li key={point}>✓ {point}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#0F3D91] py-20 text-center text-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-4xl font-bold">
              Need Professional Financial Guidance?
            </h2>

            <p className="mt-6 text-lg text-blue-100">
              Whether you're an individual or a growing business, Audit Pulse is
              here to simplify your accounting, taxation and compliance.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-block rounded-xl bg-[#FF8C00] px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Services;