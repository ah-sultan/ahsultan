"use client";

import { authenticate } from "@/lib/actions";
import { Spinner } from "react-bootstrap";
import { useFormState, useFormStatus } from "react-dom";

const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();

  // Handle Submit

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
        {/* Button */}
        <button
          disabled={pending}
          className="form-button text-center d-flex align-items-center justify-content-center"
          type="submit"
        >
          Login {pending && <Spinner style={{ width: 20, height: 20 }} />}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
