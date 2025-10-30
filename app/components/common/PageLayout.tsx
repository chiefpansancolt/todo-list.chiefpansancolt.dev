import type { PageLayoutProps } from "@/types/index";
import Footer from "@/comps/Footer";
import Navigation from "@/comps/Navigation";

export default function PageLayout({ children }: PageLayoutProps) {
	return (
		<>
			<Navigation />
			<main className="bg-white dark:bg-gray-900">
				<div className="mx-auto max-w-4xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">{children}</div>
			</main>
			<Footer />
		</>
	);
}
