"use client";

import {
  Dropdown,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiCollection } from "react-icons/hi";
import {
  FaKeyboard,
  FaQuestion,
  FaDownload,
  FaFileCode,
  FaGlobe,
} from "react-icons/fa6";

import type { Language } from "@/types/index";
import { languages } from "@/constants/platforms";

export default function Navigation() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0],
  );
  const pathname = usePathname();

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

  const isHomePage = pathname === "/";

  const navigationItems = [
    {
      href: "/#features",
      sectionId: "features",
      icon: HiCollection,
      label: "Features",
    },
    {
      href: "/#shortcuts",
      sectionId: "shortcuts",
      icon: FaKeyboard,
      label: "Shortcuts",
    },
    {
      href: "/#downloads",
      sectionId: "downloads",
      icon: FaDownload,
      label: "Downloads",
    },
    {
      href: "/#faq",
      sectionId: "faq",
      icon: FaQuestion,
      label: "FAQ",
    },
    {
      href: "/changelog",
      sectionId: null,
      icon: FaFileCode,
      label: "Changelog",
    },
  ];

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
        {/* Language Switcher - Commented out for now */}
        {/* <Dropdown
          arrowIcon={false}
          inline
          label=""
          renderTrigger={() => (
            <div className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
              <FaGlobe className="h-4 w-4" />
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
        </Dropdown> */}

        <NavbarToggle className="cursor-pointer" />
      </div>

      <NavbarCollapse>
        {navigationItems.map((item) => {
          const IconComponent = item.icon;

          return (
            <NavbarLink
              key={item.label}
              href={item.href}
              onClick={
                item.sectionId && isHomePage
                  ? (e) => {
                      e.preventDefault();
                      scrollToSection(item.sectionId);
                    }
                  : undefined
              }
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <IconComponent className="h-4 w-4" />
              <span>{item.label}</span>
            </NavbarLink>
          );
        })}
      </NavbarCollapse>
    </Navbar>
  );
}
