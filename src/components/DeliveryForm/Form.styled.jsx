import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100vw;
  @media screen and (min-width: 768px) {
    width: 50vw;
  }
`;

export const StyledInputsContainer = styled.div`
  border: 1px solid #333;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 50vw;
    height: 80vh;
  }
`;

export const StyledLabel = styled.label`
  margin: 20px 0 10px 0;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin: 10px 0 10px 0;
  }
`;

export const StyledInput = styled.input`
  width: 90%;
  border-radius: 5px;
  border: 1px solid #333;
  padding: 10px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 10px;
    height: 35px;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    gap: 100px;
  }
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
