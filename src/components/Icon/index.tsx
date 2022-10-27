import React, {FC} from "react";

export enum IconType {
    Connect=`&#xe6b7;`,
    Disconnect=`&#xe66b;`
}
interface IIcon{
    className?:string
    type:IconType
}
const Icon:FC<IIcon> = (props) => {

    return <i className={`iconfont ${props.className}`}>{eval(props.type)}</i>
}
export default Icon