import { Link } from "@tanstack/react-router";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";

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
			<div className="rounded-[var(--rounded-lg)] bg-canvas p-8 text-center elev-4 md:p-12">
				<p className="section-eyebrow mb-4">{subtitle}</p>
				<h2 className="text-display-lg mx-auto mb-8 max-w-2xl">{title}</h2>
				<Button asChild size="lg">
					<Link to={primaryHref}>{primaryLabel}</Link>
				</Button>
			</div>
		</SectionBand>
	);
}
