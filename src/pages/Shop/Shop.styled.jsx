import styled from "styled-components";

export const StyledContaiter = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
