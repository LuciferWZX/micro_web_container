import React, {FC} from "react";
import {StyledMenuItem} from "@/components/MenuItem/style";
import {Space} from "antd";
import {Icon} from "@/components";
import {IconType} from "@/components/Icon";

interface IMenuItemProps{
    children?:React.ReactNode
}
const MenuItem:FC<IMenuItemProps> = (props) => {
    return(
        <StyledMenuItem>
            <Space>
                <Icon type={IconType.Connect} />
                <div>
                    {props.children}
                </div>
            </Space>

        </StyledMenuItem>
    )
}
export default MenuItem