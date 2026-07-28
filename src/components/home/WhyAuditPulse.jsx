import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Users,
  BriefcaseBusiness,
  Smartphone,
} from "lucide-react";

function WhyAuditPulse() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Transparent Advice",
      description:
        "Honest communication and practical recommendations without unnecessary complexity.",
    },
    {
      icon: Clock3,
      title: "Timely Compliance",
      description:
        "We help you meet statutory deadlines with confidence through organized and timely execution.",
    },
    {
      icon: BadgeCheck,
      title: "Accuracy First",
      description:
        "Every engagement is handled with attention to detail and professional care.",
    },
    {
      icon: Users,
      title: "Personalized Support",
      description:
        "Solutions tailored to your individual or business requirements instead of a one-size-fits-all approach.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Business Focused",
      description:
        "Beyond compliance, we provide practical insights that support informed business decisions.",
    },
    {
      icon: Smartphone,
      title: "Modern & Digital",
      description:
        "Simple communication through WhatsApp, email and digital document sharing for a smoother experience.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

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
            A Modern Approach to Accounting & Compliance
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine professional expertise, transparent communication and
            technology-driven processes to deliver a seamless experience for
            individuals, professionals and growing businesses.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="inline-flex rounded-xl bg-blue-100 p-4 text-[#0F3D91]">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#0F3D91]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyAuditPulse;