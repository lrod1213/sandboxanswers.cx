import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

function easeInOutCubic(progress: number) {
	return progress < 0.5
		? 4 * progress * progress * progress
		: 1 - (-2 * progress + 2) ** 3 / 2;
}

export function scrollToElement(
	target: string | HTMLElement,
	options?: { offset?: number; duration?: number },
) {
	if (typeof window === "undefined") return;

	const element =
		typeof target === "string" ? document.querySelector(target) : target;

	if (!(element instanceof HTMLElement)) return;

	const offset = options?.offset ?? 80;
	const duration = options?.duration ?? 1000;
	const startY = window.scrollY;
	const targetY =
		element.getBoundingClientRect().top + window.scrollY - offset;
	const distance = targetY - startY;
	let startTime: number | null = null;

	function step(timestamp: number) {
		if (startTime === null) startTime = timestamp;
		const elapsed = timestamp - startTime;
		const progress = Math.min(elapsed / duration, 1);
		window.scrollTo(0, startY + distance * easeInOutCubic(progress));
		if (progress < 1) requestAnimationFrame(step);
	}

	requestAnimationFrame(step);
}
