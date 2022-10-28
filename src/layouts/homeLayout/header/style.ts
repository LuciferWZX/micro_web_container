import styled from "styled-components";

export const StyledHeader = styled.div`
  box-sizing: border-box;
  padding:10px 14px;
  min-height: 40px;
  .header-left{
    cursor: pointer;
    border-radius: 4px;
    padding: 0 5px;
    transition-property: background-color;
    transition-duration: 0.2s;
    .tool-logo-icon{
      font-size: 30px;
      user-select: none;
    }
    :hover{
      background-color: black;
    }
  }
  
`
