import React, {FC} from "react";
import styles from './index.less'
import {useModel} from "foca";
import socketStore from "@/stores/socket.store";
import SocketConfig from "@/pages/socket/config";

const SocketPage:FC=()=>{
    const websocket = useModel(socketStore,state => state.websocket)
    const renderWebsocketContent=():React.ReactNode=>{
        if(!websocket){
            return (
                <SocketConfig />
            )
        }
    }
    return(
        <div className={styles.socketPage}>
            {renderWebsocketContent()}
        </div>
    )
}
export default SocketPage