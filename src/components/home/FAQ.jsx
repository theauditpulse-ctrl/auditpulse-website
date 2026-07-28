import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

function FAQ() {
  const faqs = [
    {
      question: "Who can use Audit Pulse services?",
      answer:
        "We serve salaried individuals, freelancers, proprietorships, partnership firms, OPCs and private limited companies across India.",
    },
    {
      question: "Can I communicate through WhatsApp?",
      answer:
        "Yes. WhatsApp is our preferred communication channel for faster support, document sharing and updates.",
    },
    {
      question: "Do you provide online services?",
      answer:
        "Yes. Most of our services can be completed online without requiring an office visit.",
    },
    {
      question: "What documents are required?",
      answer:
        "The required documents depend on the service. We'll provide you with a simple checklist after understanding your requirements.",
    },
    {
      question: "How quickly can you complete my work?",
      answer:
        "Timelines vary by service, but we always aim for accurate and timely completion while keeping you informed throughout the process.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#0F3D91]">
            Have Questions?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Here are some of the most common questions our clients ask.
          </p>
        </motion.div>

        <div className="mt-14 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-[#0F3D91]">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;