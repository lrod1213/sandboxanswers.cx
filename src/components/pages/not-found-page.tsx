import { Link } from "@tanstack/react-router";

import { SectionBand } from "#/components/marketing/section-band.tsx";
import { Button } from "#/components/ui/button.tsx";
import { notFoundPageContent } from "#/content/contact.ts";

export function NotFoundPage() {
	return (
		<SectionBand className="pt-[var(--spacing-5xl)]">
			<div className="mx-auto max-w-xl text-center">
				<p className="section-eyebrow mb-4">404</p>
				<h1 className="text-display-lg mb-4">{notFoundPageContent.title}</h1>
				<p className="text-body-lg mb-8 text-body">{notFoundPageContent.body}</p>
				<Button asChild size="lg">
					<Link to="/">Go home</Link>
				</Button>
				<p className="mt-6 text-body-sm">
					<Link to="/contact" className="text-link hover:underline">
						Contact us
					</Link>
				</p>
			</div>
		</SectionBand>
	);
}
