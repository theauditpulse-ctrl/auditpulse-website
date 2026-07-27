import {
  FileText,
  Receipt,
  Calculator,
  Building2,
  Briefcase,
  Landmark,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: FileText,
      title: "Income Tax Filing",
      description:
        "Accurate income tax return preparation and filing for individuals and businesses.",
    },
    {
      icon: Receipt,
      title: "GST Services",
      description:
        "GST registration, return filing and compliance support.",
    },
    {
      icon: Calculator,
      title: "Accounting",
      description:
        "Professional bookkeeping and financial reporting services.",
    },
    {
      icon: Building2,
      title: "Company Registration",
      description:
        "Private Limited, LLP and OPC incorporation made simple.",
    },
    {
      icon: Briefcase,
      title: "Business Advisory",
      description:
        "Practical financial and compliance guidance for growing businesses.",
    },
    {
      icon: Landmark,
      title: "ROC Compliance",
      description:
        "Annual filings and statutory compliance for companies.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#0F3D91]">
            Our Services
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Comprehensive accounting, taxation and compliance solutions
            tailored for individuals, startups and businesses.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-[#0F3D91] group-hover:bg-[#0F3D91] group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#0F3D91]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <button className="mt-8 font-semibold text-[#FF8C00] hover:underline">
                  Learn More →
                </button>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Services;