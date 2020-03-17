import React from "react";
import Input from "./input";
const PostModel = props => {
  const { post, id, title, body, updatePost } = props;
  return (
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
              Update Post Details
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
            <form onSubmit={updatePost} className="w-75 mx-auto  pt-0">
              <Input
                inputName="id"
                value={id}
                type="number"
                handleInputField={props.handleInputField}
                label="Id"
                disabled="true"
              />
              <Input
                inputName="title"
                value={title}
                type="text"
                handleInputField={props.handleInputField}
                label="Title"
              />
              <Input
                inputName="body"
                value={body}
                type="text"
                handleInputField={props.handleInputField}
                label="Body"
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
  );
};

export default PostModel;
