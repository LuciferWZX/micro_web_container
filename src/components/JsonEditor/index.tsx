import React, {FC, useEffect, useState} from "react";
import JSONEditor, {JSONEditorMode, JSONEditorOptions} from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css'
import './dark.less'
import {StyledEditor} from "@/components/JsonEditor/style";

interface IProps{
    id:string
    value?:any
    style?:React.CSSProperties
    option?:{
        mode?: JSONEditorMode | undefined
        modes?: JSONEditorMode[] | undefined
    }
    onChange?:((json: any) => void) | undefined
}
const JsonEditor:FC<IProps> = (props) => {
    const [jsonEditor,setJsonEditor]=useState<JSONEditor|null>(null)
    useEffect(()=>{
        const container = document.getElementById(props.id)
        if(container){
            const option:JSONEditorOptions = {
                modes:props?.option?.modes ?? ['tree' , 'view' , 'form' , 'code' , 'text' , 'preview'] ,
                onChangeText:props.onChange,
                onValidate: function (json) {
                    console.log(222,json)
                    return [];
                }
            }
            const newEditor = new JSONEditor(container,option)
            // newEditor.set(props.value)
            setJsonEditor(newEditor)
        }

        return ()=>{
            if (jsonEditor){
                jsonEditor.destroy()
            }
        }
    },[])
    useEffect(()=>{
        if(jsonEditor){
            jsonEditor.update(props.value)
        }
    },[props.value])
    return(
        <StyledEditor  style={props.style} id={props.id} />
    )
}
export default JsonEditor