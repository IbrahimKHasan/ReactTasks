import React, { Component } from "react";

export class Batata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      edit: "",
      list: "",
    };
  }
  Todo = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };

  todoSubmit = () => {
    if (localStorage.getItem("todo")) {
      let temp = JSON.parse(localStorage.getItem("todo"));
      temp.push(this.state.todo);
      localStorage.setItem("todo", JSON.stringify(temp));
    } else {
      let temp = [this.state.todo];
      localStorage.setItem("todo", JSON.stringify(temp));
    }
  };

  todoClear = () => {
    this.setState({
      todo: "",
    });
    localStorage.setItem("todo", this.state.todo);
  };

  todoDelete = (event) => {
    var x = event.target.id;
    var list = JSON.parse(localStorage.getItem("todo"));
    list.splice(x, 1);
    localStorage.setItem("todo", JSON.stringify(list));
    // window.location.href = "http://localhost:3000/ToDo";
    localStorage.removeItem(`click-${x}`);
    this.setState({
      list: JSON.parse(localStorage.getItem("todo")),
    });
  };
  editList = (event) => {
    var id = event.target.id;
    this.setState({
      edit: event.target.value,
    });
    document.getElementById(id).value = "a";
  };

  todoEdit = (event) => {
    var id = event.target.name;
    var ele = event.target.value;
    var x = `ele-${id}`;
    var y = `list-${id}`;
    this.setState({
      edit: ele,
    });
    document.getElementById(x).style.display = "";
    document.getElementById(y).innerText = "";
  };

  editCancel = () => {
    window.location.href = "http://localhost:3000/ToDo";
  };
  editSubmit = (event) => {
    var id = event.target.name;
    var value = this.state.edit;
    var list = JSON.parse(localStorage.getItem("todo"));
    list[id] = value;
    localStorage.setItem("todo", JSON.stringify(list));
  };
  doubleClick = (event) => {
    var id = event.target.id;
    if (
      localStorage.getItem(id) === "pind" ||
      localStorage.getItem(id) === null
    ) {
      localStorage.setItem(id, "done");
    } else {
      localStorage.setItem(id, "pind");
    }
    window.location.href = "http://localhost:3000/ToDo";
  };
  render() {
    return (
      <div className="form2">
        <h2>ToDo List</h2>
        <form className="form-box2" onSubmit={this.todoSubmit}>
          <input
            value={this.state.todo}
            className="input"
            type="text"
            placeholder="Type Your ToDo"
            onChange={this.Todo}
          />
          <input className="submit2" type="submit" value="Add" />
          <input
            className="clear2"
            type="button"
            value="Clear"
            onClick={this.todoClear}
          />
        </form>
      </div>
    );
  }
}

export default Batata;
