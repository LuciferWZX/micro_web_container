import React, {FC} from "react";
import {Menu, MenuItem} from "@/components";
import {ConnectedIcon} from "@/components/Icon";

const Sider:FC = () => {
  return(
      <div>
          <Menu selectedKeys={['socket']}>
              <MenuItem id={'socket'} prefix={<ConnectedIcon/>}>
                  socket
              </MenuItem>
              <MenuItem id={'json-parse'} prefix={<ConnectedIcon/>}>
                  json解析
              </MenuItem>
          </Menu>
      </div>
  )
}
export default Sider