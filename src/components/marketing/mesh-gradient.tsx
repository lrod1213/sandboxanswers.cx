import { cn } from "#/lib/utils.ts";

type MeshGradientProps = {
	className?: string;
};

export function MeshGradient({ className }: MeshGradientProps) {
	return (
		<div
			className={cn(
				"pointer-events-none absolute inset-0 overflow-hidden",
				className,
			)}
			aria-hidden
		>
			<svg
				className="absolute left-1/2 top-0 h-[min(720px,80vh)] w-[min(1200px,140%)] -translate-x-1/2 opacity-90"
				viewBox="0 0 1200 720"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<defs>
					<filter id="mesh-blur" x="-50%" y="-50%" width="200%" height="200%">
						<feGaussianBlur stdDeviation="80" />
					</filter>
				</defs>
				<g filter="url(#mesh-blur)">
					<ellipse
						cx="280"
						cy="280"
						rx="320"
						ry="240"
						fill="var(--gradient-develop-start)"
						fillOpacity="0.55"
					/>
					<ellipse
						cx="720"
						cy="200"
						rx="280"
						ry="220"
						fill="var(--gradient-develop-end)"
						fillOpacity="0.45"
					/>
					<ellipse
						cx="900"
						cy="380"
						rx="260"
						ry="200"
						fill="var(--gradient-preview-start)"
						fillOpacity="0.4"
					/>
					<ellipse
						cx="520"
						cy="480"
						rx="300"
						ry="220"
						fill="var(--gradient-preview-end)"
						fillOpacity="0.35"
					/>
					<ellipse
						cx="200"
						cy="520"
						rx="240"
						ry="180"
						fill="var(--gradient-ship-start)"
						fillOpacity="0.3"
					/>
					<ellipse
						cx="1000"
						cy="520"
						rx="220"
						ry="160"
						fill="var(--gradient-ship-end)"
						fillOpacity="0.35"
					/>
				</g>
			</svg>
		</div>
	);
}
