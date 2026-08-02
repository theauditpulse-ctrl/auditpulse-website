import { Download } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { seoDefaults } from "../data/company";
import {
  resourceCategories,
  featuredArticles,
  resourcesIntro,
  downloadCenter,
} from "../data/resources";

function Resources() {
  return (
    <>
      <Helmet>
        <title>Resources | Tax, GST & Accounting Guides | {seoDefaults.siteName}</title>

        <meta
          name="description"
          content={`Explore ${seoDefaults.siteName}'s knowledge centre featuring tax guides, GST resources, accounting insights, ROC compliance articles and practical business advisory content.`}
        />

        <meta
          name="keywords"
          content={`Income Tax Guide, GST Guide, Accounting Resources, ROC Compliance, Business Advisory, Tax Articles, ${seoDefaults.siteName}`}
        />

        <link
          rel="canonical"
          href={`${seoDefaults.canonicalBaseUrl}/resources`}
        />

        <meta
          property="og:title"
          content={`Resources & Insights | ${seoDefaults.siteName}`}
        />

        <meta
          property="og:description"
          content={`Stay informed with practical accounting, taxation, GST and compliance resources from ${seoDefaults.siteName}.`}
        />

        <meta
          property="og:url"
          content={`${seoDefaults.canonicalBaseUrl}/resources`}
        />

        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${seoDefaults.canonicalBaseUrl}/og-image.jpg`} />
      </Helmet>

      <Header />

      <main>
        <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="font-semibold uppercase tracking-widest text-[#FF8C00]">
              Knowledge Centre
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl text-[#0F3D91] lg:text-6xl">
              {resourcesIntro.title}
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              {resourcesIntro.description}
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-4xl font-bold text-[#0F3D91]">
              Featured Categories
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {resourceCategories.map((category) => {
                const Icon = category.icon;

                return (
                  <div
                    key={category.title}
                    className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8C00] hover:shadow-xl"
                  >
                    <Icon className="text-[#0F3D91]" size={38} />

                    <h3 className="mt-5 text-2xl font-semibold text-[#0F3D91]">
                      {category.title}
                    </h3>

                    <p className="mt-3 text-gray-600">{category.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-center text-4xl font-bold text-[#0F3D91]">
              Featured Guides
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {featuredArticles.map((article) => (
                <div
                  key={article}
                  className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg"
                >
                  <h3 className="font-semibold text-[#0F3D91]">{article}</h3>

                  <p className="mt-2 text-gray-600">
                    Coming soon. This guide will provide practical information
                    and compliance tips.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <Download className="mx-auto text-[#FF8C00]" size={48} />

            <h2 className="mt-6 text-4xl font-bold text-[#0F3D91]">
              {downloadCenter.title}
            </h2>

            <p className="mt-4 text-gray-600">
              {downloadCenter.description}
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-block rounded-xl bg-[#0F3D91] px-8 py-4 font-semibold text-white transition hover:bg-blue-900"
            >
              {downloadCenter.ctaLabel}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Resources;