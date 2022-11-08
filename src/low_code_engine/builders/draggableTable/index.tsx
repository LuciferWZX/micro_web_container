import React, {FC, useEffect, useState} from "react";
import {StyledDraggable} from "@/low_code_engine/builders/draggableTable/style";
import DraggedCard from "@/low_code_engine/builders/draggableTable/DraggedCard";
import {useModel} from "foca";
import engineStore from "@/low_code_engine/stores/engine.store";
import {ReactSortable, Store} from "react-sortablejs";
import {DraggedType} from "@/low_code_engine/types/draggedType";
import {WithChosen, WithId} from "@/low_code_engine/types/withId";
import {ComponentItem} from "@/low_code_engine/stores/componentsList";
import Sortable, {SortableEvent} from "sortablejs";
import "./index.less"
export type DragComponentItem = WithChosen<WithId<ComponentItem>>
const DraggableTable:FC = () => {
    const componentList = useModel(engineStore,state => state.componentsList)
    const [list,setList]=useState<DragComponentItem[]>([])
    useEffect(()=>{
        setList(componentList.map(_comp=>{
            return {
                ..._comp,
                id:_comp.cId,
            }
        }))
    },[componentList])
    const updateList=(newState:DragComponentItem[], sortable:Sortable| null, store:Store)=>{
        setList(newState)

    }

    return(
        <StyledDraggable>
            <ReactSortable
                group={{
                    name:DraggedType.Card,
                    pull:'clone',
                    put:false
                }}
                sort={false}
                delay={20}
                //ghostClass={'drag-ghost'}
                className={'grid-box'}
                dragClass={'drag-dragging'}
                //animation={200}
                forceFallback={true}
                list={list}
                setList={updateList}>
                {list.map(comp=>{
                    return(
                        <DraggedCard key={comp.cId} item={comp} chosen={comp.chosen} />
                    )
                })}
            </ReactSortable>
        </StyledDraggable>
    )
}
export default DraggableTable