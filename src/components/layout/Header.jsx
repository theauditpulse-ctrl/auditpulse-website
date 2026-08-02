import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../../assets/logo/logo-navbar.webp";
import { navigationItems } from "../../data/company";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleNavigate = (path) => {
    setMenuOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "border-gray-200 shadow-lg shadow-slate-900/5" : "border-gray-100"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          aria-label="Audit Pulse home"
          className="flex min-w-0 items-center rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:ring-offset-4"
          onClick={() => handleNavigate("/")}
        >
          <img
            src={logo}
            alt="Audit Pulse"
            width={1065}
            height={399}
            loading="eager"
            decoding="async"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-16 sm:h-20 lg:h-24" : "h-[4.5rem] sm:h-24 lg:h-28"}`}
          />
        </NavLink>

        <nav className="hidden items-center gap-2 rounded-full border border-gray-100 bg-white/80 px-2 py-2 shadow-sm lg:flex" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => handleNavigate(item.path)}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:ring-offset-2 ${
                  isActive ? "bg-blue-50 text-[#0F3D91]" : "text-gray-600 hover:bg-slate-50 hover:text-[#0F3D91]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          onClick={() => handleNavigate("/contact")}
          className="hidden rounded-full bg-[#FF8C00] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#E67E00] focus:outline-none focus:ring-2 focus:ring-[#0F3D91] focus:ring-offset-2 lg:inline-flex"
        >
          Free Consultation
        </NavLink>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-[#0F3D91] shadow-sm transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:ring-offset-2 lg:hidden"
        >
          {menuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 sm:px-6" aria-label="Mobile navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => handleNavigate(item.path)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-base font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:ring-offset-2 ${
                  isActive ? "bg-blue-50 text-[#0F3D91]" : "text-gray-700 hover:bg-gray-50 hover:text-[#0F3D91]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => handleNavigate("/contact")}
            className="mt-2 rounded-xl bg-[#FF8C00] px-6 py-3 text-center font-bold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0F3D91] focus:ring-offset-2"
          >
            Get Free Consultation
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
