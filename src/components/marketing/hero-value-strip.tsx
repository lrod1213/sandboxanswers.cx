import { Mail, Sparkles, UserRound, type LucideIcon } from "lucide-react";

import { cn } from "#/lib/utils.ts";

const heroValues = [
	{
		title: "Daily Briefs",
		description: "Delivered to your inbox.",
		icon: Mail,
	},
	{
		title: "Instant Answers",
		description: "Ask your data anything.",
		icon: Sparkles,
	},
	{
		title: "AI Chief of Staff",
		description: "Guides what to act on next.",
		icon: UserRound,
	},
] as const satisfies readonly {
	title: string;
	description: string;
	icon: LucideIcon;
}[];

type HeroValueStripProps = {
	className?: string;
};

export function HeroValueStrip({ className }: HeroValueStripProps) {
	return (
		<div
			className={cn(
				"relative overflow-hidden rounded-[var(--rounded-sm)] border border-hairline bg-canvas/85 shadow-[var(--shadow-inset)] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-link/25 before:to-transparent",
				className,
			)}
		>
			<ul className="grid divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
				{heroValues.map((item) => {
					const Icon = item.icon;
					return (
						<li key={item.title} className="px-3 py-2.5 sm:px-3 sm:py-3">
							<div className="flex items-start gap-2">
								<span className="inline-flex size-7 shrink-0 items-center justify-center rounded-[6px] border border-link/15 bg-link-bg-soft text-link">
									<Icon className="size-3.5" aria-hidden />
								</span>
								<div className="min-w-0">
									<p className="text-body-sm-strong leading-tight text-ink">
										{item.title}
									</p>
									<p className="mt-0.5 text-caption leading-snug text-body">
										{item.description}
									</p>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
