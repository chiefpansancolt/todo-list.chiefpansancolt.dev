import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://todo-list.chiefpansancolt.dev"),
  title: {
    default: "Todo List Desktop App - Task Management Made Simple",
    template: "%s | Todo List Desktop App",
  },
  description:
    "A powerful yet simple todo list app for Mac, Windows, and Linux. Find the perfect middle ground between simple and complex task management. Free, offline, and available in 10 languages.",
  keywords: [
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
    "keyboard shortcuts",
    "task priorities",
    "due date reminders",
    "category organization",
  ],
  authors: [{ name: "chiefpansancolt", url: "https://chiefpansancolt.dev" }],
  creator: "chiefpansancolt",
  publisher: "chiefpansancolt",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Todo List Desktop App - Task Management Made Simple",
    description:
      "A powerful yet simple todo list app for Mac, Windows, and Linux. Perfect balance between simple and complex task management.",
    url: "https://todo-list.chiefpansancolt.dev",
    siteName: "Todo List Desktop App",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Todo List Desktop App - Task Management Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Todo List Desktop App - Task Management Made Simple",
    description:
      "A powerful yet simple todo list app for Mac, Windows, and Linux.",
    creator: "@chiefpansancolt",
    images: ["/twitter-image.png"],
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
  alternates: {
    canonical: "https://todo-list.chiefpansancolt.dev",
    languages: {
      "en-US": "https://todo-list.chiefpansancolt.dev",
      "es-ES": "https://todo-list.chiefpansancolt.dev/es",
      "fr-FR": "https://todo-list.chiefpansancolt.dev/fr",
      "de-DE": "https://todo-list.chiefpansancolt.dev/de",
      "pt-PT": "https://todo-list.chiefpansancolt.dev/pt",
      "ja-JP": "https://todo-list.chiefpansancolt.dev/ja",
      "zh-CN": "https://todo-list.chiefpansancolt.dev/zh",
      "ko-KR": "https://todo-list.chiefpansancolt.dev/ko",
      "it-IT": "https://todo-list.chiefpansancolt.dev/it",
      "nl-NL": "https://todo-list.chiefpansancolt.dev/nl",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark bg-gray-900 antialiased`}
      >
        {children}
        <Script
          id="organization-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://chiefpansancolt.dev/#person",
              name: "chiefpansancolt",
              url: "https://chiefpansancolt.dev",
              sameAs: [
                "https://github.com/chiefpansancolt",
                "https://twitter.com/chiefpansancolt",
                "https://discord.gg/pPbe6wquEA",
              ],
            }),
          }}
        />

        <Script
          id="website-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://todo-list.chiefpansancolt.dev/#website",
              url: "https://todo-list.chiefpansancolt.dev",
              name: "Todo List Desktop App",
              description:
                "Official website for the Todo List Desktop application",
              publisher: {
                "@id": "https://chiefpansancolt.dev/#person",
              },
              inLanguage: "en-US",
            }),
          }}
        />
      </body>
    </html>
  );
}
