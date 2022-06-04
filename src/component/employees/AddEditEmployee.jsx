import React from "react";
import { Form, Button } from "react-bootstrap";
import { addEmployee, getEmployeeById, editEmployee } from "./data";
import { useNavigate, useParams } from "react-router-dom";

const AddEditEmployee = ({
  initialData = {
    firstName: undefined,
    lastName: undefined,
    dob: undefined,
    designation: undefined,
    profilePic: undefined,
    experience: undefined,
  },
}) => {
  const [values, setValues] = React.useState(initialData);
  const navigate = useNavigate();
  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      const employee = getEmployeeById(params.id);
      setValues(employee);
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.id) {
      editEmployee(values);
    } else {
      addEmployee(values);
    }
    navigate("/employees", { replace: true });
  };

  return (
    <div>
      <h2>{values.id ? "Edit Employee" : "Add Employee"}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            value={values.firstName}
            onChange={(e) => {
              setValues({ ...values, firstName: e.currentTarget.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            value={values.lastName}
            onChange={(e) => {
              setValues({ ...values, lastName: e.currentTarget.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dob">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Date of Birth"
            value={values.dob}
            onChange={(e) => {
              setValues({ ...values, dob: e.currentTarget.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="designation">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Designation"
            value={values.designation}
            onChange={(e) => {
              setValues({ ...values, designation: e.currentTarget.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="experience">
          <Form.Label>Experience</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Experience"
            value={values.experience}
            onChange={(e) => {
              setValues({ ...values, experience: e.currentTarget.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="profilePic">
          <Form.Label>Profile Pic URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Profile Pic URL"
            value={values.profilePic}
            onChange={(e) => {
              setValues({ ...values, profilePic: e.currentTarget.value });
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddEditEmployee;
