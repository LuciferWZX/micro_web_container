import { Tag} from "antd";
import React, {FC, useState} from "react";
import styles from './index.less'

const HomePage:FC=()=>{
    const [isOpen,setOpen]=useState(false)


    return(
        <div className={styles.homePage}>
            <Tag color="magenta" onClick={()=>setOpen(true)}>用户管理系统</Tag>


        </div>
    )
}
export default HomePage