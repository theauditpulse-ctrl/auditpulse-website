import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../../assets/logo/logo-navbar.webp";
import { navigationItems } from "../../data/company";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "shadow-md border-b border-gray-200"
          : "border-b border-gray-100"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-6">

        {/* Logo */}

        <NavLink
          to="/"
          className="flex items-center gap-4"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Audit Pulse"
            width={1065}
            height={399}
            loading="eager"
            decoding="async"
            className="h-20 w-auto sm:h-24 lg:h-28 transition-all duration-300"
          />
        </NavLink>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative pb-1 font-medium transition duration-300 ${
                  isActive
                    ? "text-[#0F3D91] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:rounded-full after:bg-[#FF8C00]"
                    : "text-gray-600 hover:text-[#0F3D91]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}

        <NavLink
          to="/contact"
          className="hidden rounded-xl bg-[#FF8C00] px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#E67E00] focus:outline-none focus:ring-2 focus:ring-[#0F3D91] focus:ring-offset-2 lg:block"
        >
          Get Free Consultation
        </NavLink>

        {/* Mobile Button */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#0F3D91] focus:ring-offset-2 lg:hidden"
        >
          {menuOpen ? (
            <X size={30} className="text-[#0F3D91]" />
          ) : (
            <Menu size={30} className="text-[#0F3D91]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-200 bg-white lg:hidden"
        >
          <nav
            className="flex flex-col px-6 py-4"
            aria-label="Mobile navigation"
          >
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-[#0F3D91] focus:ring-offset-2 ${
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
              className="mt-4 rounded-xl bg-[#FF8C00] px-6 py-3 text-center font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#0F3D91] focus:ring-offset-2"
            >
              Get Free Consultation
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;