"use client";

import { HiGlobeAlt, HiCheckCircle } from "react-icons/hi";
import { useState } from "react";

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  status?: "available" | "coming-soon";
}

const languages: Language[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    status: "available",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    status: "available",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    status: "available",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    status: "available",
  },
  {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    flag: "🇵🇹",
    status: "available",
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    status: "available",
  },
  {
    code: "zh",
    name: "Chinese Simplified",
    nativeName: "简体中文",
    flag: "🇨🇳",
    status: "available",
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    flag: "🇰🇷",
    status: "available",
  },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "🇮🇹",
    status: "available",
  },
  {
    code: "nl",
    name: "Dutch",
    nativeName: "Nederlands",
    flag: "🇳🇱",
    status: "available",
  },
];

export default function SupportedLanguages() {
  const [hoveredLanguage, setHoveredLanguage] = useState<string | null>(null);

  return (
    <section id="languages" className="bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
              <HiGlobeAlt className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Language Support
          </h2>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Use the Todo List app in your preferred language. We support 10
            languages with localized date formats and cultural preferences.
          </p>
          <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
            <HiCheckCircle className="mr-2 h-4 w-4" />
            Switch languages instantly without restart
          </div>
        </div>

        {/* Language Grid */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {languages.map((language) => (
            <div
              key={language.code}
              className={`group relative transform cursor-pointer rounded-xl border-2 bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800 ${
                hoveredLanguage === language.code
                  ? "border-blue-500 dark:border-blue-400"
                  : "border-gray-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-blue-500"
              }`}
              onMouseEnter={() => setHoveredLanguage(language.code)}
              onMouseLeave={() => setHoveredLanguage(null)}
            >
              {/* Flag */}
              <div className="mb-4 flex justify-center">
                <div className="transform text-4xl transition-transform duration-300 group-hover:scale-110">
                  {language.flag}
                </div>
              </div>

              {/* Language Names */}
              <div className="text-center">
                <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
                  {language.nativeName}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {language.name}
                </p>
              </div>

              {/* Status Badge */}
              <div className="mt-4 flex justify-center">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                  <HiCheckCircle className="mr-1 h-3 w-3" />
                  Available
                </span>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-400/10 dark:to-indigo-400/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
