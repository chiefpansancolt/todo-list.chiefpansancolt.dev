import { HiDatabase, HiLockClosed, HiShieldCheck } from "react-icons/hi";
import { generatePageMetadata } from "@/lib/seo";
import { ExternalLink } from "@/comps/common/ExternalLink";
import { InfoCards } from "@/comps/common/InfoCards";
import PageHeader from "@/comps/common/PageHeader";
import PageLayout from "@/comps/common/PageLayout";

export const metadata = generatePageMetadata({
	title: "Privacy Policy",
	description:
		"Privacy policy for the Todo List desktop application. Learn how we protect your data with local storage and zero data collection.",
	path: "/privacy",
	keywords: ["privacy policy", "data protection", "local storage", "no tracking"],
});

const privacyCards = [
	{
		icon: HiDatabase,
		iconColor: "text-green-600 dark:text-green-400",
		title: "Local Storage Only",
		description:
			"All your data stays on your device. We never access or store your information.",
	},
	{
		icon: HiLockClosed,
		iconColor: "text-blue-600 dark:text-blue-400",
		title: "No Data Collection",
		description: "We don't collect, track, or analyze any personal information.",
	},
	{
		icon: HiShieldCheck,
		iconColor: "text-purple-600 dark:text-purple-400",
		title: "Open Source",
		description: "Our code is transparent and available for review on GitHub.",
	},
];

export default function PrivacyPolicy() {
	return (
		<PageLayout>
			<PageHeader
				icon={HiShieldCheck}
				iconColor="from-green-600 to-emerald-600"
				title="Privacy Policy"
				description="Your privacy is our priority. Learn how we protect your data."
				lastUpdated="June 21, 2025"
			/>

			<InfoCards cards={privacyCards} />

			<div className="prose prose-lg dark:prose-invert max-w-none">
				<div className="mb-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
					<h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
						Summary
					</h2>
					<p className="text-gray-700 dark:text-gray-300">
						The Todo List desktop application is designed with privacy as a core
						principle. We do not collect, store, transmit, or have access to any of your
						personal data. All information you enter into the application remains
						locally on your device.
					</p>
				</div>

				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
						Information We Don&apos;t Collect
					</h2>
					<p className="mb-4 text-gray-700 dark:text-gray-300">
						Unlike many applications, we explicitly do NOT collect:
					</p>
					<ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
						<li>Personal information (names, email addresses, phone numbers)</li>
						<li>Task content, categories, or any todo list data</li>
						<li>Device information or system specifications</li>
						<li>IP addresses or location data</li>
						<li>Crash reports or error logs</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
						How Your Data is Stored
					</h2>
					<p className="mb-4 text-gray-700 dark:text-gray-300">
						All data created within the Todo List application is stored locally on your
						device using:
					</p>
					<ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
						<li>
							<strong>Local file storage:</strong> Your tasks, categories, and
							settings are saved in local files on your computer
						</li>
						<li>
							<strong>No cloud synchronization:</strong> Data never leaves your device
							unless you explicitly export it
						</li>
						<li>
							<strong>User-controlled backups:</strong> You can export your data as
							JSON or CSV files for backup purposes
						</li>
						<li>
							<strong>Complete ownership:</strong> You have full control over your
							data and can delete it at any time
						</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
						Network Connections
					</h2>
					<p className="mb-4 text-gray-700 dark:text-gray-300">
						The Todo List application operates completely offline and does not make any
						network connections for:
					</p>
					<ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
						<li>Data synchronization or backup</li>
						<li>Advertisement or tracking</li>
						<li>Software updates (manual updates only)</li>
						<li>License verification or activation</li>
					</ul>
					<p className="mt-4 text-gray-700 dark:text-gray-300">
						The only network activity occurs when you manually check for updates through
						our website or GitHub releases page.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
						Third-Party Services
					</h2>
					<p className="mb-4 text-gray-700 dark:text-gray-300">
						The Todo List application does not integrate with or send data to any
						third-party services, including:
					</p>
					<ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
						<li>Cloud storage providers</li>
						<li>Analytics services</li>
						<li>Advertising networks</li>
						<li>Social media platforms</li>
						<li>Error tracking services</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
						Data Security
					</h2>
					<p className="mb-4 text-gray-700 dark:text-gray-300">
						Since all data remains on your device:
					</p>
					<ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
						<li>Data security depends on your device&apos;s security measures</li>
						<li>We recommend using device encryption and strong passwords</li>
						<li>Regular backups of your exported data are advised</li>
						<li>No data transmission means no interception risks</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
						Updates to This Policy
					</h2>
					<p className="text-gray-700 dark:text-gray-300">
						Any updates to this privacy policy will be posted on our website and GitHub
						repository. Given the nature of our application (no data collection),
						changes to this policy are expected to be minimal and will always maintain
						our commitment to user privacy.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
						Open Source Transparency
					</h2>
					<p className="text-gray-700 dark:text-gray-300">
						Our application is open source, meaning you can review our code to verify
						our privacy claims. The source code is available at{" "}
						<ExternalLink href="https://github.com/chiefpansancolt/todo-list">
							https://github.com/chiefpansancolt/todo-list
						</ExternalLink>
					</p>
				</section>

				<section className="mb-8">
					<h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
						Contact Information
					</h2>
					<p className="text-gray-700 dark:text-gray-300">
						If you have questions about this privacy policy, please reach out through:
					</p>
					<ul className="mt-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
						<li>
							GitHub Issues:{" "}
							<ExternalLink href="https://github.com/chiefpansancolt/todo-list/issues">
								Report an issue
							</ExternalLink>
						</li>
						<li>
							Discord Server:{" "}
							<ExternalLink href="https://discord.gg/DMU3rRUh3A">
								Join our community
							</ExternalLink>
						</li>
						<li>
							Developer Website:{" "}
							<ExternalLink href="https://chiefpansancolt.dev">
								chiefpansancolt.dev
							</ExternalLink>
						</li>
					</ul>
				</section>
			</div>
		</PageLayout>
	);
}
