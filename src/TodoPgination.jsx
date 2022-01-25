// import React, { Component } from "react";
// import Batata from "./Batata";

// export class Todo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todo: "",
//       edit: "",
//       list: "",
//       todos: JSON.parse(localStorage.getItem("todo")),
//       currentPage: 1,
//       todosPerPage: 3,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(event) {
//     this.setState({
//       currentPage: Number(event.target.id),
//     });
//   }

//   Todo = (event) => {
//     this.setState({
//       todo: event.target.value,
//     });
//   };

//   todoSubmit = () => {
//     if (localStorage.getItem("todo")) {
//       let temp = JSON.parse(localStorage.getItem("todo"));
//       temp.push(this.state.todo);
//       localStorage.setItem("todo", JSON.stringify(temp));
//     } else {
//       let temp = [this.state.todo];
//       localStorage.setItem("todo", JSON.stringify(temp));
//     }
//   };

//   todoClear = () => {
//     this.setState({
//       todo: "",
//     });
//     localStorage.setItem("todo", this.state.todo);
//   };

//   todoDelete = (event) => {
//     var x = event.target.id;
//     var list = JSON.parse(localStorage.getItem("todo"));
//     list.splice(x, 1);
//     localStorage.setItem("todo", JSON.stringify(list));
//     // window.location.href = "http://localhost:3000/ToDo";
//     localStorage.removeItem(`click-${x}`);
//     this.setState({
//       list: JSON.parse(localStorage.getItem("todo")),
//     });
//   };
//   editList = (event) => {
//     var id = event.target.id;
//     this.setState({
//       edit: event.target.value,
//     });
//     document.getElementById(id).value = "a";
//   };

//   todoEdit = (event) => {
//     var id = event.target.name;
//     var ele = event.target.value;
//     var x = `ele-${id}`;
//     var y = `list-${id}`;
//     this.setState({
//       edit: ele,
//     });
//     document.getElementById(x).style.display = "";
//     document.getElementById(y).innerText = "";
//   };

//   editCancel = () => {
//     window.location.href = "http://localhost:3000/ToDo";
//   };
//   editSubmit = (event) => {
//     var id = event.target.name;
//     var value = this.state.edit;
//     var list = JSON.parse(localStorage.getItem("todo"));
//     list[id] = value;
//     localStorage.setItem("todo", JSON.stringify(list));
//   };
//   doubleClick = (event) => {
//     var id = event.target.id;
//     if (
//       localStorage.getItem(id) === "pind" ||
//       localStorage.getItem(id) === null
//     ) {
//       localStorage.setItem(id, "done");
//     } else {
//       localStorage.setItem(id, "pind");
//     }
//     window.location.href = "http://localhost:3000/ToDo";
//   };

//   render() {
//     if (localStorage.getItem("todo")) {
//       var list = JSON.parse(localStorage.getItem("todo"));
//     }

//     window.onload = () => {
//       for (let i = 0; i <= 100; i++) {
//         if (localStorage.getItem(`click-${i}`) === "done") {
//           document.getElementById(`click-${i}`).style.fontWeight = "lighter";
//           document.getElementById(`tr-${i}`).style.backgroundColor =
//             "rgb(4, 206, 4)";
//           document.getElementById(`click-${i}`).style.textDecoration =
//             "line-through";
//         } else {
//           document.getElementById(`click-${i}`).style.fontWeight = "";
//           document.getElementById(`click-${i}`).style.textDecoration = "";
//           document.getElementById(`tr-${i}`).style.backgroundColor = "orange";
//         }
//       }
//     };
//     document.body.style.backgroundColor = "grey";
//     //pg
//     const { todos, currentPage, todosPerPage } = this.state;

//     // Logic for displaying current todos
//     const indexOfLastTodo = currentPage * todosPerPage;
//     const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//     const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

//     const renderTodos = currentTodos.map((ele, i) => {
//       return (
//         <section>
//           <table className="table table-width">
//             <thead>
//               <tr>
//                 <th scope="col">#</th>
//                 <th className="todo-col" scope="col">
//                   Todo
//                 </th>
//                 <th scope="col">Edit</th>
//                 <th scope="col">Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <th id={`tr-${i}`} scope="row">
//                   {i}
//                 </th>
//                 <td id={`click-${i}`} onDoubleClick={this.doubleClick}>
//                   <span style={{ color: "black" }} id={`list-${i}`}>
//                     {ele}
//                   </span>
//                   <form
//                     style={{ display: "none" }}
//                     id={`ele-${i}`}
//                     action=""
//                     onSubmit={this.editSubmit}
//                     name={i}
//                   >
//                     <input
//                       style={{
//                         padding: "3px",
//                         borderRadius: "5px",
//                       }}
//                       id={`edit-${i}`}
//                       type="text"
//                       name={ele}
//                       value={this.state.edit}
//                       onChange={this.editList}
//                     />
//                     <input
//                       style={{
//                         margin: "5px",
//                         border: "none",
//                         backgroundColor: "green",
//                         borderRadius: "5px",
//                         padding: "5px",
//                         color: "white",
//                       }}
//                       type="submit"
//                       value="Save"
//                     />
//                     <input
//                       style={{
//                         margin: "5px",
//                         border: "none",
//                         backgroundColor: "red",
//                         borderRadius: "5px",
//                         padding: "5px",
//                         color: "white",
//                       }}
//                       type="button"
//                       value="Cancel"
//                       onClick={this.editCancel}
//                     />
//                   </form>
//                 </td>
//                 <td>
//                   <button
//                     name={i}
//                     value={ele}
//                     type="submit"
//                     className="edit"
//                     onClick={this.todoEdit}
//                   >
//                     Edit
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     id={i}
//                     type="submit"
//                     className="clear3"
//                     onClick={this.todoDelete}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </section>
//       );
//     });
//     // const qbs = () => {
//     //   return (
//     //     <div className="form2">
//     //     <h2>ToDo List</h2>
//     //     <form className="form-box2" onSubmit={this.todoSubmit}>
//     //       <input
//     //         value={this.state.todo}
//     //         className="input"
//     //         type="text"
//     //         placeholder="Type Your ToDo"
//     //         onChange={this.Todo}
//     //       />
//     //       <input className="submit2" type="submit" value="Add" />
//     //       <input
//     //         className="clear2"
//     //         type="button"
//     //         value="Clear"
//     //         onClick={this.todoClear}
//     //       />
//     //     </form>
//     //   </div>
//     //   )
//     // };
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     const renderPageNumbers = pageNumbers.map((number) => {
//       return (
//         <li key={number} id={number} onClick={this.handleClick}>
//           {number}
//         </li>
//       );
//     });

//     return (
//       <div>
//         <Batata />
//         {/* <ul>{qbs}</ul> */}
//         <ul>{renderTodos}</ul>
//         <ul id="page-numbers">{renderPageNumbers}</ul>
//       </div>
//     );
//   }
// }
// export default Todo;
