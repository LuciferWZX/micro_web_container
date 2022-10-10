import React, {FC} from "react";
import styles from './index.less'
import {Outlet} from "umi";

const Layout:FC=()=> {
  return (
    <div className={styles.clientScreen}>
        <Outlet />
        <div className={styles.appBg}/>
    </div>
  );
}
export default Layout
