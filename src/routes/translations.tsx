import { createFileRoute } from "@tanstack/react-router";

import { ProductPage } from "#/components/pages/product-page.tsx";
import { translations } from "#/content/products.ts";
import { createPageMeta } from "#/lib/seo.ts";

export const Route = createFileRoute("/translations")({
	head: () => ({
		meta: createPageMeta({
			title: translations.seo.title,
			description: translations.seo.description,
			path: "/translations",
		}),
	}),
	component: () => <ProductPage content={translations} />,
});
