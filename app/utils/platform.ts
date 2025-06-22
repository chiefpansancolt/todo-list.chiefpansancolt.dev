import type { Platform, LinuxFormat, GitHubRelease } from "@/types/index";
import { linuxFormats } from "@/constants/platforms";

/**
 * Detects the user's platform based on user agent and platform information
 */
export const detectPlatform = (): Platform => {
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

/**
 * Detects if the user is on macOS
 */
export const detectMac = (): boolean => {
  if (typeof window === "undefined") return false;

  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = window.navigator.platform?.toLowerCase() || "";

  return userAgent.includes("mac") || platform.includes("mac");
};

/**
 * Constructs download URL for a specific platform and release
 */
export const constructDownloadUrl = (
  platform: Platform,
  release: GitHubRelease,
  linuxFormat?: LinuxFormat,
): string => {
  if (!release) return "#";

  const version = release.tag_name.replace(/^v/, "");
  const baseUrl = `https://github.com/chiefpansancolt/todo-list/releases/download/${release.tag_name}`;

  switch (platform) {
    case "windows":
      return `${baseUrl}/todo-list-app-${version}-setup.exe`;
    case "mac":
      return `${baseUrl}/todo-list-app-${version}.dmg`;
    case "linux":
      if (!linuxFormat) return "#";
      const filename = linuxFormats[linuxFormat].filename(version);
      return `${baseUrl}/${filename}`;
    default:
      return "#";
  }
};

/**
 * Handles download action for a platform
 */
export const handleDownload = (
  platform: Platform,
  release?: GitHubRelease,
  linuxFormat?: LinuxFormat,
) => {
  if (!release) {
    console.log(`No release available for ${platform}`);
    return;
  }

  const url = constructDownloadUrl(platform, release, linuxFormat);
  if (url !== "#") {
    window.open(url, "_blank");
  }
};
