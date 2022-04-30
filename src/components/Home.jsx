import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <nav>
       <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
       <Link to="/register">
        <button type="button" className="btn btn-warning my-2 px-3">Register</button>
        </Link>
        
        <Link to="/login">
        <button type="button" className="btn btn-outline-warning px-4">Login</button>
        </Link>
        </div>
      </nav>
    </>
  );
};

export default Home;
