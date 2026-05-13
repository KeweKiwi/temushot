import { Benefits } from "@/components/Benefits";
import { BlogPreview } from "@/components/BlogPreview";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowToDrink } from "@/components/HowToDrink";
import { InteractiveQuiz } from "@/components/InteractiveQuiz";
import { Lifestyle } from "@/components/Lifestyle";
import { Navbar } from "@/components/Navbar";
import { ProductHighlight } from "@/components/ProductHighlight";
import { Story } from "@/components/Story";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <ProductHighlight />
        <Benefits />
        <HowToDrink />
        <Lifestyle />
        <InteractiveQuiz />
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
