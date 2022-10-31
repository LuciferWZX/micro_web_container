import React, {FC} from "react";

import {StyledPage} from "@/low_code_engine/components/page/style";
import {TSchema} from "@/low_code_engine/types/schema";
interface ILowCodePageProps{
    schema:TSchema
    children?:React.ReactNode
}
const LowCodePage:FC<ILowCodePageProps> = (props) => {
    const {schema}=props
    console.log('page:',schema)
    return(
        <StyledPage>
            this is page
            {props.children}
        </StyledPage>
    )
}
export default LowCodePage