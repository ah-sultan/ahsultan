"use client";

import { useState } from "react";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      <form className="login-form">
        {/* Email Address */}
        <label htmlFor="loginFormEmail">
          <span>Email Address *</span>
          <input
            name="loginFormEmail"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="example@domain.com"
          />
        </label>
        {/* Password */}
        <label htmlFor="loginFormPassword">
          <span>Password *</span>
          <input
            name="loginFormPassword"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password minimum 8 Characters"
          />
        </label>
        {/* Password */}
        <label htmlFor="loginFormPassword">
          <span>Confirm Password *</span>
          <input
            name="loginFormPassword"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password minimum 8 Characters"
          />
        </label>
        {/* Button */}
        <button type="button" className="form-button text-center">
          Register
        </button>
      </form>
    </>
  );
};

export default AuthForm;
