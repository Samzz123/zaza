import React, { useState } from "react";
import "../styles/login.css";
import AuthButton from "../components/AuthButton";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", id, password);
    window.location.href = "/dashboard";
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Email or ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="divider">or</div>

        <div className="social-login">
          <AuthButton type="google" />
          <AuthButton type="facebook" />
        </div>
      </div>
    </div>
  );
}

export default Login;
