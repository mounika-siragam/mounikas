import React, { Component } from "react";
import Input from "./input";
//iremport Button from "./button";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
class Registration extends Component {
  state = {
    account: {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    },

    schema: {
      firstName: Joi.string()
        .min(3)
        .required(),
      lastname: Joi.string()
        .min(2)
        .required(),
      email: Joi.string().required(),
      password: Joi.string()
        .min(6)
        .alphanum()
        .required()
    }
  };
  handleInputField = event => {
    const account = {};
    const errors = {};
    const { name, value } = event.currentTarget;
    //  account[event.currentTarget.name] = event.currentTarget.value;
    account[name] = value;
    this.setState({ account });
    //validation
    const obj = { [name]: value };
    const sch = { [name]: this.schema[name] };
    console.log(obj);
    //firstname:joi.string().min(3).required()}
    console.log(sch);

    console.log(Joi.validate(obj, sch));
    const result = Joi.validate(obj, sch);
    if (result.error !== null) {
      errors[name] = result.error.details[0].message;
      this.setState({ errors });
    } else {
      this.setState({ errors });
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert("Registration sucess!");
    this.props.history.replace("/login");
    /*  const errors = {};
    const account = this.state.account;
    const options = { abortEarly: false };
    const result = Joi.validate(account, this.schema, options);
    console.log(result);
    console.log(result.log.details);
    for (let item of result.error.details) {
      console.log(item);
      console.log(item.path[0]);
      console.log(item.message);
      errors[item.path[0]] = item.message;
      this.setState({ errors });
      */
  };

  render() {
    return (
      <div>
        <form className="w-50 mx-auto pt-0 mt-5 bg-light   rounded">
          <p className="h3 bg-secondary text-white text-center p-2">
            Registration Form
          </p>
          <div class="form-group">
            <label for="firstname">Firstname</label>
            <input
              type="text"
              class="form-control"
              id="firstname"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="lastname">Lastname</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Registration;
