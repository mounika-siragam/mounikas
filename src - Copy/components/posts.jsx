import React, { Component } from "react";
import Axios from "axios";
import Posttab from "./posttab";
import Pagination from "./pagination";
//import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import http from "../services/http-services";
//import Spinner from "./spinner";
import _ from "lodash";
const baseUrl = "https://jsonplaceholder.typicode.com";

class Posts extends Component {
  constructor() {
    super();
    console.log("inside constructor");
  }
  state = {
    posts: [],
    loading: true,
    pageSize: 6,
    selectedPage: 1
  };

  componentWillUnmount() {
    console.log("inside compnentWillUnmount");
  }
  async componentDidMount() {
    console.log("inside coponentDidMount");
    const promise = await Axios.get(baseUrl + "/posts");

    console.log(promise);

    this.setState({ posts: promise.data, loading: false });
    console.log(this.state.posts);
  }
  paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items) // converts items into lodash obj
      .slice(startIndex)
      .take(pageSize)
      .value();
  };
  handlePageSelect = page => {
    this.setState({ selectedPage: page });
  };
  addPost = async () => {
    console.log("inside addPost");
    const obj = {
      id: 20,
      userid: 200,
      title: "New Title",
      body: "sdsdfgdaggghhhra"
    };
    const response = await Axios.post(baseUrl + "/posts/", obj);
    console.log(response.data);
    const posts = [obj, ...this.state.posts];
    this.setState({ posts });
    console.log(this.state.posts);
  };
  deletePost = async post => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });
    try {
      await http.delete(baseUrl + "/posts/" + post.id);
    } catch (err) {
      console.log("Error:", err);
      if (err.response && err.response.status === 404) {
        toast.error("Post has been deleted");

        this.setState({ posts: originalPosts });
      }
    }
  };
  getPost = id => {
    const post = this.state.posts.filter(p => p.id === id);
    this.setState({ post: post[0] });
  };
  updatePost = async post => {
    console.log(post);
    post.title = "New Title";
    const response = await Axios.put(baseUrl + "/posts/" + post.id, post);
    // Axios.patch(baseUrl + "posts/" + post.id, { title: "New Title" });
    console.log(Response);
    const indx = this.state.posts.indexOf(post);
    const posts = this.state.posts;
    posts[indx] = response.data;
    this.setState({ posts });
  };

  render() {
    console.log("inside render ");
    const paginationtable = this.paginate(
      this.state.posts,
      this.state.selectedPage,
      this.state.pageSize
    );

    return (
      <div>
        <Posttab
          posts={paginationtable}
          post={this.state.post}
          deletePost={this.deletePost}
          updatePost={this.updatePost}
          addPost={this.addPost}
          getPost={this.getPost}
        />

        <Pagination
          pageSize={this.state.pageSize}
          selectedPage={this.state.selectedPage}
          handlePageSelect={this.handlePageSelect}
          totalMovies={this.state.posts.length}
        />
      </div>
    );
  }
}
export default Posts;
