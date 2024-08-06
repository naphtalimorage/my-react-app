import { useState } from "react";
import "./Registration.css";
import "./FormInputs.css";

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

  const [errors, setErrors]= useState({});
  const [focused, setFocused]= useState({});

  const handleBlur = (event) => {
    const {name, value}= event.target;
    let newErrors = {...errors};

    if(!value) {
      newErrors[name] = `The above field is Required`;
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
  };

  const handleFocus = (event) => {
    const {name}= event.target;
    setFocused({...focused, [name]: true});


    let newErrors = {...errors};
    delete newErrors[name];
    setErrors(newErrors);
  }

  const handleChange = (event) => {
    const {name,value}= event.target;
    setInputs({...inputs, [name]: value});
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await response.json();
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
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <br />
          {errors.fname && focused.fname && <span>{errors.fname}</span>}
        </div>
        <div>
          <input
            id="lname"
            type="text"
            value={inputs.lname}
            name="lname"
            onChange={handleChange}
            placeholder="Last Name"
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <br />
          {errors.lname && focused.lname && <span>{errors.lname}</span>}
        </div>
        <div>
          <input
            id="emailaddress"
            type="text"
            value={inputs.emailaddress}
            name="emailaddress"
            onChange={handleChange}
            placeholder="Email Address"
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <br />
          {errors.emailaddress && focused.emailaddress && <span>{errors.emailaddress}</span>}
        </div>
        <div>
          <input
            id="streetaddress"
            type="text"
            value={inputs.streetaddress}
            name="streetaddress"
            onChange={handleChange}
            placeholder="Street Address"
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <br />
          {errors.streetaddress && focused.streetaddress && <span>{errors.streetaddress}</span>}
        </div>
        <div>
          <input
            id="date"
            type="date"
            value={inputs.date}
            name="date"
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <br />
          {errors.date && focused.date && <span>{errors.date}</span>}
        </div>
        <div>
          <input
            id="school"
            type="text"
            value={inputs.school}
            name="school"
            onChange={handleChange}
            placeholder="School"
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <br />
          {errors.school && focused.school && <span>{errors.school}</span>}
        </div>
        <div className="selection1">
          <select
            id="currentStatus"
            name="currentStatus"
            value={inputs.currentStatus}
            onChange={handleChange}
            className="select-1"
            onBlur={handleBlur}
            onFocus={handleFocus}
          >
            <option value="">Select your status</option>
            <option value="undergraduate student">Undergraduate Student</option>
            <option value="graduate student">Graduate Student</option>
            <option value="professor">Professor</option>
            <option value="industry employee">Industry Employee</option>
          </select>
          <br />
          {errors.currentStatus && focused.currentStatus && <span>{errors.currentStatus}</span>}
        </div>
        <br />
        <div className="selection-2">
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={inputs.paymentMethod}
            onChange={handleChange}
            className="select-2"
            onBlur={handleBlur}
            onFocus={handleFocus}
          >
            <option value="">Payment Method</option>
            <option value="credit card">Credit Card</option>
            <option value="debit card">Debit Card</option>
            <option value="paypal">Paypal</option>
          </select>
          <br />
          {errors.paymentMethod && focused.paymentMethod && <span>{errors.paymentMethod}</span>}
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

