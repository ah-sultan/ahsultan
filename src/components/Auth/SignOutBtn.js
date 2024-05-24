"use client";
import { signOut } from "next-auth/react";
const SignOutBtn = ({ className, style }) => {
  return (
    <span
      className={className}
      style={(style, { cursor: "pointer" })}
      onClick={() => signOut()}
    >
      Sign Out
    </span>
  );
};

export default SignOutBtn;
