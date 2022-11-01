import styled from "styled-components";

export const StyledDraggable = styled.div`
    width: 200px;
`
export const StyledDragPreview = styled.div`
  position:fixed;
  pointer-events: none;
  z-index: 100;
  left: 0;
  top: 0;
  cursor: grab;
`
export const StyledDragCard = styled.div`
  height: 28px;
  width: 84px;
  border-radius: 4px;
  padding: 6px 8px 6px 8px;
  box-shadow: 0 3px 6px 0 #00000026;
  background-color: white;
  cursor: grab;
`