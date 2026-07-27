import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import WhyAuditPulse from "../components/home/WhyAuditPulse";
import Services from "../components/home/Services";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyAuditPulse />
      <Services />
    </>
  );
}

export default Home;