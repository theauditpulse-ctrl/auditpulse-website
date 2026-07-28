import {
  Phone,
  Mail,
  Clock3,
  MapPin,
  ChevronRight,
} from "lucide-react";

function Footer() {
  const services = [
    "Income Tax Filing",
    "GST Services",
    "Accounting",
    "Business Registration",
  ];

  const quickLinks = [
    "Home",
    "About",
    "Services",
    "Resources",
    "Contact",
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

            <p className="mt-5 leading-7 text-gray-300">
              Compliance Made Simple. Growth Made Possible.
            </p>

            <p className="mt-5 leading-7 text-gray-400">
              Professional accounting, taxation and compliance solutions
              helping individuals and businesses across India grow with
              confidence.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {quickLinks.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-gray-300 transition hover:text-white"
                >
                  <ChevronRight size={16} />
                  {item}
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
                  className="flex items-center gap-2 text-gray-300 transition hover:text-white"
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

              <div className="flex items-start gap-3">
                <Phone
                  size={20}
                  className="mt-1 text-[#FF8C00]"
                />
                <span className="text-gray-300">
                  +91 90259 73127
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={20}
                  className="mt-1 text-[#FF8C00]"
                />
                <span className="text-gray-300">
                  theauditpulse@gmail.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Clock3
                  size={20}
                  className="mt-1 text-[#FF8C00]"
                />
                <div className="text-gray-300">
                  Mon – Fri : 9 AM – 6 PM
                  <br />
                  Sat : 9 AM – 2 PM
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 text-[#FF8C00]"
                />
                <span className="text-gray-300">
                  Chennai, Tamil Nadu, India
                </span>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-14 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          © 2026 Audit Pulse. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;