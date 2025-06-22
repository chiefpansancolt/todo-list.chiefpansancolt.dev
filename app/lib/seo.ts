import type { Metadata } from "next";

export const siteConfig = {
  name: "Todo List Desktop App",
  shortName: "Todo List",
  description:
    "A powerful yet simple todo list app for Mac, Windows, and Linux. Find the perfect middle ground between simple and complex task management.",
  url: "https://todo-list.chiefpansancolt.dev",
  author: "chiefpansancolt",
  twitter: "@chiefpansancolt",
  locale: "en_US",
  themeColor: "#3b82f6",
};

export const defaultKeywords = [
  "todo list app",
  "task management software",
  "productivity app",
  "desktop todo app",
  "mac todo list",
  "windows task manager",
  "linux todo app",
  "free todo list",
  "offline todo app",
  "task organizer",
  "productivity tool",
  "todo list desktop",
  "drag and drop todo",
  "dark mode todo app",
  "multilingual todo app",
  "open source todo app",
  "keyboard shortcuts todo",
  "task priorities",
  "due date reminders",
  "category organization",
];

export function generatePageMetadata(params: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
}): Metadata {
  const title = params.title
    ? `${params.title} | ${siteConfig.name}`
    : `${siteConfig.name} - Task Management Made Simple`;

  const description = params.description || siteConfig.description;
  const url = params.path ? `${siteConfig.url}${params.path}` : siteConfig.url;
  const image = params.image || `${siteConfig.url}/og-image.png`;

  return {
    title,
    description,
    keywords: params.keywords
      ? [...params.keywords, ...defaultKeywords.slice(0, 5)]
      : defaultKeywords,
    authors: [{ name: siteConfig.author, url: "https://chiefpansancolt.dev" }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: siteConfig.locale,
      type: params.type || "website",
      ...(params.publishedTime && { publishedTime: params.publishedTime }),
      ...(params.modifiedTime && { modifiedTime: params.modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitter,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
