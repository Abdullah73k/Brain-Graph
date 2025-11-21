import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { Panel } from "@xyflow/react";
import MenubarOption from "./menubar-option";
import { useGetCurrentRelationType, useMindMapActions } from "@/store/hooks";
import { relations } from "@/types/egdes";

export default function PanelTopMiddle() {
	const currentRelationType = useGetCurrentRelationType();
	const { createSubtopicNode, createNoteNode, setCurrentRelationType } =
		useMindMapActions();
	return (
		<Panel position="top-center">
			<Menubar className="py-4">
				<MenubarOption option="Add Node" onClick={createSubtopicNode} />
				<MenubarOption option="Add Note" onClick={createNoteNode} />
				<MenubarMenu>
					<MenubarTrigger>Node Relations</MenubarTrigger>
					<MenubarContent>
						{relations.map((relation) => (
							<MenubarItem
								key={relation}
								onClick={() => setCurrentRelationType(relation)}
							>
								{relation}
							</MenubarItem>
						))}
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		</Panel>
	);
}
