import React, { useState } from "react";
import Header from "../Common/Header";
import "../User/Form";
import { useNavigate } from "react-router";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username == "admin") {
      if (password == "password") {
        localStorage.setItem("logged-in", "admin");
        navigate("/dashboard");
      } else {
        setError("Invalid Password");
        setUsername("");
        setPassword("");
      }
    } else {
      setError("Invalid Username");
      setUsername("");
      setPassword("");
    }
  };
  return (
    <div>
      <Header />
      <div className="form-login-container">
        <h3>Admin login</h3>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="formField">
            <div className="field-1">
              <label
                htmlFor="username"
                style={{ color: "black", textAlign: "left" }}
              >
                Username *
              </label>
              <input
                type="text"
                name="username"
                className="text-input"
                placeholder="Username"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
                id="username"
                required
              />
            </div>
            <div className="field-1">
              <label
                htmlFor="password"
                style={{ color: "black", textAlign: "left" }}
              >
                Password *
              </label>
              <input
                type="password"
                name="password"
                className="text-input"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                id="password"
                required
              />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <input className="button" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Admin;
