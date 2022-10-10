import React, {FC} from "react";
import {Outlet} from "umi";

const Layout:FC=()=> {
  return (
    <div>
        <Outlet />
    </div>
  );
}
export default Layout
