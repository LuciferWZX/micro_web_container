import React, {FC} from "react";
import {StyledMenuItem} from "@/components/MenuItem/style";
import {Space} from "antd";
import classNames from "classnames";
import './index.less'
interface IMenuItemProps{
    children?:React.ReactNode
    id:string
    onClick?:(e:React.MouseEvent<HTMLLIElement>)=>void
    prefix?:React.ReactNode,
    selectedKeys?:string[]
}
const MenuItem:FC<IMenuItemProps> = (props) => {
    const {children,onClick,prefix,selectedKeys}=props
    console.log(111,selectedKeys,props)
    const classes=classNames({
        'menu-active':selectedKeys?.includes(props.id)
    })
    return(
        <StyledMenuItem className={classes} onClick={onClick}>
            <Space>
                {prefix}
                <div>
                    {children}
                </div>
            </Space>

        </StyledMenuItem>
    )
}
export default MenuItem