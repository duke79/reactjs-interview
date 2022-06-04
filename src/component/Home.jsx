import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Home</h2>
        <Link to={"employees"}>Employees</Link>
      </div>
    );
  }
}

export default Home;
