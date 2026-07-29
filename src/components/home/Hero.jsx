import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import HeroIllustration from "../../assets/images/hero-illustration.webp";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">

      {/* Background Blur */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl"></div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 py-24 lg:flex-row">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#0F3D91]">
            Empowering Businesses Through Better Financial Decisions
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-[#0F3D91] lg:text-7xl">
            Compliance Made
            <br />
            <span>Simple.</span>
            <span className="text-[#FF8C00]"> Growth Made Possible.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Professional accounting, taxation and compliance solutions for
            individuals, entrepreneurs and businesses across India — delivered
            with transparency, accuracy and timely service.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="flex items-center gap-3 rounded-xl bg-[#0F3D91] px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-900">
              <Calendar size={20} />
              Book Consultation
            </button>

            <button className="flex items-center gap-3 rounded-xl border-2 border-[#0F3D91] px-8 py-4 font-semibold text-[#0F3D91] transition duration-300 hover:bg-[#0F3D91] hover:text-white">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </button>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl"
        >
          <img
            src={HeroIllustration}
            alt="Audit Pulse Illustration"
            width={1536}
            height={1024}
            loading="eager"
            decoding="async"
            className="w-full drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;