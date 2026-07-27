function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 py-24 lg:flex-row">
        
        {/* Left Content */}
        <div className="max-w-2xl">

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0F3D91]">
            Empowering Businesses Through Better Financial Decisions
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-[#0F3D91] lg:text-6xl">
            Compliance Made
            <br />
            <span className="text-[#0F3D91]">Simple.</span>
            <span className="text-[#FF8C00]"> Growth Made Possible.</span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Professional accounting, taxation and business compliance
            services designed to help individuals, entrepreneurs and
            growing businesses make informed financial decisions with
            confidence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-xl bg-[#0F3D91] px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-900">
              Book Consultation
            </button>

            <button className="rounded-xl border-2 border-[#0F3D91] px-8 py-4 font-semibold text-[#0F3D91] transition hover:bg-[#0F3D91] hover:text-white">
              Chat on WhatsApp
            </button>

          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-white p-5 shadow-md">
              <h3 className="font-semibold text-[#0F3D91]">
                Personalized Service
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Every client receives dedicated attention and practical financial guidance.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-md">
              <h3 className="font-semibold text-[#0F3D91]">
                Transparent Communication
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Clear advice, timely updates and complete transparency.
              </p>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-md">
              <h3 className="font-semibold text-[#0F3D91]">
                Reliable Support
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Helping you stay compliant and make informed financial decisions.
              </p>
            </div>

          </div>

        </div>

        {/* Right Content */}

        <div className="grid w-full max-w-lg gap-5">

          <div className="rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-xl font-bold text-[#0F3D91]">
              Income Tax Return Filing
            </h3>

            <p className="mt-3 text-gray-600">
              Accurate and timely income tax filing for individuals and businesses.
            </p>
          </div>

          <div className="rounded-2xl bg-[#0F3D91] p-6 text-white shadow-xl">
            <h3 className="text-xl font-bold">
              GST Registration & Returns
            </h3>

            <p className="mt-3 text-blue-100">
              Complete GST registration, return filing and compliance support.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-xl font-bold text-[#0F3D91]">
              Company & OPC Registration
            </h3>

            <p className="mt-3 text-gray-600">
              Hassle-free business incorporation and ROC compliance services.
            </p>
          </div>

          <div className="rounded-2xl bg-[#FF8C00] p-6 text-white shadow-xl">
            <h3 className="text-xl font-bold">
              Accounting Services
            </h3>

            <p className="mt-3 text-orange-100">
              Professional accounting solutions that support smarter business decisions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;