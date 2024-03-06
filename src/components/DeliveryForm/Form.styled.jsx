import styled from "styled-components";

export const StyledInputsContainer = styled.div`
  width: 40vw;
  height: 80vh;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin: 20px 0 10px 0;
`;

export const StyledInput = styled.input`
  width: 75%;
  border-radius: 5px;
  border: 1px solid #333;
  padding: 10px;
  margin-bottom: 20px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  margin-top: 10px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  width: 150px;
  border: 1px solid #333;
  border-radius: 10px;
  transition: background-color 0.5s ease-out;

  &:hover,
  &:focus {
    background-color: lightgrey;
    transition: background-color 0.5s ease-out;
  }
`;
