import styled from "styled-components";

export const StyledMenuItem = styled.li`
  padding: 5px;
  border-radius: 4px;
  :hover{
    background: #34495e;
  }
  cursor:pointer;
  user-select: none;
  transition-property: background-color;
  transition-duration: 0.2s;
`