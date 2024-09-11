import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/LoginForm/LoginForm'; // Import your Login component
import Resume from './Components/Resume/Resume.jsx'; // Import the Dashboard component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
