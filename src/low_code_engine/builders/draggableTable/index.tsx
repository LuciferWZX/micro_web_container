import React, {FC, useContext} from "react";
import {StyledDraggable} from "@/low_code_engine/builders/draggableTable/style";
import {lowCodeEngineContext} from "@/low_code_engine/context/lowCodeContext";
import {Button} from "antd";
import DraggedCard from "@/low_code_engine/builders/draggableTable/DraggedCard";
import CustomDragLayer from "./CustomDragLayer";


const DraggableTable:FC = () => {
    const {isExpand} = useContext(lowCodeEngineContext).getState

    return(
        <StyledDraggable>
            {isExpand.toString()}
            <CustomDragLayer />
            <DraggedCard title={"输入框"} />
        </StyledDraggable>
    )
}
export default DraggableTable