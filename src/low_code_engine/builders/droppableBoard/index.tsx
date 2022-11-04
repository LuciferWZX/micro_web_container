import React, {FC} from "react";
import {StyledDroppable} from "@/low_code_engine/builders/droppableBoard/style";


interface IProps{
    children?:React.ReactNode
}

const DroppableBoard:FC<IProps> = (props) => {
    return(
        <StyledDroppable>
            {props.children}
        </StyledDroppable>
    )
}
export default DroppableBoard
