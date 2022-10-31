import {createContext} from "react";
import {TSchema} from "@/low_code_engine/types/schema";
import {SetState} from "ahooks/es/useSetState";
export interface LowCodeEngineState{
    schema:TSchema
    isExpand:boolean
}
export interface LowCodeEngineContext{
    getState:LowCodeEngineState,
    setState:SetState<LowCodeEngineState>
}
export const initPage:TSchema={
    props: {},
    type:"page",
    children:[]
}
export const lowCodeEngineContext = createContext<LowCodeEngineContext>({
    getState:{
        schema:initPage,
        isExpand:false
    },
    setState:()=>{}
})
