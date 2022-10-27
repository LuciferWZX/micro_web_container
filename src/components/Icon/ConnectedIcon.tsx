import React, {FC, ForwardedRef, forwardRef} from "react";
import {IIcon} from "@/components/Icon/type";
const ConnectedIcon:FC<IIcon> = forwardRef((props,ref:ForwardedRef<HTMLElement>) => {
    const {className,onClick,...restProps}=props
    return <i
        ref={ref}
        className={`iconfont ${className ?? ''}`}
        onClick={onClick}
        {...restProps}
    >&#xe6b7;</i>
})
export default ConnectedIcon