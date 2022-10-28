import React, {FC, MouseEventHandler} from "react";
import {Space} from "antd";
import {StyledMenu} from "@/components/Menu/style";

interface IMenuItemProps{
    children:React.ReactElement[]
    onClick?:MouseEventHandler<HTMLUListElement>
    selectedKeys?:string[]
    className?:string
    isScroll?:boolean
}
const Menu:FC<IMenuItemProps> = (props) => {
    const {children,onClick,selectedKeys,className,isScroll}=props


    return(
        <StyledMenu className={`${className ?? ''}`}  onClick={onClick}>
            <Space direction={"vertical"} className={'space-class'}>
                {React.Children.map(children,(child)=>{
                    return React.cloneElement(child,{
                        selectedKeys:selectedKeys,
                        isScroll:isScroll
                    })
                })}
            </Space>
        </StyledMenu>
    )
}
export default Menu