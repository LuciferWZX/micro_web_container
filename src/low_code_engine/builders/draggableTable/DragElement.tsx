import React, {FC} from "react";
import {ReactSortable} from "react-sortablejs";
import {TSchema} from "@/low_code_engine/types/schema";
interface IProps<T> {
    sourceList:T[]
}
const DragElement:FC<IProps<TSchema>> = ({sourceList}) => {
    return(
        <ReactSortable>
            x
        </ReactSortable>
    )
}
export default DragElement