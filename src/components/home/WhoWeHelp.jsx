import { motion } from "framer-motion";
import {
  User,
  Laptop,
  Store,
  Users,
  Building2,
  Briefcase,
} from "lucide-react";

function WhoWeHelp() {
  const clients = [
    {
      icon: User,
      title: "Individuals",
      description: "Income tax filing and personal financial compliance made simple.",
    },
    {
      icon: Laptop,
      title: "Freelancers",
      description: "Tax planning, GST and accounting support for independent professionals.",
    },
    {
      icon: Store,
      title: "Proprietorships",
      description: "Complete bookkeeping, GST compliance and business advisory services.",
    },
    {
      icon: Users,
      title: "Partnership Firms",
      description: "Accounting, taxation and statutory compliance for partnership businesses.",
    },
    {
      icon: Building2,
      title: "Private Limited Companies",
      description: "End-to-end compliance, ROC filings and financial reporting solutions.",
    },
    {
      icon: Briefcase,
      title: "One Person Companies (OPC)",
      description: "Business registration, annual compliance and taxation support.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
            Who We Help
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#0F3D91] lg:text-5xl">
            Serving Individuals & Businesses Across India
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're an individual, a startup or an established business,
            Audit Pulse provides reliable accounting, taxation and compliance
            services tailored to your needs.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => {
            const Icon = client.icon;

            return (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-[#0F3D91] transition-all duration-300 group-hover:bg-[#0F3D91] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#0F3D91]">
                  {client.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {client.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhoWeHelp;