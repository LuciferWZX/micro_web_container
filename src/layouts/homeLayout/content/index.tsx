import React, {FC} from "react";
import {StyledContent} from "@/layouts/homeLayout/content/style";
interface IProps{
    children?:React.ReactNode
}
const Content:FC<IProps> = (props) => {
  return(
      <StyledContent>
          {props.children}
      </StyledContent>
  )
}
export default Content