export type Platform = "mac" | "windows" | "linux";
export type LinuxFormat = "appimage" | "deb" | "snap";
export type LanguageCode =
  | "en"
  | "es"
  | "fr"
  | "de"
  | "pt"
  | "ja"
  | "zh"
  | "ko"
  | "it"
  | "nl";

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  status?: "available" | "coming-soon";
}

export interface PlatformInfo {
  name: string;
  label: string;
  requirements: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "light" | "blue" | "orange" | "warning";
  customClasses?: string;
}

export interface LinuxFormatInfo {
  name: string;
  extension: string;
  description: string;
  filename: (version: string) => string;
}

export interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  html_url: string;
}

export interface Feature {
  name: string;
  description: string;
}

export interface FeatureCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  colorTheme: {
    bg: string;
    darkBg: string;
    icon: string;
    darkIcon: string;
    checkmark: string;
    darkCheckmark: string;
  };
  features: Feature[];
}

export interface Shortcut {
  keys: (string | React.ReactElement)[];
  description: string;
  category: "task" | "mode" | "data" | "navigation";
}

export interface ShortcutConfig {
  keys: string[];
  description: string;
  category: "task" | "mode" | "data" | "navigation";
  hasShift?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "technical" | "data" | "support";
}

export interface ChangeItem {
  type:
    | "feature"
    | "fix"
    | "chore"
    | "core"
    | "organization"
    | "ui"
    | "data"
    | "internationalization"
    | "platform";
  title: string;
  description?: string;
  issueNumber?: number;
  items?: string[];
  icon?: React.ComponentType<{ className?: string }>;
}

export interface Version {
  version: string;
  date: string;
  isLatest?: boolean;
  changes: ChangeItem[];
  highlights?: string[];
  isInitialRelease?: boolean;
}

export interface PageHeaderProps {
  icon: React.ComponentType<{ className?: string }>;
  iconColor?: string;
  title: string;
  description: string;
  lastUpdated?: string;
  children?: React.ReactNode;
}

export interface PageLayoutProps {
  children: React.ReactNode;
  metadata?: {
    title: string;
    description: string;
  };
}
