import { cn } from "#/lib/utils.ts";

const defaultBrands = [
	"Vodafone",
	"Deutsche Telekom",
	"Bright Horizons",
	"Salesforce",
	"Zendesk",
	"Genesys",
];

type LogoStripProps = {
	title?: string;
	brands?: string[];
	className?: string;
};

export function LogoStrip({
	title = "Trusted by the most valuable brands",
	brands = defaultBrands,
	className,
}: LogoStripProps) {
	return (
		<div className={cn("mx-auto max-w-5xl text-center", className)}>
			<p className="section-eyebrow mb-4">Proof layer</p>
			<h3 className="text-display-sm mb-8">{title}</h3>
			<ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--rounded-lg)] bg-hairline shadow-[var(--shadow-inset)] sm:grid-cols-3 lg:grid-cols-6">
				{brands.map((brand) => (
					<li
						key={brand}
						className="flex min-h-20 items-center justify-center bg-canvas px-4 text-center text-body-sm-strong text-body"
					>
						{brand}
					</li>
				))}
			</ul>
		</div>
	);
}
