import { Link } from "react-router-dom";
import { Home, SearchX } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center rounded-[2rem] border border-blue-100 bg-white/90 p-10 text-center shadow-2xl backdrop-blur md:p-16">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-[#FF8C00] shadow-lg">
          <SearchX size={36} strokeWidth={2.2} />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#FF8C00]">
          404 Error
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[#0F3D91] sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          The page you’re looking for may have moved, been removed, or never existed. Let’s get you back to the Audit Pulse website and find the right path.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-xl bg-[#0F3D91] px-7 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-900"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl border-2 border-[#0F3D91] px-7 py-3.5 font-semibold text-[#0F3D91] transition duration-300 hover:bg-[#0F3D91] hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
