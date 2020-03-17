import React, { Component } from "react";
import Input from "./input";
class Login extends Component {
  username = React.createRef(); //reference object to map for input field

  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  handleFormSubmit = event => {
    event.preventDefault(); //for input type submit, not required for button
    const errors = {};
    const { username, password } = this.state.account;
    console.log(username);
    console.log(password);

    if (username.trim() === "") errors.username = "username is required";
    if (password.trim() === "") errors.password = "password is required";

    //console.log(errors);
    this.setState({ errors });
    if (username === "testuser" && password === "vasu@123") {
      this.props.history.replace("/home");
    } else {
      alert("Enter valid credentials");
    }
  };

  handleInputField = event => {
    const account = this.state.account;

    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);

    account[event.currentTarget.name] = event.currentTarget.value;
    console.log("hi", account);
    // account.username;
    // account[username];
    this.setState({ account: account });
  };

  render() {
    return (
      <div
        className="col-md-3 m-auto"
        style={{
          boxShadow: "5px 5px 5px 5px grey",
          backgroundColor: "grey",
          borderRadius: "10px"
        }}
      >
        <form onSubmit={this.handleFormSubmit}>
          <h1 className="text-center mt-5">Login Page</h1>

          <div className=" username pt-2 px-4">
            <Input
              inputName="username"
              value={this.state.account.username}
              type="text"
              handleInputField={this.handleInputField}
              label="username"
              error={this.state.errors.username}
            />
          </div>

          <div className="pwd pt-2 px-4">
            <Input
              inputName="password"
              value={this.state.account.password}
              type="password"
              handleInputField={this.handleInputField}
              label="password"
              error={this.state.errors.password}
            />
          </div>

          <div className="pt-3 pb-3 px-4">
            <input
              onClick={() => this.props.setLogin(true)}
              type="submit"
              value="Login"
              className=" btn-success btn-md btn-block text-capitalize"

              // style="font-size: 20px;"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
