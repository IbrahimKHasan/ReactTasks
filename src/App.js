import "./App.css";
// import "./hooks.css";
import DisplayTask from "./DisplayTask";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import ExpenseTracker from "./ExpenseTracker";
import Pagination from "./Pagination";
import NavbarHooks from "./NavbarHooks";
import FooterHooks from "./FooterHooks";
import ContentHooks from "./ContentHooks";
import DisplayTaskFunction from "./DisplayTaskFunction";
import TodoFunction from "./TodoFunction";
import ExpenseTrackerFunction from "./ExpenseTrackerFunction";
import SemanticUI from "./SemanticUI";
import Register from "./Register";
import SignupHooks from "./SignupHooks";
import SocialPageHooks from "./SocialPageHooks";
import LoginHooks from "./LoginHooks";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Display" element={<DisplayTaskFunction />} />
          <Route path="/ToDo" element={<TodoFunction />} />
          {/* <Route path="/ToDo" element={<Todo />} /> */}
          <Route path="/ExpenseTracker" element={<ExpenseTrackerFunction />} />
          {/* <Route path="/ExpenseTracker" element={<ExpenseTracker />} /> */}
          <Route path="/Pagination" element={<Pagination />} />
          <Route path="/Semantic" element={<SemanticUI />} />
          <Route path="/Signup" element={<SignupHooks />} />
          <Route path="/Login" element={<LoginHooks />} />
          <Route path="/Home" element={<SocialPageHooks />} />
        </Routes>
      </BrowserRouter>
      {/* <NavbarHooks />
      <ContentHooks />
      <FooterHooks /> */}
    </div>
  );
}

export default App;
