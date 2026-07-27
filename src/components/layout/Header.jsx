import logo from "../../assets/logo/logo.jpg";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <div className="flex items-center gap-3">

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

        </div>

        {/* Navigation */}

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">

          <a href="#" className="transition hover:text-[#0F3D91]">
            Home
          </a>

          <a href="#" className="transition hover:text-[#0F3D91]">
            About
          </a>

          <a href="#" className="transition hover:text-[#0F3D91]">
            Services
          </a>

          <a href="#" className="transition hover:text-[#0F3D91]">
            Knowledge Centre
          </a>

          <a href="#" className="transition hover:text-[#0F3D91]">
            Contact
          </a>

        </nav>

        {/* CTA */}

        <button className="rounded-xl bg-[#FF8C00] px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#E67E00]">
          Book Consultation
        </button>

      </div>
    </header>
  );
}

export default Header;