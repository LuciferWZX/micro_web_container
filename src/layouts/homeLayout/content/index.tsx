import React, {FC} from "react";
interface IProps{
    children?:React.ReactNode
}
const Content:FC<IProps> = (props) => {
  return(
      <div>
          this is Content
          {props.children}
      </div>
  )
}
export default Content