import {app,BrowserWindow} from 'electron'
import {mainWindowIpcStart} from "./lib/ipcMain";

//获取单例锁
const gotTheLock = app.requestSingleInstanceLock()
if(!gotTheLock){
    app.quit()
}else{
    const path = require('path')
    let winURL = path.resolve(__dirname,"../renderer/index.html");
    let mainWindow:BrowserWindow|null = null;
    const createWindow =():BrowserWindow =>  {
        const win = new BrowserWindow({
            width: 1120,
            height: 620,
            minWidth:1120,
            minHeight:620,
            show:false,
            icon: path.resolve(__dirname, "./icon/logo.png"),
            webPreferences:{
                preload:path.resolve(__dirname, "./lib/preload.ts")
            }
        })
        if(app.isPackaged){
            win.loadURL(`file://${winURL}`);
        }else{
            win.loadURL('http://localhost:8000')
            win.webContents.openDevTools();
        }

        win.on('closed',()=>{mainWindow = null})
        win.on('ready-to-show',()=>{
            win.show()
        })
        return win
    }
    app.on("ready", ()=> {
        mainWindow =createWindow();
        mainWindowIpcStart(mainWindow).then()
    })
    app.on('second-instance', (event, commandLine, workingDirectory) => {
        // 当运行第二个实例时,将会聚焦到myWindow这个窗口
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore()
            mainWindow.focus()
        }
    })
}
