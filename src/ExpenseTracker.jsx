import React, { Component } from "react";

export class ExpenseTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: [
        "Salary Income",
        "Passive Income",
        "House Expense",
        "Groceries Expense",
        "Fuel Expense",
      ],
      Salary: "",
      Passive: "",
      House: "",
      Groceries: "",
      Fuel: "",
    };
  }
  balanceChange = (event) => {
    var cat = event.target.name;
    var value = event.target.value;
    this.setState({
      [cat]: value,
    });
  };
  balanceCalculate = () => {
    var salary = this.state.Salary;
    var passive = this.state.Passive;
    var house = this.state.House;
    var fuel = this.state.Fuel;
    var groceries = this.state.Groceries;
    var balance = salary + passive - house - fuel - groceries;
    // alert(balance);
    var oldBalance = localStorage.getItem("balance")
      ? parseInt(localStorage.getItem("balance"))
      : 0;
    var netBalance = oldBalance + balance;
    localStorage.setItem("balance", netBalance);
    window.location.href = "http://localhost:3000/ExpenseTracker";
  };
  render() {
    document.body.style.backgroundColor = "grey";
    var cat = this.state.cat;
    return (
      <div className="form3">
        <h2
          style={{
            color: localStorage.getItem("balance") > 0 ? "green" : "red",
          }}
        >{`Balance = ${
          localStorage.getItem("balance") ? localStorage.getItem("balance") : 0
        } JD`}</h2>
        <form action="" onSubmit={this.balanceCalculate}>
          {cat.map((ele, i) => {
            return (
              <div>
                <h5>{ele}</h5>
                <input
                  className="form-control mb-2"
                  type="number"
                  placeholder={ele}
                  id={`input-${i}`}
                  name={ele.split(" ")[0]}
                  onChange={this.balanceChange}
                  value={this.state[ele.split(" ")[0]]}
                />
              </div>
            );
          })}
          <input className="edit" type="submit" value="Calculate" />
        </form>
      </div>
    );
  }
}

export default ExpenseTracker;
