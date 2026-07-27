function ContactCTA() {
  return (
    <section className="bg-[#0F3D91] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Simplify Your Business Compliance?
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Let Audit Pulse handle your taxation, accounting and compliance,
          so you can focus on growing your business.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="tel:+919025973127"
            className="rounded-lg bg-white px-8 py-4 font-semibold text-[#0F3D91] hover:bg-gray-100"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919025973127"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border-2 border-white px-8 py-4 font-semibold hover:bg-white hover:text-[#0F3D91]"
          >
            WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}

export default ContactCTA;