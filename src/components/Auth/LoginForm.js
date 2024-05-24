"use client";

import { authenticate } from "@/lib/actions";
import { Button, Spinner } from "react-bootstrap";
import { useFormState, useFormStatus } from "react-dom";
import SignOutBtn from "./SignOutBtn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginForm = ({ session }) => {
  const [errorMessage, dispatch] = useFormState(authenticate);
console.log(errorMessage)
  const router = useRouter();

  if (session?.user) {
    router.push("/");
    return null; // Early return to prevent unnecessary rendering
  }

  return (
    <>
      <form className="login-form" action={dispatch}>
        {/* Email Address */}
        <label htmlFor="loginFormEmail">
          <span>Email Address *</span>
          <input
            name="email"
            type="email"
            placeholder="example@domain.com"
            required
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
          />
        </label>
        {errorMessage && <p>{errorMessage}</p>}
        {/* Button */}
        <LoginButton />
      </form>
    </>
  );
};

export default LoginForm;

function LoginButton() {
  const { pending, data, method, action } = useFormStatus();

  const handleClick = (event) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <button
      className="form-button text-center d-flex align-items-center justify-content-center"
      aria-disabled={pending}
      type="submit"
      onClick={handleClick}
    >
      Login {pending && <Spinner style={{ width: 20, height: 20 }} />}
    </button>
  );
}
