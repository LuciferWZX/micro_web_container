import {defineModel} from "foca";
interface ISocket {
    isScroll:boolean
    websocket:WebSocket|null
}
const initialState:ISocket = {
    isScroll:false,
    websocket:null
}
const socketModel = defineModel('socket', {
    initialState,
    actions: {
        updateState(state, newState: Partial<ISocket>) {
            Object.assign(state, newState);
        },
        clear() {
            return this.initialState;
        },
    },
});
export default socketModel