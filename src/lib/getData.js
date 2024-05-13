import TestimonialSchema from "@/models/schema/testimonial";
import { connectToDB } from "@/utils/database";

export const getTestimonialData = async () => {
  try {
    await connectToDB();
    const res = TestimonialSchema.find();
    return res;
  } catch (error) {
    return error;
  }
};

