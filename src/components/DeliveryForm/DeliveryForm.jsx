import {
  FormStyled,
  StyledButton,
  StyledButtonContainer,
  StyledInput,
  StyledInputsContainer,
  StyledLabel,
} from "./Form.styled";

import { Formik } from "formik";
import * as Yup from "yup";

const DeliveryForm = ({ onSubmit, calculateTotalPrice }) => {
  const validateForm = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required(),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      // .matches(/[0-9]{3}-[0-9]{3}-[0-9]{4}/, {
      //   message: "Invalid phone number",
      //   excludeEmptyString: false,
      // })
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
        <FormStyled
          onSubmit={(e) => {
            e.preventDefault();
            props.handleSubmit();
          }}
        >
          <StyledInputsContainer>
            <StyledLabel htmlFor="name">Name:</StyledLabel>
            <StyledInput
              type="text"
              name="name"
              id="name"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <StyledLabel htmlFor="email">Email:</StyledLabel>
            <StyledInput
              type="email"
              name="email"
              id="email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
            />
            {props.errors.email && (
              <div id="feedback">{props.errors.email}</div>
            )}
            <StyledLabel htmlFor="phone">Phone:</StyledLabel>
            <StyledInput
              type="tel"
              name="phone"
              id="phone"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.phone}
            />
            {props.errors.phone && (
              <div id="feedback">{props.errors.phone}</div>
            )}
            <StyledLabel htmlFor="address">Address:</StyledLabel>
            <StyledInput
              type="text"
              name="address"
              id="address"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.address}
            />
            {props.errors.address && (
              <div id="feedback">{props.errors.address}</div>
            )}
          </StyledInputsContainer>
          <StyledButtonContainer>
            <h3>TotalPrice: {calculateTotalPrice()} &#8372;</h3>
            <StyledButton type="submit">Submit</StyledButton>
          </StyledButtonContainer>
        </FormStyled>
      )}
    </Formik>
  );
};

export default DeliveryForm;
