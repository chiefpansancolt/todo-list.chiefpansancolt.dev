import { faqData } from "@/constants/data";
import { Metadata } from "next";
import Script from "next/script";
import { generatePageMetadata } from "@/lib/seo";
import {
	generateBreadcrumbLD,
	generateFAQLD,
	generateSoftwareApplicationLD,
	generateWebPageLD,
} from "@/lib/structured-data";
import Downloads from "@/comps/Downloads";
import FAQ from "@/comps/FAQ";
import Features from "@/comps/Features";
import Footer from "@/comps/Footer";
import Hero from "@/comps/Hero";
import KeyboardShortcuts from "@/comps/KeyboardShortcuts";
import Navigation from "@/comps/Navigation";
import SupportedLanguages from "@/comps/SupportedLanguages";

export const metadata: Metadata = generatePageMetadata({
	title: "Todo List Desktop App",
	description:
		"Download the free Todo List Desktop app for Mac, Windows, and Linux. Perfect task management with categories, priorities, due dates, and dark mode. Works offline, supports 10 languages.",
	keywords: [
		"todo list app download",
		"free task manager",
		"desktop productivity app",
		"offline todo list",
		"task management software",
		"mac windows linux app",
		"drag drop todo list",
		"dark mode task app",
		"multilingual todo app",
		"keyboard shortcuts todo",
		"todo app with categories",
		"priority task management",
		"due date reminders",
	],
});

export default function Home() {
	const softwareLD = generateSoftwareApplicationLD();
	const faqLD = generateFAQLD(faqData);
	const webPageLD = generateWebPageLD({
		title: "Todo List Desktop App - Task Management Made Simple",
		description:
			"Download the free Todo List Desktop app for Mac, Windows, and Linux. Perfect task management with categories, priorities, due dates, and dark mode.",
		url: "https://todo-list.chiefpansancolt.dev",
		datePublished: "2025-06-14",
		dateModified: new Date().toISOString(),
	});
	const breadcrumbLD = generateBreadcrumbLD([
		{ name: "Home", url: "https://todo-list.chiefpansancolt.dev" },
	]);

	return (
		<>
			<Navigation />

			<main itemScope itemType="https://schema.org/SoftwareApplication">
				<Hero />

				<article className="bg-gray-900">
					<section id="features" aria-labelledby="features-heading">
						<h2 id="features-heading" className="sr-only">
							Application Features
						</h2>
						<Features />
					</section>

					<section id="languages" aria-labelledby="languages-heading">
						<h2 id="languages-heading" className="sr-only">
							Supported Languages
						</h2>
						<SupportedLanguages />
					</section>

					<section id="shortcuts" aria-labelledby="shortcuts-heading">
						<h2 id="shortcuts-heading" className="sr-only">
							Keyboard Shortcuts
						</h2>
						<KeyboardShortcuts />
					</section>

					<section id="downloads" aria-labelledby="downloads-heading">
						<h2 id="downloads-heading" className="sr-only">
							Download Options
						</h2>
						<Downloads />
					</section>

					<section id="faq" aria-labelledby="faq-heading">
						<h2 id="faq-heading" className="sr-only">
							Frequently Asked Questions
						</h2>
						<FAQ />
					</section>
				</article>
			</main>

			<Footer />

			<Script
				id="software-application-ld"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLD) }}
			/>
			<Script
				id="faq-ld"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLD) }}
			/>
			<Script
				id="webpage-ld"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLD) }}
			/>
			<Script
				id="breadcrumb-ld"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLD) }}
			/>

			<link rel="preload" href="/TodoList.png" as="image" />
		</>
	);
}
