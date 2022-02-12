import "./Style.css";
import React, { useEffect, useState } from "react";

function ExpenseTrackerFunction() {
  const [cat, setCat] = useState([
    "Salary Income",
    "Passive Income",
    "House Expense",
    "Groceries Expense",
    "Fuel Expense",
  ]);

  const [{ Salary, Passive, House, Groceries, Fuel }, setInput] = useState({
    Salary: 0,
    Passive: 0,
    House: 0,
    Groceries: 0,
    Fuel: 0,
  });

  const balanceChange = (event) => {
    setInput((currentState) => {
      return { ...currentState, [event.target.name]: +event.target.value };
    });
  };
  const balanceCalculate = () => {
    var salary = +Salary + 0;
    var passive = +Passive + 0;
    var house = +House + 0;
    var fuel = +Fuel + 0;
    var groceries = +Groceries + 0;
    var balance = salary + passive - house - fuel - groceries;

    var oldBalance = localStorage.getItem("balance")
      ? parseInt(localStorage.getItem("balance"))
      : 0;

    var netBalance = oldBalance + balance;
    localStorage.setItem("balance", netBalance);
    window.location.href = "http://localhost:3000/ExpenseTracker";
  };

  var category = cat;
  return (
    <div className="form3">
      <h2
        style={{
          color: localStorage.getItem("balance") > 0 ? "green" : "red",
        }}
      >{`Balance = ${
        localStorage.getItem("balance") ? localStorage.getItem("balance") : 0
      } JD`}</h2>
      <form action="" onSubmit={balanceCalculate}>
        {category.map((ele, i) => {
          return (
            <div>
              <h5>{ele}</h5>
              <input
                className="form-control mb-2"
                type="number"
                placeholder={ele}
                id={`input-${i}`}
                name={ele.split(" ")[0]}
                onChange={balanceChange}
                value={useState[ele.split(" ")[0]]}
              />
            </div>
          );
        })}
        <input className="edit" type="submit" value="Calculate" />
      </form>
    </div>
  );
}

export default ExpenseTrackerFunction;
