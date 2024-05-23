"use client";
import { signOut } from "next-auth/react";
const SignOutBtn = () => {
  return <span onClick={() => signOut()}>Sign Out</span>;
};

export default SignOutBtn;
