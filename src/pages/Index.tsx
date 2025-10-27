import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Events } from "@/components/Events";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
