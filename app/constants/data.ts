import {
  HiClipboardList,
  HiDatabase,
  HiGlobeAlt,
  HiSparkles,
  HiTag,
} from "react-icons/hi";
import type { FAQItem, FeatureCategory, ShortcutConfig } from "@/types/index";

export const featuresData: FeatureCategory[] = [
  {
    id: "task-management",
    title: "Task Management",
    icon: HiClipboardList,
    colorTheme: {
      bg: "bg-blue-100",
      darkBg: "dark:bg-blue-900",
      icon: "text-blue-600",
      darkIcon: "dark:text-blue-300",
      checkmark: "text-blue-600",
      darkCheckmark: "dark:text-blue-500",
    },
    features: [
      {
        name: "Create, Edit & Delete",
        description: "Full CRUD operations with intuitive UI",
      },
      {
        name: "Task Completion",
        description: "Mark tasks as done with smooth animations",
      },
      {
        name: "Bulk Operations",
        description: "Delete multiple tasks at once",
      },
      {
        name: "Smart Sorting",
        description: "Auto-sort by priority, due date, and overdue status",
      },
    ],
  },
  {
    id: "organization",
    title: "Organization",
    icon: HiTag,
    colorTheme: {
      bg: "bg-purple-100",
      darkBg: "dark:bg-purple-900",
      icon: "text-purple-600",
      darkIcon: "dark:text-purple-300",
      checkmark: "text-purple-600",
      darkCheckmark: "dark:text-purple-500",
    },
    features: [
      {
        name: "Custom Categories",
        description: "Color-coded categories with visual indicators",
      },
      {
        name: "Priority Levels",
        description: "High, Medium, Low priority with visual cues",
      },
      {
        name: "Due Dates",
        description: "Calendar picker with overdue notifications",
      },
      {
        name: "Extra Details",
        description: "Rich text details with popover display",
      },
    ],
  },
  {
    id: "user-experience",
    title: "User Experience",
    icon: HiSparkles,
    colorTheme: {
      bg: "bg-green-100",
      darkBg: "dark:bg-green-900",
      icon: "text-green-600",
      darkIcon: "dark:text-green-300",
      checkmark: "text-green-600",
      darkCheckmark: "dark:text-green-500",
    },
    features: [
      {
        name: "Drag & Drop",
        description: "Reorder active tasks effortlessly",
      },
      {
        name: "Dark Mode",
        description: "System-aware theme switching",
      },
      {
        name: "Keyboard Shortcuts",
        description: "Full productivity shortcuts support",
      },
      {
        name: "Animations",
        description: "Smooth transitions and micro-interactions",
      },
      {
        name: "Responsive Design",
        description: "Adaptive layout for different window sizes",
      },
    ],
  },
  {
    id: "data-management",
    title: "Data Management",
    icon: HiDatabase,
    colorTheme: {
      bg: "bg-teal-100",
      darkBg: "dark:bg-teal-900",
      icon: "text-teal-600",
      darkIcon: "dark:text-teal-300",
      checkmark: "text-teal-500",
      darkCheckmark: "dark:text-teal-400",
    },
    features: [
      {
        name: "Persistent Storage",
        description: "Local file-based storage",
      },
      {
        name: "Export Options",
        description: "JSON (full backup) and CSV (analysis)",
      },
      {
        name: "Import Support",
        description: "Restore from previous exports",
      },
      {
        name: "Data Validation",
        description: "Robust error handling and data integrity",
      },
    ],
  },
  {
    id: "internationalization",
    title: "Internationalization",
    icon: HiGlobeAlt,
    colorTheme: {
      bg: "bg-orange-100",
      darkBg: "dark:bg-orange-900",
      icon: "text-orange-600",
      darkIcon: "dark:text-orange-300",
      checkmark: "text-orange-600",
      darkCheckmark: "dark:text-orange-500",
    },
    features: [
      {
        name: "Multi-language Support",
        description: "10 languages included",
      },
      {
        name: "Dynamic Language Switching",
        description: "Change language without restart",
      },
      {
        name: "Localized Date Formats",
        description: "Region-appropriate date displays",
      },
    ],
  },
];

export const faqData: FAQItem[] = [
  {
    id: "free-app",
    question: "Is the Todo List app completely free?",
    answer:
      "Yes! The Todo List app is completely free to download and use. There are no hidden fees, subscriptions, or premium features. We believe task management should be accessible to everyone.",
    category: "general",
  },
  {
    id: "data-storage",
    question: "Where is my data stored and is it private?",
    answer:
      "All your data is stored locally on your device using secure file-based storage. We don't collect, store, or have access to any of your personal information or tasks. Your privacy is completely protected since everything stays on your computer.",
    category: "data",
  },
  {
    id: "platform-differences",
    question:
      "Are there any differences between the Mac, Windows, and Linux versions?",
    answer:
      "No, all platform versions have identical features and functionality. The app is built to provide a consistent experience across all operating systems, with only minor visual adjustments to match each platform's design guidelines.",
    category: "technical",
  },
  {
    id: "offline-functionality",
    question: "Does the app work offline?",
    answer:
      "Absolutely! The Todo List app is designed to work completely offline. Since all data is stored locally, you can create, edit, and manage your tasks without any internet connection. No cloud dependency means no interruptions to your productivity.",
    category: "technical",
  },
  {
    id: "data-backup",
    question: "How can I backup or sync my data between devices?",
    answer:
      "You can export your data as JSON files for backup purposes. While the app doesn't include automatic cloud sync, you can manually transfer your exported data between devices or store backups in your preferred cloud storage service.",
    category: "data",
  },
  {
    id: "system-requirements",
    question: "What are the minimum system requirements?",
    answer:
      "Mac: macOS 15 or later (Apple Silicon support). Windows: Windows 10 or later (64-bit). Linux: Ubuntu 18.04+ or equivalent distributions. The app is lightweight and should run smoothly on most modern systems.",
    category: "technical",
  },
  {
    id: "updates",
    question: "How do I get updates for the app?",
    answer:
      "New versions are released on our GitHub releases page. Monitor our Discord Announcment channel for notifications of new releases. Presently we do not support Auto-updates, so you'll need to manually download and install new versions.",
    category: "support",
  },
  {
    id: "vs-other-apps",
    question: "How is this different from other todo apps?",
    answer:
      "Our app fills the gap between overly simple and unnecessarily complex task managers. We provide essential features like categories, priorities, due dates, and keyboard shortcuts without overwhelming you with features you don't need. It's the perfect middle ground for productive task management.",
    category: "general",
  },
  {
    id: "data-import",
    question: "Can I import tasks from other todo apps?",
    answer:
      "Currently, you can import data from JSON files (including previous exports from our app). Depending on feedback and request volume, we may consider adding support for importing from other popular todo apps in the future.",
    category: "data",
  },
  {
    id: "multiple-languages",
    question: "How do I change the app language?",
    answer:
      "The app supports 10 languages that you can switch between instantly without restarting. Look for the language/globe icon in the app settings, and your preference will be saved automatically for future use.",
    category: "general",
  },
  {
    id: "signing",
    question: "is the app Signed for Windows or Mac?",
    answer:
      "No, the app is not signed for Windows or Mac. This means you may encounter security warnings when installing on these platforms. We recommend downloading from our official GitHub releases page or this website, to ensure you have the latest version. We will work in the future to sign the app for better security and trust.",
    category: "technical",
  },
  {
    id: "keyboard-shortcuts",
    question: "Are keyboard shortcuts customizable?",
    answer:
      "Currently, the app comes with a comprehensive set of pre-defined keyboard shortcuts optimized for productivity. Custom shortcut configuration is not planned but may be based on user feedback.",
    category: "technical",
  },
  {
    id: "support-contact",
    question: "How can I get help or report issues?",
    answer:
      "For support, bug reports, or feature requests, please visit our discord server where you can report bugs or join discussions. We actively monitor and respond to all inquiries.",
    category: "support",
  },
];

export const shortcutsConfig: ShortcutConfig[] = [
  {
    keys: ["mod", "N"],
    description: "New Task",
    category: "task",
  },
  {
    keys: ["mod", "T"],
    description: "Manage Categories",
    category: "task",
  },
  {
    keys: ["mod", "D"],
    description: "Toggle Dark Mode",
    category: "mode",
  },
  {
    keys: ["mod", "D"],
    description: "Toggle Delete Mode",
    category: "mode",
    hasShift: true,
  },
  {
    keys: ["mod", "I"],
    description: "Import Data",
    category: "data",
  },
  {
    keys: ["mod", "E"],
    description: "Export as JSON",
    category: "data",
    hasShift: true,
  },
  {
    keys: ["Esc"],
    description: "Cancel/Close Modal",
    category: "navigation",
  },
];

export const shortcutCategories = {
  task: {
    title: "Task Management",
    color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    keyColor:
      "bg-blue-50 dark:bg-blue-800 border-blue-200 dark:border-blue-600",
  },
  mode: {
    title: "Interface",
    color:
      "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
    keyColor:
      "bg-purple-50 dark:bg-purple-800 border-purple-200 dark:border-purple-600",
  },
  data: {
    title: "Data Management",
    color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    keyColor:
      "bg-green-50 dark:bg-green-800 border-green-200 dark:border-green-600",
  },
  navigation: {
    title: "Navigation",
    color:
      "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
    keyColor:
      "bg-orange-50 dark:bg-orange-800 border-orange-200 dark:border-orange-600",
  },
} as const;
