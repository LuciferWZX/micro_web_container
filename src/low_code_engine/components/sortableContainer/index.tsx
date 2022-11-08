import React, {FC, useEffect, useState} from "react";
import {TSchema} from "@/low_code_engine/types/schema";
import {ElementNode} from "@/low_code_engine/types/elementNode";
import {ReactSortable} from "react-sortablejs";
import {useBuilder} from "@/low_code_engine/hooks/useBuilder";
import {DraggedType} from "@/low_code_engine/types/draggedType";
import Sortable from "sortablejs";
import update from 'immutability-helper'
import './index.less'
import {DragComponentItem} from "@/low_code_engine/builders/draggableTable";
import initSchema from "@/low_code_engine/utils/initSchema";

interface IProps{
    schema:TSchema
    mode:'edit'|'preview'
}

const SortableContainer:FC<IProps> = (props) => {
    const {schema,mode}=props
    const [list,setList]=useState<ElementNode[]>([])
    const {buildNode} =useBuilder(mode)
    useEffect(()=>{
        setList(schema.children||[])
    },[schema.children])
    const updateList=(newList:ElementNode[], sortable:Sortable| null)=>{
        console.log("1111",newList)
        console.log("2222",sortable)
        if(sortable?.options.group === DraggedType.Card){

        }
        setList(newList.map(_item=>{
            if ((_item as unknown as DragComponentItem).cId){
                return initSchema((_item as unknown as DragComponentItem))
            }
            return _item
        }) as ElementNode[])
    }
    return(
        <ReactSortable
            group={{
                name:DraggedType.Card,
                pull:true,
                put:true
            }}
            className={'edit-sortable-container'}
            dragClass={'drag-dragging'}
            ghostClass={'drag-ghost'}
            animation={200}
            forceFallback={true}
            onStart={(evt, sortable, store)=>{
                console.log(123,evt)
            }}
            list={list}
            setList={updateList}>
            {list.map(_child=>{
                return buildNode(_child,_child.id)
            })}
        </ReactSortable>
    )
}
export default SortableContainer