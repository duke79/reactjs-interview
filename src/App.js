import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./component/Home";
import Exmployees from "./component/employees/Employees";
import AddEditEmployee from './component/employees/AddEditEmployee';

function App() {
  return (
    <div className="container">
      <Router>
        <div className="col-md-12">
          <h1 className="text-center" style={style}></h1>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/employees" exact element={<Exmployees />} />
            <Route path="/employees/add" exact element={<AddEditEmployee />} />
            <Route path="/employees/edit/:id" exact element={<AddEditEmployee />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

const style = {
  color: "red",
  margin: "10px",
};

export default App;
