import "./App.css";

import DisplayTask from "./DisplayTask";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import ExpenseTracker from "./ExpenseTracker";
import Pagination from "./Pagination";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Display" element={<DisplayTask />} />
          <Route path="/ToDo" element={<Todo />} />
          <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
          <Route path="/Pagination" element={<Pagination />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
