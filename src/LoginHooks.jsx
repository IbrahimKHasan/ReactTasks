import "./Style.css";
import React, { useState } from "react";

function LoginHooks() {
  var [{ email, password }, setInput] = useState("");

  const inputChange = (e) => {
    setInput((currentState) => {
      return { ...currentState, [e.target.name]: e.target.value };
    });
  };

  const formSubmit = () => {
    var accounts = JSON.parse(localStorage.getItem("accounts"));
    var check = false;
    accounts.map((ele) => {
      if (ele.email === email && ele.password === password) {
        check = true;
        var fname = ele.firstName;
        var lname = ele.lastName;
        localStorage.setItem("fname", fname);
        localStorage.setItem("lname", lname);
      }
    });
    if (check) {
      localStorage.setItem("email", email);
      window.location.assign("/Home");
    } else {
      alert("Invalid User Name or Password");
    }
  };

  return (
    <div className="form">
      <form className="form-box" action="">
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
        <input
          onClick={formSubmit}
          className="submit"
          type="button"
          value="Login"
        />
        {/* <input className="clear" type="button" value="Clear" onClick={Clear} /> */}
      </form>
    </div>
  );
}

export default LoginHooks;
