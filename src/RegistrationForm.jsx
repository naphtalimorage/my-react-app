import  {useState}  from "react";
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
        paymentMethod: ""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return ( 
    <div className="form-container">
        <h1>Regester</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <input 
            id="fname"
            type="text"
            name="fname"
            value={inputs.fname}
            onChange={handleChange}
            placeholder="First Name"
            maxLength= "15"
            required
            />
        </div>
        <div>
            <input
            id="lname" 
            type="text"
            name="lname"
            value={inputs.lname}
            onChange={handleChange}
            placeholder="Last Name"
            maxLength= "15"
            required
            />
        </div>
        <div>
            <input
            id="emailaddress" 
            type="text"
            name="emailaddress"
            value={inputs.emailaddress}
            onChange={handleChange}
            placeholder="Email Address"
            required
            />
        </div>
        <div>
            <input
            id="streetaddress" 
            type="text"
            name="streetaddress"
            value={inputs.streetaddress}
            onChange={handleChange}
            placeholder="Street Address"
            required
            />
        </div>
        <div>
            <input
            id="date"
            type="date"
            name="date"
            value={inputs.date}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <input 
            id="school"
            type="text"
            name="school"
            value={inputs.school}
            onChange={handleChange}
            placeholder="School "
            required
            />
        </div>
        <div className="selection1"> 
            <select 
            id="currentStatus"
            name="currentStatus"
            value={inputs.currentStatus}
            onChange={handleChange}
            required
            >

                <option value="" >Select your status</option>
                <option value="undergraduate student" >undergraduate student</option>
                <option value="graduate student">graduate student</option>
                <option value="professor">professor</option>
                <option value="industry employee">industry employee</option>
            </select>
        </div>
        <br/>
        <div className="selection2">
            <select
            id="paymentMethod"
            name="paymentMethod"
            value={inputs.paymentMethod}
            onChange={handleChange}
            required
            >
                <option value="" >Payment Method</option>
                <option value="credit card" >credit card</option>
                <option value="debit card">debit card</option>
                <option value="paypal">paypal</option>
                
            </select>
        </div>
        <br/>
        <button type="submit">Submit</button>
    </form>
    </div>)
}




export default RegistrationForm;