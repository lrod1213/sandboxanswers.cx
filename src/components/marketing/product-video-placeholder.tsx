import { Play } from "lucide-react";
import { useRef, useState } from "react";

import { cn } from "#/lib/utils.ts";

type ProductVideoPlaceholderProps = {
	src?: string;
	poster?: string;
	label?: string;
	caption?: string;
	belowCaption?: string;
	className?: string;
};

export function ProductVideoPlaceholder({
	src,
	poster,
	label = "Product walkthrough",
	caption = "See The Answer Layer in action",
	belowCaption,
	className,
}: ProductVideoPlaceholderProps) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [loadFailed, setLoadFailed] = useState(false);

	const showPlaceholder = !src || loadFailed;

	if (showPlaceholder) {
		return (
			<div className={cn("relative w-full", className)}>
				<div
					className="relative aspect-video overflow-hidden rounded-[var(--rounded-lg)] border border-hairline bg-ink elev-4"
					role="img"
					aria-label={`${label} — video placeholder`}
				>
					<div
						className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_15%_20%,var(--cyan)_0,transparent_35%),radial-gradient(circle_at_85%_75%,var(--highlight-pink)_0,transparent_30%)]"
						aria-hidden
					/>
					<div className="signal-grid absolute inset-0 opacity-30" aria-hidden />
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

					<div className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-[11px] text-white/70 backdrop-blur-sm">
						{label}
					</div>

					<div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
						<span className="flex size-16 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-sm">
							<Play
								className="ml-1 size-7 fill-white text-white"
								aria-hidden
							/>
						</span>
						<p className="max-w-[16rem] text-body-sm text-white/85">{caption}</p>
					</div>
				</div>
				<p className="mt-3 text-center text-caption text-body">
					{belowCaption ??
						(src && loadFailed
							? `Add your video at public${src}`
							: "Product video coming soon")}
				</p>
			</div>
		);
	}

	return (
		<div className={cn("relative w-full", className)}>
			<div className="relative aspect-video overflow-hidden rounded-[var(--rounded-lg)] border border-hairline bg-ink elev-4">
				<video
					ref={videoRef}
					className="h-full w-full object-cover"
					src={src}
					poster={poster}
					controls={isPlaying}
					playsInline
					preload="metadata"
					aria-label={caption}
					onError={() => setLoadFailed(true)}
					onPlay={() => setIsPlaying(true)}
					onPause={() => setIsPlaying(false)}
					onEnded={() => setIsPlaying(false)}
				>
					<track kind="captions" />
				</video>

				{!isPlaying ? (
					<>
						<div
							className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
							aria-hidden
						/>
						<div className="pointer-events-none absolute top-4 left-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-[11px] text-white/70 backdrop-blur-sm">
							{label}
						</div>
						<button
							type="button"
							className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center"
							aria-label={`Play ${caption}`}
							onClick={() => void videoRef.current?.play()}
						>
							<span className="flex size-16 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-transform duration-150 hover:scale-105">
								<Play
									className="ml-1 size-7 fill-white text-white"
									aria-hidden
								/>
							</span>
							<span className="max-w-[16rem] text-body-sm text-white/85">
								{caption}
							</span>
						</button>
					</>
				) : null}
			</div>
			{belowCaption ? (
				<p className="mt-3 text-center text-caption text-body">{belowCaption}</p>
			) : null}
		</div>
	);
}
