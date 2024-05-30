import "./FormInputs.css";

const FormInputs = (props) => {
  const { errorMessage, handleChange, id, ...inputProps } = props;
  return (
    <div className="forminputs">
      <input {...inputProps} onChange={handleChange}/>
      <br/>
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInputs;
