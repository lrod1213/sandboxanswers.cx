import { createFileRoute } from "@tanstack/react-router";

import { ProductPage } from "#/components/pages/product-page.tsx";
import { theAnswerLayer } from "#/content/products.ts";
import { createPageMeta } from "#/lib/seo.ts";

export const Route = createFileRoute("/theanswerlayer")({
	head: () => ({
		meta: createPageMeta({
			title: theAnswerLayer.seo.title,
			description: theAnswerLayer.seo.description,
			path: "/theanswerlayer",
		}),
	}),
	component: () => <ProductPage content={theAnswerLayer} />,
});
