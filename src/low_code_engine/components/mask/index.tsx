import React, {FC} from "react";
import {StyledMask} from "@/low_code_engine/components/mask/style";
interface IProps{
    children?:React.ReactNode
    mask?:boolean
}
const Mask:FC<IProps> = (props) => {
    const {mask=true}=props
    if(!mask){
        return (
            <>
                {props?.children}
            </>
        )
    }
    return(
        <StyledMask>
            {props?.children}
        </StyledMask>
    )
}
export default Mask