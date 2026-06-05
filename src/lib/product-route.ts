import type { ProductPageContent } from "#/content/products.ts";
import { createPageHeadFromContent } from "#/lib/seo.ts";

export function createProductRouteOptions(product: ProductPageContent) {
	return {
		head: () => createPageHeadFromContent(product.seo),
	};
}
