import { type MindMapEdge } from "@/types/egdes";
import { BaseEdge, EdgeProps, getStraightPath } from "@xyflow/react";

export default function MindMapEdge({
	id,
	sourceX,
	sourceY,
	targetX,
	targetY,
	data,
}: EdgeProps<MindMapEdge>) {
	const relation = data?.relationType ?? "background";

	const colors = {
		refines: "#3b82f6", // blue
		synthesizes: "#a855f7", // purple
		supports: "#22c55e", // green
		challenges: "#ef4444", // red
		background: "#64748b", // slate/muted
	};

	const [edgePath] = getStraightPath({
		sourceX,
		sourceY,
		targetX,
		targetY,
	});

	return (
		<BaseEdge
			id={id}
			style={{
				stroke: colors[relation],
				strokeWidth: 2,
				strokeDasharray: relation === "background" ? "3 3" : "none",
			}}
			markerEnd="url(#arrow)"
			path={edgePath}
		/>
	);
}
