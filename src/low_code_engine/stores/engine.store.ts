import {defineModel} from "foca";
import {TSchema} from "@/low_code_engine/types/schema";
import COMPONENT_LIST, {ComponentItem} from "@/low_code_engine/stores/componentsList";
import dayjs from "dayjs";
interface EngineData {
    componentsList:ComponentItem[]
    schema:TSchema
    mode:"edit"|"preview"
}

export const initSchema:TSchema={
    id:dayjs().unix().toString(),
    props: {},
    type:"page",
    children:[]
}
const initialState:EngineData = {
    componentsList:COMPONENT_LIST,
    schema:initSchema,
    mode:"edit"
}
const EngineModel = defineModel('engine', {
    initialState,
    actions: {
        updateState(state, newState: Partial<EngineData>) {
            Object.assign(state, newState);
        },
        clear() {
            return this.initialState;
        },
    },
});
export default EngineModel