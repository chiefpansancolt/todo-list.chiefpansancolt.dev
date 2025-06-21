import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo List - Task Management Made Simple",
  description:
    "A powerful yet simple todo list app for Mac, Windows, and Linux. Find the perfect middle ground between simple and complex task management.",
  keywords: [
    "todo list",
    "task management",
    "productivity",
    "desktop app",
    "mac",
    "windows",
    "linux",
  ],
  authors: [{ name: "Todo List Team" }],
  openGraph: {
    title: "Todo List - Task Management Made Simple",
    description:
      "A powerful yet simple todo list app for Mac, Windows, and Linux.",
    type: "website",
    siteName: "Todo List",
  },
  twitter: {
    card: "summary_large_image",
    title: "Todo List - Task Management Made Simple",
    description:
      "A powerful yet simple todo list app for Mac, Windows, and Linux.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
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
        <ThemeModeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
