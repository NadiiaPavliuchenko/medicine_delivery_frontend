import styled from "styled-components";

export const StyledCartContainer = styled.ul`
  width: 100vw;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 15px;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    width: 50vw;
    height: 80vh;
  }
`;

export const StyledLi = styled.li`
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
  }
  @media screen and (min-width: 1440px) {
    padding: 20px;
    gap: 30px;
  }
`;

export const StyledH = styled.h3`
  margin-bottom: 20px;
`;

export const StyledP = styled.p`
  margin-bottom: 10px;
`;

export const StyledBlock = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledInput = styled.input`
  width: 90px;
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

export const StyledInfo = styled.p`
  text-align: center;
  margin: auto;
`;
