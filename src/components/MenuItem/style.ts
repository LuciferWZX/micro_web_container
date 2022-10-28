import styled, {css} from "styled-components";

export const StyledMenuItem = styled.li<{isScroll?:boolean}>`
  padding: 5px;
  width: 100%;
  border-radius: 4px;
  font-size:14px;
  line-height:20px;
  :hover{
    background: #34495e;
  }
  cursor:pointer;
  user-select: none;
  transition-property: background-color;
  transition-duration: 0.2s;
  font-weight: 500;
  ${({isScroll})=>{
      if(isScroll){
        return css`
        .menu-label{
          font-size: 12px;
        }
      `
      }
      
  }}
  
`