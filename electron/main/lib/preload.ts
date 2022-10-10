const {contextBridge,ipcRenderer}=require('electron')
contextBridge.exposeInMainWorld(
    'mwcAPP',
    {
        win:{
            min:()=>ipcRenderer.send('min'),
            max:()=>ipcRenderer.send('max'),
        }
    }
)