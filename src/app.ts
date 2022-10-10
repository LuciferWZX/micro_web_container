export const getInitialState=async ()=>{
    console.log("11")
    return null
}
export const qiankun = ():any=>{
    console.log('parent:',window?.mwcAPP)
    return {
        apps: [
            {
                name: 'mwc2',
                entry: '//localhost:8002',
                enable:false
            },
        ],
    }
};