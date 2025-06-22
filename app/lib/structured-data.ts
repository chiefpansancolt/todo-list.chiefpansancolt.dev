export function generateSoftwareApplicationLD() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://todo-list.chiefpansancolt.dev/#software",
    name: "Todo List Desktop App",
    applicationCategory: "ProductivityApplication",
    applicationSubCategory: "Task Management",
    operatingSystem: "Windows 10+, macOS 15+, Linux",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: "chiefpansancolt",
      url: "https://chiefpansancolt.dev",
    },
    publisher: {
      "@type": "Person",
      name: "chiefpansancolt",
      url: "https://chiefpansancolt.dev",
    },
    downloadUrl: "https://github.com/chiefpansancolt/todo-list/releases/latest",
    installUrl: "https://todo-list.chiefpansancolt.dev/#downloads",
    screenshot: [
      {
        "@type": "ImageObject",
        url: "https://todo-list.chiefpansancolt.dev/TodoList.png",
        caption: "Todo List main interface showing task management features",
      },
    ],
    featureList: [
      "Task Management with CRUD operations",
      "Custom Color-Coded Categories",
      "Priority Levels (High, Medium, Low)",
      "Due Date Management with Calendar",
      "Dark Mode Support",
      "Drag and Drop Task Reordering",
      "Multi-language Support (10 Languages)",
      "Data Export/Import (JSON & CSV)",
      "Keyboard Shortcuts",
      "Offline Functionality",
      "Cross-Platform (Windows, macOS, Linux)",
    ],
    softwareVersion: "1.1.0",
    softwareRequirements: "Windows 10+, macOS 15+, Ubuntu 18.04+",
    datePublished: "2025-06-14",
    dateModified: "2025-06-21",
    license: "https://github.com/chiefpansancolt/todo-list/blob/main/LICENSE",
    inLanguage: ["en", "es", "fr", "de", "pt", "ja", "zh", "ko", "it", "nl"],
    description:
      "A powerful yet simple todo list app that finds the perfect middle ground between simple and complex task management. Features include custom categories, priorities, due dates, dark mode, and multi-language support.",
    keywords:
      "todo list, task management, productivity, desktop app, free, offline",
  };
}

export function generateFAQLD(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://todo-list.chiefpansancolt.dev/#faq",
    mainEntity: faqs.map((faq, index) => ({
      "@type": "Question",
      "@id": `https://todo-list.chiefpansancolt.dev/#faq-${index}`,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbLD(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationLD() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://chiefpansancolt.dev/#person",
    name: "chiefpansancolt",
    url: "https://chiefpansancolt.dev",
    sameAs: [
      "https://github.com/chiefpansancolt",
      "https://twitter.com/chiefpansancolt",
    ],
    knowsAbout: [
      "Software Development",
      "Task Management",
      "Productivity Apps",
    ],
  };
}

export function generateWebPageLD(params: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${params.url}#webpage`,
    url: params.url,
    name: params.title,
    description: params.description,
    isPartOf: {
      "@id": "https://todo-list.chiefpansancolt.dev/#website",
    },
    primaryImageOfPage: {
      "@id": "https://todo-list.chiefpansancolt.dev/TodoList.png",
    },
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: {
      "@id": "https://chiefpansancolt.dev/#person",
    },
    inLanguage: "en-US",
  };
}

export function generateWebSiteLD() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://todo-list.chiefpansancolt.dev/#website",
    url: "https://todo-list.chiefpansancolt.dev",
    name: "Todo List Desktop App",
    description: "Official website for the Todo List Desktop application",
    publisher: {
      "@id": "https://chiefpansancolt.dev/#person",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://todo-list.chiefpansancolt.dev/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };
}
