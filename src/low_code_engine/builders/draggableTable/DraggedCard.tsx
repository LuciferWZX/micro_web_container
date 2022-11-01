import React, {FC, useEffect} from "react";
import {useDrag} from "react-dnd";
import {getEmptyImage} from "react-dnd-html5-backend";
import {DraggedType} from "@/low_code_engine/types/draggedType";
import {ComponentItem} from "@/low_code_engine/stores/componentsList";

interface IProps{
    item:ComponentItem
}
const DraggedCard:FC<IProps> = (props) => {
    const {item}=props
    const [{isDragging},dragRef,preview]=useDrag(
        ()=>({
            type:DraggedType.Card,
            item:{
                name:props.title,
                id:1
            },
            collect:monitor => {
                return {
                    cursor:monitor.isDragging()?'grabbing':'pointer',
                    isDragging:monitor.isDragging()
                }
            },

        }),
        []
    )
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true }); // 隐藏拖拽dom
    }, []);
    return(
        <div ref={dragRef} >
            {props.title}
        </div>
    )
}
export default DraggedCard