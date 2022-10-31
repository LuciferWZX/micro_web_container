import {TypeBuilder, TypeBuilderContext} from "@/low_code_engine/types/typeBuilder";
import React, {FC} from "react";

interface IProps extends TypeBuilder{
    schema:TypeBuilderContext
}
const InputTypeBuilder:FC<IProps>=(props)=>{
    const {build,schema}=props

    return (
        <div>
            {build(schema)}
        </div>
    )
}
export default InputTypeBuilder