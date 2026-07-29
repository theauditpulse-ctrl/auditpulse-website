import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

function About() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Transparent Communication",
      description:
        "We believe in honest advice, clear communication and complete transparency throughout every engagement.",
    },
    {
      icon: Clock3,
      title: "On-Time Compliance",
      description:
        "We ensure your statutory obligations are completed accurately and on time, helping you stay compliant with confidence.",
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused Advice",
      description:
        "Beyond compliance, we provide practical guidance that supports better financial decisions and sustainable business growth.",
    },
  ];

  const highlights = [
    "100% Compliance Focus",
    "Fast Response",
    "Technology Driven",
    "Personalized Solutions",
  ];

  return (
    <section className="bg-white pt-24 pb-32">
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
            About Audit Pulse
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#0F3D91]">
            Your Trusted Partner for Accounting, Taxation & Compliance
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Audit Pulse, we help individuals, startups, professionals and
            growing businesses simplify taxation, accounting and statutory
            compliance. Our approach combines technical expertise, responsive
            support and modern technology, allowing you to focus on running
            your business while we take care of the compliance.
          </p>
        </motion.div>

        {/* Value Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-3 rounded-xl bg-blue-50 px-5 py-4 font-medium text-[#0F3D91] transition duration-300 hover:bg-white hover:border hover:border-[#FF8C00] hover:shadow-lg"
            >
              <CheckCircle2 size={20} className="text-[#FF8C00]" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

        {/* Pillars */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#FF8C00] hover:shadow-2xl"
              >
                <div className="inline-flex rounded-xl bg-blue-100 p-4 text-[#0F3D91]">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#0F3D91]">
                  {pillar.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default About;