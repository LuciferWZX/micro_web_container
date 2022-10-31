import {ElementNodeType} from "@/low_code_engine/types/elementType";
import React from "react";

export interface ElementNode{
    /**
     * Element 唯一类型type
     */
    type:ElementNodeType
    [props:string]:string|number|any,
    props:{
        /**
         * 设置的样式
         */
        style?:React.CSSProperties
        /**
         * Element 的所有props
         */
        [props: string]: string | number | any
    }
    /**
     * Element 的所有子元素
     */
    children?:ElementNode[]
}