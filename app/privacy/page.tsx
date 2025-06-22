import Navigation from "@/comps/Navigation";
import Footer from "@/comps/Footer";
import { HiShieldCheck, HiDatabase, HiLockClosed } from "react-icons/hi";

export const metadata = {
  title: "Privacy Policy - Todo List Desktop App",
  description:
    "Privacy policy for the Todo List desktop application. Learn how we protect your data with local storage and zero data collection.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />

      <main className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-600 shadow-lg">
                <HiShieldCheck className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Your privacy is our priority. Learn how we protect your data.
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Last updated: June 21, 2025
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-green-50 p-6 text-center dark:bg-green-900/20">
              <HiDatabase className="mx-auto mb-3 h-8 w-8 text-green-600 dark:text-green-400" />
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Local Storage Only
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                All your data stays on your device. We never access or store
                your information.
              </p>
            </div>

            <div className="rounded-lg bg-blue-50 p-6 text-center dark:bg-blue-900/20">
              <HiLockClosed className="mx-auto mb-3 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                No Data Collection
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We don't collect, track, or analyze any personal information.
              </p>
            </div>

            <div className="rounded-lg bg-purple-50 p-6 text-center dark:bg-purple-900/20">
              <HiShieldCheck className="mx-auto mb-3 h-8 w-8 text-purple-600 dark:text-purple-400" />
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Open Source
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Our code is transparent and available for review on GitHub.
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="mb-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                Summary
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                The Todo List desktop application is designed with privacy as a
                core principle. We do not collect, store, transmit, or have
                access to any of your personal data. All information you enter
                into the application remains locally on your device.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Information We Don't Collect
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Unlike many applications, we explicitly do NOT collect:
              </p>
              <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Personal information (names, email addresses, phone numbers)
                </li>
                <li>Task content, categories, or any todo list data</li>
                <li>Device information or system specifications</li>
                <li>IP addresses or location data</li>
                <li>Crash reports or error logs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                How Your Data is Stored
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                All data created within the Todo List application is stored
                locally on your device using:
              </p>
              <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Local file storage:</strong> Your tasks, categories,
                  and settings are saved in local files on your computer
                </li>
                <li>
                  <strong>No cloud synchronization:</strong> Data never leaves
                  your device unless you explicitly export it
                </li>
                <li>
                  <strong>User-controlled backups:</strong> You can export your
                  data as JSON or CSV files for backup purposes
                </li>
                <li>
                  <strong>Complete ownership:</strong> You have full control
                  over your data and can delete it at any time
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Network Connections
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                The Todo List application operates completely offline and does
                not make any network connections for:
              </p>
              <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>Data synchronization or backup</li>
                <li>Advertisement or tracking</li>
                <li>Software updates (manual updates only)</li>
                <li>License verification or activation</li>
              </ul>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                The only network activity occurs when you manually check for
                updates through our website or GitHub releases page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Third-Party Services
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                The Todo List application does not integrate with or send data
                to any third-party services, including:
              </p>
              <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>Cloud storage providers</li>
                <li>Analytics services</li>
                <li>Advertising networks</li>
                <li>Social media platforms</li>
                <li>Error tracking services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Data Security
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Since all data remains on your device:
              </p>
              <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Data security depends on your device's security measures
                </li>
                <li>
                  We recommend using device encryption and strong passwords
                </li>
                <li>Regular backups of your exported data are advised</li>
                <li>No data transmission means no interception risks</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Updates to This Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Any updates to this privacy policy will be posted on our website
                and GitHub repository. Given the nature of our application (no
                data collection), changes to this policy are expected to be
                minimal and will always maintain our commitment to user privacy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Open Source Transparency
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our application is open source, meaning you can review our code
                to verify our privacy claims. The source code is available at{" "}
                <a
                  href="https://github.com/chiefpansancolt/todo-list"
                  className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/chiefpansancolt/todo-list
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Contact Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have questions about this privacy policy, please reach
                out through:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  GitHub Issues:{" "}
                  <a
                    href="https://github.com/chiefpansancolt/todo-list/issues"
                    className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Report an issue
                  </a>
                </li>
                <li>
                  Discord Server:{" "}
                  <a
                    href="https://discord.gg/DMU3rRUh3A"
                    className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join our community
                  </a>
                </li>
                <li>
                  Developer Website:{" "}
                  <a
                    href="https://chiefpansancolt.dev"
                    className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    chiefpansancolt.dev
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
