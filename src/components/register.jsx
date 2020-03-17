import React, { Component } from "react";
// import Rinput from "./rinput";
import Input from "./input";
import Joi from "joi-browser";

class Register extends Component {
  state = {
    fields: { firstname: "", lastname: "", email: "", password: "" },
    errors: {}
  };
  schema = {
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
  };
  handleInputField = event => {
    const account = {};
    account[event.currentTarget.name] = event.currentTarget.value;
  };
  handleInputFeild = event => {
    const account = {};
    const errors = {};
    const { name, value } = event.currentTarget;
    account[name] = value;
    this.setState({ account });

    const obj = { [name]: value };
    const sch = { [name]: this.scheme[name] };
    const result = Joi.validate(obj, sch);
    if (result.error !== null) {
      errors[name] = result.error.details[0].message;
      this.setState({ errors });
    } else {
      this.setState({ errors });
    }
  };

  handleFormSubmit = event => {
    event.preventDefault(); //for input type submit, not required for button
    const errors = {};
    const { firstname, lastname, email, password } = this.state.fields;
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(password);

    if (firstname.trim() === "") errors.firstname = "firstname is required";
    if (lastname.trim() === "") errors.lastname = "lastname is required";
    if (email.trim() === "") errors.email = "email is required";
    if (password.trim() === "") errors.password = "password is required";

    console.log(errors);
    this.setState({ errors });
  };

  handleInputField = event => {
    const fields = this.state.fields;

    fields[event.currentTarget.name] = event.currentTarget.value;
    console.log("hi", fields);

    this.setState({ fields: fields });
  };

  render() {
    return (
      <div style={{ paddingLeft: "40px", paddingTop: "60px" }}>
        <div
          className="col-md-4 m-auto"
          style={{
            boxShadow: "5px 5px 5px 5px grey",
            backgroundColor: "grey",
            borderRadius: "10px"
          }}
        >
          <form onSubmit={this.handleFormSubmit}>
            <h1 className="text-center">Reistration Page</h1>
            <div>
              <Input
                inputName="firstname"
                value={this.state.fields.firstname}
                type="text"
                handleInputField={this.handleInputField}
                label="First Name"
                error={this.state.errors.firstname}
              />
            </div>
            <div>
              <Input
                inputName="lastname"
                value={this.state.fields.lastname}
                type="text"
                handleInputField={this.handleInputField}
                label="Last Name"
                error={this.state.errors.lastname}
              />
            </div>
            <div>
              <Input
                inputName="email"
                value={this.state.fields.email}
                type="email"
                handleInputField={this.handleInputField}
                label="Email"
                error={this.state.errors.email}
              />
            </div>
            <div>
              <Input
                inputName="password"
                value={this.state.fields.password}
                type="password"
                handleInputField={this.handleInputField}
                label="Password"
                error={this.state.errors.password}
              />
            </div>
            <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              <center>
                <button className="btn btn-success">Register</button>
              </center>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
