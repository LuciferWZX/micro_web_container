import {TypeBuilderContext} from "@/low_code_engine/types/typeBuilder";
import React, {useMemo} from "react";
import {ElementNodeType} from "@/low_code_engine/types/elementType";
import {LowCodeInput, LowCodePage} from "@/low_code_engine/components";
import {ElementNode} from "@/low_code_engine/types/elementNode";
import {useMemoizedFn} from "ahooks";

interface BuildContext{
    buildNode:React.ReactNode

}
export const useElementBuilder=(buildContext:TypeBuilderContext):BuildContext=>{
    const {elementNode,initIndex = 0}=buildContext
    /**
     * way1
     * 传入schema渲染
     * @param element
     * @param index
     */
    const buildUI=useMemoizedFn((element:ElementNode,index:number):React.ReactNode=>{
        const {type,children}=element
        switch (type) {
            case "page":{
                return (
                    <LowCodePage schema={element} key={index}>
                        {children?.map((child,ind)=>buildUI(child,ind))}
                    </LowCodePage>
                )
            }
            case "Input":{
                return <LowCodeInput schema={element} key={index} />
            }
            default:{
                return (
                    <div key={index}>
                        暂无改类型
                    </div>
                )
            }
        }
    })

    /**
     * way2
     * @param element
     * @param index
     */
    const memoBuildUI=(element:ElementNode,index:number):React.ReactNode=>{
        const {type,children}=element
        let ele:React.ReactNode = null
        switch (type) {
            case "page":{
                ele = (
                    <LowCodePage schema={element} key={index}>
                        {children?.map((child,ind)=>buildUI(child,ind))}
                    </LowCodePage>
                )
                break
            }
            case "Input":{
                ele=(
                    <LowCodeInput schema={element} key={index} />
                )
                break
            }
            default:{
                ele = (
                    <div key={index}>
                        暂无改类型
                    </div>
                )
                break
            }
        }
        return useMemo(()=>ele,[element])
    }

    return {
        buildNode:buildUI(elementNode,initIndex)
    }
}