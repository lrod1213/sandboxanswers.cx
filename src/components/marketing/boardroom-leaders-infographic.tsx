import { cn } from "#/lib/utils.ts";

type BoardroomLeadersInfographicProps = {
	className?: string;
};

export function BoardroomLeadersInfographic({
	className,
}: BoardroomLeadersInfographicProps) {
	return (
		<div
			className={cn(
				"overflow-hidden rounded-[var(--rounded-md)] border border-hairline bg-ink shadow-[var(--shadow-elev-4)]",
				className,
			)}
		>
			<img
				src="/images/hire-your-team-boardroom-leaders.png"
				alt="The right leaders at one table—CEO, Marketer, Finance, and Risk Officer aligned around one source of truth from The Answer Layer."
				width={1024}
				height={682}
				className="w-full"
				loading="lazy"
				decoding="async"
			/>
		</div>
	);
}
