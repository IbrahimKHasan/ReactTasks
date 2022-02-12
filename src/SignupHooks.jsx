import "./Style.css";
import React, { useState } from "react";

function SignupHooks() {
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
    if (localStorage.getItem("accounts")) {
      let temp = JSON.parse(localStorage.getItem("accounts"));
      temp.push({
        email: email,
        firstName: fname,
        lastName: lname,
        password: password,
      });
      localStorage.setItem("accounts", JSON.stringify(temp));
      // window.location.href = "http://localhost:3000/Home";
      window.location.assign("/Home");
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
      // window.location.href = "http://localhost:3000/Home";
      window.location.assign("/Home");
    }
  };

  // const Clear = () => {
  //   localStorage.removeItem("fname");
  //   localStorage.removeItem("lname");
  //   localStorage.removeItem("email");
  //   window.location.href = "http://localhost:3000/Display";
  // };

  return (
    <div className="form">
      <form className="form-box" action="">
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
        <input
          onClick={formSubmit}
          className="submit"
          type="button"
          value="Signup"
        />
        {/* <input className="clear" type="button" value="Clear" onClick={Clear} /> */}
      </form>
    </div>
  );
}

export default SignupHooks;
