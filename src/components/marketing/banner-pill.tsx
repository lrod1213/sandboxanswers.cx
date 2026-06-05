import type { ReactNode } from "react";

import { cn } from "#/lib/utils.ts";

type BannerPillProps = {
	children: ReactNode;
	className?: string;
};

export function BannerPill({ children, className }: BannerPillProps) {
	return (
		<span
			className={cn(
				"inline-flex max-w-full items-center rounded-full border border-hairline bg-canvas px-3 py-1 text-center text-body-sm text-body leading-snug shadow-[var(--shadow-inset)] sm:text-left sm:text-body-sm-strong",
				className,
			)}
		>
			{children}
		</span>
	);
}
