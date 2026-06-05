import { Moon, Sun } from "lucide-react";

import { useTheme } from "#/components/theme/theme-provider.tsx";
import { Button } from "#/components/ui/button.tsx";
import { cn } from "#/lib/utils.ts";

type ThemeToggleProps = {
	className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
	const { resolvedTheme, toggleTheme } = useTheme();
	const isDark = resolvedTheme === "dark";

	return (
		<Button
			type="button"
			variant="outline"
			size="icon-sm"
			className={cn("shrink-0", className)}
			onClick={toggleTheme}
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
		>
			<Sun className="size-4 dark:hidden" aria-hidden />
			<Moon className="hidden size-4 dark:block" aria-hidden />
		</Button>
	);
}
