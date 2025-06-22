"use client";

import { Button, Dropdown, DropdownItem, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaDownload, FaChevronDown, FaGithub } from "react-icons/fa6";
import { HiDownload, HiExternalLink } from "react-icons/hi";

import type { Platform, LinuxFormat, GitHubRelease } from "@/types/index";
import { platformInfo, linuxFormats } from "@/constants/platforms";
import { handleDownload as handlePlatformDownload } from "@/utils/platform";
import { fetchLatestRelease } from "@/utils/github";
import { formatDate } from "@/utils/format";

export default function Downloads() {
  const [isClient, setIsClient] = useState(false);
  const [latestRelease, setLatestRelease] = useState<GitHubRelease | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const loadLatestRelease = async () => {
      try {
        setLoading(true);
        const release = await fetchLatestRelease();
        setLatestRelease(release);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
        console.error("Error fetching latest release:", err);
      } finally {
        setLoading(false);
      }
    };

    loadLatestRelease();
  }, []);

  const handleDownload = (platform: Platform, linuxFormat?: LinuxFormat) => {
    handlePlatformDownload(platform, latestRelease || undefined, linuxFormat);
  };

  return (
    <section id="downloads" className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
              <HiDownload className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Download Todo List
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Available for macOS, Windows, and Linux. Choose your platform below.
          </p>

          {loading && (
            <div className="mt-8 flex justify-center">
              <Spinner size="lg" />
              <span className="ml-2 text-gray-600 dark:text-gray-300">
                Fetching latest version...
              </span>
            </div>
          )}

          {error && (
            <div className="mt-8 rounded-lg bg-red-100 p-4 text-red-800 dark:bg-red-900 dark:text-red-200">
              <p>Error loading release information: {error}</p>
              <p className="mt-2 text-sm">
                Please visit our{" "}
                <a
                  href="https://github.com/chiefpansancolt/todo-list/releases"
                  className="underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub releases page
                </a>{" "}
                to download manually.
              </p>
            </div>
          )}

          {latestRelease && (
            <div className="mt-6 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
              <FaGithub className="mr-2 h-4 w-4" />
              Latest version: {latestRelease.tag_name} •{" "}
              {formatDate(latestRelease.published_at)}
            </div>
          )}
        </div>

        {isClient && latestRelease && (
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {/* Mac Platform */}
              <div className="rounded-lg bg-white p-6 text-center shadow-lg transition-all hover:shadow-xl dark:bg-gray-700">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-600">
                    <platformInfo.mac.icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {platformInfo.mac.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {platformInfo.mac.requirements}
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Apple Silicon support only
                </p>
                <Button
                  color="light"
                  size="sm"
                  onClick={() => handleDownload("mac")}
                  className="mt-4 w-full cursor-pointer"
                  disabled={!latestRelease}
                >
                  <FaDownload className="mr-2 h-4 w-4" />
                  Download .dmg
                </Button>
              </div>

              {/* Windows Platform */}
              <div className="rounded-lg bg-white p-6 text-center shadow-lg transition-all hover:shadow-xl dark:bg-gray-700">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <platformInfo.windows.icon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {platformInfo.windows.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {platformInfo.windows.requirements}
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  64-bit installer
                </p>
                <Button
                  color="blue"
                  size="sm"
                  onClick={() => handleDownload("windows")}
                  className="mt-4 w-full cursor-pointer"
                  disabled={!latestRelease}
                >
                  <FaDownload className="mr-2 h-4 w-4" />
                  Download .exe
                </Button>
              </div>

              {/* Linux Platform */}
              <div className="rounded-lg bg-white p-6 text-center shadow-lg transition-all hover:shadow-xl dark:bg-gray-700">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500">
                    <platformInfo.linux.icon className="h-6 w-6 text-gray-200" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {platformInfo.linux.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {platformInfo.linux.requirements}
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Multiple package formats
                </p>
                <Dropdown
                  arrowIcon={false}
                  inline
                  label=""
                  renderTrigger={() => (
                    <div className="relative mt-4 flex h-9 w-full cursor-pointer items-center justify-between rounded-lg bg-orange-700 px-3 text-center text-sm font-medium text-white hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 focus:outline-none dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                      <FaDownload className="mr-2 h-4 w-4" />
                      Choose Format
                      <FaChevronDown className="ml-2 h-3 w-3" />
                    </div>
                  )}
                  disabled={!latestRelease}
                >
                  {Object.entries(linuxFormats).map(([key, format]) => (
                    <DropdownItem
                      key={key}
                      onClick={() =>
                        handleDownload("linux", key as LinuxFormat)
                      }
                      className="flex flex-col items-start px-4 py-3"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{format.name}</span>
                        <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-900 dark:text-gray-300">
                          .{format.extension}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {format.description}
                      </span>
                    </DropdownItem>
                  ))}
                </Dropdown>
              </div>
            </div>

            <p className="mt-4 text-center text-gray-100">
              Free download • No account required • Works offline
            </p>

            <div className="mt-8 p-6">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Need Help?
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Check out our releases page for more information
                </p>
                <div className="mt-4 flex justify-center">
                  <a
                    href="https://github.com/chiefpansancolt/todo-list/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <FaGithub className="mr-1 h-4 w-4" />
                    View all releases
                    <HiExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
