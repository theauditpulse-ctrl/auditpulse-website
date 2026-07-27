function App() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0F3D91]">
          Welcome to Audit Pulse
        </span>

        <h1 className="mt-8 text-6xl font-bold leading-tight text-[#0F3D91]">
          Simplifying Tax,
          <br />
          Accounting &
          <br />
          Business Compliance
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">
          We simplify accounting, taxation and compliance so you can
          focus on growing your business with confidence.
        </p>

        <div className="mt-10 flex gap-5">

          <button className="rounded-xl bg-[#0F3D91] px-8 py-4 text-white font-semibold hover:scale-105 duration-300">
            Book Free Consultation
          </button>

          <button className="rounded-xl border border-[#0F3D91] px-8 py-4 text-[#0F3D91] font-semibold hover:bg-[#0F3D91] hover:text-white duration-300">
            WhatsApp
          </button>

        </div>

      </section>

    </main>
  )
}

export default App