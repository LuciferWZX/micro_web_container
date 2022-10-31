import {ElementNode} from "@/low_code_engine/types/elementNode";
import {ReactNode} from "react";
/**
 * 构建器构建上下文，至少包含ElementNode的相关数据
 */
export interface TypeBuilderContext{
    elementNode:ElementNode
    initIndex?:number //该组件的初始下标
}
/**
 * 绑定Type的构建器
 */
export interface TypeBuilder{
    /**
     * 根据ElementNode上下文信息，得到ReactNode供React渲染
     * @param builderContext 构建器接受的数据上下文
     * @param childrenReactNode 已经完成构建的子节点的 ReactNode
     */
    build(
        builderContext:TypeBuilderContext,
        childrenReactNode?:ReactNode[]
    ):ReactNode
}
/**
 * TypeBuilder构造函数类型
 */
export type TypeBuilderConstructor = new (args: any) => TypeBuilder;