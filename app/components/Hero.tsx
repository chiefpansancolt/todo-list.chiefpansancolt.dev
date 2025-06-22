"use client";

import { Button } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import type { Platform, LinuxFormat, GitHubRelease } from "@/types/index";
import { platformInfo } from "@/constants/platforms";
import {
  detectPlatform,
  handleDownload as handlePlatformDownload,
} from "@/utils/platform";
import { fetchLatestRelease } from "@/utils/github";

export default function Hero() {
  const [detectedPlatform, setDetectedPlatform] = useState<Platform>("windows");
  const [latestRelease, setLatestRelease] = useState<GitHubRelease | null>(
    null,
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setDetectedPlatform(detectPlatform());
  }, []);

  useEffect(() => {
    const loadLatestRelease = async () => {
      try {
        const release = await fetchLatestRelease();
        setLatestRelease(release);
      } catch (err) {
        console.error("Error fetching latest release:", err);
      }
    };

    loadLatestRelease();
  }, []);

  const handleDownload = () => {
    if (detectPlatform() === "linux") {
      scrollToDownloads();
    } else {
      handlePlatformDownload(
        detectPlatform(),
        latestRelease || undefined,
        undefined,
      );
    }
  };

  const scrollToDownloads = () => {
    const element = document.getElementById("downloads");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentPlatformInfo = platformInfo[detectedPlatform];
  const PlatformIcon = currentPlatformInfo.icon;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto mt-14 grid max-w-screen-xl px-4 py-8 lg:mt-0 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
            Todo List Simplified
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            Today todo list trackers are either too barebones or too
            complicated. This app takes those two ends and finds a middle ground
            where you have flexibility with the combo of simple to help make
            managing tasks simple and easy again.
          </p>

          {isClient && (
            <>
              <div className="mb-4 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button
                  color={
                    detectedPlatform === "linux"
                      ? "light"
                      : currentPlatformInfo.color
                  }
                  size="lg"
                  onClick={() => handleDownload}
                  className={`inline-flex cursor-pointer items-center justify-center ${currentPlatformInfo.customClasses || ""}`}
                >
                  <PlatformIcon className="mr-3 h-5 w-5" />
                  {currentPlatformInfo.label}
                </Button>

                <Button
                  color="gray"
                  size="lg"
                  onClick={scrollToDownloads}
                  className="inline-flex cursor-pointer items-center justify-center"
                >
                  View All Platforms
                </Button>
              </div>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Available for{" "}
                {Object.values(platformInfo)
                  .map((platform) => platform.name)
                  .join(", ")}
              </p>

              <div className="mt-6 flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center">✓ Free forever</span>
                <span className="flex items-center">✓ No account required</span>
                <span className="flex items-center">✓ Works offline</span>
              </div>
            </>
          )}
        </div>

        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <div className="relative">
            <Image
              src="/TodoList.png"
              alt="Todo List Desktop App Interface"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
