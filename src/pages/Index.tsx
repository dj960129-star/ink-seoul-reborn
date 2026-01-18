import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Styles from "@/components/Styles";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Address from "@/components/Address";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <News />
        <Styles />
        <Contact />
        <FAQ />
        <Address />
      </main>
      <Footer />
    </div>
  );
};

export default Index;