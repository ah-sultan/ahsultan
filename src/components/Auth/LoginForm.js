import { signOut } from "@/auth";
import Link from "next/link";
import SocialMediaAuth from "./SocialMediaAuth";

const LoginForm = () => {
  return (
    <>
      <div className="login-form-body">
        <h3>Login</h3>
        <p>
          Dose not have and account yet?{" "}
          <Link href="/auth/register" className="text-primary">
            Sign In
          </Link>
        </p>
        <hr />
        <br />
        <form
          className="login-form"
          action={async (formData) => {
            "use server";
            await signIn("credentials", formData);
          }}
        >
          {/* Email Address */}
          <label htmlFor="loginFormEmail">
            <span>Email Address *</span>
            <input
              name="email"
              type="text"
              placeholder="example@domain.com"
            />
          </label>
          {/* Password */}
          <label htmlFor="loginFormPassword">
            <span>Password *</span>
            <input
              name="password"
              type="text"
              placeholder="Enter password minimum 8 Characters"
            />
          </label>
          {/* Button */}
          <button className="form-button text-center" type="submit">
            Login
          </button>
        </form>
        <br />
        <SocialMediaAuth />
      </div>
    </>
  );
};

export default LoginForm;
