import TestimonialSchema from "@/models/schema/testimonial";
import { connectToDB } from "@/utils/database";
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
    });
    await newTestimonial.save();

    return NextResponse.json(
      { success: "New Testimonial Added Successfully" },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to added" },
      { status: 505, statusText: "ERROR" }
    );
  }
};
