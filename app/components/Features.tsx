"use client";

import { HiCheckCircle } from "react-icons/hi";
import { featuresData } from "@/constants/data";

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
