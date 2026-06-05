import { Link } from "@tanstack/react-router";

import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
import { successPageContent } from "#/content/contact.ts";

export function SuccessPage() {
	return (
		<SectionBand className="pt-[var(--spacing-5xl)]">
			<div className="mx-auto max-w-xl text-center">
				<p className="section-eyebrow mb-4">Success</p>
				<h1 className="text-display-lg mb-4">{successPageContent.title}</h1>
				<p className="text-body-lg mb-8 text-body">{successPageContent.body}</p>
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
