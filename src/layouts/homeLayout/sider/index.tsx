import React, {FC} from "react";
import {Menu, MenuItem} from "@/components";
import {ConnectedIcon, JsonIcon} from "@/components/Icon";
import {history} from "umi";
import {useLocation} from "@@/exports";
import {StyledSider} from "@/layouts/homeLayout/sider/style";
import ScrollButton from "@/layouts/homeLayout/sider/ScrollButton";
import {useModel} from "foca";
import layoutStore from "@/stores/layout.store";

const Sider:FC = () => {
    const location = useLocation()
    const isScroll = useModel(layoutStore,state => state.isScroll)
    const navigatorRouter=(path:string)=>{
        history.push(path)
    }
  return(
      <StyledSider isScroll={isScroll}>
          <Menu isScroll={isScroll} selectedKeys={[location.pathname]}>
              <MenuItem onClick={()=>navigatorRouter('/lowCode')} id={'/lowCode'} prefix={<ConnectedIcon/>}>
                  lowCode
              </MenuItem>
              <MenuItem onClick={()=>navigatorRouter('/socket')} id={'/socket'} prefix={<ConnectedIcon/>}>
                  socket
              </MenuItem>
              <MenuItem onClick={()=>navigatorRouter('/json')} id={'/json'} prefix={<JsonIcon />}>
                  json解析
              </MenuItem>
          </Menu>
          <ScrollButton />
      </StyledSider>
  )
}
export default Sider