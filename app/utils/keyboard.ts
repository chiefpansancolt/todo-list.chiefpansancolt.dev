import React from "react";
import { MdKeyboardCommandKey } from "react-icons/md";
import { TbArrowBigUpFilled } from "react-icons/tb";
import type { Shortcut } from "@/types/index";
import type { ShortcutConfig } from "@/constants/data";

/**
 * Converts shortcut config to shortcuts with JSX elements
 */
export const createKeyboardShortcuts = (
  shortcutsConfig: ShortcutConfig[],
  isMac: boolean,
): Shortcut[] => {
  return shortcutsConfig.map((config) => {
    const keys: (string | React.ReactElement)[] = [];

    config.keys.forEach((key, index) => {
      if (key === "mod") {
        keys.push(
          isMac
            ? React.createElement(MdKeyboardCommandKey, {
                className: "h-3 w-3",
              })
            : "Ctrl",
        );
      } else {
        keys.push(key);
      }

      if (config.hasShift && index === 0) {
        keys.push(
          React.createElement(TbArrowBigUpFilled, { className: "h-3 w-3" }),
        );
      }
    });

    return {
      keys,
      description: config.description,
      category: config.category,
    };
  });
};

/**
 * Groups shortcuts by category
 */
export const groupShortcutsByCategory = (shortcuts: Shortcut[]) => {
  return shortcuts.reduce(
    (acc, shortcut) => {
      if (!acc[shortcut.category]) {
        acc[shortcut.category] = [];
      }
      acc[shortcut.category].push(shortcut);
      return acc;
    },
    {} as Record<string, Shortcut[]>,
  );
};

/**
 * Keyboard key component props
 */
export interface KeyboardKeyProps {
  keyContent: string | React.ReactElement;
  category?: keyof typeof import("@/constants/data").shortcutCategories;
  className?: string;
}

/**
 * Base keyboard key styling classes
 */
export const getKeyboardKeyClasses = (customClasses?: string) => {
  const baseClasses = `inline-flex h-9 min-w-9 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gradient-to-b from-gray-50 to-gray-200 px-3 py-2 text-xs font-bold text-gray-800 shadow-[0_2px_0_0_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.5)] transition-all duration-150 hover:translate-y-[1px] hover:shadow-[0_1px_0_0_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.5)] active:translate-y-[2px] active:shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.2)] dark:border-gray-600 dark:from-gray-700 dark:to-gray-800 dark:text-gray-200 dark:shadow-[0_2px_0_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.1)]`;

  return customClasses ? `${baseClasses} ${customClasses}` : baseClasses;
};

/**
 * Gets platform-specific instruction text
 */
export const getPlatformInstructions = (isMac: boolean): string => {
  return isMac
    ? "Using Command (⌘) key on macOS."
    : "Using Ctrl key on Windows/Linux.";
};
