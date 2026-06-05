import { createFileRoute, Link } from "@tanstack/react-router";

import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
import { createPageMeta } from "#/lib/seo.ts";

export const Route = createFileRoute("/success")({
	head: () => ({
		meta: createPageMeta({
			title: "Thank you",
			description: "We received your message and will be in touch soon.",
			path: "/success",
		}),
	}),
	component: SuccessPage,
});

function SuccessPage() {
	return (
		<SectionBand className="pt-[var(--spacing-5xl)]">
			<div className="mx-auto max-w-xl text-center">
				<p className="section-eyebrow mb-4">Success</p>
				<h1 className="text-display-lg mb-4">Thank you for reaching out.</h1>
				<p className="text-body-lg mb-8 text-body">
					We received your message and will get back to you shortly.
				</p>
				<div className="flex flex-wrap justify-center gap-3">
					<Button asChild size="lg">
						<Link to="/">Back to home</Link>
					</Button>
					<Button asChild variant="outline" size="lg">
						<Link to="/theanswerlayer">Explore The Answer Layer</Link>
					</Button>
				</div>
			</div>
		</SectionBand>
	);
}
