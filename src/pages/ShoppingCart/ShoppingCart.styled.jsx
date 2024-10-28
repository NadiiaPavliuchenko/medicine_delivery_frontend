import styled from "styled-components";

export const StyledContaiter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;
