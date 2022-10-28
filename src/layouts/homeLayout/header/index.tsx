import React, {FC} from "react";
import {StyledHeader} from "@/layouts/homeLayout/header/style";
import {ReactComponent as ToolLogo} from '@/assets/ToolLogo.svg'
import {Space} from "antd";
import {history} from "umi";
const Header:FC = () => {
    const clickLogo=()=>{
        history.push('/')
    }
  return(
      <StyledHeader>
          <Space className={'header-left'} onClick={clickLogo}>
              <ToolLogo className={'tool-logo-icon'} />
              <a>工具集成</a>
          </Space>
      </StyledHeader>
  )
}
export default Header