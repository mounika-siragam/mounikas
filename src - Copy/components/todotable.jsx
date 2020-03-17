import React from "react";
//import TodoModel from "./todomodel";
import Input from "./input";
const Todotable = props => {
  return (
    <div>
      <tr>
        <td>
          <button
            type="button"
            onClick={props.addTodo}
            class="btn btn-success btn-lg mt-3"
          >
            Add Todo
          </button>
        </td>
        <td align="center">
          <button
            type="button"
            onClick={props.handlePendingStatus}
            class="btn btn-success btn-lg ml-5 mt-3"
          >
            Completed True
          </button>
        </td>
        <td>
          <button
            type="button"
            onClick={props.handleCompleteStatus}
            class="btn btn-success btn-lg mt-3"
          >
            Completed False
          </button>
        </td>
      </tr>
      <table className="table mt-3" border="5" bordercolor="green">
        <thead style={{ backgroundColor: "lightblue" }}>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
          <th colSpan="2">Action</th>
        </thead>
        <tbody style={{ backgroundColor: "lightblue" }}>
          {props.todos.map(todu => (
            <tr key={todu.id}>
              <td>{todu.id}</td>
              <td>{todu.title}</td>
              <td>{todu.completed.toString()}</td>

              <td>
                <button
                  onClick={props.handleInputField}
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Update
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <Input
                          inputName="id"
                          value={props.todo.id}
                          type="number"
                          handleInputField={props.handleInputField}
                          label="Id"
                          disabled="true"
                        />
                        <Input
                          inputName="title"
                          value={props.todo.title}
                          type="text"
                          handleInputField={props.handleInputField}
                          label="Title"
                        />
                        <Input
                          inputName="completed"
                          value={props.todo.completed}
                          type="text"
                          handleInputField={props.handleInputField}
                          label="Body"
                        />
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-dismiss="modal"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <button
                  onClick={() => props.deleteTodo(todu)}
                  type="button"
                  class="btn btn-danger"
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

export default Todotable;
