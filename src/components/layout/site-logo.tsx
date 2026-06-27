import { cn } from "#/lib/utils.ts";

type SiteLogoProps = {
	className?: string;
};

export function SiteLogo({ className }: SiteLogoProps) {
	return (
		<span className={cn("inline-flex items-center", className)}>
			<img
				src="/logo-cxconnect-wordmark.png"
				alt="cxconnect.ai"
				className="h-5 w-auto sm:h-[1.375rem]"
				width={165}
				height={20}
				decoding="async"
			/>
		</span>
	);
}
