import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Users,
  BriefcaseBusiness,
  Smartphone,
  ArrowRight,
} from "lucide-react";

function WhyAuditPulse() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Transparent Advice",
      description:
        "Clear communication, honest recommendations and complete transparency throughout every engagement.",
    },
    {
      icon: Clock3,
      title: "Timely Compliance",
      description:
        "Stay ahead of statutory deadlines with organised processes and timely execution.",
    },
    {
      icon: BadgeCheck,
      title: "Accuracy First",
      description:
        "Every return, report and filing is prepared with precision and professional care.",
    },
    {
      icon: Users,
      title: "Personalized Support",
      description:
        "Solutions tailored to your individual or business requirements—not a one-size-fits-all approach.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Business Focused",
      description:
        "Practical financial insights that help you make informed business decisions beyond compliance.",
    },
    {
      icon: Smartphone,
      title: "Modern & Digital",
      description:
        "Easy communication through WhatsApp, email and secure digital document sharing.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
            Why Choose Audit Pulse
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#0F3D91] lg:text-5xl">
            Why Businesses Trust Audit Pulse
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine professional expertise, transparent communication and
            modern technology to deliver reliable accounting, taxation and
            compliance services that help individuals and businesses move
            forward with confidence.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-transparent bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#FF8C00] hover:shadow-2xl"
              >
                <div className="inline-flex rounded-xl bg-blue-100 p-4 text-[#0F3D91] transition duration-300 group-hover:bg-[#0F3D91] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#0F3D91]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center gap-2 font-medium text-[#FF8C00] opacity-0 transition duration-300 group-hover:opacity-100">
                  <span>Committed to Excellence</span>
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyAuditPulse;