import {TSchema} from "@/low_code_engine/types/schema";
import {DragComponentItem} from "@/low_code_engine/builders/draggableTable";
import {inputSchemas} from "@/low_code_engine/stores/initSchemas";
import dayjs from "dayjs";

const initSchema=(item:DragComponentItem):TSchema=>{
    switch (item.type){
        case "Input":{
            return {
                ...inputSchemas,
                id:dayjs().unix().toString()
            }
        }
        default:{
            return {
                ...inputSchemas,
                id:dayjs().unix().toString()
            }
        }
    }
}
export default initSchema