import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { columns, columnKeys } from "./constants";
import { getEmployees, removeEmployee } from "./data";

const Exmployees = () => {
  const [data, setData] = React.useState(getEmployees());

  const handleDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to delete?')) {
      removeEmployee(id);
      setData(getEmployees());
    }
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columnKeys.map((colKey) => {
              return <th>{columns[colKey]}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr>
                {columnKeys.map((colKey) => {
                  if (colKey === "profilePic") {
                    return (
                      <td>
                        <img src={row[colKey]} height="100px" />
                      </td>
                    );
                  }
                  return <td>{row[colKey]}</td>;
                })}
                <td>
                  <Link to={"/employees/edit/" + row.id}>
                    <Button variant="success">Edit</Button>
                  </Link>
                  <Button variant="danger" onClick={() => handleDelete(row.id)}>Delete</Button>
                </td>
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
