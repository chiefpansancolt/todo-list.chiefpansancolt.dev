import Navigation from "@/comps/Navigation";
import Hero from "@/comps/Hero";
import Features from "@/comps/Features";
import KeyboardShortcuts from "@/comps/KeyboardShortcuts";
import SupportedLanguages from "@/comps/SupportedLanguages";
import Downloads from "@/comps/Downloads";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />

      <main className="bg-white dark:bg-gray-900">
        <Features />
        <KeyboardShortcuts />
        <SupportedLanguages />
        <Downloads />

        {/* Changelog Section */}
        <section id="changelog" className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Changelog
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Latest updates and improvements
              </p>
            </div>

            <div className="mt-12">
              {/* Changelog entries - will be expanded later */}
              <div className="border-l-2 border-blue-600 pl-6">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    v1.0.0
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Initial Release
                  </p>
                  <ul className="mt-2 text-gray-600 dark:text-gray-300">
                    <li>• Task creation and management</li>
                    <li>• Category organization</li>
                    <li>• Dark mode support</li>
                    <li>• Multi-language support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
