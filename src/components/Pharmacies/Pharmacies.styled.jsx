import styled from "styled-components";

export const StyledContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 20vw;
    height: 100%;
  }
  display: flex;
  flex-direction: column;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
`;

export const StyledH = styled.h3`
  margin-bottom: 20px;
`;

export const StyledLi = styled.li`
  border: 1px solid #333;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  @media screen and (min-width: 1440px) {
    padding: 20px;
  }
  transition: background-color 0.5s ease-out;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover,
  &:focus {
    background-color: lightgray;
    transition: background-color 0.5s ease-out;
  }
  ${(props) =>
    props.selected &&
    `
    background-color: lightgray;
  `}
`;
