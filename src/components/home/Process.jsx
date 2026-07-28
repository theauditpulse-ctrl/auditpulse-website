import { motion } from "framer-motion";
import {
  PhoneCall,
  ClipboardList,
  CheckCircle2,
  Handshake,
} from "lucide-react";

function Process() {
  const steps = [
    {
      number: "01",
      icon: PhoneCall,
      title: "Connect",
      description:
        "Reach out through phone, WhatsApp or email for an initial discussion.",
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "Consult",
      description:
        "We understand your requirements and recommend the right compliance solution.",
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: "Execute",
      description:
        "Our team completes your work accurately, professionally and on time.",
    },
    {
      number: "04",
      icon: Handshake,
      title: "Support",
      description:
        "We continue supporting your business with ongoing compliance and advisory services.",
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
            Our Process
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#0F3D91] lg:text-5xl">
            A Simple Process Designed Around You
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We make accounting and compliance straightforward through a clear,
            transparent and efficient four-step process.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-[#0F3D91] transition-all duration-300 group-hover:bg-[#0F3D91] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <div className="mt-6 text-4xl font-bold text-[#FF8C00]">
                  {step.number}
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-[#0F3D91]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Process;