import {defineModel} from "foca";
import {TSchema} from "@/low_code_engine/types/schema";
import COMPONENT_LIST, {ComponentItem} from "@/low_code_engine/stores/componentsList";
interface EngineData {
    componentsList:ComponentItem[]
    schema:TSchema
}

export const initSchema:TSchema={
    props: {},
    type:"page",
    children:[]
}
const initialState:EngineData = {
    componentsList:COMPONENT_LIST,
    schema:initSchema
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