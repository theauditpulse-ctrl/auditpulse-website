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