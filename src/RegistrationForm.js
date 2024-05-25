import  {useState}  from "react";

const RegistrationForm = () => {


    const [inputs, setInputs] = useState({});
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
        <label>
            <input 
            type="text"
            name="fname"
            value={inputs.fname}
            onChange={handleChange}
            placeholder="First Name"
            />
        </label>
        <label>
            <input 
            type="text"
            name="lname"
            value={inputs.lname}
            onChange={handleChange}
            placeholder="Last Name"
            />
        </label>
        <label>
            <input 
            type="text"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="Email Address"
            />
        </label>
        <label>

            <input 
            type="text"
            name="fname"
            value={inputs.name}
            onChange={handleChange}
            placeholder="First Name"
            />
        </label>
        <label>
            <input 
            type="text"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="Email Address"
            />
        </label>
        <button type="submit">Submit</button>
    </form>
    </div>)
}




export default RegistrationForm;