import {Button, Modal, Tag} from "antd";
import React, {FC, useState} from "react";
import styles from './index.less'
import {MicroAppWithMemoHistory} from "umi";

const HomePage:FC=()=>{
    const [isOpen,setOpen]=useState(false)


    return(
        <div className={styles.homePage}>
            <Tag color="magenta" onClick={()=>setOpen(true)}>用户管理系统</Tag>
            {/*<div style={{height:600,boxSizing:"border-box",background:'red'}}>*/}
            {/*    <MicroAppWithMemoHistory name="user_manage_system" url="/user_manage_system" errorBoundary={(error) => <div>{error}</div>}   />*/}
            {/*</div>*/}
            <Modal title="Basic Modal" open={isOpen}  onCancel={()=>setOpen(false)}>
                <div style={{height:600,boxSizing:"border-box",background:'red'}}>
                    <MicroAppWithMemoHistory name="user_manage_system" url="/user_manage_system" errorBoundary={(error) => <div>{error}</div>}   />
                </div>
            </Modal>
        </div>
    )
}
export default HomePage