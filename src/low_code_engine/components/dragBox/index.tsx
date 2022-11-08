import React, {FC, Fragment, useRef} from "react";
import { StyledDragBox } from "./style";
import {useHover} from "ahooks";

interface IProps{
    children?:React.ReactNode
}
const DragBox:FC<IProps> = (props) => {
    const boxRef = useRef<HTMLDivElement>(null)
    const isHovering=useHover(boxRef,{
        onEnter:()=>{

        },
        onLeave:()=>{

        }
    })
    return(
        <StyledDragBox ref={boxRef}>
            {props?.children}
        </StyledDragBox>
    )
}
export default DragBox