/*import React, { useState } from "react";
import "./FormInputs.css";

const FormInputs = ({ errorMessage}) => {

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

*/
const Validation =  (inputs) => {
    const errors = {};
  
    const emailRegex = /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9]$/;
    if(inputs.fname === ""){
      errors.fname = "First name is required";
    }

    if(inputs.lname === ""){
      errors.lname = "last name is required";
    }

    if(inputs.emailaddress === ""){
      errors.emailaddress = "email address is required";
    } else if(emailRegex.test(inputs.emailaddress)){
      errors.emailaddress = "Invalid email address";
    }

    if(inputs.streetaddress === ""){
      errors.streetaddress = "street address is required";
    }

    if(inputs.date === ""){
      errors.date = "date is required";
    }

    if(inputs.school === ""){
      errors.school = "school is required";
    }

    if(inputs.currentStatus === ""){
      errors.currentStatus = "Status  is required";
    }

    if(inputs.paymentMethod === ""){
      errors.paymentMethod = "Payment Method is required";
    }

  return errors;
};

export default Validation;

