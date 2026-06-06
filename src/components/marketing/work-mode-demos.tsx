import { CornerDownLeft, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "#/components/ui/button.tsx";
import {
	askModeDemo,
	monitorModeDemo,
	type WorkModeIssue,
} from "#/content/ai-assistants-team.ts";
import { cn } from "#/lib/utils.ts";

function usePrefersReducedMotion() {
	const [reduced, setReduced] = useState(false);

	useEffect(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setReduced(media.matches);
		update();
		media.addEventListener("change", update);
		return () => media.removeEventListener("change", update);
	}, []);

	return reduced;
}

function useTypingAnimation(text: string) {
	const reducedMotion = usePrefersReducedMotion();
	const [typed, setTyped] = useState(reducedMotion ? text : "");
	const [complete, setComplete] = useState(reducedMotion);

	useEffect(() => {
		if (reducedMotion) {
			setTyped(text);
			setComplete(true);
			return;
		}

		setTyped("");
		setComplete(false);
		let index = 0;
		const id = window.setInterval(() => {
			index += 1;
			const next = text.slice(0, index);
			setTyped(next);
			if (index >= text.length) {
				setComplete(true);
				window.clearInterval(id);
			}
		}, 38);

		return () => window.clearInterval(id);
	}, [reducedMotion, text]);

	return { typed, complete };
}

export function AskModeDemo() {
	const { typed, complete } = useTypingAnimation(askModeDemo.question);
	const [answerOpen, setAnswerOpen] = useState(false);
	const displayQuestion = complete ? askModeDemo.question : typed;

	const handleSubmit = () => {
		if (!complete || answerOpen) return;
		setAnswerOpen(true);
	};

	const handleReset = () => {
		setAnswerOpen(false);
	};

	return (
		<div className="mt-auto space-y-3">
			<div className="rounded-[var(--rounded-sm)] border border-hairline bg-canvas-soft px-4 py-3 font-mono text-[12px] leading-relaxed text-ink">
				<label className="mb-2 block font-mono-caption text-body">
					Ask your team
				</label>
				<div className="flex min-h-[3.25rem] items-start gap-2">
					<span className="text-link" aria-hidden>
						›
					</span>
					<p className="min-w-0 flex-1">
						{displayQuestion}
						{!complete ? (
							<span
								className="work-mode-cursor ml-px inline-block w-2 bg-link"
								aria-hidden
							/>
						) : null}
					</p>
				</div>
				<div className="mt-3 flex flex-wrap items-center justify-end gap-2 border-t border-hairline pt-3">
					<span className="mr-auto text-caption text-body">
						{answerOpen
							? "Answer shown below"
							: complete
								? "Press Enter to run"
								: "Typing…"}
					</span>
					{answerOpen ? (
						<Button
							type="button"
							size="xs"
							variant="outline"
							className="gap-1.5"
							onClick={handleReset}
						>
							Reset
							<RotateCcw className="size-3.5" aria-hidden />
						</Button>
					) : (
						<Button
							type="button"
							size="xs"
							variant="outline"
							className="gap-1.5"
							disabled={!complete}
							onClick={handleSubmit}
							aria-label="Submit question"
						>
							Enter
							<CornerDownLeft className="size-3.5" aria-hidden />
						</Button>
					)}
				</div>
			</div>
			{answerOpen ? (
				<div className="rise-in rounded-[var(--rounded-sm)] border border-primary/20 bg-link-bg-soft/60 px-4 py-3">
					<div className="mb-2 flex items-center justify-between gap-3">
						<p className="font-mono-caption text-primary">Answer · 2.4s</p>
						<button
							type="button"
							className="text-caption text-link hover:text-link-deep hover:underline"
							onClick={() => setAnswerOpen(false)}
						>
							Hide answer
						</button>
					</div>
					<p className="text-body-sm text-ink">{askModeDemo.answerLead}</p>
					<ul className="mt-3 space-y-2">
						{askModeDemo.accounts.map((account) => (
							<li
								key={account.name}
								className="flex items-center justify-between gap-3 text-body-sm"
							>
								<span className="text-ink">{account.name}</span>
								<span className="font-mono text-[11px] text-body">
									{account.mentions} mentions
								</span>
							</li>
						))}
					</ul>
					<p className="mt-3 text-caption text-body">
						Themes: {askModeDemo.themes.join(", ")}. Source:{" "}
						{askModeDemo.sources.join(", ")}.
					</p>
				</div>
			) : null}
		</div>
	);
}

function StandupSummary({ issues }: { issues: readonly WorkModeIssue[] }) {
	return (
		<div className="rise-in space-y-3 rounded-[var(--rounded-sm)] border border-primary/20 bg-link-bg-soft/60 px-4 py-3">
			<p className="font-mono-caption text-primary">Exec summary · EMEA onboarding</p>
			<ul className="space-y-3">
				{issues.map((issue) => (
					<li key={issue.title} className="border-b border-hairline/80 pb-3 last:border-0 last:pb-0">
						<div className="flex items-start justify-between gap-3">
							<p className="text-body-sm-strong text-ink">{issue.title}</p>
							<span className="shrink-0 font-mono text-[11px] text-primary">
								{issue.instances} instances
							</span>
						</div>
						<p className="mt-1 text-caption text-body">{issue.detail}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export function MonitorModeDemo() {
	const [showSummary, setShowSummary] = useState(false);

	return (
		<div className="mt-auto space-y-3">
			<div className="rounded-[var(--rounded-sm)] border border-hairline bg-canvas-soft px-4 py-3 font-mono text-[12px] leading-relaxed text-ink">
				<p className="font-mono-caption mb-2 text-body">Live alert</p>
				<p>{monitorModeDemo.alert}</p>
				<button
					type="button"
					className={cn(
						"mt-2 inline-flex text-left text-link underline-offset-2 transition-colors hover:text-link-deep hover:underline",
						showSummary && "text-link-deep underline",
					)}
					onClick={() => setShowSummary((open) => !open)}
					aria-expanded={showSummary}
				>
					{monitorModeDemo.summaryCta}
				</button>
			</div>
			{showSummary ? <StandupSummary issues={monitorModeDemo.issues} /> : null}
		</div>
	);
}
