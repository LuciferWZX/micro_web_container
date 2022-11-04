import React, {FC, useCallback, useEffect} from "react";


import {ComponentItem} from "@/low_code_engine/stores/componentsList";
import {StyledDragCard} from "@/low_code_engine/builders/draggableTable/style";
import {useBoolean} from "ahooks";

interface IProps{
    item:ComponentItem
    chosen?:boolean
}
const DraggedCard:FC<IProps> = (props) => {
    const {item,chosen}=props

    return(
        <StyledDragCard>
            <div className={'card-icon'}>icon</div>
            <div className={'card-label'}>{item.name}</div>
        </StyledDragCard>
    )
}
export default DraggedCard