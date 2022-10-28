import styled from "styled-components";

export const StyledSocketConfig = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .segmented-header{
    text-align: center;
  }
  .config-container{
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    .config-forms{
      flex: 1;
      padding: 10px;
    }
  }
`