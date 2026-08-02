import { Helmet } from "react-helmet-async";
import Header from "../components/layout/Header";
import { seoDefaults } from "../data/company";
import Footer from "../components/layout/Footer";
import { ShieldCheck, Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <Helmet>
        <title>About {seoDefaults.siteName} | Trusted Accounting & Tax Experts</title>

        <meta
          name="description"
          content={`Learn about ${seoDefaults.siteName}, our mission, vision and commitment to delivering reliable accounting, taxation, GST and business compliance services across India.`}
        />

        <meta
          name="keywords"
          content="About Audit Pulse, Chartered Accountant Chennai, Accounting Firm India, Tax Consultant Chennai, Business Compliance"
        />

        <link
          rel="canonical"
          href={`${seoDefaults.canonicalBaseUrl}/about`}
        />

        <meta
          property="og:title"
          content={`About ${seoDefaults.siteName} | Trusted Accounting & Tax Experts`}
        />

        <meta
          property="og:description"
          content={`Discover ${seoDefaults.siteName}'s mission, values and expertise in accounting, taxation and business compliance.`}
        />

        <meta
          property="og:url"
          content={`${seoDefaults.canonicalBaseUrl}/about`}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content={`${seoDefaults.canonicalBaseUrl}/og-image.jpg`}
        />
      </Helmet>

      <Header />

      <main>

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
              About {seoDefaults.siteName}
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-[#0F3D91] sm:text-5xl lg:text-6xl">
              Building Trust Through
              <br />
              Financial Excellence
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              {seoDefaults.siteName} is a modern accounting, taxation and compliance
              practice committed to helping individuals, professionals and
              businesses simplify financial management through reliable,
              transparent and technology-driven solutions.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
                Our Story
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#0F3D91]">
                Making Compliance Simple for Every Business
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                {seoDefaults.siteName} was established to make accounting, taxation and
                compliance simple, transparent and dependable.
              </p>

              <p className="mt-6 leading-8 text-gray-600">
                We partner with individuals, startups and businesses to help
                them stay compliant, make informed financial decisions and
                focus on sustainable growth.
              </p>

              <p className="mt-6 leading-8 text-gray-600">
                Our approach combines professional expertise with modern
                technology to deliver accurate, timely and practical solutions.
              </p>
            </div>

            <div className="rounded-3xl bg-[#0F3D91] p-8 text-white shadow-2xl sm:p-10">
              <h3 className="text-3xl font-bold">
                Why Clients Choose {seoDefaults.siteName}
              </h3>

              <div className="mt-8 space-y-5">
                <p>✓ Accurate financial reporting</p>
                <p>✓ Timely statutory compliance</p>
                <p>✓ Transparent communication</p>
                <p>✓ Long-term business partnership</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-10"
            >
              <Target className="text-[#0F3D91]" size={42} />

              <h2 className="mt-6 text-3xl font-bold text-[#0F3D91]">
                Our Mission
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                To simplify accounting, taxation and compliance through
                transparent communication, professional expertise and modern
                technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-10"
            >
              <Eye className="text-[#FF8C00]" size={42} />

              <h2 className="mt-6 text-3xl font-bold text-[#0F3D91]">
                Our Vision
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                To become a trusted accounting and taxation partner for
                businesses across India through dependable, modern services.
              </p>
            </motion.div>

          </div>
        </section>

        {/* Core Values */}
        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
                Core Values
              </span>

              <h2 className="mt-4 text-4xl font-bold text-[#0F3D91]">
                What Defines {seoDefaults.siteName}
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {["Transparency", "Accuracy", "Reliability"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-transparent bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#FF8C00] hover:shadow-2xl"
                >
                  <ShieldCheck className="text-[#0F3D91]" size={36} />

                  <h3 className="mt-6 text-2xl font-semibold text-[#0F3D91]">
                    {item}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    Every service we provide is guided by integrity,
                    professionalism and long-term client relationships.
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