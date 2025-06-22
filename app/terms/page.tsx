import { HiDocumentText, HiGift, HiCode } from "react-icons/hi";

import PageLayout from "@/comps/common/PageLayout";
import PageHeader from "@/comps/common/PageHeader";
import { InfoCards } from "@/comps/common/InfoCards";
import { ExternalLink } from "@/comps/common/ExternalLink";

export const metadata = {
  title: "Terms of Service - Todo List Desktop App",
  description:
    "Terms of service for the Todo List desktop application. Learn about your rights and responsibilities when using our free, open-source software.",
};

const termsCards = [
  {
    icon: HiGift,
    iconColor: "text-green-600 dark:text-green-400",
    title: "Completely Free",
    description:
      "No cost, no subscriptions, no hidden fees. Use it freely forever.",
  },
  {
    icon: HiCode,
    iconColor: "text-blue-600 dark:text-blue-400",
    title: "Open Source",
    description:
      "Licensed under MIT. Modify, distribute, and contribute freely.",
  },
  {
    icon: HiDocumentText,
    iconColor: "text-purple-600 dark:text-purple-400",
    title: "Simple Terms",
    description:
      "No legal jargon. Clear, straightforward terms you can understand.",
  },
];

export default function TermsOfService() {
  return (
    <PageLayout>
      <PageHeader
        icon={HiDocumentText}
        iconColor="from-blue-600 to-indigo-600"
        title="Terms of Service"
        description="Simple terms for a simple app. Your rights and our commitments."
        lastUpdated="June 21, 2025"
      />

      <InfoCards cards={termsCards} />

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="mb-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
          <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
            Agreement Overview
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            By downloading and using the Todo List desktop application, you
            agree to these terms. These terms are designed to be fair, simple,
            and protect both your rights as a user and our ability to continue
            developing this free, open-source software.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            License and Usage Rights
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            The Todo List application is licensed under the MIT License, which
            grants you extensive rights:
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Use:</strong> Install and use the software on any number
              of devices
            </li>
            <li>
              <strong>Modify:</strong> Change the source code to suit your needs
            </li>
            <li>
              <strong>Distribute:</strong> Share the original or modified
              software with others
            </li>
            <li>
              <strong>Commercial Use:</strong> Use the software for commercial
              purposes without restriction
            </li>
            <li>
              <strong>Private Use:</strong> Use the software for personal or
              private purposes
            </li>
          </ul>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            The full MIT License text is available in our{" "}
            <ExternalLink href="https://github.com/chiefpansancolt/todo-list/blob/main/LICENSE">
              GitHub repository
            </ExternalLink>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            What's Free and What's Not
          </h2>
          <div className="mb-4 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h3 className="mb-2 font-semibold text-green-800 dark:text-green-200">
              ✅ Always Free:
            </h3>
            <ul className="list-inside list-disc space-y-1 text-green-700 dark:text-green-300">
              <li>The complete Todo List desktop application</li>
              <li>All current and future features</li>
              <li>Software updates and bug fixes</li>
              <li>Community support through Discord</li>
              <li>Access to source code</li>
            </ul>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            There are no premium features, subscriptions, or paid versions. The
            entire application is and will remain completely free.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Acceptable Use
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            While we grant broad usage rights, we ask that you:
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Use the software in a manner that complies with applicable laws
            </li>
            <li>
              Do not attempt to reverse engineer the software for malicious
              purposes
            </li>
            <li>
              Do not redistribute the software with malware or harmful
              modifications
            </li>
            <li>
              Respect the open-source nature of the project when making
              modifications
            </li>
          </ul>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            We trust our users to use the software responsibly and in good
            faith.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Data Ownership and Responsibility
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            You retain complete ownership of your data:
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Your data stays yours:</strong> All tasks, categories, and
              settings belong to you
            </li>
            <li>
              <strong>Local storage only:</strong> We never access, store, or
              transmit your data
            </li>
            <li>
              <strong>Backup responsibility:</strong> You are responsible for
              backing up your data
            </li>
            <li>
              <strong>Data portability:</strong> Export your data anytime in
              JSON or CSV format
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Software Warranty and Disclaimers
          </h2>
          <div className="mb-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Important:</strong> This software is provided "as is"
              without warranties of any kind.
            </p>
          </div>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            While we strive to create reliable software:
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              We cannot guarantee the software will be error-free or
              uninterrupted
            </li>
            <li>
              We are not responsible for any data loss (please backup your data)
            </li>
            <li>
              The software is provided without warranty of fitness for any
              particular purpose
            </li>
            <li>Your use of the software is at your own risk</li>
          </ul>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            This is standard language for free software and helps us continue
            providing the app at no cost.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Limitation of Liability
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            As free software, we cannot be held liable for any damages arising
            from the use of the Todo List application. This includes but is not
            limited to data loss, system damage, or business interruption. By
            using the software, you acknowledge that you understand and accept
            this limitation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Updates and Changes
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Regarding software and terms updates:
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Software updates:</strong> We may release updates to
              improve functionality and fix bugs
            </li>
            <li>
              <strong>No forced updates:</strong> Updates are always optional
              and manually installed
            </li>
            <li>
              <strong>Terms changes:</strong> We may update these terms and will
              notify users through our website
            </li>
            <li>
              <strong>Continued use:</strong> Using updated versions constitutes
              acceptance of any new terms
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Community and Support
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            We provide community support through:
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Discord Server:</strong>{" "}
              <ExternalLink href="https://discord.gg/DMU3rRUh3A">
                Join our community
              </ExternalLink>
            </li>
            <li>
              <strong>GitHub Issues:</strong>{" "}
              <ExternalLink href="https://github.com/chiefpansancolt/todo-list/issues">
                Report bugs or request features
              </ExternalLink>
            </li>
          </ul>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Support is provided on a best-effort basis by volunteers and the
            development team.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Termination
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            You may stop using the Todo List application at any time by simply
            uninstalling it from your device. These terms will remain in effect
            for any copies of the software you continue to use or distribute.
            The open-source license grants you permanent rights that cannot be
            revoked.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Governing Law
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            These terms are governed by the laws of the jurisdiction where the
            software is developed. Any disputes will be resolved through
            appropriate legal channels in that jurisdiction. However, given the
            free and open-source nature of this software, we expect such
            situations to be extremely rare.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Contact and Questions
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            If you have questions about these terms, please contact us through:
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>GitHub:</strong>{" "}
              <ExternalLink href="https://github.com/chiefpansancolt/todo-list">
                Project repository
              </ExternalLink>
            </li>
            <li>
              <strong>Discord:</strong>{" "}
              <ExternalLink href="https://discord.gg/DMU3rRUh3A">
                Community discussion
              </ExternalLink>
            </li>
            <li>
              <strong>Developer:</strong>{" "}
              <ExternalLink href="https://chiefpansancolt.dev">
                chiefpansancolt.dev
              </ExternalLink>
            </li>
          </ul>
        </section>

        <div className="mt-8 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
          <h3 className="mb-2 text-lg font-semibold text-blue-900 dark:text-blue-100">
            Thank You for Using Todo List
          </h3>
          <p className="text-blue-800 dark:text-blue-200">
            We appreciate you choosing our free, open-source Todo List
            application. These terms are designed to be fair and protect
            everyone involved while keeping the focus on what matters most:
            helping you manage your tasks effectively.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
