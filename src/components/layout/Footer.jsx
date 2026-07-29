import {
  Phone,
  Mail,
  Clock3,
  MapPin,
  Globe,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const services = [
    "Income Tax Filing",
    "GST Services",
    "Accounting",
    "Business Registration",
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Audit Pulse
            </h2>

            <p className="mt-4 text-orange-400 font-medium">
              Compliance Made Simple. Growth Made Possible.
            </p>

            <p className="mt-5 leading-7 text-gray-400">
              Professional accounting, taxation, GST, bookkeeping and business
              compliance services helping individuals, startups and businesses
              across India grow with confidence.
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Serving clients across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 text-gray-300 transition hover:text-orange-400"
                  >
                    <ChevronRight size={16} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold">
              Services
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <ChevronRight size={16} />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <a
                href="tel:+919025973127"
                className="flex items-start gap-3 text-gray-300 transition hover:text-orange-400"
              >
                <Phone size={20} className="mt-1 text-[#FF8C00]" />
                <span>+91 90259 73127</span>
              </a>

              <a
                href="mailto:info@theauditpulse.com"
                className="flex items-start gap-3 text-gray-300 transition hover:text-orange-400"
              >
                <Mail size={20} className="mt-1 text-[#FF8C00]" />
                <span>info@theauditpulse.com</span>
              </a>

              <div className="flex items-start gap-3">
                <Clock3 size={20} className="mt-1 text-[#FF8C00]" />
                <div className="text-gray-300">
                  Mon – Fri : 9 AM – 6 PM
                  <br />
                  Sat : 9 AM – 2 PM
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 text-[#FF8C00]" />
                <span className="text-gray-300">
                  Perambur, Chennai – 600011
                </span>
              </div>

              <a
                href="https://www.theauditpulse.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-gray-300 transition hover:text-orange-400"
              >
                <Globe size={20} className="mt-1 text-[#FF8C00]" />
                <span>www.theauditpulse.com</span>
              </a>

            </div>
          </div>

        </div>

        <div className="mt-14 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Audit Pulse. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;