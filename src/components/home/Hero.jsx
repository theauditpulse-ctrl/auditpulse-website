import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MessageCircle } from "lucide-react";
import HeroIllustration from "../../assets/images/hero-illustration.webp";

const heroLinks = [
  {
    href: "/contact",
    label: "Book Consultation",
    icon: Calendar,
    className: "bg-[#0F3D91] text-white hover:bg-blue-900",
  },
  {
    href: "https://wa.me/919025973127",
    label: "Chat on WhatsApp",
    icon: MessageCircle,
    className: "border-2 border-[#0F3D91] text-[#0F3D91] hover:bg-[#0F3D91] hover:text-white",
  },
];

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

          <div className="mt-10 flex flex-wrap gap-4">
            {heroLinks.map(({ href, label, icon: Icon, className }) => {
              const isExternal = href.startsWith("http");
              const classNames = `flex items-center gap-3 rounded-xl px-7 py-3.5 font-semibold shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:ring-offset-2 ${className}`;

              return isExternal ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classNames}
                >
                  <Icon size={18} aria-hidden="true" />
                  {label}
                </a>
              ) : (
                <Link key={label} to={href} className={classNames}>
                  <Icon size={18} aria-hidden="true" />
                  {label}
                </Link>
              );
            })}
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
            alt="Audit Pulse accounting and compliance illustration"
            width={1536}
            height={1024}
            loading="eager"
            decoding="async"
            className="w-full rounded-3xl drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;