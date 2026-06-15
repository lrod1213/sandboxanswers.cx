import { ClientOnly, Link } from "@tanstack/react-router";

import { useSiteCtaBandExperiment } from "#/hooks/use-experiment-variant.ts";
import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
import {
	getSiteCtaBandCopy,
	siteCtaBandExperiment,
} from "#/config/experiments.ts";

type CtaBandProps = {
	title?: string;
	subtitle?: string;
	primaryLabel?: string;
	primaryHref?: string;
};

function CtaBandContent({
	primaryHref = "/contact",
}: {
	primaryHref?: string;
}) {
	const { copy, isLoading } = useSiteCtaBandExperiment();

	if (isLoading) {
		return (
			<div className="rounded-[var(--rounded-lg)] bg-canvas p-8 text-center elev-4 md:p-12">
				<div className="mx-auto mb-4 h-4 w-40 animate-pulse rounded-full bg-hairline" />
				<div className="mx-auto mb-8 h-10 max-w-md animate-pulse rounded-[var(--rounded-md)] bg-hairline" />
				<div className="mx-auto h-12 w-36 animate-pulse rounded-[var(--rounded-sm)] bg-hairline" />
			</div>
		);
	}

	return (
		<div className="rounded-[var(--rounded-lg)] bg-canvas p-8 text-center elev-4 md:p-12">
			<p className="section-eyebrow mb-4">{copy.subtitle}</p>
			<h2 className="text-display-lg mx-auto mb-8 max-w-2xl">{copy.title}</h2>
			<Button asChild size="lg">
				<Link to={primaryHref}>{copy.primaryLabel}</Link>
			</Button>
		</div>
	);
}

function CtaBandFallback({
	title,
	subtitle,
	primaryLabel,
	primaryHref = "/contact",
}: Required<Pick<CtaBandProps, "title" | "subtitle" | "primaryLabel">> &
	Pick<CtaBandProps, "primaryHref">) {
	return (
		<div className="rounded-[var(--rounded-lg)] bg-canvas p-8 text-center elev-4 md:p-12">
			<p className="section-eyebrow mb-4">{subtitle}</p>
			<h2 className="text-display-lg mx-auto mb-8 max-w-2xl">{title}</h2>
			<Button asChild size="lg">
				<Link to={primaryHref}>{primaryLabel}</Link>
			</Button>
		</div>
	);
}

export function CtaBand({
	title,
	subtitle,
	primaryLabel,
	primaryHref = "/contact",
}: CtaBandProps) {
	const defaultCopy = getSiteCtaBandCopy(siteCtaBandExperiment.defaultVariant);
	const resolvedTitle = title ?? defaultCopy.title;
	const resolvedSubtitle = subtitle ?? defaultCopy.subtitle;
	const resolvedPrimaryLabel = primaryLabel ?? defaultCopy.primaryLabel;
	const useExperiment = !title && !subtitle && !primaryLabel;

	return (
		<SectionBand variant="soft" className="border-t border-hairline">
			{useExperiment ? (
				<ClientOnly
					fallback={
						<CtaBandFallback
							title={resolvedTitle}
							subtitle={resolvedSubtitle}
							primaryLabel={resolvedPrimaryLabel}
							primaryHref={primaryHref}
						/>
					}
				>
					<CtaBandContent primaryHref={primaryHref} />
				</ClientOnly>
			) : (
				<CtaBandFallback
					title={resolvedTitle}
					subtitle={resolvedSubtitle}
					primaryLabel={resolvedPrimaryLabel}
					primaryHref={primaryHref}
				/>
			)}
		</SectionBand>
	);
}
