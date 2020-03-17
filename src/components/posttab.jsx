import React from "react";
import PostModel from "./postmodel";

const Posttab = ({
  post,
  posts,
  addPost,
  updatePost,
  deletePost,
  getPost,
  handleInputFeild
}) => {
  return (
    <div>
      <td>
        <button type="button" onClick={addPost} class="btn btn-success btn-lg">
          Add Post
        </button>
      </td>
      <table className="table" border="5" bordercolor="green">
        <thead style={{ backgroundColor: "lightblue" }}>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          <th colSpan="2">Action</th>
        </thead>
        <tbody style={{ backgroundColor: "lightblue" }}>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>

              <td>
                <button
                  onClick={() => getPost(post.id)}
                  className="btn btn-primary"
                  data-toggle="model"
                  data-target="#exampleModel"
                >
                  Update
                </button>
                <PostModel
                  updatePost={updatePost}
                  post={post}
                  handleInputFeild={handleInputFeild}
                />
              </td>
              <td>
                <button
                  onClick={() => deletePost(post)}
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

export default Posttab;
