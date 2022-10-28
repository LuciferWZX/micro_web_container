import React, {FC, useState} from "react";
import {StyledSocketConfig} from "@/pages/socket/config/style";
import {Segmented, Tooltip} from "antd";
import { SegmentedValue } from "antd/lib/segmented";
import WebsocketConfigForm from "@/pages/socket/config/WebsocketConfigForm";
type SocketType = 'websocket'|'socketIo'
const SocketConfig:FC = () => {
    const [socketType,setSocketType]=useState<SocketType>('websocket')
    const changeType=(type:SegmentedValue)=>{
        setSocketType(type as SocketType)
    }
    return(
        <StyledSocketConfig>
            <div className={'config-container'}>
                <div className={'segmented-header'}>
                    <Segmented
                        value={socketType}
                        options={[
                            { label: 'websocket', value: 'websocket', disabled: false },
                            { label: (
                                    <Tooltip title={'暂不支持'} color={'#108ee9'}>
                                        socket.io.client
                                    </Tooltip>
                                ), value: 'socketIo', disabled: true },
                        ]}
                        onChange={changeType}
                    />
                </div>
                <div className={'config-forms'}>
                    {socketType === "websocket" &&(
                        <WebsocketConfigForm/>
                    )}
                </div>
            </div>
        </StyledSocketConfig>
    )
}
export default SocketConfig