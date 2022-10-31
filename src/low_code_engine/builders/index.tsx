import React, {FC, Fragment} from "react";
import {useElementBuilder} from "@/low_code_engine/hooks";
import {ElementNode} from "@/low_code_engine/types/elementNode";
import DraggableTable from "@/low_code_engine/builders/draggableTable";
import {StyledBuilder} from "@/low_code_engine/builders/style";
import {lowCodeEngineContext, LowCodeEngineState} from "../context/lowCodeContext";
import {useSetState} from "ahooks";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import DroppableBoard from "@/low_code_engine/builders/droppableBoard";
interface IBuildEngineProps{
    schema:ElementNode
}
const BuilderEngine:FC<IBuildEngineProps> = (props) => {
    const [engineState,setEnginState]=useSetState<LowCodeEngineState>({
        schema:props.schema,
        isExpand:false
    })
    const {buildNode} = useElementBuilder({
        elementNode:engineState.schema
    })
    const children = (
        <DndProvider backend={HTML5Backend}>
            <StyledBuilder>
                <DraggableTable/>
                <DroppableBoard>
                    {buildNode}
                </DroppableBoard>
            </StyledBuilder>
        </DndProvider>
    )

    return (
        <lowCodeEngineContext.Provider value={{
            getState:engineState,
            setState:setEnginState
        }}>
            {children}
        </lowCodeEngineContext.Provider>
    )
}
export default BuilderEngine