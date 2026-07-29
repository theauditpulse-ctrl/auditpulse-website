import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

function FAQ() {
  const faqs = [
    {
      question: "Who can use Audit Pulse services?",
      answer:
        "We assist salaried individuals, freelancers, proprietorships, partnership firms, One Person Companies (OPCs) and Private Limited Companies across India with accounting, taxation and compliance services.",
    },
    {
      question: "Can I communicate through WhatsApp?",
      answer:
        "Absolutely. WhatsApp is one of our preferred communication channels for faster support, document sharing and regular updates.",
    },
    {
      question: "Do you provide online services?",
      answer:
        "Yes. Most of our services can be completed entirely online, allowing you to work with us from anywhere in India without visiting our office.",
    },
    {
      question: "What documents are required?",
      answer:
        "The documents depend on the service you require. Once we understand your requirements, we'll share a simple checklist to make the process easy.",
    },
    {
      question: "How quickly can you complete my work?",
      answer:
        "Timelines vary depending on the service and complexity. We always focus on delivering accurate work within agreed timelines while keeping you informed throughout the process.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#0F3D91]">
            Everything You Need to Know
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here are answers to some of the most common questions about our
            accounting, taxation and compliance services.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                open === index
                  ? "border-[#FF8C00] shadow-lg"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-[#0F3D91]">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180 text-[#FF8C00]" : ""
                  }`}
                />
              </button>

              {open === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 leading-7 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;