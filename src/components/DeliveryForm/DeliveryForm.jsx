import {
  FormStyled,
  StyledButton,
  StyledButtonContainer,
  StyledInput,
  StyledInputsContainer,
  StyledLabel,
} from "./Form.styled";

import { Form, Formik } from "formik";
import * as Yup from "yup";

const DeliveryForm = ({ onSubmit, calculateTotalPrice }) => {
  const validateForm = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/(\+38 )[6-9]{1}[0-9 ]{4}[0-9 ]{4}[0-9]{3}/, {
        message: "Invalid Ukrainian phone number",
        excludeEmptyString: false,
      })
      .required("Phone number is required"),
    address: Yup.string().required("Address is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", address: "" }}
      validationSchema={validateForm}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
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
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <StyledButtonContainer>
            <h3>TotalPrice: {calculateTotalPrice()} &#8372;</h3>
            <StyledButton type="submit">Submit</StyledButton>
          </StyledButtonContainer>
        </Form>
      )}
    </Formik>
  );
};

export default DeliveryForm;
