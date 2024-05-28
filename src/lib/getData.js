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
    return {
      message: "Testimonials not found",
      status: 503,
      ok: false,
      error: error,
    };
  }
};

export const findTestimonial = async (id) => {
  try {
    await connectToDB();
    const res = await TestimonialSchema.findById(id);
    return res;
  } catch (error) {
    return {
      message: "Testimonials not found",
      status: 503,
      ok: false,
      error: error,
    };
  }
};

export const getImageGallery = async (id) => {
  try {
    await connectToDB();
    const res = await ImageGallerySchema.find();
    return res;
  } catch (error) {
    return {
      message : "Gallery Image not found",
      status : 503,
      ok : false,
      error : error,
    };
  }
};

export const getBlogCatagories = async () => {
  try {
    await connectToDB();
    const res = await BlogCategorySchema.find();
    return res;
  } catch (error) {
    return  {
      message : "Blog Category not found",
      status : 503,
      ok : false,
      error : error,
    };
  }
};

export const getBlogs = async () => {
  try {
    await connectToDB();
    const res = await BlogSchema.find();
    return res;
  } catch (error) {
    return {
      message : "Blogs not found",
      status : 503,
      ok : false,
      error : error,
    };
  }
};

export const findBlog = async (id) => {
  try {
    await connectToDB();
    const res = await BlogSchema.findById(id);
    return res;
  } catch (error) {
    return {
      message : "Blogs not found",
      status : 503,
      ok : false,
      error : error,
    };
  }
};

export const getServices = async () => {
  try {
    await connectToDB();
    const res = await ServiceSchema.find();
    return res;
  } catch (error) {
    return {
      message : "Services not found",
      status : 503,
      ok : false,
      error : error,
    };
  }
};

export const findService = async (id) => {
  try {
    await connectToDB();
    const res = await ServiceSchema.findById(id);
    return res;
  } catch (error) {
    return {
      message : "Service not found",
      status : 503,
      ok : false,
      error : error,
    };
  }
};

export const getProjects = async (id) => {
  try {
    await connectToDB();
    const res = await ProjectSchema.find();
    return res;
  } catch (error) {
    return {
      message : "Projects not found",
      status : 503,
      ok : false,
      error : error,
    };
  }
};
export const findProject = async (id) => {
  try {
    await connectToDB();
    const res = await ProjectSchema.findById(id);
    return res;
  } catch (error) {
    return {
      message : "Project not found",
      status : 503,
      ok : false,
      error : error,
    };
  }
};

export const getUsers = async (id) => {
  try {
    await connectToDB();
    const res = await UserSchema.find();
    return res;
  } catch (error) {
    return {
      message : "Users not found",
      status : 503,
      ok : false,
      error : error,
    };
  }
};
export const findUser = async (id) => {
  try {
    await connectToDB();
    const res = await UserSchema.findById(id);
    return res;
  } catch (error) {
    return {
      message : "User not found",
      status : 503,
      ok : false,
      error : error,
    };
  }
};
