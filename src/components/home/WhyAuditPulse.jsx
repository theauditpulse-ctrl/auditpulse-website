function WhyAuditPulse() {
  const features = [
    {
      title: "Professional",
      description: "Qualified financial guidance tailored to your business."
    },
    {
      title: "Accurate",
      description: "Careful preparation with attention to every detail."
    },
    {
      title: "Transparent",
      description: "Clear communication and no hidden surprises."
    },
    {
      title: "Timely",
      description: "Deadlines met so your compliance stays on track."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-center text-[#0F3D91]">
          Why Audit Pulse?
        </h2>

        <p className="mt-4 text-center text-gray-600">
          We believe accounting should be simple, reliable and focused on helping your business grow.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#0F3D91]">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyAuditPulse;