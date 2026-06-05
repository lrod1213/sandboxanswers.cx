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
		<div className={cn("text-center", className)}>
			<p className="font-mono-caption mb-8 text-mute">Customer logos</p>
			<h3 className="text-display-sm mb-10">{title}</h3>
			<ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
				{brands.map((brand) => (
					<li
						key={brand}
						className="text-body-sm font-medium tracking-wide text-body/80 uppercase"
					>
						{brand}
					</li>
				))}
			</ul>
		</div>
	);
}
