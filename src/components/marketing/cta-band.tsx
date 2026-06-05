import { MarketingButton } from "#/components/marketing/marketing-button.tsx";
import { SectionBand } from "#/components/marketing/section-band.tsx";

type CtaBandProps = {
	title?: string;
	subtitle?: string;
	primaryLabel?: string;
	primaryHref?: string;
};

export function CtaBand({
	title = "Uncover the answers hidden in your data",
	subtitle = "Try it today for free",
	primaryLabel = "Get in touch",
	primaryHref = "/contact",
}: CtaBandProps) {
	return (
		<SectionBand variant="soft" className="border-t border-hairline">
			<div className="mx-auto max-w-2xl text-center">
				<p className="font-mono-caption mb-4 text-mute">{subtitle}</p>
				<h2 className="text-display-lg mb-8">{title}</h2>
				<MarketingButton to={primaryHref}>{primaryLabel}</MarketingButton>
			</div>
		</SectionBand>
	);
}
