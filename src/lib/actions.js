"use server";

import { signIn } from "@/auth";

export async function authenticate(_currentState, formData) {
    "use server"
  try {
    const res = await signIn("credentials", formData,);
    console.log(res)
  } catch (error) {
    console.log(error);
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
