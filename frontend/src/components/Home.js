import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="nav">
      <Link to="/register">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/logout">
        <button>Logout</button>
      </Link>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
    </div>
  );
};

export default Home;
