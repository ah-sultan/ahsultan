import Link from "next/link";
import SocialMediaAuth from "./SocialMediaAuth";
import AuthForm from "./AuthForm";

const AuthBlock = ({ type }) => {
  return (
    <>
      <div className="login-form-body">
        <h3>Register</h3>
        <p>
          Already have account yet?{" "}
          <Link href="/auth/register" className="text-primary">
            Sign in
          </Link>
        </p>
        <hr />
        <br />
        <AuthForm type={type} />
        <br />
        <SocialMediaAuth />
      </div>
    </>
  );
};

export default AuthBlock;
