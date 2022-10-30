import React, {FC, useState} from "react";
import {StyledSocketConfig} from "@/pages/socket/config/style";
import {Segmented, Tooltip} from "antd";
import { SegmentedValue } from "antd/lib/segmented";
import APIConfigForm from "@/pages/socket/config/APIConfigForm";
type SocketType = 'socket-message-sender-api'|'socketIo'
const SocketConfig:FC = () => {
    const [socketType,setSocketType]=useState<SocketType>('socket-message-sender-api')
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
                            { label: '接口调用', value: 'socket-message-sender-api', disabled: false },
                            { label: (
                                    <Tooltip title={'暂不支持'} color={'#108ee9'}>
                                        socket
                                    </Tooltip>
                                ), value: 'socket', disabled: true },
                        ]}
                        onChange={changeType}
                    />
                </div>
                <div className={'config-forms'}>
                    {socketType === "socket-message-sender-api" &&(
                        <APIConfigForm/>
                    )}
                </div>
            </div>
        </StyledSocketConfig>
    )
}
export default SocketConfig