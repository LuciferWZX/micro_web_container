export {}
declare global {
    interface Window {
        "is_mvc"?:boolean,
        "mwcAPP"?: {
            win:{
                min:Function,
                max:Function
            }
        };//全局变量名
    }
}