"use client";

import { FaDiscord } from "react-icons/fa6";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { faqData } from "@/constants/data";

export default function FAQ() {
  const leftColumnFAQs = faqData.filter((_, index) => index % 2 === 0);
  const rightColumnFAQs = faqData.filter((_, index) => index % 2 === 1);

  const QuestionIcon = () => (
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
  );

  const FAQColumn = ({ faqs }: { faqs: typeof faqData }) => (
    <div>
      {faqs.map((faq) => (
        <div key={faq.id} className="mb-10">
          <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
            <QuestionIcon />
            {faq.question}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
        </div>
      ))}
    </div>
  );

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
            Everything you need to know about the Todo List Desktop app.
            Can&apos;t find what you&apos;re looking for? Feel free to reach out
            to our Discord Server.
          </p>
        </div>

        <div className="grid border-t border-gray-200 pt-8 text-left md:grid-cols-2 md:gap-16 dark:border-gray-700">
          <FAQColumn faqs={leftColumnFAQs} />
          <FAQColumn faqs={rightColumnFAQs} />
        </div>

        <div className="mt-12 rounded-lg p-8 text-center">
          <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Still Have Questions?
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            We&apos;re here to help! Reach out on our Discord Server for a
            community to help.
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
