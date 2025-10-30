import { FaApple, FaLinux, FaWindows } from "react-icons/fa6";
import type {
  Language,
  LinuxFormat,
  LinuxFormatInfo,
  Platform,
  PlatformInfo,
} from "@/types/index";

export const platformInfo: Record<Platform, PlatformInfo> = {
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
    color: "orange",
    customClasses:
      "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-600",
  },
};

export const linuxFormats: Record<LinuxFormat, LinuxFormatInfo> = {
  appimage: {
    name: "AppImage",
    extension: "AppImage",
    description: "Universal Linux package",
    filename: (version) => `todo-list-app-${version}.AppImage`,
  },
  deb: {
    name: "Debian Package",
    extension: "deb",
    description: "For Ubuntu/Debian based systems",
    filename: (version) => `todo-list-app_${version}_amd64.deb`,
  },
  snap: {
    name: "Snap Package",
    extension: "snap",
    description: "Universal Linux package manager",
    filename: (version) => `todo-list-app_${version}_amd64.snap`,
  },
};

export const languages: Language[] = [
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
