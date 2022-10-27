import React, {FC, MouseEventHandler} from "react";
import {Space} from "antd";
import {StyledMenu} from "@/components/Menu/style";

interface IMenuItemProps{
    children:React.ReactElement[]
    onClick?:MouseEventHandler<HTMLUListElement>
    selectedKeys?:string[]
}
const Menu:FC<IMenuItemProps> = (props) => {
    const {children,onClick,selectedKeys}=props


    return(
        <StyledMenu  onClick={onClick}>
            <Space direction={"vertical"}>
                {React.Children.map(children,(child)=>{
                    return React.cloneElement(child,{
                        selectedKeys:selectedKeys
                    })
                })}
            </Space>
        </StyledMenu>
    )
}
export default Menu