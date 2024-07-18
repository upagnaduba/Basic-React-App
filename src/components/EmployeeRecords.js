import React from 'react';

const EmployeeRecords = () => {
  const employees = [
    { id: 1, name: "John Doe", birthday: "1990-01-15" },
    { id: 2, name: "Jane Smith", birthday: "1985-02-20" },
    { id: 3, name: "Michael Brown", birthday: "1978-03-25" },
    // Add more employees here
  ];

  return (
    <div>
      <h2>Employee Records</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeRecords;
