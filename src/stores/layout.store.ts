import {defineModel} from "foca";
interface ILayout {
    isScroll:boolean
}
const initialState:ILayout = {
    isScroll:false
}
const layoutModel = defineModel('layout', {
    initialState,
    actions: {
        updateState(state, newState: Partial<ILayout>) {
            Object.assign(state, newState);
        },
        clear() {
            return this.initialState;
        },
    },
});
export default layoutModel