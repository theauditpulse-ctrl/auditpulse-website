function Process() {
  const steps = [
    {
      number: "01",
      title: "Connect",
      description: "Contact us through phone, WhatsApp or email.",
    },
    {
      number: "02",
      title: "Consult",
      description: "We understand your business and compliance needs.",
    },
    {
      number: "03",
      title: "Execute",
      description: "Our team completes the work accurately and on time.",
    },
    {
      number: "04",
      title: "Support",
      description: "We continue to support your business as it grows.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#0F3D91]">
          Our Process
        </h2>

        <p className="text-center text-gray-600 mt-4">
          A simple and transparent approach designed to save your time.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-xl shadow p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-4xl font-bold text-[#FF8C00]">
                {step.number}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-[#0F3D91]">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;