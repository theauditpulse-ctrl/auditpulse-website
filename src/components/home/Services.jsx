function Services() {
  const services = [
    "Income Tax Return Filing",
    "GST Registration & Returns",
    "Accounting Services",
    "Company Incorporation",
    "OPC Registration",
    "ROC Compliance",
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-[#0F3D91]">
          Our Services
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Professional financial and compliance services for individuals,
          startups and businesses.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service}
              className="rounded-xl bg-white p-8 shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-[#0F3D91]">
                {service}
              </h3>

              <p className="mt-3 text-gray-600">
                Reliable, timely and professional service tailored to your
                business needs.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;