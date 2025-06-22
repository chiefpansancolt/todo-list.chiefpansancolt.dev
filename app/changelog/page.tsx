import Navigation from "@/comps/Navigation";
import Footer from "@/comps/Footer";
import { HiSparkles, HiCog, HiCalendar, HiExternalLink } from "react-icons/hi";
import { FaGithub, FaBug, FaDiscord } from "react-icons/fa6";

export const metadata = {
  title: "Changelog - Todo List Desktop App",
  description:
    "Track the evolution of Todo List Desktop app. See new features, bug fixes, and improvements across all versions.",
};

interface ChangeItem {
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

interface Version {
  version: string;
  date: string;
  isLatest?: boolean;
  changes: ChangeItem[];
  highlights?: string[];
  isInitialRelease?: boolean;
}

const versions: Version[] = [
  {
    version: "1.1.0",
    date: "2025-06-21",
    isLatest: true,
    changes: [
      {
        type: "feature",
        title: "Improved Import System",
        description:
          "Redo how import versions are evaluated to support 1.x.x for import of 1.0.0 and above",
      },
      {
        type: "fix",
        title: "Extra Details Popover Cleanup",
        description: "Clean up Extra Details Popover",
        issueNumber: 7,
      },
      {
        type: "chore",
        title: "Build Improvements",
        description: "Fix dmg builds for GitHub Actions",
      },
    ],
  },
  {
    version: "1.0.1",
    date: "2025-06-21",
    changes: [
      {
        type: "fix",
        title: "Windows Build Fixes",
        items: ["Clean up Win Build", "Restructure Version refs in files"],
      },
      {
        type: "chore",
        title: "Dependencies",
        description: "Bump Version Dependencies",
      },
    ],
  },
  {
    version: "1.0.0",
    date: "2025-06-14",
    isInitialRelease: true,
    highlights: [
      "Full TypeScript implementation",
      "React 19 with modern hooks",
      "Tailwind CSS v4 design system",
      "Electron 36 desktop integration",
      "10 language internationalization",
    ],
    changes: [
      {
        type: "core",
        title: "Core Task Management",
        items: [
          "Task Creation - Create tasks with title and detailed descriptions",
          "Task Editing - Edit existing tasks with inline and modal editing",
          "Task Completion - Mark tasks as complete/incomplete with smooth animations",
          "Task Deletion - Delete individual tasks or bulk delete with delete mode",
          "Task Reordering - Drag and drop to reorder active tasks",
        ],
      },
      {
        type: "organization",
        title: "Organization Features",
        items: [
          "Custom Categories - Create, edit, and delete color-coded categories",
          "Priority Levels - Set High, Medium, or Low priority with visual indicators",
          "Due Dates - Calendar picker with date selection and overdue notifications",
          "Smart Sorting - Auto-sort by priority, due date, and overdue status",
        ],
      },
      {
        type: "ui",
        title: "User Interface",
        items: [
          "Modern Design - Clean, responsive interface built with Tailwind CSS",
          "Dark Mode - System-aware theme switching with manual toggle",
          "Animations - Smooth transitions, fade effects, and micro-interactions",
          "Collapsible Sections - Toggle completed tasks visibility",
          "Visual Feedback - Loading states, hover effects, and status indicators",
        ],
      },
      {
        type: "data",
        title: "Data Management",
        items: [
          "Persistent Storage - Local file-based storage in user data directory",
          "Export Options - JSON format for complete backup and CSV for analysis",
          "Import Support - Restore tasks and categories from JSON exports",
          "Data Validation - Robust error handling and data integrity checks",
        ],
      },
      {
        type: "platform",
        title: "Desktop Integration",
        items: [
          "Native Menus - Platform-specific menu bars with full functionality",
          "Keyboard Shortcuts - Full productivity shortcuts support",
          "Window Management - Minimize, maximize, fullscreen, zoom controls",
          "Cross-Platform - Windows, macOS, and Linux support",
        ],
      },
      {
        type: "internationalization",
        title: "Internationalization",
        items: [
          "Multi-Language Support - 10 languages included",
          "Dynamic Language Switching - Change language without restart",
          "Localized Calendars - Region-appropriate date formats",
        ],
      },
    ],
  },
];

const getChangeIcon = (type: ChangeItem["type"]) => {
  switch (type) {
    case "feature":
      return (
        <HiSparkles className="h-4 w-4 text-green-600 dark:text-green-400" />
      );
    case "fix":
      return <FaBug className="h-4 w-4 text-red-600 dark:text-red-400" />;
    case "chore":
      return <HiCog className="h-4 w-4 text-blue-600 dark:text-blue-400" />;
    default:
  }
};

const getChangeTypeLabel = (type: ChangeItem["type"]) => {
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

const getChangeTypeBadge = (type: ChangeItem["type"]) => {
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

export default function Changelog() {
  return (
    <>
      <Navigation />

      <main className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg">
                <HiCalendar className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Changelog
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Track the evolution of Todo List Desktop app. See what's new,
              what's fixed, and what's coming next.
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href="https://github.com/chiefpansancolt/todo-list/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaGithub className="mr-2 h-4 w-4" />
                View on GitHub
                <HiExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>

          <div className="space-y-12">
            {versions.map((version) => (
              <div key={version.version} className="relative">
                <div className="mb-6 border-b border-gray-200 pb-4 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="mb-3 sm:mb-0">
                      <div className="flex items-center space-x-3">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          v{version.version}
                        </h2>
                        {version.isLatest && (
                          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                            Latest
                          </span>
                        )}
                        {version.isInitialRelease && (
                          <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                            🎉 Initial Release
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Released on{" "}
                        {new Date(version.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <a
                      href={`https://github.com/chiefpansancolt/todo-list/releases/tag/v${version.version}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      View Release
                      <HiExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </div>
                </div>

                {version.highlights && (
                  <div className="mb-8 rounded-lg bg-purple-50 p-6 dark:bg-purple-900/20">
                    <h3 className="mb-4 flex items-center text-lg font-semibold text-purple-900 dark:text-purple-100">
                      <HiSparkles className="mr-2 h-5 w-5" />
                      Release Highlights
                    </h3>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {version.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start">
                          <span className="mt-1 mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500"></span>
                          <span className="text-purple-800 dark:text-purple-200">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {version.changes.map((change, changeIndex) => (
                    <div
                      key={changeIndex}
                      className="rounded-lg border border-gray-200 bg-gray-50/50 p-6 dark:border-gray-700 dark:bg-gray-800/50"
                    >
                      <div className="mb-4 flex items-center space-x-3">
                        {getChangeIcon(change.type)}
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${getChangeTypeBadge(change.type)}`}
                        >
                          {getChangeTypeLabel(change.type)}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {change.title}
                        </h3>
                      </div>

                      {change.description && (
                        <p className="mb-4 text-gray-700 dark:text-gray-300">
                          {change.description}
                        </p>
                      )}

                      {change.issueNumber && (
                        <div className="mb-4">
                          <a
                            href={`https://github.com/chiefpansancolt/todo-list/issues/${change.issueNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            Fixes #{change.issueNumber}
                            <HiExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                      )}

                      {change.items && (
                        <ul className="space-y-2">
                          {change.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start text-gray-700 dark:text-gray-300"
                            >
                              <span className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-lg p-8 text-center">
            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Stay Updated
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Follow our GitHub repository to get notified about new releases
              and updates.
            </p>
            <div className="flex flex-col justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="https://github.com/chiefpansancolt/todo-list/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaGithub className="mr-2 h-5 w-5" />
                Watch Releases
              </a>
              <a
                href="https://discord.gg/pPbe6wquEA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <FaDiscord className="mr-2 h-5 w-5" />
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
