"use client";

import { FaDiscord } from "react-icons/fa6";
import { HiQuestionMarkCircle } from "react-icons/hi";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "technical" | "data" | "support";
}

const faqData: FAQItem[] = [
  {
    id: "free-app",
    question: "Is the Todo List app completely free?",
    answer:
      "Yes! The Todo List app is completely free to download and use. There are no hidden fees, subscriptions, or premium features. We believe task management should be accessible to everyone.",
    category: "general",
  },
  {
    id: "data-storage",
    question: "Where is my data stored and is it private?",
    answer:
      "All your data is stored locally on your device using secure file-based storage. We don't collect, store, or have access to any of your personal information or tasks. Your privacy is completely protected since everything stays on your computer.",
    category: "data",
  },
  {
    id: "platform-differences",
    question:
      "Are there any differences between the Mac, Windows, and Linux versions?",
    answer:
      "No, all platform versions have identical features and functionality. The app is built to provide a consistent experience across all operating systems, with only minor visual adjustments to match each platform's design guidelines.",
    category: "technical",
  },
  {
    id: "offline-functionality",
    question: "Does the app work offline?",
    answer:
      "Absolutely! The Todo List app is designed to work completely offline. Since all data is stored locally, you can create, edit, and manage your tasks without any internet connection. No cloud dependency means no interruptions to your productivity.",
    category: "technical",
  },
  {
    id: "data-backup",
    question: "How can I backup or sync my data between devices?",
    answer:
      "You can export your data as JSON files for backup purposes. While the app doesn't include automatic cloud sync, you can manually transfer your exported data between devices or store backups in your preferred cloud storage service.",
    category: "data",
  },
  {
    id: "system-requirements",
    question: "What are the minimum system requirements?",
    answer:
      "Mac: macOS 15 or later (Apple Silicon support). Windows: Windows 10 or later (64-bit). Linux: Ubuntu 18.04+ or equivalent distributions. The app is lightweight and should run smoothly on most modern systems.",
    category: "technical",
  },
  {
    id: "updates",
    question: "How do I get updates for the app?",
    answer:
      "New versions are released on our GitHub releases page. Monitor our Discord Announcment channel for notifications of new releases. Presently we do not support Auto-updates, so you'll need to manually download and install new versions.",
    category: "support",
  },
  {
    id: "vs-other-apps",
    question: "How is this different from other todo apps?",
    answer:
      "Our app fills the gap between overly simple and unnecessarily complex task managers. We provide essential features like categories, priorities, due dates, and keyboard shortcuts without overwhelming you with features you don't need. It's the perfect middle ground for productive task management.",
    category: "general",
  },
  {
    id: "data-import",
    question: "Can I import tasks from other todo apps?",
    answer:
      "Currently, you can import data from JSON files (including previous exports from our app). Depending on feedback and request volume, we may consider adding support for importing from other popular todo apps in the future.",
    category: "data",
  },
  {
    id: "multiple-languages",
    question: "How do I change the app language?",
    answer:
      "The app supports 10 languages that you can switch between instantly without restarting. Look for the language/globe icon in the app settings, and your preference will be saved automatically for future use.",
    category: "general",
  },
  {
    id: "keyboard-shortcuts",
    question: "Are keyboard shortcuts customizable?",
    answer:
      "Currently, the app comes with a comprehensive set of pre-defined keyboard shortcuts optimized for productivity. Custom shortcut configuration is not planned but may be based on user feedback.",
    category: "technical",
  },
  {
    id: "support-contact",
    question: "How can I get help or report issues?",
    answer:
      "For support, bug reports, or feature requests, please visit our discord server where you can report bugs or join discussions. We actively monitor and respond to all inquiries.",
    category: "support",
  },
];

export default function FAQ() {
  const leftColumnFAQs = faqData.filter((_, index) => index % 2 === 0);
  const rightColumnFAQs = faqData.filter((_, index) => index % 2 === 1);

  return (
    <section id="faq" className="bg-white py-24 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
              <HiQuestionMarkCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about the Todo List Desktop app. Can't
            find what you're looking for? Feel free to reach out to our Discord
            Server.
          </p>
        </div>

        <div className="grid border-t border-gray-200 pt-8 text-left md:grid-cols-2 md:gap-16 dark:border-gray-700">
          <div>
            {leftColumnFAQs.map((faq) => (
              <div key={faq.id} className="mb-10">
                <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {faq.question}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div>
            {rightColumnFAQs.map((faq) => (
              <div key={faq.id} className="mb-10">
                <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {faq.question}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-lg p-8 text-center">
          <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Still Have Questions?
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            We're here to help! Reach out on our Discord Server for a community
            to help.
          </p>
          <div className="flex flex-col justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="https://discord.gg/DMU3rRUh3A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Report a Bug
            </a>
            <a
              href="https://discord.gg/pPbe6wquEA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <FaDiscord className="mr-2 h-5 w-5" />
              Join Discussion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
