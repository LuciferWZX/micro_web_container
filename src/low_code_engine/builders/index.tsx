import React, {FC} from "react";
import {useElementBuilder} from "@/low_code_engine/hooks";
import {ElementNode} from "@/low_code_engine/types/elementNode";
import DraggableTable from "@/low_code_engine/builders/draggableTable";
import {StyledBuilder} from "@/low_code_engine/builders/style";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import DroppableBoard from "@/low_code_engine/builders/droppableBoard";
import {useModel} from "foca";
import engineStore from "@/low_code_engine/stores/engine.store";

interface IBuildEngineProps{
    schema:ElementNode
}
const BuilderEngine:FC<IBuildEngineProps> = (props) => {
    const schema=useModel(engineStore,state => state.schema)
    const {buildNode} = useElementBuilder({
        elementNode:schema
    })
    return (
        <DndProvider backend={HTML5Backend}>
            <StyledBuilder>
                <DraggableTable/>
                <DroppableBoard>
                    {buildNode}
                </DroppableBoard>
            </StyledBuilder>
        </DndProvider>
    )
}
export default BuilderEngine