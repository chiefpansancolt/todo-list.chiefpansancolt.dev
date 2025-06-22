import type { ChangeItem } from "@/types/index";

/**
 * Get human-readable label for change type
 */
export const getChangeTypeLabel = (type: ChangeItem["type"]): string => {
  switch (type) {
    case "feature":
      return "Features";
    case "fix":
      return "Fixes";
    case "chore":
      return "Chores";
    case "core":
      return "Core Features";
    case "organization":
      return "Organization";
    case "ui":
      return "User Interface";
    case "data":
      return "Data Management";
    case "platform":
      return "Desktop Integration";
    case "internationalization":
      return "Internationalization";
    default:
      return "Changes";
  }
};

/**
 * Get CSS classes for change type badge
 */
export const getChangeTypeBadge = (type: ChangeItem["type"]): string => {
  switch (type) {
    case "feature":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
    case "fix":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
    case "chore":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
    case "core":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
    case "organization":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
    case "ui":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300";
    case "data":
      return "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300";
    case "platform":
      return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300";
    case "internationalization":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
  }
};
