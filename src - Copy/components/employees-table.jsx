import React from "react";
import Input from "./input";
const EmpTable = props => {
  const { deleteEmp, updateEmp, getEmp, employee } = props;
  console.log(employee);

  return (
    <div>
      <table className="table bg-light w-75 mx-auto mt-3">
        <thead className="table-danger">
          <tr>
            <th>ID</th>
            <th>EmpName</th>
            <th>Email</th>
            <th>Dept</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.dept}</td>
              <td>
                <button
                  onClick={() => getEmp(emp.id)}
                  className="btn btn-secondary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Update
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Update Employee Details
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form
                          onSubmit={updateEmp}
                          className="w-75 mx-auto  pt-0"
                        >
                          <Input
                            inputName="id"
                            value={props.employee.id}
                            type="number"
                            handleInputField={props.handleInputField}
                            label="EmpId"
                            disabled="true"
                          />
                          <Input
                            inputName="name"
                            value={props.employee.name}
                            type="text"
                            handleInputField={props.handleInputField}
                            label="Name"
                          />
                          <Input
                            inputName="email"
                            value={props.employee.email}
                            type="email"
                            handleInputField={props.handleInputField}
                            label="Email"
                          />
                          <Input
                            inputName="dept"
                            value={props.employee.dept}
                            type="text"
                            handleInputField={props.handleInputField}
                            label="Dept"
                          />

                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit "
                              data-dismiss="modal"
                              className="btn btn-primary"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => deleteEmp(emp.id)}
                  className="btn btn-outline-danger ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpTable;
