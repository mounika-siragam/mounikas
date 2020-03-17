import React, { Component } from "react";
import Axios from "axios";

import Pagination from "./pagination";
//import { Link } from "react-router-dom";
//import { toast } from "react-toastify";
//import http from "../services/httpService";
//import Spinner from "./spinner";
import _ from "lodash";
import Todotable from "./todotable";
const baseUrl = "https://jsonplaceholder.typicode.com";

class Todos extends Component {
  constructor() {
    super();
    console.log("inside constructor");
  }
  state = {
    todos: [],
    todo: { username: "", id: "", title: "", completed: "" },
    loading: true,
    pageSize: 15,
    selectedPage: 1
  };

  componentWillUnmount() {
    console.log("inside compnentWillUnmount");
  }
  async componentDidMount() {
    console.log("inside coponentDidMount");
    const promise = await Axios.get(baseUrl + "/todos");

    console.log(promise);

    this.setState({ todos: promise.data, loading: false });
    console.log(this.state.todos);
  }
  paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items) // converts items into lodash obj
      .slice(startIndex)
      .take(pageSize)
      .value();
  };
  handleInputField = event => {
    const todo = this.state.todo;
    const { name, value } = event.currentTarget;
    todo[name] = value;
    this.setState({ todo });
  };
  handleCompleteStatus = () => {
    const todos = this.state.todos.filter(to => to.completed === true);
    this.setState({ todos });
  };
  handlePendingStatus = () => {
    const todos = this.state.todos.filter(to => to.completed === false);
    this.setState({ todos });
  };
  handlePageSelect = page => {
    this.setState({ selectedPage: page });
  };
  addTodo = async () => {
    console.log("inside addtodo");
    const obj = {
      id: 20,
      userid: 200,
      title: "New Title",
      completed: "true"
    };
    // const response = await Axios.todo(baseUrl + "/todos/", obj);
    // console.log(response.data);
    const todos = [obj, ...this.state.todos];
    this.setState({ todos });
    console.log(this.state.todos);
  };
  deletetodo = async todo => {
    const originaltodos = this.state.todos;
    const todos = this.state.todos.filter(p => p.id !== todo.id);
    this.setState({ todos });
    try {
      await Axios.delete(baseUrl + "/todos/" + todo.id);
    } catch (err) {
      console.log("Error:", err);
      if (err.response && err.response.status === 404) {
        //toast.error("todo has been deleted");

        this.setState({ todos: originaltodos });
      }
    }
  };
  gettodo = id => {
    const todo = this.state.todos.filter(p => p.id === id);
    this.setState({ todo: todo[0] });
  };
  updatetodo = async todo => {
    console.log(todo);
    todo.title = "New Title";
    const response = await Axios.put(baseUrl + "/todos/" + todo.id, todo);
    // Axios.patch(baseUrl + "todos/" + todo.id, { title: "New Title" });
    console.log(Response);
    const indx = this.state.todos.indexOf(todo);
    const todos = this.state.todos;
    todos[indx] = response.data;
    this.setState({ todos });
  };

  render() {
    console.log("inside render ");
    const paginationtable = this.paginate(
      this.state.todos,
      this.state.selectedPage,
      this.state.pageSize
    );

    return (
      <div>
        <Todotable
          todos={paginationtable}
          todo={this.state.todo}
          deleteTodo={this.deletetodo}
          updateTodo={this.updatetodo}
          addTodo={this.addTodo}
          getTodo={this.gettodo}
          handleCompleteStatus={this.handleCompleteStatus}
          handlePendingStatus={this.handlePendingStatus}
          handleInputField={this.handleInputField}
        />

        <Pagination
          pageSize={this.state.pageSize}
          selectedPage={this.state.selectedPage}
          handlePageSelect={this.handlePageSelect}
          totalMovies={this.state.todos.length}
        />
      </div>
    );
  }
}
export default Todos;
