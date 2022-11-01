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

            {componentList.map(comp=>{
                return(
                    <DraggedCard key={comp.cId} item={comp} />
                )
            })}
        </StyledDraggable>
    )
}
export default DraggableTable