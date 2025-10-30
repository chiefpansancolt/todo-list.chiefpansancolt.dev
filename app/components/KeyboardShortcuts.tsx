"use client";

import { shortcutCategories, shortcutsConfig } from "@/constants/data";
import {
	createKeyboardShortcuts,
	getKeyboardKeyClasses,
	getPlatformInstructions,
	groupShortcutsByCategory,
	type KeyboardKeyProps,
} from "@/utils/keyboard";
import { detectMac } from "@/utils/platform";
import { useEffect, useState } from "react";
import { MdKeyboard } from "react-icons/md";

const KeyboardKey: React.FC<KeyboardKeyProps> = ({ keyContent, className }) => (
	<kbd className={getKeyboardKeyClasses(className)}>{keyContent}</kbd>
);

export default function KeyboardShortcuts() {
	const [isMac, setIsMac] = useState(false);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		setIsMac(detectMac());
	}, []);

	if (!isClient) {
		return (
			<section id="shortcuts" className="bg-white py-24 dark:bg-gray-800">
				<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<div className="mb-4 flex justify-center">
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
								<MdKeyboard className="h-8 w-8 text-gray-600 dark:text-gray-300" />
							</div>
						</div>
						<h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
							Keyboard Shortcuts
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
							Loading shortcuts...
						</p>
					</div>
				</div>
			</section>
		);
	}

	const shortcuts = createKeyboardShortcuts(shortcutsConfig, isMac);
	const groupedShortcuts = groupShortcutsByCategory(shortcuts);

	return (
		<section id="shortcuts" className="bg-white py-24 dark:bg-gray-800">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<div className="mb-4 flex justify-center">
						<div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
							<MdKeyboard className="h-8 w-8 text-white" />
						</div>
					</div>
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
						Keyboard Shortcuts
					</h2>
					<p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
						Boost your productivity with powerful keyboard shortcuts.{" "}
						{getPlatformInstructions(isMac)}
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{Object.entries(shortcutCategories).map(([categoryKey, categoryInfo]) => {
						const categoryShortcuts = groupedShortcuts[categoryKey];

						if (!categoryShortcuts || categoryShortcuts.length === 0) return null;

						return (
							<div key={categoryKey} className="space-y-4">
								<div
									className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${categoryInfo.color}`}
								>
									{categoryInfo.title}
								</div>

								<div className="space-y-3">
									{categoryShortcuts.map((shortcut, index) => (
										<div
											key={index}
											className="rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-950 dark:hover:border-gray-600"
										>
											<div className="mb-2 flex flex-wrap gap-1">
												{shortcut.keys.map((key, keyIndex) => (
													<span
														key={keyIndex}
														className="flex items-center"
													>
														<KeyboardKey keyContent={key} />
														{keyIndex < shortcut.keys.length - 1 && (
															<span className="mx-1 text-gray-400 dark:text-gray-500">
																+
															</span>
														)}
													</span>
												))}
											</div>
											<p className="text-sm text-gray-600 dark:text-gray-300">
												{shortcut.description}
											</p>
										</div>
									))}
								</div>
							</div>
						);
					})}
				</div>

				<div className="mt-8 rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800">
					<p className="text-sm text-gray-600 dark:text-gray-400">
						<strong>Pro Tip:</strong> Most shortcuts work from anywhere in the app.
						Press <KeyboardKey keyContent="Esc" category="navigation" /> to quickly
						close any modal or cancel the current action.
					</p>
				</div>
			</div>
		</section>
	);
}
