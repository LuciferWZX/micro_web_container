import styled from "styled-components";

export const StyledSider = styled.div<{isScroll:boolean}>`
  width: ${({isScroll})=>isScroll?80:180}px;
  position: relative;
  transition-property: width;
  transition-duration: 0.2s;
`
export const StyledScrollButton = styled.div`
    position: absolute;
    height: 100%;
  width: 0px;
  right: 0;
  top: 0;
`
export const FloatIconButton = styled.div`
    display: inline-flex ;
    border-radius: 0 4px 4px 0;
    width: 14px;
    height: 20px;
    background-color: rgba(52, 73, 94,0.6);
    position: absolute;
    top: 50%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition-property:background-color;
  transition-duration:0.2s;
  :hover{
    background-color: rgba(52, 73, 94,1);
  }
`