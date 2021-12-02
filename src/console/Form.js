import React, { useCallback, useState } from "react";
import TextInput from "../components/TextInput";
import "./Form.css";
const Form = () => {
  const [inputValues, setInputValues] = useState({
    adminIntakeCode: "",
  });

  const handleOnChange = useCallback((event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  });

  return (
    <div className="form-container">
      <h3>Predict</h3>
      <TextInput
        name="adminIntakeCode"
        type="number"
        placeholder="MMYYYY"
        onChange={handleOnChange}
        value={inputValues.adminIntakeCode}
        id="adminIntakeCode"
        label="Admin Intake Code *"
        required
      />
    </div>
  );
};

export default Form;
