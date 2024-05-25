import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import RegistrationForm from "./RegistrationForm";


const App = () => {
  return (
    <div className="app">
      <Router>
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route path="register" element={<RegistrationForm/>} />
            </Routes>
        </Router>
    </div>
  );
};

export default App;
