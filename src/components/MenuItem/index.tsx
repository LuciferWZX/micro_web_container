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
    selectedKeys?:string[],
    isScroll?:boolean
}
const MenuItem:FC<IMenuItemProps> = (props) => {
    const {children,onClick,prefix,selectedKeys,isScroll}=props

    const classes=classNames({
        'menu-active':selectedKeys?.includes(props.id),
        'menu-scroll':isScroll
    })
    return(
        <StyledMenuItem className={classes} onClick={onClick} isScroll={isScroll}>
            <Space
                align={"center"}
                className={'space-class'}
                direction={isScroll?'vertical':'horizontal'}
                size={5}
            >
                {prefix}
                <div className={'menu-label'}>
                    {children}
                </div>
            </Space>

        </StyledMenuItem>
    )
}
export default MenuItem