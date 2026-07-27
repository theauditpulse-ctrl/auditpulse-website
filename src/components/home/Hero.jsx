function Hero() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-6 py-24">

        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0F3D91]">
          Trusted Tax & Accounting Partner
        </span>

        <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-[#0F3D91]">
          Simplifying Tax,
          <br />
          Accounting &
          <br />
          Business Compliance
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-gray-600">
          We simplify taxation, accounting and business compliance so you can focus on growing your business with confidence.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-lg bg-[#0F3D91] px-8 py-4 font-semibold text-white hover:bg-blue-900 transition">
            Book Free Consultation
          </button>

          <button className="rounded-lg border-2 border-[#0F3D91] px-8 py-4 font-semibold text-[#0F3D91] hover:bg-[#0F3D91] hover:text-white transition">
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;