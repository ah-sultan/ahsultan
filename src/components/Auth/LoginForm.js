"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Spinner } from "react-bootstrap";
import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  // Handle Submit
  const handleSubmit = async () => {
    const formData = {
      email,
      name,
      redirect: false,
    };
    try {
      const res = await signIn("credentials", formData);
    } catch (error) {}
  };
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Email Address */}
        <label htmlFor="loginFormEmail">
          <span>Email Address *</span>
          <input
            name="email"
            type="email"
            placeholder="example@domain.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {/* Password */}
        <label htmlFor="loginFormPassword">
          <span>Password *</span>
          <input
            name="password"
            type="password"
            placeholder="Minimum 8 Characters"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {/* Button */}
        <button
          disabled={loading}
          className="form-button text-center d-flex align-items-center justify-content-center"
          type="submit"
        >
          Login {loading && <Spinner style={{ width: 20, height: 20 }} />}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
