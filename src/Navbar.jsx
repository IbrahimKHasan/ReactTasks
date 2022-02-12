import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  logout = () => {
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    localStorage.removeItem("email");
    window.location.href = "http://localhost:3000/Home";
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/Display">
                Display
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ToDo">
                To-Do-List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ExpenseTracker">
                ExpenseTracker
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Pagination">
                Pagination
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Semantic">
                SemanticUI
              </Link>
            </li>
            <li
              style={
                localStorage.getItem("fname")
                  ? { display: "none" }
                  : { display: "" }
              }
              className="nav-item"
            >
              <Link className="nav-link" to="/Signup">
                Signup
              </Link>
            </li>
            <li
              style={
                localStorage.getItem("email")
                  ? { display: "none" }
                  : { display: "" }
              }
              className="nav-item"
            >
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>
            <li
              style={
                localStorage.getItem("email")
                  ? { marginLeft: "600px" }
                  : { display: "none" }
              }
              className="nav-item"
            >
              <Link className="nav-link" to="/Home">
                {localStorage.getItem("email")
                  ? localStorage.getItem("fname")
                  : ""}
              </Link>
            </li>
            <li
              style={
                localStorage.getItem("email")
                  ? { marginLeft: "10px", marginTop: "3px" }
                  : { display: "none" }
              }
              className="nav-item"
            >
              <button
                style={{ backgroundColor: "#0d6efd", border: "none" }}
                className="nav-link"
                onClick={this.logout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
