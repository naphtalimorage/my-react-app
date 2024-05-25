import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
    
  return (
    <div className="App">
      <h1 className="first-header">Laikipia Concert,</h1>
      <br />
      <h1 className="second-header">Welcome to the backstage</h1>
      <Link to="/register">
        <button className="regester-btn">Register</button>
      </Link>
    </div>
  );
};


export default Home;