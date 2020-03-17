import React, { Component } from "react";
import EmpTable from "./employees-table";
import EmpForm from "./emp-form";

class Employees extends Component {
  state = {
    employees: [
      {
        id: 1001,
        name: "Ram",
        email: "ram@gmail.com",
        dept: "Admin"
      },
      {
        id: 1002,
        name: "Sam",
        email: "sam@gmail.com",
        dept: "IT"
      },
      {
        id: 1003,
        name: "Ravi",
        email: "ravi@gmail.com",
        dept: "Hacking"
      }
    ],
    employee: {
      id: "",
      name: "",
      email: "",
      dept: ""
    }
  };

  addEmp = event => {
    event.preventDefault();
    console.log(this.state.employee);
    const employees = [...this.state.employees, this.state.employee];
    // [{e1}, {e2}, {e3}, {e4}]
    console.log(employees);
    this.setState({ employees });
  };

  getEmp = id => {
    const employee = this.state.employees.filter(emp => emp.id === id);
    this.setState({ employee: employee[0] });
  };

  deleteEmp = id => {
    const employees = this.state.employees.filter(emp => emp.id !== id);
    this.setState({ employees });
  };

  updateEmp = event => {
    event.preventDefault();
    console.log("update", this.state.employee);
    const emp = this.state.employee;
    const employees = this.state.employees;
    const indx = this.state.employees.indexOf(emp);
    employees[indx] = emp;
    this.setState({ employees });
    console.log(indx);

    // this.setState({ employee });
  };

  handleInputField = event => {
    const employee = this.state.employee;
    const { name, value } = event.currentTarget;
    // account[event.currentTarget.name] = event.currentTarget.value
    employee[name] = value;
    console.log("employee", employee);
    this.setState({ employee });
  };

  render() {
    console.log(this.state.employees);
    return (
      <div>
        <EmpTable
          deleteEmp={this.deleteEmp}
          updateEmp={this.updateEmp}
          employees={this.state.employees}
          getEmp={this.getEmp}
          employee={this.state.employee}
          handleInputField={this.handleInputField}
        />
        <EmpForm
          handleInputField={this.handleInputField}
          addEmp={this.addEmp}
        />
      </div>
    );
  }
}

export default Employees;
