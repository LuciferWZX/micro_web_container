import {defineModel} from "foca";
interface IAPI {
    address:{
        protocol:"http"|"https",
        url:string
    },
    method:'get'|'post',
    headers:any,
    params:null|any
}
const initialState:IAPI = {
    address:{
        protocol:"http",
        url:''
    },
    method:'get',
    headers:null,
    params:null
}
const APIModel = defineModel('api', {
    initialState,
    actions: {
        updateState(state, newState: Partial<IAPI>) {
            Object.assign(state, newState);
        },
        clear() {
            return this.initialState;
        },
    },
});
export default APIModel