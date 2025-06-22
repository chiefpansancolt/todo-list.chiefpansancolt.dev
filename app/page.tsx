import Navigation from "@/comps/Navigation";
import Hero from "@/comps/Hero";
import Features from "@/comps/Features";
import KeyboardShortcuts from "@/comps/KeyboardShortcuts";
import SupportedLanguages from "@/comps/SupportedLanguages";
import Downloads from "@/comps/Downloads";
import FAQ from "@/comps/FAQ";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />

      <main className="bg-white dark:bg-gray-900">
        <Features />
        <SupportedLanguages />
        <KeyboardShortcuts />
        <Downloads />
        <FAQ />
      </main>
    </>
  );
}
