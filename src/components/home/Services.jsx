import { motion } from "framer-motion";
import {
  FileText,
  Receipt,
  Calculator,
  Building2,
  Briefcase,
  Landmark,
  ArrowRight,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: FileText,
      title: "Income Tax Filing",
      description:
        "Accurate income tax return preparation and filing for salaried individuals, professionals and businesses.",
    },
    {
      icon: Receipt,
      title: "GST Services",
      description:
        "GST registration, return filing, annual compliance and advisory for businesses of every size.",
    },
    {
      icon: Calculator,
      title: "Accounting Services",
      description:
        "Professional bookkeeping, financial reporting and accounting support for informed business decisions.",
    },
    {
      icon: Building2,
      title: "Business Registration",
      description:
        "Private Limited Company, LLP, OPC and Proprietorship registration with complete compliance support.",
    },
    {
      icon: Briefcase,
      title: "Business Advisory",
      description:
        "Practical financial guidance to improve business performance and long-term growth.",
    },
    {
      icon: Landmark,
      title: "ROC Compliance",
      description:
        "Annual filings, statutory compliance and regulatory support for companies.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#0F3D91] lg:text-5xl">
            Professional Financial Solutions Under One Roof
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From taxation and accounting to registrations and compliance,
            Audit Pulse provides dependable financial solutions designed to
            support individuals, professionals and growing businesses.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-[#0F3D91] transition-all duration-300 group-hover:bg-[#0F3D91] group-hover:text-white">
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

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-3 rounded-xl bg-[#0F3D91] px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-900">
            Explore All Services
            <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}

export default Services;