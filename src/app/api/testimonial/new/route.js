import TestimonialSchema from "@/models/schema/testimonial";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { clientName, clientTitle, reviewText } = await req.json();

  try {
    await connectToDB();
    const newTestimonial = new TestimonialSchema({
      clientName,
      clientTitle,
      reviewText,
    });
    await newTestimonial.save();

    return NextResponse.json(
      { success: "New Testimonial Added Successfully" },
      { status: 202 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to added" }, { status: 505 });
  }
};
