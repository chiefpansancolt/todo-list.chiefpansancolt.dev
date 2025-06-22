"use client";

import { Button } from "flowbite-react";
import Image from "next/image";
import { FaApple, FaWindows, FaLinux } from "react-icons/fa";
import { useEffect, useState } from "react";

type Platform = "mac" | "windows" | "linux";

interface PlatformInfo {
  name: string;
  label: string;
  requirements: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "light" | "blue" | "warning";
  customClasses?: string;
}

const platformInfo: Record<Platform, PlatformInfo> = {
  mac: {
    name: "macOS",
    label: "Download for Mac",
    requirements: "macOS 15 or later",
    icon: FaApple,
    color: "light",
    customClasses:
      "bg-white border-gray-300 text-gray-900 hover:bg-gray-50 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100",
  },
  windows: {
    name: "Windows",
    label: "Download for Windows",
    requirements: "Windows 10 or later",
    icon: FaWindows,
    color: "blue",
  },
  linux: {
    name: "Linux",
    label: "Download for Linux",
    requirements: "Ubuntu 18.04+ or equivalent",
    icon: FaLinux,
    color: "warning",
    customClasses:
      "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-600",
  },
};

export default function Hero() {
  const [detectedPlatform, setDetectedPlatform] = useState<Platform>("windows");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const detectPlatform = (): Platform => {
      if (typeof window === "undefined") return "windows";

      const userAgent = window.navigator.userAgent.toLowerCase();
      const platform = window.navigator.platform?.toLowerCase() || "";

      if (userAgent.includes("mac") || platform.includes("mac")) {
        return "mac";
      } else if (userAgent.includes("linux") || platform.includes("linux")) {
        return "linux";
      } else {
        return "windows";
      }
    };

    setDetectedPlatform(detectPlatform());
  }, []);

  const handleDownload = (platform: string) => {
    // TODO: Implement actual download logic
    console.log(`Downloading for ${platform}`);
  };

  const getOtherPlatforms = (): Platform[] => {
    return (Object.keys(platformInfo) as Platform[]).filter(
      (p) => p !== detectedPlatform,
    );
  };

  const PlatformIcon = platformInfo[detectedPlatform].icon;

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
              <div className="mb-4">
                <Button
                  color={
                    detectedPlatform === "linux"
                      ? "light"
                      : platformInfo[detectedPlatform].color
                  }
                  size="lg"
                  onClick={() => handleDownload(detectedPlatform)}
                  className={`inline-flex items-center justify-center ${platformInfo[detectedPlatform].customClasses || ""}`}
                >
                  <PlatformIcon className="mr-3 h-5 w-5" />
                  {platformInfo[detectedPlatform].label}
                </Button>
              </div>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Available for macOS 15+, Windows 11, and Linux Ubuntu 18.04+
              </p>
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
