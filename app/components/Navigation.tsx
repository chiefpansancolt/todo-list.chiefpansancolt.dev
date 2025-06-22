"use client";

import {
  DarkThemeToggle,
  Dropdown,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import {
  HiGlobeAlt,
  HiDownload,
  HiCollection,
  HiDocumentText,
} from "react-icons/hi";

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
  {
    code: "zh",
    name: "Chinese Simplified",
    nativeName: "简体中文",
    flag: "🇨🇳",
  },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", flag: "🇳🇱" },
];

export default function Navigation() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0],
  );

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    // TODO: Implement actual language switching logic
    console.log("Switching to language:", language.code);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      fluid
      rounded={false}
      className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/95"
    >
      <NavbarBrand href="/" className="space-x-3">
        <Image
          src="/icon.svg"
          className="h-8 w-8"
          alt="Todo List Logo"
          width={32}
          height={32}
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
          Todo List
        </span>
      </NavbarBrand>

      <div className="flex items-center space-x-3 md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label=""
          renderTrigger={() => (
            <div className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
              <HiGlobeAlt className="h-4 w-4" />
              <span className="hidden sm:inline">{currentLanguage.flag}</span>
              <span className="hidden md:inline">
                {currentLanguage.nativeName}
              </span>
            </div>
          )}
        >
          {languages.map((language) => (
            <DropdownItem
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className={`flex items-center space-x-3 ${
                currentLanguage.code === language.code
                  ? "bg-gray-100 dark:bg-gray-700"
                  : ""
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">
                  {language.nativeName}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {language.name}
                </span>
              </div>
            </DropdownItem>
          ))}
        </Dropdown>

        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink
          href="/#features"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("features");
          }}
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
        >
          <HiCollection className="h-4 w-4" />
          <span>Features</span>
        </NavbarLink>

        <NavbarLink
          href="/#downloads"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("downloads");
          }}
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
        >
          <HiDownload className="h-4 w-4" />
          <span>Downloads</span>
        </NavbarLink>

        <NavbarLink
          href="/changelog"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("changelog");
          }}
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
        >
          <HiDocumentText className="h-4 w-4" />
          <span>Changelog</span>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
