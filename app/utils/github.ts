import type { GitHubRelease } from "@/types/index";

const GITHUB_API_BASE =
  "https://api.github.com/repos/chiefpansancolt/todo-list";

/**
 * Fetches the latest release from GitHub API
 */
export const fetchLatestRelease = async (): Promise<GitHubRelease> => {
  const response = await fetch(`${GITHUB_API_BASE}/releases/latest`);

  if (!response.ok) {
    throw new Error(`Failed to fetch latest release: ${response.statusText}`);
  }

  return response.json();
};

/**
 * Gets the GitHub URL for a specific release
 */
export const getReleaseUrl = (version: string): string => {
  return `https://github.com/chiefpansancolt/todo-list/releases/tag/v${version}`;
};

/**
 * Gets the GitHub URL for a releases page
 */
export const getReleasesUrl = (): string => {
  return `https://github.com/chiefpansancolt/todo-list/releases`;
};

/**
 * Gets the GitHub issues URL
 */
export const getIssuesUrl = (): string => {
  return `https://github.com/chiefpansancolt/todo-list/issues`;
};

/**
 * Gets the GitHub repository URL
 */
export const getRepositoryUrl = (): string => {
  return `https://github.com/chiefpansancolt/todo-list`;
};
