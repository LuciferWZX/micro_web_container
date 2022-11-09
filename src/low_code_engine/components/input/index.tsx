import React, {FC} from "react";
import {TSchema} from "@/low_code_engine/types/schema";
import {StyledInput} from "@/low_code_engine/components/input/style";
import {useMemoizedFn} from "ahooks";
import {Mask} from "@/low_code_engine/components";

interface IProps {
    schema:TSchema
    mode?:"edit"|"preview"
}
const LowCodeInput:FC<IProps> = (props) => {
    const {schema,mode}=props
    console.log('input:',schema)
    const renderStyle = useMemoizedFn(():React.CSSProperties|undefined=>{
        return schema.props?.style
    })
    if(mode === "preview"){
        return (
            <StyledInput
                style={renderStyle()}
                placeholder={schema?.props?.placeholder}
            />
        )
    }
    return(
        <Mask mask={true}>
            <StyledInput
                style={renderStyle()}
                placeholder={schema?.props?.placeholder}
            />
        </Mask>


    )
}
export default LowCodeInput