import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("http://localhost:5000/logout")
      .then((res) => {
        if (res.data === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-4">
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
