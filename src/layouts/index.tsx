import React, {FC} from "react";
import { Outlet } from 'umi';
const Layout:FC=()=> {
  return (
    <div>
        这是layout
        <Outlet />
    </div>
  );
}
export default Layout
