import Navigation from "@/comps/Navigation";
import Hero from "@/comps/Hero";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />

      <main className="bg-white dark:bg-gray-900">
        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Powerful Features
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Everything you need to manage your tasks efficiently
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Feature placeholders - will be expanded later */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  🎯 Task Management
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Create, edit, and organize your tasks with ease
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  🏷️ Organization
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Categories, priorities, and due dates to keep you organized
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  🎨 User Experience
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Beautiful interface with dark mode and smooth animations
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  💾 Data Management
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Import, export, and backup your data securely
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section id="downloads" className="bg-gray-50 py-24 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Download for Your Platform
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Available for Mac, Windows, and Linux
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {/* Platform download cards - will be expanded later */}
              <div className="rounded-lg bg-white p-6 text-center shadow-lg dark:bg-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  macOS
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  macOS 10.15 or later
                </p>
                <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Download
                </button>
              </div>

              <div className="rounded-lg bg-white p-6 text-center shadow-lg dark:bg-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Windows
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Windows 10 or later
                </p>
                <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Download
                </button>
              </div>

              <div className="rounded-lg bg-white p-6 text-center shadow-lg dark:bg-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Linux
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Ubuntu 18.04+ or equivalent
                </p>
                <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Download
                </button>
              </div>
            </div>
          </div>
        </section>

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
