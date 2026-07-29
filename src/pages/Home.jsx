import { Helmet } from "react-helmet-async";

import Header from "../components/layout/Header";
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
          Audit Pulse | Accounting, Taxation & Compliance Services in India
        </title>

        <meta
          name="description"
          content="Audit Pulse provides professional accounting, taxation, GST, bookkeeping, ROC compliance and business advisory services for individuals, startups and businesses across India."
        />

        <meta
          name="keywords"
          content="Accounting Services, Income Tax Filing, GST Registration, Bookkeeping, ROC Compliance, Business Registration, Chartered Accountant Chennai"
        />

        <link
          rel="canonical"
          href="https://www.theauditpulse.com/"
        />

        <meta
          property="og:title"
          content="Audit Pulse | Accounting, Taxation & Compliance Services"
        />

        <meta
          property="og:description"
          content="Professional accounting, taxation, GST, bookkeeping and compliance services across India."
        />

        <meta
          property="og:url"
          content="https://www.theauditpulse.com/"
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