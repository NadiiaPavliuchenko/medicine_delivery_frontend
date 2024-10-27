import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: flex-end;
  }
`;

export const SelectContainer = styled.div``;

export const FiltersButton = styled.button`
  display: block;
  cursor: pointer;

  width: 90%;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 152px;
  }
`;
