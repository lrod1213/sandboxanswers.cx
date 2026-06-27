import type { ReactNode } from "react";

import { cn } from "#/lib/utils.ts";

type BannerPillProps = {
	children: ReactNode;
	className?: string;
	showDot?: boolean;
};

export function BannerPill({
	children,
	className,
	showDot = false,
}: BannerPillProps) {
	return (
		<span
			className={cn(
				"inline-flex max-w-full items-center rounded-full border border-hairline bg-canvas px-3 py-1 text-center text-body-sm text-body leading-snug shadow-[var(--shadow-inset)] sm:text-left sm:text-body-sm-strong",
				showDot && "gap-2",
				className,
			)}
		>
			{showDot ? (
				<span
					className="size-1.5 shrink-0 rounded-full bg-link"
					aria-hidden
				/>
			) : null}
			{children}
		</span>
	);
}
