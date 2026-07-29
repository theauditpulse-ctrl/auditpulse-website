import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo/logo-navbar.webp";

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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "shadow-md border-b border-gray-200"
          : "border-b border-gray-100"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

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
            className="h-16 w-auto"
          />
        </NavLink>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
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
          className="hidden rounded-xl bg-[#FF8C00] px-7 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#E67E00] lg:block"
        >
          Get Free Consultation
        </NavLink>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 lg:hidden"
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
              Get Free Consultation
            </NavLink>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;