import React, {FC} from "react";
import {useDrag} from "react-dnd";

interface IProps{
    title:string

}
const DraggedCard:FC<IProps> = (props) => {
    const [{opacity},dragRef]=useDrag(
        ()=>({
            type:"Box",
            item:{
                name:props.title,
                id:1
            },
            collect:monitor => ({
                opacity: monitor.isDragging() ? 0.5 : 1,
                cursor:monitor.isDragging()?'grabbing':'pointer'
            }),
        }),
        []
    )

    return(
        <div ref={dragRef} style={{opacity}}>
            {props.title}
        </div>
    )
}
export default DraggedCard