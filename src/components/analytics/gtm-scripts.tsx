import { analyticsConfig, isGtmEnabled } from "#/config/analytics.ts";

export function GtmHeadScript() {
	if (!isGtmEnabled()) return null;

	const gtmId = analyticsConfig.gtmId;

	return (
		<script
			// biome-ignore lint/security/noDangerouslySetInnerHtml: GTM bootstrap snippet
			dangerouslySetInnerHTML={{
				__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
			}}
		/>
	);
}

export function GtmNoScript() {
	if (!isGtmEnabled()) return null;

	return (
		<noscript>
			<iframe
				title="Google Tag Manager"
				src={`https://www.googletagmanager.com/ns.html?id=${analyticsConfig.gtmId}`}
				height="0"
				width="0"
				style={{ display: "none", visibility: "hidden" }}
			/>
		</noscript>
	);
}
