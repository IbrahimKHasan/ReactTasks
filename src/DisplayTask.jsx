import React, { Component } from "react";
import "./Style.css";

export class DisplayTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      row: [],
    };
  }
  Change = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state.row);
  };

  formSubmit = (e) => {
    localStorage.setItem("fname", this.state.fname);
    localStorage.setItem("lname", this.state.lname);
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("color", "green");

    if (localStorage.getItem("accounts")) {
      let temp = JSON.parse(localStorage.getItem("accounts"));
      temp.push({
        email: this.state.email,
        firstName: this.state.fname,
        lastName: this.state.lname,
        password: this.state.password,
      });
      localStorage.setItem("accounts", JSON.stringify(temp));
    } else {
      let temp = [
        {
          email: this.state.email,
          firstName: this.state.fname,
          lastName: this.state.lname,
          password: this.state.password,
        },
      ];
      localStorage.setItem("accounts", JSON.stringify(temp));
    }
  };

  Clear = () => {
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    localStorage.removeItem("email");
    localStorage.setItem("color", "red");
    window.location.href = "http://localhost:3000/Display";
  };
  componentDidMount() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get("http://localhost/react/my-app/src/select.php")
      .then((response) => {
        // handle success
        console.log(response);
        this.setState({ row: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  render() {
    if (localStorage.getItem("color")) {
      document.body.style.backgroundColor = localStorage.getItem("color");
    }
    return (
      <div className="form">
        <table>
          {this.state.row.map((ele, i) => {
            return (
              <tr key={i}>
                <td>{ele.coffee_name}</td>
                <td>{ele.coffee_country}</td>
                <td>{ele.coffee_price}</td>
              </tr>
            );
          })}
        </table>
        <h4 style={{ display: localStorage.getItem("fname") ? "" : "none" }}>
          Welcome{" "}
          <span>
            {localStorage.getItem("fname")
              ? `${localStorage.getItem("fname")} ${localStorage.getItem(
                  "lname"
                )}`
              : ""}
          </span>
        </h4>
        <h6 style={{ display: localStorage.getItem("fname") ? "" : "none" }}>
          Your Email is{" "}
          <span>
            {localStorage.getItem("fname") ? localStorage.getItem("email") : ""}
          </span>
        </h6>
        <form className="form-box" action="" onSubmit={this.formSubmit}>
          <label className="label" htmlFor="">
            First Name:
          </label>
          <input
            name="fname"
            className="input"
            type="text"
            placeholder="First Name"
            value={this.state.fname}
            onChange={this.Change}
            required
          />
          <label className="label" htmlFor="">
            Last Name:
          </label>
          <input
            name="lname"
            className="input"
            type="text"
            placeholder="Last Name"
            value={this.state.lname}
            onChange={this.Change}
            required
          />
          <label className="label" htmlFor="">
            Email:
          </label>
          <input
            name="email"
            className="input"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.Change}
            required
          />
          <label className="label" htmlFor="">
            Password:
          </label>
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.Change}
            required
          />
          <input className="submit" type="submit" value="Display" />
          <input
            className="clear"
            type="button"
            value="Clear"
            onClick={this.Clear}
          />
        </form>
      </div>
    );
  }
}

export default DisplayTask;
