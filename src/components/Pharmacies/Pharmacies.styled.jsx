import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 20vw;
  height: 100%;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledH = styled.h3`
  margin-bottom: 20px;
`;

export const StyledLi = styled.li`
  border: 1px solid #333;
  border-radius: 5px;
  text-align: center;
  padding: 20px;
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
