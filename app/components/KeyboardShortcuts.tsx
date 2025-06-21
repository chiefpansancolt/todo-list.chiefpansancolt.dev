"use client";

import { useEffect, useState } from "react";
import { MdKeyboard } from "react-icons/md";
import { TbArrowBigUpFilled } from "react-icons/tb";
import { MdKeyboardCommandKey } from "react-icons/md";

interface Shortcut {
  keys: (string | React.ReactElement)[];
  description: string;
  category: "task" | "mode" | "data" | "navigation";
}

export default function KeyboardShortcuts() {
  const [isMac, setIsMac] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const detectMac = (): boolean => {
      if (typeof window === "undefined") return false;

      const userAgent = window.navigator.userAgent.toLowerCase();
      const platform = window.navigator.platform?.toLowerCase() || "";

      return userAgent.includes("mac") || platform.includes("mac");
    };

    setIsMac(detectMac());
  }, []);

  const getModifierKey = () =>
    isMac ? <MdKeyboardCommandKey className="h-3 w-3" /> : "Ctrl";
  const getShiftIcon = () => <TbArrowBigUpFilled className="h-3 w-3" />;

  const shortcuts: Shortcut[] = [
    {
      keys: [getModifierKey(), "N"],
      description: "New Task",
      category: "task",
    },
    {
      keys: [getModifierKey(), "T"],
      description: "Manage Categories",
      category: "task",
    },
    {
      keys: [getModifierKey(), "D"],
      description: "Toggle Dark Mode",
      category: "mode",
    },
    {
      keys: [getModifierKey(), getShiftIcon(), "D"],
      description: "Toggle Delete Mode",
      category: "mode",
    },
    {
      keys: [getModifierKey(), "I"],
      description: "Import Data",
      category: "data",
    },
    {
      keys: [getModifierKey(), getShiftIcon(), "E"],
      description: "Export as JSON",
      category: "data",
    },
    {
      keys: ["Esc"],
      description: "Cancel/Close Modal",
      category: "navigation",
    },
  ];

  const categories = {
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
      color:
        "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
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
  };

  const KeyboardKey = ({
    keyContent,
    category,
  }: {
    keyContent: string | React.ReactElement;
    category: keyof typeof categories;
  }) => (
    <kbd
      className={`inline-flex h-9 min-w-9 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gradient-to-b from-gray-50 to-gray-200 px-3 py-2 text-xs font-bold text-gray-800 shadow-[0_2px_0_0_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.5)] transition-all duration-150 hover:translate-y-[1px] hover:shadow-[0_1px_0_0_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.5)] active:translate-y-[2px] active:shadow-[inset_0_1px_2px_0_rgba(0,0,0,0.2)] dark:border-gray-600 dark:from-gray-700 dark:to-gray-800 dark:text-gray-200 dark:shadow-[0_2px_0_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.1)]`}
    >
      {keyContent}
    </kbd>
  );

  if (!isClient) {
    return (
      <section id="shortcuts" className="bg-white py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
                <MdKeyboard className="h-8 w-8 text-gray-600 dark:text-gray-300" />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Keyboard Shortcuts
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Loading shortcuts...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="shortcuts" className="bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
              <MdKeyboard className="h-8 w-8 text-gray-600 dark:text-gray-300" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Keyboard Shortcuts
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Boost your productivity with powerful keyboard shortcuts.
            {isMac
              ? " Using Command (⌘) key on macOS."
              : " Using Ctrl key on Windows/Linux."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(categories).map(([categoryKey, categoryInfo]) => {
            const categoryShortcuts = shortcuts.filter(
              (shortcut) => shortcut.category === categoryKey,
            );

            if (categoryShortcuts.length === 0) return null;

            return (
              <div key={categoryKey} className="space-y-4">
                <div
                  className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${categoryInfo.color}`}
                >
                  {categoryInfo.title}
                </div>

                <div className="space-y-3">
                  {categoryShortcuts.map((shortcut, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                    >
                      <div className="mb-2 flex flex-wrap gap-1">
                        {shortcut.keys.map((key, keyIndex) => (
                          <span key={keyIndex} className="flex items-center">
                            <KeyboardKey
                              keyContent={key}
                              category={shortcut.category}
                            />
                            {keyIndex < shortcut.keys.length - 1 && (
                              <span className="mx-1 text-gray-400 dark:text-gray-500">
                                +
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {shortcut.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Pro Tip:</strong> Most shortcuts work from anywhere in the
            app. Press <KeyboardKey keyContent="Esc" category="navigation" /> to
            quickly close any modal or cancel the current action.
          </p>
        </div>
      </div>
    </section>
  );
}
