type CalNamespaceApi = (
	command: "inline" | "ui",
	options: Record<string, unknown>,
) => void;

type CalGlobal = {
	(
		command: "init",
		namespace: string,
		options: { origin: string },
	): void;
	ns?: Record<string, CalNamespaceApi>;
	q?: unknown[];
	loaded?: boolean;
};

declare global {
	interface Window {
		dataLayer?: Record<string, unknown>[];
		Cal?: CalGlobal;
	}
}

export {};
