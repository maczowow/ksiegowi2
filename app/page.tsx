import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="why-choose-us">
        <WhyChooseUs />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}