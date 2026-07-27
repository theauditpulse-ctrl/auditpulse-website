function WhoWeHelp() {
  const clients = [
    "Individuals",
    "Freelancers",
    "Proprietorships",
    "Partnership Firms",
    "Private Limited Companies",
    "One Person Companies (OPC)",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#0F3D91]">
          Who We Help
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Supporting businesses and individuals with reliable accounting and compliance services.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {clients.map((client) => (
            <div
              key={client}
              className="rounded-xl border p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#0F3D91]">
                {client}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhoWeHelp;