import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-grey bg-dark">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li>
                <Link className="navbar-brand" to="/login">
                  <button type="button" class="btn btn-outline-info">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="/register">
                  <button type="button" class="btn btn-outline-info">
                    Register
                  </button>
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="/todos">
                  <button type="button" class="btn btn-outline-info">
                    Todos
                  </button>
                </Link>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
