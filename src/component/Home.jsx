import React, { Component } from "react";
import Exmployees from "./Employees";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Home</h2>
        <Exmployees />
      </div>
    );
  }
}

export default Home;
