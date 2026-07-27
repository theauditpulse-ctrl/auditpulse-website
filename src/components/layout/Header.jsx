import logo from "../../assets/logo/logo.jpg";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Audit Pulse"
            className="h-14 w-auto"
          />

          <div>
            <h2 className="text-xl font-bold text-[#0F3D91]">
              Audit Pulse
            </h2>

            <p className="text-xs text-gray-500">
              Auditing & Accounting Services
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-[#0F3D91]">
            Home
          </a>

          <a href="#" className="hover:text-[#0F3D91]">
            About
          </a>

          <a href="#" className="hover:text-[#0F3D91]">
            Services
          </a>

          <a href="#" className="hover:text-[#0F3D91]">
            Contact
          </a>
        </nav>

        {/* Button */}
        <button className="rounded-lg bg-[#0F3D91] px-5 py-3 font-semibold text-white hover:bg-blue-900 transition">
          Book Consultation
        </button>
      </div>
    </header>
  );
}

export default Header;