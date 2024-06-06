import { useState } from "react";
import "./Registration.css";
import "./FormInputs.css";
import Validation from "./Validation";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validation(inputs));
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(`Error submitting the form ${err}`);
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
            value={inputs.fname}
            name="fname"
            onChange={handleChange}
            placeholder="First Name"
            // onBlur={handleFocus}
            // focused = {focused.toString()}
          />
          <br />
          {errors.fname && <span>{errors.fname}</span>}
        </div>
        <div>
          <input
            id="lname"
            type="text"
            value={inputs.fname}
            name="lname"
            onChange={handleChange}
            placeholder="Last Name"
          />
          <br />
          {errors.lname && <span>{errors.lname}</span>}
        </div>
        <div>
          <input
            id="emailaddress"
            type="text"
            value={inputs.emailaddress}
            name="emailaddress"
            onChange={handleChange}
            placeholder="Email Address"
          />
          <br />
          {errors.emailaddress && <span>{errors.emailaddress}</span>}
        </div>
        <div>
          <input
            id="streetaddress"
            type="text"
            value={inputs.streetaddress}
            name="streetaddress"
            onChange={handleChange}
            placeholder="Street Address"
          />
          <br />
          {errors.streetaddress && <span>{errors.streetaddress}</span>}
        </div>
        <div>
          <input
            id="date"
            type="date"
            value={inputs.date}
            name="date"
            onChange={handleChange}
          />
          <br />
          {errors.date && <span>{errors.date}</span>}
        </div>
        <div>
          <input
            id="school"
            type="text"
            value={inputs.school}
            name="school"
            onChange={handleChange}
            placeholder="School"
          />
          <br />
          {errors.school && <span>{errors.school}</span>}
        </div>
        <div className="selection1">
          <select
            id="currentStatus"
            name="currentStatus"
            value={inputs.customElements}
            onChange={handleChange}
            className="select-1"
          >
            <option value="">Select your status</option>
            <option value="undergraduate student">Undergraduate Student</option>
            <option value="graduate student">Graduate Student</option>
            <option value="professor">Professor</option>
            <option value="industry employee">Industry Employee</option>
          </select>
          <br />
          {errors.currentStatus && <span>{errors.currentStatus}</span>}
        </div>
        <br />
        <div className="selection-2">
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={inputs.paymentMethod}
            onChange={handleChange}
            className="select-2"
          >
            <option value="">Payment Method</option>
            <option value="credit card">Credit Card</option>
            <option value="debit card">Debit Card</option>
            <option value="paypal">Paypal</option>
          </select>
          <br />
          {errors.paymentMethod && (
            <span style={{ marginleft: "20px" }}>{errors.paymentMethod}</span>
          )}
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

/*import "./Registration.css";
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
      pattern: "^[A-Za-z0-9][3,16]$",
      required: true,
    },
    {
      id: 2,
      name: "lname",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Last Name is required",
      required: true,
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
    setValues({ ...values, [name]: value});
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
*/
