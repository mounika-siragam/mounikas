import React from "react";

const Input = props => {
  const { inputName, value, type, handleInputField, label, error } = props;

  return (
    <div>
      <label htmlFor={inputName}>{label}&nbsp;</label>

      <input
        value={value}
        type={type}
        className="form-control"
        id={inputName}
        name={inputName}
        onChange={handleInputField}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
