import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
`;

export const FiltersButton = styled.button`
  display: block;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;

  width: 90%;
  height: 40px;
  transition: background-color 0.5s ease-out;

  &:hover,
  :focus {
    background-color: lightgrey;
    transition: background-color 0.5s ease-out;
  }
  &:active {
    background-color: lightgrey;
    transition: background-color 0.5s ease-out;
  }
  @media screen and (min-width: 768px) {
    width: 152px;
  }
`;
