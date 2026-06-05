import { cn } from "#/lib/utils.ts";

type MeshGradientProps = {
	className?: string;
};

export function MeshGradient({ className }: MeshGradientProps) {
	return (
		<div
			className={cn(
				"marketing-hero-atmosphere bg-[radial-gradient(circle_at_50%_0%,var(--mesh-radial-center),transparent_52%)]",
				className,
			)}
			aria-hidden
		>
			<svg
				className="absolute inset-0 size-full opacity-80"
				viewBox="0 0 1200 720"
				preserveAspectRatio="xMidYMin slice"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<defs>
					<filter id="mesh-blur" x="-50%" y="-50%" width="200%" height="200%">
						<feGaussianBlur stdDeviation="96" />
					</filter>
					<linearGradient id="mesh-fade" x1="600" x2="600" y1="0" y2="720">
						<stop stopColor="var(--mesh-fade-color)" />
						<stop
							offset="0.68"
							stopColor="var(--mesh-fade-color)"
							stopOpacity="0.8"
						/>
						<stop
							offset="1"
							stopColor="var(--mesh-fade-color)"
							stopOpacity="0"
						/>
					</linearGradient>
					<mask id="mesh-mask">
						<rect width="1200" height="720" fill="url(#mesh-fade)" />
					</mask>
				</defs>
				<g filter="url(#mesh-blur)" mask="url(#mesh-mask)">
					<ellipse
						cx="80"
						cy="250"
						rx="420"
						ry="280"
						fill="var(--gradient-develop-start)"
						fillOpacity="0.5"
					/>
					<ellipse
						cx="600"
						cy="170"
						rx="380"
						ry="260"
						fill="var(--gradient-develop-end)"
						fillOpacity="0.42"
					/>
					<ellipse
						cx="1120"
						cy="330"
						rx="360"
						ry="240"
						fill="var(--gradient-preview-start)"
						fillOpacity="0.36"
					/>
					<ellipse
						cx="520"
						cy="470"
						rx="380"
						ry="260"
						fill="var(--gradient-preview-end)"
						fillOpacity="0.32"
					/>
					<ellipse
						cx="40"
						cy="540"
						rx="320"
						ry="210"
						fill="var(--gradient-ship-start)"
						fillOpacity="0.26"
					/>
					<ellipse
						cx="1160"
						cy="520"
						rx="300"
						ry="200"
						fill="var(--gradient-ship-end)"
						fillOpacity="0.3"
					/>
				</g>
			</svg>
		</div>
	);
}
