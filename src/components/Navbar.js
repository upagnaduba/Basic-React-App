import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/innovative-thoughts">InnovativeThoughts</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/employee-records">EmployeeRecords</Link></li>
        <li><Link to="/company-growth">CompanyGrowth</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
