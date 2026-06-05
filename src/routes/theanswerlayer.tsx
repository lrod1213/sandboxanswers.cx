import { createFileRoute } from "@tanstack/react-router";

import { ProductPage } from "#/components/pages/product-page.tsx";
import { theAnswerLayer } from "#/content/products.ts";
import { createProductRouteOptions } from "#/lib/product-route.ts";

export const Route = createFileRoute("/theanswerlayer")({
	...createProductRouteOptions(theAnswerLayer),
	component: () => <ProductPage content={theAnswerLayer} />,
});
