import ImageGallerySchema from "@/models/schema/ImageGallery";
import BlogCategorySchema from "@/models/schema/blogCategory";
import TestimonialSchema from "@/models/schema/testimonial";
import { connectToDB } from "@/utils/database";

export const getTestimonialData = async () => {
  try {
    await connectToDB();
    const res = await TestimonialSchema.find({});
    return res;
  } catch (error) {
    return new Error("Testimonial Did not found");
  }
};

export const findTestimonial = async (id) => {
  try {
    await connectToDB();
    const res = await TestimonialSchema.findById(id);
    return res;
  } catch (error) {
    return new Error(id + " This Testimonial Did not found");
  }
};

export const getImageGallery = async (id) => {
  try {
    await connectToDB();
    const res = await ImageGallerySchema.find();
    return res;
  } catch (error) {
    return new Error("Gallery Images are not found");
  }
};

export const getBlogCatagories = async () => {
  try {
    await connectToDB();
    const res = await BlogCategorySchema.find();
    return res;
  } catch (error) {
    return new Error("Gallery Images are not found");
  }
};
