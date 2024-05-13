import TestimonialSchema from "@/models/schema/testimonial";
import { connectToDB } from "@/utils/database";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { clientName, clientTitle, reviewText, image } = await req.json();
  const publishedDate = Date.now();
  try {
    await connectToDB();
    const newTestimonial = new TestimonialSchema({
      clientName,
      clientTitle,
      reviewText,
      publishedDate,
      image,
    });
    await newTestimonial.save();

    return NextResponse.json(
      { success: "New Testimonial Added Successfully" },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to added" },
      { status: 505, statusText: "ERROR" }
    );
  }
};

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
