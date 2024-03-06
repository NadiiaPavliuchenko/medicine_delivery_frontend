import {
  StyledButton,
  StyledButtonContainer,
  StyledInput,
  StyledInputsContainer,
  StyledLabel,
} from "./Form.styled";

const DeliveryForm = ({ onSubmit, calculateTotalPrice }) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <StyledInputsContainer>
        <StyledLabel htmlFor="name">Name:</StyledLabel>
        <StyledInput type="text" name="name" id="name" />
        <StyledLabel htmlFor="email">Email:</StyledLabel>
        <StyledInput type="email" name="email" id="email" />
        <StyledLabel htmlFor="phone">Phone:</StyledLabel>
        <StyledInput type="tel" name="phone" id="phone" />
        <StyledLabel htmlFor="address">Address:</StyledLabel>
        <StyledInput type="text" name="address" id="address" />
      </StyledInputsContainer>
      <StyledButtonContainer>
        <h3>TotalPrice: {calculateTotalPrice()} &#8372;</h3>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledButtonContainer>
    </form>
  );
};

export default DeliveryForm;
