import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import WhyAuditPulse from "../components/home/WhyAuditPulse";
import Services from "../components/home/Services";
import WhoWeHelp from "../components/home/WhoWeHelp";
import Process from "../components/home/Process";
import ContactCTA from "../components/home/ContactCTA";

function Home() {
  return (
    <>
      <Header />

      <Hero />

      <WhyAuditPulse />

      <Services />

      <WhoWeHelp />

      <Process />

      <ContactCTA />

      <Footer />
    </>
  );
}

export default Home;