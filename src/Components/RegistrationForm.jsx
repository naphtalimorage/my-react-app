/*import { useState } from "react";
import "./Registration.css";

const RegistrationForm = () => {
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    emailaddress: "",
    streetaddress: "",
    date: "",
    school: "",
    currentStatus: "",
    paymentMethod: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    // Validate fname
    if (!inputs.fname) {
      errors.fname = "First Name is required";
    } else if (inputs.fname.length >= 15) {
      errors.fname = "Name should be at most 14 characters long";
    }
  

    // Validate lname
    if (!inputs.lname) {
      errors.lname = "Last Name is required";
    } else if (inputs.lname.length >= 15) {
      errors.lname = "Name should be at most 14 characters long";
    }

    // Validate emailaddress
    if (!inputs.emailaddress) {
      errors.emailaddress = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(inputs.emailaddress)) {
      errors.emailaddress = "Invalid email address";
    }

    // Validate streetaddress
    if (!inputs.streetaddress) {
      errors.streetaddress = "Street Address is required";
    }

    // Validate date
    if (!inputs.date) {
      errors.date = "Date is required";
    }

    // Validate school
    if (!inputs.school) {
      errors.school = "School is required";
    }

    // Validate currentStatus
    if (!inputs.currentStatus) {
      errors.currentStatus = "Status is required";
    }

    // Validate paymentMethod
    if (!inputs.paymentMethod) {
      errors.paymentMethod = "Payment Method is required";
    }


    for (const inputs in errors) {
      if (errors.hasOwnProperty(inputs)) {
        setErrors({ [inputs]: errors[inputs] });
        return false; // Return false to indicate validation failure
      }
    }

    setErrors({});
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Valid data", inputs);
    } else {
      console.log("Invalid data", errors);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div>
          <input
            id="fname"
            type="text"
            name="fname"
            value={inputs.fname}
            onChange={handleChange}
            placeholder="First Name"
            maxLength="15"
            
          />
          <br />
          {errors.fname && (
            <small className="error-Message">{errors.fname}</small>
          )}
        </div>
        <div>
          <input
            id="lname"
            type="text"
            name="lname"
            value={inputs.lname}
            onChange={handleChange}
            placeholder="Last Name"
            maxLength="15"
          />
          <br />
          {errors.lname && (
            <small className="error-Message">{errors.lname}</small>
          )}
        </div>
        <div>
          <input
            id="emailaddress"
            type="text"
            name="emailaddress"
            value={inputs.emailaddress}
            onChange={handleChange}
            placeholder="Email Address"
          />
          <br />
          {errors.emailaddress && (
            <small className="error-Message">{errors.emailaddress}</small>
          )}
        </div>
        <div>
          <input
            id="streetaddress"
            type="text"
            name="streetaddress"
            value={inputs.streetaddress}
            onChange={handleChange}
            placeholder="Street Address"
          />
          <br />
          {errors.streetaddress && (
            <small className="error-Message">{errors.streetaddress}</small>
          )}
        </div>
        <div>
          <input
            id="date"
            type="date"
            name="date"
            value={inputs.date}
            onChange={handleChange}
          />
          <br />
          {errors.date && (
            <small className="error-Message">{errors.date}</small>
          )}
        </div>
        <div>
          <input
            id="school"
            type="text"
            name="school"
            value={inputs.school}
            onChange={handleChange}
            placeholder="School"
          />
          <br />
          {errors.school && (
            <small className="error-Message">{errors.school}</small>
          )}
        </div>
        <div className="selection1">
          <select
            id="currentStatus"
            name="currentStatus"
            value={inputs.currentStatus}
            onChange={handleChange}
          >
            <option value="">Select your status</option>
            <option value="undergraduate student">Undergraduate Student</option>
            <option value="graduate student">Graduate Student</option>
            <option value="professor">Professor</option>
            <option value="industry employee">Industry Employee</option>
          </select>
          <br />
          {errors.currentStatus && (
            <small className="error-Message">{errors.currentStatus}</small>
          )}
        </div>
        <br />
        <div className="selection2">
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={inputs.paymentMethod}
            onChange={handleChange}
          >
            <option value="">Payment Method</option>
            <option value="credit card">Credit Card</option>
            <option value="debit card">Debit Card</option>
            <option value="paypal">Paypal</option>
          </select>
          <br />
          {errors.paymentMethod && (
            <small className="error-Message">{errors.paymentMethod}</small>
          )}
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;*/
import "./Registration.css";
import FormInputs from "./FormInputs";
import { useState } from "react";

const RegistrationForm = () => {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    emailaddress: "",
    streetaddress: "",
    date: "",
    school: "",
    currentStatus: "",
    paymentMethod: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fname",
      type: "text",
      placeholder: "First Name",
      errorMessage: "First Name is required",
    },
    {
      id: 2,
      name: "lname",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Last Name is required",
    },
    {
      id: 3,
      name: "emailaddress",
      type: "email",
      placeholder: "Email Address",
      errorMessage: "Email Address is required",
      required: true,
    },
    {
      id: 4,
      name: "streetaddress",
      type: "text",
      placeholder: "Street Address",
      errorMessage: "Street Address is required",
      required: true,
    },
    {
      id: 5,
      name: "date",
      type: "date",
      placeholder: "Date",
      errorMessage: "Date is required",
    },
    {
      id: 6,
      name: "school",
      type: "text",
      placeholder: "School",
      errorMessage: "school name is required",
      required: true,
    },
    {
      id: 7,
      name: "currentStatus",
      type: "select",
      placeholder: "Status",
      errorMessage: "Current status is required",
      required: true,
    },
    {
      id: 8,
      name: "paymentMethod",
      type: "select",
      placeholder: "Payment Method",
      errorMessage: "Payment Method is required",
      required: true,
    }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setValues({ ...values, [name]: value });
  };

  console.log(values);
  return (
    <div className="registrationForm">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
