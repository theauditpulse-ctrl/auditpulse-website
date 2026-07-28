import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo/logo.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <NavLink
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Audit Pulse"
            className="h-14 w-auto rounded-lg"
          />

          <div>
            <h2 className="text-2xl font-bold text-[#0F3D91]">
              Audit Pulse
            </h2>

            <p className="text-xs text-gray-500">
              Accounting • Taxation • Compliance
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-[#0F3D91]"
                    : "text-gray-600 hover:text-[#0F3D91]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}

        <NavLink
          to="/contact"
          className="hidden rounded-xl bg-[#FF8C00] px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#E67E00] lg:block"
        >
          Book Consultation
        </NavLink>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 lg:hidden"
        >
          {menuOpen ? (
            <X size={28} className="text-[#0F3D91]" />
          ) : (
            <Menu size={28} className="text-[#0F3D91]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="flex flex-col px-6 py-4">

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-base font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-[#0F3D91]"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-xl bg-[#FF8C00] px-6 py-3 text-center font-semibold text-white"
            >
              Book Consultation
            </NavLink>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;