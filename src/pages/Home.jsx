import { Helmet } from "react-helmet-async";

import Header from "../components/layout/Header";
import { seoDefaults } from "../data/company";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import About from "../components/home/About";
import WhyAuditPulse from "../components/home/WhyAuditPulse";
import Services from "../components/home/Services";
import WhoWeHelp from "../components/home/WhoWeHelp";
import Process from "../components/home/Process";
import FAQ from "../components/home/FAQ";
import ContactCTA from "../components/home/ContactCTA";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          {seoDefaults.defaultTitle}
        </title>

        <meta
          name="description"
          content={seoDefaults.defaultDescription}
        />

        <meta
          name="keywords"
          content={seoDefaults.defaultKeywords}
        />

        <link
          rel="canonical"
          href={`${seoDefaults.canonicalBaseUrl}/`}
        />

        <meta
          property="og:title"
          content={`${seoDefaults.siteName} | Accounting, Taxation & Compliance Services`}
        />

        <meta
          property="og:description"
          content={seoDefaults.defaultDescription}
        />

        <meta
          property="og:url"
          content={`${seoDefaults.canonicalBaseUrl}/`}
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <Header />

      <main>
        <Hero />

        <About />

        <WhyAuditPulse />

        <Services />

        <WhoWeHelp />

        <Process />

        <FAQ />

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}

export default Home;