import React, {FC} from "react";
import {StyledDroppable} from "@/low_code_engine/builders/droppableBoard/style";
import {useDrop} from "react-dnd";
import {DraggedType} from "@/low_code_engine/types/draggedType";
interface IProps{
    children?:React.ReactNode
}
const DroppableBoard:FC<IProps> = (props) => {
    const [collectProps,dropRef]=useDrop({
        accept:DraggedType.Card,
        collect:(monitor)=>({
            isOver:monitor.isOver(),
            res:monitor.getDropResult()
        }),
        hover:(e)=>{
            console.log('有东西上来了',e)
        },
        drop:(e,ac)=>{
            console.log(e)
        }
    })
    console.log(111,collectProps)
    return(
        <StyledDroppable ref={dropRef} style={{
            background:collectProps.isOver ? 'deeppink' : 'white'
        }}>
            {collectProps.isOver ? '快松开，放到碗里来' : '将 Box 组件拖动到这里'}
            {props.children}
        </StyledDroppable>
    )
}
export default DroppableBoard