export const THEME_STORAGE_KEY = "cx-theme";

export type Theme = "light" | "dark" | "system";

export type ResolvedTheme = "light" | "dark";

export function getSystemTheme(): ResolvedTheme {
	return "dark";
}

export function resolveTheme(_theme: Theme): ResolvedTheme {
	return "dark";
}

export function applyTheme(_theme: Theme = "dark") {
	document.documentElement.classList.add("dark");
	document.documentElement.dataset.theme = "dark";
}

export function readStoredTheme(): Theme {
	return "dark";
}
