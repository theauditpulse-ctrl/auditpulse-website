import { motion } from "framer-motion";
import { Calendar, CheckCircle2, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import HeroIllustration from "../../assets/images/hero-illustration.webp";

function Hero() {
  const trustPoints = ["Responsive support", "Secure document handling", "Deadline-led compliance"];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-3xl text-center lg:text-left">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-bold text-[#0F3D91] shadow-sm">
            Accounting, Taxation & Compliance Advisory
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#0F3D91] sm:text-5xl lg:text-6xl xl:text-7xl">
            Compliance Made Simple. <span className="text-[#FF8C00]">Growth Made Possible.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0">
            Professional accounting, taxation and business compliance support for individuals, entrepreneurs and companies across India—delivered with clarity, accuracy and timely communication.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#0F3D91] px-7 py-4 font-bold text-white shadow-xl shadow-blue-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:ring-offset-2">
              <Calendar size={19} aria-hidden="true" />
              Book Consultation
            </Link>
            <a href="https://wa.me/919025973127" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-[#0F3D91] bg-white px-7 py-4 font-bold text-[#0F3D91] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#0F3D91] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:ring-offset-2">
              <MessageCircle size={19} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 rounded-xl bg-white/80 px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm">
                <CheckCircle2 size={18} className="shrink-0 text-[#FF8C00]" aria-hidden="true" />
                {point}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="mx-auto w-full max-w-xl lg:max-w-2xl">
          <img src={HeroIllustration} alt="Audit Pulse professional accounting and compliance illustration" width={1536} height={1024} loading="eager" decoding="async" className="w-full rounded-[2rem] border border-white/80 bg-white/30 shadow-2xl shadow-blue-900/10" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
