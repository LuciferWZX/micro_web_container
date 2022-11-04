import React, {FC} from "react";
import {TSchema} from "@/low_code_engine/types/schema";
import {StyledInput} from "@/low_code_engine/components/input/style";
import {useMemoizedFn} from "ahooks";

interface IProps {
    schema:TSchema
}
const LowCodeInput:FC<IProps> = (props) => {
    const {schema}=props
    console.log('input:',schema)
    const renderStyle = useMemoizedFn(():React.CSSProperties|undefined=>{
        return schema.props?.style
    })
    return(
        <StyledInput
            style={renderStyle()}
            placeholder={schema?.props?.placeholder}
        />
    )
}
export default LowCodeInput