import {TypeBuilderContext} from "@/low_code_engine/types/typeBuilder";
import React, {useMemo} from "react";
import {LowCodeInput, LowCodePage} from "@/low_code_engine/components";
import {ElementNode} from "@/low_code_engine/types/elementNode";
import {TSchema} from "@/low_code_engine/types/schema";

interface BuildContext{
    buildNode:(element:ElementNode,key:string)=>React.ReactNode
}
export const useBuilder=(mode:"edit"|"preview"):BuildContext=>{

    const memoBuildUI=(element:ElementNode,key:string):React.ReactNode=>{
        const {type}=element
        let ele:React.ReactNode = null
        switch (type) {
            case "page":{
                ele = (
                    <LowCodePage mode={mode} schema={element} key={key} />
                )
                break
            }
            case "Input":{
                ele=(
                    <LowCodeInput schema={element} key={key} />
                )
                break
            }
            default:{
                ele = (
                    <div key={key}>
                        暂无改类型
                    </div>
                )
                break
            }
        }
        return ele
    }

    return {
        buildNode:memoBuildUI
    }
}