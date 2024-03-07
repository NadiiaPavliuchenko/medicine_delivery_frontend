import styled from "styled-components";

export const StyledCartContainer = styled.ul`
  width: 60vw;
  height: 80vh;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 15px;
  overflow-y: scroll;
  text-align: center;
`;

export const StyledLi = styled.li`
  width: 98%;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const StyledH = styled.h3`
  margin-bottom: 20px;
`;

export const StyledP = styled.p`
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 10px;
  background-color: transparent;
  position: absolute;
  border: 1px solid #333;
  width: 30px;
  height: 30px;
  padding: 4px;
  border-radius: 50%;

  transition: background-color 0.5s ease-out;

  &:hover,
  &:focus {
    background-color: lightgrey;
    transition: background-color 0.5s ease-out;
  }
`;
