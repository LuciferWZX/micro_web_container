import {engines, store} from 'foca'
import APIModel from "@/stores/api.store";
store.init({
    persist: [
        {
            key: 'mwc_dev',
            version: 1,
            engine: engines.localStorage,
            models: [APIModel],
        },
    ],
})
console.info("[store初始化完成]")