"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState();
  const router = useRouter();
  // USE DATA
  const userData = {
    fullName,
    userName,
    email,
    password,
    image: "",
    role: "viewer",
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      (fullName.length && userName.length && email.length) > 0 &&
      password.length > 7
    ) {
      setLoading(true);
      try {
        const res = await fetch("/api/user", {
          method: "POST",
          body: JSON.stringify(userData),
        });

        const status = await res.json();

        if (res.ok) {
          toast.success("your registration is completed");
          setLoading(false);
          // EMPTY FORM
          setFullName("");
          setUserName("");
          setEmail("");
          setPassword("");
          router.refresh();
          router.push("/auth/login");
        } else {
          setLoading(false);
          toast.error(status.message);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error("registration failed please try aging");
      }
    } else {
      toast.warning("please fill the required filed");
    }
  };
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Full Address */}
        <label htmlFor="fullName">
          <span>Full Name *</span>
          <input
            name="fullName"
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Sultan Ahmed"
            value={fullName}
          />
        </label>
        {/* User Name */}
        <label htmlFor="userName">
          <span>User name *</span>
          <input
            name="userName"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="ah-sultan96"
            value={userName}
          />
        </label>
        {/* Email Address */}
        <label htmlFor="loginFormEmail">
          <span>Email Address *</span>
          <input
            name="loginFormEmail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@domain.com"
            value={email}
          />
        </label>
        {/* Password */}
        <label htmlFor="loginFormPassword">
          <span>Password *</span>
          <input
            name="loginFormPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password minimum 8 Characters"
          />
        </label>
        {/* Button */}

        <button
          disabled={loading}
          type="submit"
          className="form-button text-center d-flex align-items-center justify-content-center"
        >
          Register {loading && <Spinner />}
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
