import ImageGallerySchema from "@/models/schema/ImageGallery";
import TestimonialSchema from "@/models/schema/testimonial";
import { connectToDB } from "@/utils/database";

export const getTestimonialData = async () => {
  try {
    await connectToDB();
    const res = TestimonialSchema.find({});
    return res;
  } catch (error) {
    return new Error("Testimonial Did not found");
  }
};

export const findTestimonial = async (id) => {
  try {
    await connectToDB();
    const res = TestimonialSchema.findById(id);
    return res;
  } catch (error) {
    return new Error(id + " This Testimonial Did not found");
  }
};

export const getImageGallery = async (id) => {
  try {
    await connectToDB();
    const res = ImageGallerySchema.find();
    return res;
  } catch (error) {
    return new Error("Gallery Images are not found");
  }
};
