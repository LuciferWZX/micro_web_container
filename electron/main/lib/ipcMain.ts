import {BrowserWindow,ipcMain,app} from "electron";

export const mainWindowIpcStart = async (win:BrowserWindow) =>{
    //重启
    ipcMain.on("restart",async ()=>{
        app.relaunch()
        app.exit(0)
    })
    // 最小化
    ipcMain.on("min", async ()=> {
        win.minimize()
    })

    // 最大化
    ipcMain.on("max", async ()=> {
        if (win.isMaximized()) {
            win.unmaximize()
        } else {
            win.maximize()
        }
    })

    // 关闭程序
    ipcMain.on("close", async ()=> {
        win.close();
    })
}