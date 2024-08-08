import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.get("http://localhost:5000/login").then((res) => {
      if (res.data === "Success") {
        navigate("/register");
      }
    });
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-success" onClick={handleLogin}>
        ENTER INTO MY PROJECT
      </button>
    </div>
  );
};

export default Home;
