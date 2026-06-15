import { useFeatureFlagVariantKey } from "@posthog/react";

import {
	type ExperimentFlagKey,
	getSiteCtaBandCopy,
	siteCtaBandExperiment,
} from "#/config/experiments.ts";
import { isPostHogEnabled } from "#/config/analytics.ts";

export function useExperimentVariant(flagKey: ExperimentFlagKey) {
	const variant = useFeatureFlagVariantKey(flagKey);

	return {
		variant,
		isLoading: isPostHogEnabled() && variant === undefined,
		isEnabled: isPostHogEnabled(),
	};
}

export function useSiteCtaBandExperiment() {
	const { variant, isLoading, isEnabled } = useExperimentVariant(
		siteCtaBandExperiment.flagKey,
	);

	return {
		copy: getSiteCtaBandCopy(variant),
		variant:
			typeof variant === "string"
				? variant
				: siteCtaBandExperiment.defaultVariant,
		isLoading,
		isEnabled,
	};
}
