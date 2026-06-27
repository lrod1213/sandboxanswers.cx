import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

import {
	applyTheme,
	readStoredTheme,
	resolveTheme,
	type ResolvedTheme,
	THEME_STORAGE_KEY,
	type Theme,
} from "#/lib/theme.ts";

type ThemeContextValue = {
	theme: Theme;
	resolvedTheme: ResolvedTheme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setThemeState] = useState<Theme>(() => readStoredTheme());
	const resolvedTheme = resolveTheme(theme);

	useEffect(() => {
		applyTheme("dark");
		localStorage.setItem(THEME_STORAGE_KEY, "dark");
	}, [theme]);

	const setTheme = useCallback((_next: Theme) => {
		setThemeState("dark");
	}, []);

	const toggleTheme = useCallback(() => {
		setThemeState("dark");
	}, []);

	const value = useMemo(
		() => ({
			theme,
			resolvedTheme,
			setTheme,
			toggleTheme,
		}),
		[theme, resolvedTheme, setTheme, toggleTheme],
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within ThemeProvider");
	}
	return context;
}
