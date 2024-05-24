import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const formData = await req.formData();
  try {
    await auth("credentials", formData);
    return NextResponse.json(
      { message: "SUCCESS LOGIN" },
      {
        status: 303,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "SUCCESS ERROR" },
      {
        status: 505,
      }
    );
  }
};
