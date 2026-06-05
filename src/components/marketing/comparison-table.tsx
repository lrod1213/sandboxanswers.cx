import { cn } from "#/lib/utils.ts";

export type ComparisonRow = {
	category: string;
	answerLayer: string;
	builtIn: string;
	traditional: string;
};

type ComparisonTableProps = {
	rows: ComparisonRow[];
	className?: string;
};

const columns = [
	{ key: "answerLayer" as const, title: "The Answer Layer", featured: true },
	{
		key: "builtIn" as const,
		title: "Built-in System Reporting",
		subtitle: "e.g. Salesforce Service Cloud",
		featured: false,
	},
	{
		key: "traditional" as const,
		title: 'Traditional "Business Intelligence"',
		subtitle: "e.g. Tableau",
		featured: false,
	},
];

export function ComparisonTable({ rows, className }: ComparisonTableProps) {
	return (
		<div className={cn("overflow-x-auto", className)}>
			<div className="grid min-w-[720px] grid-cols-4 gap-px rounded-lg border border-hairline bg-hairline">
				<div className="bg-canvas-soft p-4" />
				{columns.map((col) => (
					<div
						key={col.key}
						className={cn(
							"p-4",
							col.featured ? "bg-ink text-white" : "bg-canvas",
						)}
					>
						<p
							className={cn(
								"text-display-sm",
								col.featured ? "text-white" : "text-ink",
							)}
						>
							{col.title}
						</p>
						{col.subtitle ? (
							<p
								className={cn(
									"mt-1 text-caption",
									col.featured ? "text-white/70" : "text-body",
								)}
							>
								{col.subtitle}
							</p>
						) : null}
					</div>
				))}
				{rows.map((row) => (
					<ComparisonRowCells key={row.category} row={row} />
				))}
			</div>
		</div>
	);
}

function ComparisonRowCells({ row }: { row: ComparisonRow }) {
	const isSectionHeader =
		!row.builtIn && !row.traditional && row.answerLayer === row.category;

	if (isSectionHeader) {
		return (
			<>
				<div className="bg-canvas-soft px-4 py-3 font-mono-caption text-mute">
					{row.category}
				</div>
				<div className="col-span-3 bg-canvas-soft" />
			</>
		);
	}

	return (
		<>
			<div className="bg-canvas-soft px-4 py-3 text-body-sm font-medium text-ink">
				{row.category}
			</div>
			<div className="bg-ink/95 px-4 py-3 text-body-sm text-white">
				{row.answerLayer}
			</div>
			<div className="bg-canvas px-4 py-3 text-body-sm text-body">
				{row.builtIn}
			</div>
			<div className="bg-canvas px-4 py-3 text-body-sm text-body">
				{row.traditional}
			</div>
		</>
	);
}
