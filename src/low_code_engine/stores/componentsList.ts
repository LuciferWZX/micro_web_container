import {ElementNodeType} from "@/low_code_engine/types/elementType";

export interface ComponentItem {
    cId:string
    name:string
    type:ElementNodeType
}

const COMPONENT_LIST:ComponentItem[]=[
    {
        cId:"1",
        name:"输入框",
        type:"Input"
    },
    {
        cId:"2",
        name:"密码框",
        type:"Password"
    },{
        cId:"3",
        name:"图片",
        type:"Image"
    },{
        cId:"4",
        name:"开关",
        type:"Switch"
    },{
        cId:"5",
        name:"复选框",
        type:"Checkbox"
    },{
        cId:"6",
        name:"级联选择框",
        type:"CascadeSelect"
    },{
        cId:"7",
        name:"选择框",
        type:"Select"
    }
]
export default COMPONENT_LIST