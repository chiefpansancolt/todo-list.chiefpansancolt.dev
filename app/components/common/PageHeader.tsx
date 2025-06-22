import type { PageHeaderProps } from "@/types/index";

export default function PageHeader({
  icon: IconComponent,
  iconColor = "from-blue-600 to-indigo-600",
  title,
  description,
  lastUpdated,
  children,
}: PageHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <div className="mb-4 flex justify-center">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${iconColor} shadow-lg`}
        >
          <IconComponent className="h-8 w-8 text-white" />
        </div>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        {description}
      </p>
      {lastUpdated && (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Last updated: {lastUpdated}
        </p>
      )}
      {children}
    </div>
  );
}
