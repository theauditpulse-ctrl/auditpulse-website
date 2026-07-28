import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { ShieldCheck, Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <Header />

      <main>

        {/* Hero */}

        <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">

            <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
              About Audit Pulse
            </span>

            <h1 className="mt-4 text-5xl font-bold text-[#0F3D91] lg:text-6xl">
              Building Trust Through
              <br />
              Financial Excellence
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              Audit Pulse is a modern accounting, taxation and compliance
              practice committed to helping individuals, professionals and
              businesses simplify financial management through reliable,
              transparent and technology-driven solutions.
            </p>

          </div>
        </section>

        {/* Mission & Vision */}

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-10 shadow-xl"
            >
              <Target className="text-[#0F3D91]" size={42} />

              <h2 className="mt-6 text-3xl font-bold text-[#0F3D91]">
                Our Mission
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                To simplify accounting, taxation and compliance through
                transparent communication, professional expertise and modern
                technology, enabling clients to focus on growth.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-white p-10 shadow-xl"
            >
              <Eye className="text-[#FF8C00]" size={42} />

              <h2 className="mt-6 text-3xl font-bold text-[#0F3D91]">
                Our Vision
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                To be the trusted partner for individuals and businesses across
                India by delivering modern, transparent and dependable
                accounting, taxation and compliance solutions.
              </p>

            </motion.div>

          </div>
        </section>

        {/* Core Values */}

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">
              <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
                Core Values
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#0F3D91]">
                What Defines Audit Pulse
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">

              {[
                "Transparency",
                "Accuracy",
                "Reliability",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white p-8 shadow-lg"
                >
                  <ShieldCheck
                    className="text-[#0F3D91]"
                    size={36}
                  />

                  <h3 className="mt-6 text-2xl font-semibold text-[#0F3D91]">
                    {item}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    Every service we provide is guided by our commitment to
                    professional ethics and long-term client relationships.
                  </p>

                </div>
              ))}

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;