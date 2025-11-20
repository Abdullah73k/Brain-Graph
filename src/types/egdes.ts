import { Edge } from "@xyflow/react";

type RelationType =
	| "refines"
	| "synthesizes"
	| "supports"
	| "challenges"
	| "background";

export type MindMapEdge = Edge & {
	data: {
		relationType: RelationType;
	};
};
