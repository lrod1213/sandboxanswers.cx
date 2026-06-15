import { PostHogFeature } from "@posthog/react";
import { ClientOnly } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { isPostHogEnabled } from "#/config/analytics.ts";

type ExperimentProps = {
	flag: string;
	match: string;
	fallback: ReactNode;
	children: ReactNode;
};

export function Experiment({ flag, match, fallback, children }: ExperimentProps) {
	if (!isPostHogEnabled()) {
		return <>{fallback}</>;
	}

	return (
		<ClientOnly fallback={fallback}>
			<PostHogFeature flag={flag} match={match} fallback={fallback}>
				{children}
			</PostHogFeature>
		</ClientOnly>
	);
}
