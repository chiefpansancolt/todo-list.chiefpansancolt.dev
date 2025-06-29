"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa6";

import { getCurrentYear } from "@/utils/format";
import { getRepositoryUrl } from "@/utils/github";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2">
            <Link
              href="/"
              className="mb-2 flex items-center text-2xl font-semibold text-gray-900 sm:mb-0 dark:text-white"
            >
              <Image
                src="/logo.svg"
                className="mr-2 h-8 w-8"
                alt="Todo List Logo"
                width={32}
                height={32}
              />
              Todo List
            </Link>
            <p className="my-4 font-light text-gray-500 dark:text-gray-400">
              A powerful yet simple todo list app for Mac, Windows, and Linux.
              Find the perfect middle ground between simple and complex task
              management.
            </p>
            <ul className="mt-5 flex space-x-6">
              <li>
                <a
                  href="https://twitter.com/chiefpansancolt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  aria-label="Follow on Twitter"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href={getRepositoryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  aria-label="View on GitHub"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/DMU3rRUh3A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  aria-label="Join Discord Server"
                >
                  <FaDiscord className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:mx-auto">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              App
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link href="/#features" className="hover:underline">
                  Features
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/#shortcuts" className="hover:underline">
                  Shortcuts
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/#languages" className="hover:underline">
                  Languages
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/changelog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:mx-auto">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help Center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://discord.gg/DMU3rRUh3ApPbe6wquEA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://discord.gg/DMU3rRUh3A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Report Bugs
                </a>
              </li>
              <li className="mb-4">
                <Link href="/#faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li className="mb-4">
                <a
                  href="https://chiefpansancolt.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Developer
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:mx-auto">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://github.com/chiefpansancolt/todo-list/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  License
                </a>
              </li>
              <li className="mb-4">
                <a
                  href={getRepositoryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Source Code
                </a>
              </li>
              <li className="mb-4">
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:mx-auto">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link href="/#downloads" className="hover:underline">
                  macOS
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/#downloads" className="hover:underline">
                  Windows
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/#downloads" className="hover:underline">
                  Linux
                </Link>
              </li>
              <li className="mb-4">
                <a
                  href="https://github.com/chiefpansancolt/todo-list/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  All Platforms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <span className="block text-sm text-gray-500 dark:text-gray-400">
            © {getCurrentYear()}{" "}
            <a
              href="https://chiefpansancolt.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              chiefpansancolt
            </a>
            . All Rights Reserved.
          </span>

          <div className="mt-4 flex space-x-6 sm:mt-0">
            <a
              href="https://twitter.com/chiefpansancolt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="Follow on Twitter"
            >
              <FaTwitter className="h-4 w-4" />
            </a>
            <a
              href={getRepositoryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="View on GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="https://discord.gg/pPbe6wquEA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="Join Discord Server"
            >
              <FaDiscord className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
