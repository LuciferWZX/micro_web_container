const {contextBridge,ipcRenderer}=require('electron')
contextBridge.exposeInMainWorld(
    'app',
    {
        win:{
            min:()=>ipcRenderer.send('min'),
            max:()=>ipcRenderer.send('max'),
        }
    }
)