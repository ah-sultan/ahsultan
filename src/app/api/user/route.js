import { getDateAndTime } from "@/lib/getDateAndTime";
import TestimonialSchema from "@/models/schema/testimonial";
import UserSchema from "@/models/schema/user";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

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

    const generateHash = await bcrypt.hash(password, 16);
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
    const testimonials = await TestimonialSchema.find({});

    return NextResponse.json(
      { message: "success to get testimonials", data: testimonials },
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
    await TestimonialSchema.findByIdAndDelete(id);
    return NextResponse.json(
      {
        message: "Testimonial Deleted Successfully",
      },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error: Failed to delete testimonial",
      },
      { status: 503, statusText: "ERROR" }
    );
  }
};

// PATH METHOD
export const PATCH = async (req) => {
  const data = await req.json();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    await connectToDB();
    const findTestimonial = await TestimonialSchema.findById(id);
    findTestimonial.clientName = data.clientName;
    findTestimonial.clientTitle = data.clientTitle;
    findTestimonial.reviewText = data.reviewText;
    findTestimonial.image = data.image;

    await findTestimonial.save();

    return NextResponse.json(
      { message: "Testimonial updated successfully" },
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
