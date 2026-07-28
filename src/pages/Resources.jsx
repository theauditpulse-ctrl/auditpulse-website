import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";

function Resources() {
  const articles = [
    {
      title: "Income Tax Return Filing Guide",
      category: "Income Tax",
      date: "Coming Soon",
    },
    {
      title: "GST Return Filing Checklist",
      category: "GST",
      date: "Coming Soon",
    },
    {
      title: "Company Registration Process in India",
      category: "Business",
      date: "Coming Soon",
    },
    {
      title: "Important Compliance Due Dates",
      category: "Compliance",
      date: "Coming Soon",
    },
    {
      title: "Tax Saving Tips for Salaried Employees",
      category: "Income Tax",
      date: "Coming Soon",
    },
    {
      title: "Frequently Asked Questions",
      category: "Knowledge Base",
      date: "Coming Soon",
    },
  ];

  return (
    <>
      <Header />

      <main>

        {/* Hero */}

        <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">

            <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
              Resources
            </span>

            <h1 className="mt-4 text-5xl font-bold text-[#0F3D91] lg:text-6xl">
              Knowledge Centre
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              Practical articles, tax updates, compliance guides and financial
              insights to help you stay informed.
            </p>

          </div>
        </section>

        {/* Articles */}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {articles.map((article) => (
                <div
                  key={article.title}
                  className="rounded-2xl border bg-white p-8 shadow-lg transition hover:-translate-y-2"
                >
                  <BookOpen
                    size={32}
                    className="text-[#0F3D91]"
                  />

                  <span className="mt-6 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-[#FF8C00]">
                    {article.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-semibold text-[#0F3D91]">
                    {article.title}
                  </h3>

                  <div className="mt-5 flex items-center gap-2 text-gray-500">
                    <Calendar size={16} />
                    {article.date}
                  </div>

                  <button className="mt-8 flex items-center gap-2 font-semibold text-[#FF8C00]">
                    Read Article
                    <ArrowRight size={18} />
                  </button>
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

export default Resources;