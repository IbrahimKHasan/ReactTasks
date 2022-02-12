import "./Style.css";
import React, { useState } from "react";

function DisplayTaskFunction() {
  var [{ fname, lname, email, password }, setInput] = useState("");

  const inputChange = (e) => {
    setInput((currentState) => {
      return { ...currentState, [e.target.name]: e.target.value };
    });
  };

  const formSubmit = () => {
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("email", email);
    localStorage.setItem("color", "green");
    if (localStorage.getItem("accounts")) {
      let temp = JSON.parse(localStorage.getItem("accounts"));
      temp.push({
        email: email,
        firstName: fname,
        lastName: lname,
        password: password,
      });
      localStorage.setItem("accounts", JSON.stringify(temp));
    } else {
      let temp = [
        {
          email: email,
          firstName: fname,
          lastName: lname,
          password: password,
        },
      ];
      localStorage.setItem("accounts", JSON.stringify(temp));
    }
  };

  const Clear = () => {
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    localStorage.removeItem("email");
    localStorage.setItem("color", "red");
    window.location.href = "http://localhost:3000/Display";
  };
  if (localStorage.getItem("color")) {
    document.body.style.backgroundColor = localStorage.getItem("color");
  }
  return (
    <div className="form">
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
      <form className="form-box" action="" onSubmit={formSubmit}>
        <label className="label" htmlFor="">
          First Name:
        </label>
        <input
          name="fname"
          className="input"
          type="text"
          placeholder="First Name"
          value={fname}
          onChange={inputChange}
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
          value={lname}
          onChange={inputChange}
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
          value={email}
          onChange={inputChange}
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
          value={password}
          onChange={inputChange}
          required
        />
        <input className="submit" type="submit" value="Display" />
        <input className="clear" type="button" value="Clear" onClick={Clear} />
      </form>
    </div>
  );
}

export default DisplayTaskFunction;
