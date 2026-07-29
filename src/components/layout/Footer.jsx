import {
  Phone,
  Mail,
  Clock3,
  MapPin,
  Globe,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { company, navigationItems, servicesList } from "../../data/company";

function Footer() {
  const services = servicesList;
  const quickLinks = navigationItems;

  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              {company.name}
            </h2>

            <p className="mt-4 text-orange-400 font-medium">
              {company.tagline}
            </p>

            <p className="mt-5 leading-7 text-gray-400">
              {company.description}
            </p>

            <p className="mt-5 text-sm text-gray-500">
              {company.serviceArea}
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
                <span>{company.phone}</span>
              </a>

              <a
                href="mailto:info@theauditpulse.com"
                className="flex items-start gap-3 text-gray-300 transition hover:text-orange-400"
              >
                <Mail size={20} className="mt-1 text-[#FF8C00]" />
                <span>{company.email}</span>
              </a>

              <div className="flex items-start gap-3">
                <Clock3 size={20} className="mt-1 text-[#FF8C00]" />
                <div className="text-gray-300">
                  {company.hours.weekdays}
                  <br />
                  {company.hours.saturday}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 text-[#FF8C00]" />
                <span className="text-gray-300">
                  {company.location}
                </span>
              </div>

              <a
                href="https://www.theauditpulse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-300 transition hover:text-orange-400"
              >
                <Globe size={20} className="mt-1 text-[#FF8C00]" />
                <span>{company.website.replace("https://", "")}</span>
              </a>

            </div>
          </div>

        </div>

        <div className="mt-14 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {company.name}. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;