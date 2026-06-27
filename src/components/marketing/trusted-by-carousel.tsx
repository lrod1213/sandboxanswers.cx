import { cn } from "#/lib/utils.ts";

export type TrustedByLogo = {
	name: string;
	src: string;
	width?: number;
	height?: number;
};

const defaultLogos: TrustedByLogo[] = [
	{
		name: "Deutsche Telekom",
		src: "/images/trusted-by/deutsche-telekom.png",
		width: 52,
		height: 62,
	},
	{
		name: "Kellogg's",
		src: "/images/trusted-by/kelloggs.png",
		width: 159,
		height: 56,
	},
	{
		name: "Pearson",
		src: "/images/trusted-by/pearson.png",
		width: 151,
		height: 45,
	},
	{
		name: "Caterpillar",
		src: "/images/trusted-by/caterpillar.png",
		width: 170,
		height: 28,
	},
	{
		name: "Coursera",
		src: "/images/trusted-by/coursera.png",
		width: 120,
		height: 36,
	},
];

type TrustedByCarouselProps = {
	logos?: TrustedByLogo[];
	className?: string;
};

export function TrustedByCarousel({
	logos = defaultLogos,
	className,
}: TrustedByCarouselProps) {
	const trackLogos = [...logos, ...logos];

	return (
		<div
			className={cn(
				"mx-auto flex w-full max-w-4xl flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-8 lg:max-w-5xl",
				className,
			)}
		>
			<p className="shrink-0 text-body-sm-strong text-body">Trusted by:</p>
			<div
				className="relative min-w-0 w-full max-w-[18rem] overflow-hidden sm:max-w-[22rem] md:max-w-[26rem]"
				style={{
					maskImage:
						"linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
					WebkitMaskImage:
						"linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
				}}
			>
				<div className="trusted-by-track flex w-max items-center gap-10 py-1">
					{trackLogos.map((logo, index) => (
						<img
							key={`${logo.name}-${index}`}
							src={logo.src}
							alt={logo.name}
							width={logo.width}
							height={logo.height}
							className="h-7 w-auto max-w-[7.5rem] shrink-0 object-contain opacity-55 brightness-0 dark:opacity-70 dark:brightness-100"
							loading="lazy"
							decoding="async"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
