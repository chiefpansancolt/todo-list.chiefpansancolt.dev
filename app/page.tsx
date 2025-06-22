import Navigation from "@/comps/Navigation";
import Hero from "@/comps/Hero";
import Features from "@/comps/Features";
import KeyboardShortcuts from "@/comps/KeyboardShortcuts";
import SupportedLanguages from "@/comps/SupportedLanguages";
import Downloads from "@/comps/Downloads";
import FAQ from "@/comps/FAQ";
import Footer from "@/comps/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />

      <main className="bg-gray-900">
        <Features />
        <SupportedLanguages />
        <KeyboardShortcuts />
        <Downloads />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
