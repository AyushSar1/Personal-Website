import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("a");
  const [password, setPassword] = useState("a");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/dashboard");
        }
        if (result.data === "The password is incorrect") {
          alert("The password is incorrect");
        }
        if (result.data === "Record not found") {
          alert("Record not found");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-black vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 className="d-flex justify-content-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              required
              placeholder="Enter Email"
              autoComplete="on"
              name="email"
              className="form-control rounded-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              required
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className=" btn btn-success w-100 rounded-3 text-decoration-none mb-2">
            Login
          </button>
        </form>
        <p className="d-flex justify-content-center mb-2">
          <h5>Create an Account</h5>
        </p>
        <Link
          to="/register"
          className=" btn w-100 rounded-3 text-bg-dark text-decoration-none"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;