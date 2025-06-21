"use client";

import {
  HiClipboardList,
  HiTag,
  HiSparkles,
  HiDatabase,
  HiGlobeAlt,
  HiCheckCircle,
} from "react-icons/hi";

interface Feature {
  name: string;
  description: string;
}

interface FeatureCategory {
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

const featuresData: FeatureCategory[] = [
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

export default function Features() {
  return (
    <section id="features" className="bg-gray-100 py-24 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-screen-md lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Powerful Features for Modern Task Management
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Experience the perfect balance between simplicity and functionality.
            Our app brings together essential task management features with an
            intuitive interface that adapts to your workflow.
          </p>
        </div>

        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 xl:gap-12">
          {featuresData.map((category) => {
            const IconComponent = category.icon;

            return (
              <div key={category.id}>
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded lg:h-16 lg:w-16 ${category.colorTheme.bg} ${category.colorTheme.darkBg}`}
                >
                  <IconComponent
                    className={`h-5 w-5 lg:h-8 lg:w-8 ${category.colorTheme.icon} ${category.colorTheme.darkIcon}`}
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <ul role="list" className="my-6 space-y-4 lg:mb-0">
                  {category.features.map((feature, index) => (
                    <li key={index} className="flex space-x-2.5">
                      <HiCheckCircle
                        className={`h-5 w-5 flex-shrink-0 ${category.colorTheme.checkmark} ${category.colorTheme.darkCheckmark}`}
                      />
                      <span className="leading-tight text-gray-500 dark:text-gray-400">
                        <strong>{feature.name}</strong> - {feature.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
