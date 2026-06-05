import { siteConfig } from "#/config/site.ts";

const organizationJsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: siteConfig.name,
	legalName: siteConfig.legalName,
	url: siteConfig.url,
	description: siteConfig.description,
	sameAs: [siteConfig.trustCenterUrl],
};

const websiteJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: siteConfig.name,
	url: siteConfig.url,
	description: siteConfig.description,
	publisher: {
		"@type": "Organization",
		name: siteConfig.name,
		url: siteConfig.url,
	},
};

export function OrganizationJsonLd() {
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD
			dangerouslySetInnerHTML={{
				__html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
			}}
		/>
	);
}
