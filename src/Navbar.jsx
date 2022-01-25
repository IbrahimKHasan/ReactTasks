import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light opacity-75">
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
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
