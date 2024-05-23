import ImageGallerySchema from "@/models/schema/ImageGallery";
import BlogSchema from "@/models/schema/blog";
import BlogCategorySchema from "@/models/schema/blogCategory";
import ProjectSchema from "@/models/schema/project";
import ServiceSchema from "@/models/schema/service";
import TestimonialSchema from "@/models/schema/testimonial";
import UserSchema from "@/models/schema/user";
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

export const getBlogs = async () => {
  try {
    await connectToDB();
    const res = await BlogSchema.find();
    return res;
  } catch (error) {
    return new Error("Blogs are not found");
  }
};

export const findBlog = async (id) => {
  try {
    await connectToDB();
    const res = await BlogSchema.findById(id);
    return res;
  } catch (error) {
    return new Error("Blog is not found");
  }
};


export const getServices = async () => {
  try {
    await connectToDB();
    const res = await ServiceSchema.find();
    return res;
  } catch (error) {
    return new Error("Blog is not found");
  }
};

export const findService = async (id) => {
  try {
    await connectToDB();
    const res = await ServiceSchema.findById(id);
    return res;
  } catch (error) {
    return new Error("Blog is not found");
  }
};

export const getProjects = async (id) => {
  try {
    await connectToDB();
    const res = await ProjectSchema.find();
    return res;
  } catch (error) {
    return new Error("Blog is not found");
  }
};
export const findProject = async (id) => {
  try {
    await connectToDB();
    const res = await ProjectSchema.findById(id);
    return res;
  } catch (error) {
    return new Error("Blog is not found");
  }
};

export const getUsers = async (id) => {
  try {
    await connectToDB();
    const res = await UserSchema.find();
    return res;
  } catch (error) {
    return new Error("Blog is not found");
  }
};
export const findUser = async (id) => {
  try {
    await connectToDB();
    const res = await UserSchema.findById(id);
    return res;
  } catch (error) {
    return new Error("Blog is not found");
  }
};
