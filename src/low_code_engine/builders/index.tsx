import React, {FC, Fragment} from "react";
import {useElementBuilder} from "@/low_code_engine/hooks";
import {ElementNode} from "@/low_code_engine/types/elementNode";
interface IBuildEngineProps{
    schema:ElementNode
}
const BuilderEngine:FC<IBuildEngineProps> = (props) => {
    const {schema}=props
    const {buildNode} = useElementBuilder({
        elementNode:schema
    })
    return (
        <Fragment>
            {buildNode}
        </Fragment>
    )
}
export default BuilderEngine