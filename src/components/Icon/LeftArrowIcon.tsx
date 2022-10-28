import React, {FC, ForwardedRef, forwardRef} from "react";
import {IIcon} from "@/components/Icon/type";
import {StyledIcon} from "@/components/Icon/style";
const LeftArrowIcon:FC<IIcon> = forwardRef((props,ref:ForwardedRef<HTMLElement>) => {
    const {className,onClick,rotate,...restProps}=props
    return <StyledIcon
        ref={ref}
        className={`iconfont ${className ?? ''}`}
        onClick={onClick}
        style={{
            transform: `rotate(${rotate ?? 0}deg)`
        }}
        {...restProps}
    >&#xe696;</StyledIcon>
})
export default LeftArrowIcon