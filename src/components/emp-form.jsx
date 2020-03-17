import React from "react";
import Input from "./input";
import Button from "./button";

const EmpForm = ({ id, name, email, dept, handleInputField, addEmp }) => {
  return (
    <div>
      <form onSubmit={addEmp} className="w-50 mx-auto bg-light mt-5 pt-0">
        <p className="h3 bg-secondary text-white text-center p-2">
          Add Employee
        </p>
        <div className="form-group">
          <Input
            inputName="id"
            value={id}
            type="number"
            handleInputField={handleInputField}
            label="EmpId"
          />
          <Input
            inputName="name"
            value={name}
            type="text"
            handleInputField={handleInputField}
            label="Name"
          />
          <Input
            inputName="email"
            value={email}
            type="email"
            handleInputField={handleInputField}
            label="Email"
          />
          <Input
            inputName="dept"
            value={dept}
            type="text"
            handleInputField={handleInputField}
            label="Dept"
          />
          <Button value="Add" />
        </div>
      </form>
    </div>
  );
};

export default EmpForm;
