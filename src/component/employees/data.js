export const getEmployees = () => {
  return JSON.parse(localStorage.getItem("employees", [])) || [];
};

export const setEmployees = (employees) => {
  localStorage.setItem("employees", JSON.stringify(employees));
};

export const addEmployee = ({
  firstName,
  lastName,
  dob,
  designation,
  profilePic,
  experience,
}) => {
  const employees = getEmployees();
  employees.push({
    firstName,
    lastName,
    dob,
    designation,
    profilePic,
    experience,
  });
  setEmployees(employees);
};

export const removeEmployee = (id) => {
  const employees = getEmployees();
  setEmployees(employees.filter(e => e.id !== id));
};

export const editEmployee = ({
  id,
  ...remainingProps
}) => {
  const employees = getEmployees();
  let targetIdx = employees.findIndex(e => e.id === id);
  employees[targetIdx] = {
    ...employees[targetIdx],
    ...remainingProps,
  };
  setEmployees(employees);
};
