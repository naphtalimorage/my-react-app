import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
     
  return (
    <div className="home-container">
      <h1 className="head1">Laikipia Concert,</h1>
      <h1>Welcome to the backstage</h1>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};


export default Home;