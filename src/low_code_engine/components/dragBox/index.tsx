import React, {FC, Fragment, useRef} from "react";
import { StyledDragBox } from "./style";
import {useBoolean, useHover} from "ahooks";
import {ElementNode} from "@/low_code_engine/types/elementNode";
import classNames from "classnames";

import ActiveBox from "@/low_code_engine/components/dragBox/activeBox";
import engineStore from "@/low_code_engine/stores/engine.store";
import {useModel} from "foca";


interface IProps{
    schema:ElementNode
    children?:React.ReactNode
}
const DragBox:FC<IProps> = (props) => {
    const {schema}=props
    const hoverId = useModel(engineStore,state => state.hoverId)


    console.log(22222,schema.id===hoverId)
    return(
        <StyledDragBox
            isHovering={schema.id===hoverId}

            onMouseEnter={()=>{
                engineStore.updateState({
                    hoverId:schema.id
                })
            }}
            onMouseLeave={()=>{
                engineStore.updateState({
                    hoverId:null
                })
            }}
            >
            {props?.children}
        </StyledDragBox>
    )
}
export default DragBox