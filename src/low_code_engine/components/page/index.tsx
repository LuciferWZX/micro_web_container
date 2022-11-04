import React, {FC, useMemo} from "react";

import {StyledPage} from "@/low_code_engine/components/page/style";
import {TSchema} from "@/low_code_engine/types/schema";
import {useMemoizedFn} from "ahooks";
import SortableContainer from "@/low_code_engine/components/sortableContainer";
interface ILowCodePageProps{
    schema:TSchema
    mode?:"edit"|"preview"
    children?:React.ReactNode
}
const LowCodePage:FC<ILowCodePageProps> = (props) => {
    const {schema,mode}=props
    console.log('page:',schema)
    const renderChildren=useMemoizedFn(():React.ReactNode=>{
        if(mode === "edit"){
            return <SortableContainer schema={schema} mode={mode} />
        }
        return props.children
    })
    return(
        <StyledPage>
            {renderChildren()}
        </StyledPage>
    )
}
export default LowCodePage