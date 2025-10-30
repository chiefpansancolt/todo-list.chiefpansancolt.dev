"use client";

import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaDownload, FaFileCode, FaKeyboard, FaQuestion } from "react-icons/fa6";
import { HiCollection } from "react-icons/hi";

export default function Navigation() {
	const pathname = usePathname();

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const isHomePage = pathname === "/";

	const navigationItems = [
		{
			href: "/#features",
			sectionId: "features",
			icon: HiCollection,
			label: "Features",
		},
		{
			href: "/#shortcuts",
			sectionId: "shortcuts",
			icon: FaKeyboard,
			label: "Shortcuts",
		},
		{
			href: "/#downloads",
			sectionId: "downloads",
			icon: FaDownload,
			label: "Downloads",
		},
		{
			href: "/#faq",
			sectionId: "faq",
			icon: FaQuestion,
			label: "FAQ",
		},
		{
			href: "/changelog",
			sectionId: null,
			icon: FaFileCode,
			label: "Changelog",
		},
	];

	return (
		<Navbar
			fluid
			rounded={false}
			className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/95"
		>
			<NavbarBrand href="/" className="space-x-3">
				<Image
					src="/logo.svg"
					className="h-8 w-8"
					alt="Todo List Logo"
					width={32}
					height={32}
				/>
				<span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
					Todo List
				</span>
			</NavbarBrand>

			<div className="flex items-center space-x-3 md:order-2">
				<NavbarToggle className="cursor-pointer" />
			</div>

			<NavbarCollapse>
				{navigationItems.map((item) => {
					const IconComponent = item.icon;

					return (
						<NavbarLink
							key={item.label}
							href={item.href}
							onClick={
								item.sectionId && isHomePage
									? (e) => {
											e.preventDefault();
											scrollToSection(item.sectionId);
										}
									: undefined
							}
							className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
						>
							<IconComponent className="h-4 w-4" />
							<span>{item.label}</span>
						</NavbarLink>
					);
				})}
			</NavbarCollapse>
		</Navbar>
	);
}
