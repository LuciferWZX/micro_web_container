export {}
declare global {
    interface Window {
        app?: {
            win:{
                min:Function,
                max:Function
            }
        };//全局变量名
    }
}