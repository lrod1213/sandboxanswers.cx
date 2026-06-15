export type ExperimentVariant = "control" | string;

export type CtaBandCopy = {
	subtitle: string;
	title: string;
	primaryLabel: string;
};

export const experimentFlags = {
	siteCtaBand: "site-cta-band-copy",
} as const;

export type ExperimentFlagKey =
	(typeof experimentFlags)[keyof typeof experimentFlags];

export const siteCtaBandExperiment = {
	flagKey: experimentFlags.siteCtaBand,
	variants: {
		control: {
			subtitle: "Level up your team today",
			title: "Uncover the answers hidden in your data",
			primaryLabel: "Get in touch",
		},
		"pilot-first": {
			subtitle: "Start with a pilot on your data",
			title: "See what your customers are already telling you",
			primaryLabel: "Book a pilot",
		},
	} satisfies Record<string, CtaBandCopy>,
	defaultVariant: "control",
} as const;

export type SiteCtaBandVariant = keyof typeof siteCtaBandExperiment.variants;

export function getSiteCtaBandCopy(
	variant: string | boolean | undefined,
): CtaBandCopy {
	if (
		typeof variant === "string" &&
		variant in siteCtaBandExperiment.variants
	) {
		return siteCtaBandExperiment.variants[
			variant as SiteCtaBandVariant
		];
	}

	return siteCtaBandExperiment.variants[siteCtaBandExperiment.defaultVariant];
}
