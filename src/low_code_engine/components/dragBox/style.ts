import styled, {css} from "styled-components";

export const StyledDragBox = styled.div<{isHovering:boolean}>`
  box-sizing: content-box;
  display: inherit;
  position: relative;
  padding: 1px;
  ${({isHovering})=>{
      if(isHovering){
        return css`
        z-index: 2;
        :before{
          content: "";
          height: 100%;
          width: 100%;
          position: absolute;
          border: 2px dashed royalblue;
          left: 0;
          top:0;
          z-index: 1;
          pointer-events: none;
        }
      `
      }
  }}
  
`