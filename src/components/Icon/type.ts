import React, {MouseEventHandler} from "react";

export interface IIcon{
    className?:string
    onClick?:MouseEventHandler<HTMLElement>
    style?:React.CSSProperties
}