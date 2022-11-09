import React, {FC} from "react";
import {useElementBuilder} from "@/low_code_engine/hooks";
import {ElementNode} from "@/low_code_engine/types/elementNode";
import DraggableTable from "@/low_code_engine/builders/draggableTable";
import {StyledBuilder} from "@/low_code_engine/builders/style";
import DroppableBoard from "@/low_code_engine/builders/droppableBoard";
import {useModel} from "foca";
import engineStore from "@/low_code_engine/stores/engine.store";
import {useBuilder} from "@/low_code_engine/hooks/useBuilder";

interface IBuildEngineProps{
    schema:ElementNode
}
const BuilderEngine:FC<IBuildEngineProps> = (props) => {
    const {schema,mode}=useModel(engineStore,state => ({
        schema:state.schema,
        mode:state.mode
    }))

    const {buildNode} =useBuilder(mode)
    return (
        <StyledBuilder>
            <DraggableTable/>
            <DroppableBoard>
                {buildNode(schema,schema.id)}
            </DroppableBoard>
        </StyledBuilder>
    )
}
export default BuilderEngine