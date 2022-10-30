import React, {FC, useEffect, useState} from "react";
import JSONEditor, {JSONEditorMode, JSONEditorOptions, ParseError, SchemaValidationError} from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css'
import './dark.less'
import {StyledEditor} from "@/components/JsonEditor/style";
import {useGetState} from "ahooks";

type ValueType = [json: any,errors?: ReadonlyArray<SchemaValidationError | ParseError>]
interface IProps{
    id:string
    value?:ValueType
    style?:React.CSSProperties
    option?:{
        mode?: JSONEditorMode | undefined
        modes?: JSONEditorMode[] | undefined
    }
    onChange?:(value:ValueType)=>void
}
const JsonEditor:FC<IProps> = (props) => {
    const [jsonEditor,setJsonEditor,getJsonEditor]=useGetState<JSONEditor|null>(null)
    const [errorList,setErrorList,getErrorList]=useGetState<readonly (SchemaValidationError | ParseError)[]>([])
    useEffect(()=>{
        const container = document.getElementById(props.id)
        if(container){
            const option:JSONEditorOptions = {
                modes:props?.option?.modes ?? ['code'] ,

                onChangeText:(jsonString)=>{
                    props?.onChange?.([jsonString,getErrorList()])
                },
                onValidationError: function (errors) {
                    setErrorList(errors??[])
                    props?.onChange?.([getJsonEditor()?.getText(),errors])
                },
                onError:(error)=>{

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
            jsonEditor.updateText(props?.value?.[0] || "")
        }
    },[props.value])
    return(
        <StyledEditor  style={props.style} id={props.id} />
    )
}
export default JsonEditor