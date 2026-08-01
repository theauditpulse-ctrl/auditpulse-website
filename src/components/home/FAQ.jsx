import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { faqItems } from "../../data/faq";

const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

function FAQ() {
  const faqs = faqItems;

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
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
              initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                open === index
                  ? "border-[#FF8C00] shadow-lg"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(open === index ? -1 : index)}
                aria-expanded={open === index}
                aria-controls={`faq-panel-${index}`}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#0F3D91] focus:ring-offset-2"
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
                  id={`faq-panel-${index}`}
                  initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
                  animate={prefersReducedMotion ? { opacity: 1, height: "auto" } : { opacity: 1, height: "auto" }}
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