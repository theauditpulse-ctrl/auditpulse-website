import { motion } from "framer-motion";
import { PhoneCall, MessageCircle } from "lucide-react";

function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0F3D91] py-24 text-white">

      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-widest text-orange-300">
            Let's Get Started
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
            Ready to Simplify Your Accounting & Compliance?
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Whether you're an individual, professional or business owner,
            Audit Pulse is here to provide reliable accounting, taxation and
            compliance support with a modern and transparent approach.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="https://wa.me/919025973127"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-[#0F3D91] shadow-xl transition duration-300 hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

            <a
              href="tel:+919025973127"
              className="inline-flex items-center gap-3 rounded-xl border-2 border-white px-8 py-4 font-semibold transition duration-300 hover:bg-white hover:text-[#0F3D91]"
            >
              <PhoneCall size={20} />
              Call Now
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default ContactCTA;