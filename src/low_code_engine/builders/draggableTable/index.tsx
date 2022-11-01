import React, {FC} from "react";
import {StyledDraggable} from "@/low_code_engine/builders/draggableTable/style";
import DraggedCard from "@/low_code_engine/builders/draggableTable/DraggedCard";
import CustomDragLayer from "./CustomDragLayer";
import {useModel} from "foca";
import engineStore from "@/low_code_engine/stores/engine.store";


const DraggableTable:FC = () => {
    const componentList = useModel(engineStore,state => state.componentsList)
    return(
        <StyledDraggable>

            <CustomDragLayer />

            <DraggedCard title={"输入框"} />
        </StyledDraggable>
    )
}
export default DraggableTable