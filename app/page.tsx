import Navigation from "@/comps/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-24">
          <div className="absolute inset-0 size-full">
            <div className="relative h-full w-full select-none">
              <Image
                className="absolute right-0 min-w-dvh dark:hidden"
                alt="Pattern Light"
                src="/pattern-light.svg"
                width="803"
                height="774"
              />
              <Image
                className="absolute right-0 hidden min-w-dvh dark:block"
                alt="Pattern Dark"
                src="/pattern-dark.svg"
                width="803"
                height="775"
              />
            </div>
          </div>

          <div className="relative z-10 max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Task Management Made Simple
            </h1>
            <p className="mb-8 text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-300">
              Today todo list trackers are either too simple or too complicated.
              This app takes those two ends and finds a middle ground where you
              have flexibility with the combo of simple to help make managing
              tasks simple and easy again.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                Download for Mac
              </button>
              <button className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                Download for Windows
              </button>
              <button className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                Download for Linux
              </button>
            </div>
          </div>
        </section>

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
