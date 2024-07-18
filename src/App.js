import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import InnovativeThoughts from './components/InnovativeThoughts';
import Events from './components/Events';
import EmployeeRecords from './components/EmployeeRecords';
import CompanyGrowth from './components/CompanyGrowth';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innovative-thoughts" element={<InnovativeThoughts />} />
        <Route path="/events" element={<Events />} />
        <Route path="/employee-records" element={<EmployeeRecords />} />
        <Route path="/company-growth" element={<CompanyGrowth />} />
      </Routes>
    </Router>
  );
}

export default App;
