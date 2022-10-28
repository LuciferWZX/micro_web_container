import React from "react"
import '@/stores/index'
import {FocaProvider} from 'foca'
export const getInitialState=async ()=>{
    console.log("11")
    return null
}

export const rootContainer=(container:React.ReactNode)=> {
    return React.createElement(FocaProvider, null, container);
}