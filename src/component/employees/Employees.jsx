import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { columns } from "./constants";
import { getEmployees } from "./data";

const Exmployees = () => {
  const [data, setData] = React.useState(getEmployees());
  // const data = [
  //   {
  //     firstName: "Something",
  //     lastName: "Something",
  //     dob: "Something",
  //     designation: "Something",
  //     profilePic: "Something",
  //     experience: "Something",
  //   },
  // ];

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((col) => {
              return <th>{col.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr>
                {Object.keys(row).map((colKey) => {
                  return <td>{row[colKey]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Link to="/employees/add">
        <Button variant="success">+ Add Employee</Button>
      </Link>
    </div>
  );
};

export default Exmployees;
