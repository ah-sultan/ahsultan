import { getDateAndTime } from "@/lib/getDateAndTime";
import UserSchema from "@/models/schema/user";
import { connectToDB } from "@/utils/database";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// POST METHOD
export const POST = async (req) => {
  const { fullName, userName, email, password, role, image } = await req.json();
  const registerDate = getDateAndTime();
  try {
    await connectToDB();

    const existEmail = await UserSchema.findOne({ email });
    const existUserName = await UserSchema.findOne({ userName });

    if (existEmail) {
      return NextResponse.json(
        { message: "this email already exist" },
        { status: 500, statusText: "OK" }
      );
    }
    if (existUserName) {
      return NextResponse.json(
        { message: "this username already exist" },
        { status: 500, statusText: "OK" }
      );
    }

    let generateHash = await bcrypt.hash(password, 16)
    console.log(generateHash)

    const newUser = new UserSchema({
      fullName,
      userName,
      email,
      password: generateHash,
      role,
      registerDate,
      image,
    });
    await newUser.save();

    return NextResponse.json(
      { message: "your registration has success " },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 505, statusText: "ERROR" }
    );
  }
};

// GET METHOD
export const GET = async (req) => {
  try {
    await connectToDB();
    const users = await UserSchema.find({});

    return NextResponse.json(
      { message: "success to get user", data: users },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error: this is server side error" },
      { status: 503, statusText: "ERROR" }
    );
  }
};

// DELETE METHOD
export const DELETE = async (req) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    await connectToDB();
    await UserSchema.findByIdAndDelete(id);
    return NextResponse.json(
      {
        message: "User Deleted Successfully",
      },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error: Failed to delete",
      },
      { status: 503, statusText: "ERROR" }
    );
  }
};

// PATH METHOD
export const PATCH = async (req) => {
  const { fullName, userName, email, password, role, image } = await req.json();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    await connectToDB();

    // Verify Unique user
    const existEmail = await UserSchema.findOne({ email });
    const existUserName = await UserSchema.findOne({ userName });
    const findUser = await UserSchema.findById(id);

    if (existEmail && findUser.email !== email) {
      return NextResponse.json(
        { message: "This email already exist" },
        { status: 500, statusText: "ERROR" }
      );
    }
    if (existUserName && findUser.userName !== userName) {
      return NextResponse.json(
        { message: "This username already exist" },
        { status: 500, statusText: "ERROR" }
      );
    }

    // UPDATE USER

    const hashPassword =
      findUser.password === password
        ? password
        : await bcrypt.hash(password, 16);

    findUser.fullName = fullName;
    findUser.userName = userName;
    findUser.email = email;
    findUser.password = hashPassword;
    findUser.role = role;
    findUser.image = image;

    await findUser.save();

    return NextResponse.json(
      { message: "User updated successfully" },
      {
        status: 202,
        statusText: "OK",
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error: Testimonial did not updated" },
      {
        status: 505,
        statusText: "ERROR",
      }
    );
  }
};
