import React, {FC, ForwardedRef, forwardRef} from "react";
import {IIcon} from "@/components/Icon/type";
const JsonIcon:FC<IIcon> = forwardRef((props,ref:ForwardedRef<HTMLElement>) => {
    const {className,onClick,...restProps}=props
    return <i
        ref={ref}
        className={`iconfont ${className ?? ''}`}
        onClick={onClick}
        {...restProps}
    >&#xe7bd;</i>
})
export default JsonIcon