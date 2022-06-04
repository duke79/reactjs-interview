import React from "react";
import { Form, Button } from 'react-bootstrap';

const AddEditEmployee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget.value;
    console.log({ e, form });
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dob">
          <Form.Label>DOB</Form.Label>
          <Form.Control type="text" placeholder="Enter Date of Birth" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="designation">
          <Form.Label>Designation</Form.Label>
          <Form.Control type="text" placeholder="Enter Designation" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="experience">
          <Form.Label>Experience</Form.Label>
          <Form.Control type="text" placeholder="Enter Designation" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="profilePic">
          <Form.Label>Profile Pic URL</Form.Label>
          <Form.Control type="text" placeholder="Enter Profile Pic URL" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddEditEmployee;
