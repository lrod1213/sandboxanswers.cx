export const THEME_STORAGE_KEY = "cx-theme";

export type Theme = "light" | "dark" | "system";

export type ResolvedTheme = "light" | "dark";

export function getSystemTheme(): ResolvedTheme {
	if (typeof window === "undefined") {
		return "light";
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

export function resolveTheme(theme: Theme): ResolvedTheme {
	return theme === "system" ? getSystemTheme() : theme;
}

export function applyTheme(theme: Theme) {
	const resolved = resolveTheme(theme);
	document.documentElement.classList.toggle("dark", resolved === "dark");
	document.documentElement.dataset.theme = resolved;
}

export function readStoredTheme(): Theme {
	if (typeof window === "undefined") {
		return "system";
	}

	const stored = localStorage.getItem(THEME_STORAGE_KEY);
	if (stored === "light" || stored === "dark" || stored === "system") {
		return stored;
	}

	return "system";
}
