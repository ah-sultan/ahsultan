"use server";
import { signIn } from "@/auth";

const SocialMediaAuth = () => {
  return (
    <div className="social-media-cloud">
      <span className="login-title">Or Choose</span>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">With Google</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">With Facebook</button>
      </form>
    </div>
  );
};

export default SocialMediaAuth;
