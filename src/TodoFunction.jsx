import "./Style.css";
import React, { useEffect, useState } from "react";

function TodoFunction() {
  var [todo, setTodoInput] = useState("");
  var [edit, setEditInput] = useState("");
  var [color, setColor] = useState("");
  var [render, setRender] = useState(JSON.parse(localStorage.getItem("todo")));

  const inputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const todoSubmit = (e) => {
    if (localStorage.getItem("todo")) {
      let temp = JSON.parse(localStorage.getItem("todo"));
      temp.push(todo);
      localStorage.setItem("todo", JSON.stringify(temp));
      setTodoInput("");
    } else {
      let temp = [todo];
      localStorage.setItem("todo", JSON.stringify(temp));
      setTodoInput("");
    }
  };

  const todoClear = () => {
    setTodoInput("");
    setRender("");
    localStorage.removeItem("todo");
  };

  if (localStorage.getItem("todo")) {
    var list = JSON.parse(localStorage.getItem("todo"));
  }

  const doubleClick = (event) => {
    var id = event.target.id;
    if (
      localStorage.getItem(id) === "pind" ||
      localStorage.getItem(id) === null
    ) {
      setColor("green");
      localStorage.setItem(id, "done");
    } else {
      setColor("ornage");
      localStorage.setItem(id, "pind");
    }
    window.location.href = "http://localhost:3000/ToDo";
  };

  const todoDelete = (event) => {
    var x = event.target.id;
    var list = JSON.parse(localStorage.getItem("todo"));
    list.splice(x, 1);
    localStorage.setItem("todo", JSON.stringify(list));
    // window.location.href = "http://localhost:3000/ToDo";
    localStorage.removeItem(`click-${x}`);
    setRender(JSON.parse(localStorage.getItem("todo")));
  };

  const todoEdit = (event) => {
    var id = event.target.name;
    var ele = event.target.value;
    var x = `ele-${id}`;
    var y = `list-${id}`;
    setEditInput(ele);
    document.getElementById(x).style.display = "";
    document.getElementById(y).innerText = "";
  };

  const editList = (e) => {
    var id = e.target.id;
    setEditInput(e.target.value);
    // document.getElementById(id).value = e.target.value;
  };

  const editCancel = () => {
    window.location.href = "http://localhost:3000/ToDo";
  };

  const editSubmit = (event) => {
    var id = event.target.name;
    var value = edit;
    var list = JSON.parse(localStorage.getItem("todo"));
    list[id] = value;
    localStorage.setItem("todo", JSON.stringify(list));
  };

  //   useEffect(() => {
  //     document.getElementById("test").style.color = "green";
  //   }, []);

  window.onload = () => {
    for (let i = 0; i <= 100; i++) {
      if (localStorage.getItem(`click-${i}`) === "done") {
        document.getElementById(`click-${i}`).style.fontWeight = "lighter";
        document.getElementById(`tr-${i}`).style.backgroundColor =
          "rgb(4, 206, 4)";
        document.getElementById(`click-${i}`).style.textDecoration =
          "line-through";
      } else {
        document.getElementById(`click-${i}`).style.fontWeight = "";
        document.getElementById(`click-${i}`).style.textDecoration = "";
        document.getElementById(`tr-${i}`).style.backgroundColor = "orange";
      }
    }
  };

  return (
    <section>
      <div className="form2">
        <h2 id="test">ToDo List</h2>
        <form className="form-box2">
          <input
            value={todo}
            name
            className="input"
            type="text"
            placeholder="Type Your ToDo"
            onChange={inputChange}
          />
          <input
            className="submit2"
            type="button"
            value="Add"
            onClick={todoSubmit}
          />
          <input
            className="clear2"
            type="button"
            value="Clear"
            onClick={todoClear}
          />
        </form>
        <table className="table table-width">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th className="todo-col" scope="col">
                Todo
              </th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {localStorage.getItem("todo")
              ? list.map((ele, i) => {
                  return (
                    <tr>
                      <th id={`tr-${i}`} scope="row">
                        {i}
                      </th>
                      <td
                        name={i}
                        id={`click-${i}`}
                        onDoubleClick={doubleClick}
                      >
                        <span style={{ color: "black" }} id={`list-${i}`}>
                          {ele}
                        </span>
                        <form
                          style={{ display: "none" }}
                          id={`ele-${i}`}
                          action=""
                          onSubmit={editSubmit}
                          name={i}
                        >
                          <input
                            style={{
                              padding: "3px",
                              borderRadius: "5px",
                            }}
                            id={`edit-${i}`}
                            type="text"
                            name={ele}
                            value={edit}
                            onChange={editList}
                          />
                          <input
                            style={{
                              margin: "5px",
                              border: "none",
                              backgroundColor: "green",
                              borderRadius: "5px",
                              padding: "5px",
                              color: "white",
                            }}
                            type="submit"
                            value="Save"
                          />
                          <input
                            style={{
                              margin: "5px",
                              border: "none",
                              backgroundColor: "red",
                              borderRadius: "5px",
                              padding: "5px",
                              color: "white",
                            }}
                            type="button"
                            value="Cancel"
                            onClick={editCancel}
                          />
                        </form>
                      </td>
                      <td>
                        <button
                          name={i}
                          value={ele}
                          type="submit"
                          className="edit"
                          onClick={todoEdit}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          id={i}
                          type="submit"
                          className="clear3"
                          onClick={todoDelete}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TodoFunction;
