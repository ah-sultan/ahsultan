import { getDateAndTime } from "@/lib/getDateAndTime";
import BlogSchema from "@/models/schema/blog";
import BlogCategorySchema from "@/models/schema/blogCategory";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

// POST METHOD
export const POST = async (req) => {
  const { title, thumbnail, blogBanner, category, body, keywords } =
    await req.json();
  const publishedDate = getDateAndTime("date");
  try {
    await connectToDB();
    const newBlog = new BlogSchema({
      title,
      thumbnail,
      blogBanner,
      category,
      body,
      keywords,
      comments: [],
      publishedDate,
    });
    await newBlog.save();

    const findCategory = await BlogCategorySchema.findById(category._id);
    findCategory.blogs.push(newBlog._id);
    await findCategory.save();

    return NextResponse.json(
      { success: "Blog Added Successfully" },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to added new blog" },
      { status: 505, statusText: "ERROR" }
    );
  }
};

// // GET METHOD
// export const GET = async (req) => {
//   try {
//     await connectToDB();
//     const testimonials = await TestimonialSchema.find({});

//     return NextResponse.json(
//       { message: "success to get testimonials", data: testimonials },
//       { status: 202, statusText: "OK" }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Error: this is server side error" },
//       { status: 503, statusText: "ERROR" }
//     );
//   }
// };

// // DELETE METHOD
// export const DELETE = async (req) => {
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get("id");
//   try {
//     await connectToDB();
//     await TestimonialSchema.findByIdAndDelete(id);
//     return NextResponse.json(
//       {
//         message: "Testimonial Deleted Successfully",
//       },
//       { status: 202, statusText: "OK" }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       {
//         message: "Error: Failed to delete testimonial",
//       },
//       { status: 503, statusText: "ERROR" }
//     );
//   }
// };

// // PATH METHOD
// export const PATCH = async (req) => {
//   const data = await req.json();
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get("id");
//   try {
//     await connectToDB();
//     const findTestimonial = await TestimonialSchema.findById(id);
//     findTestimonial.clientName = data.clientName;
//     findTestimonial.clientTitle = data.clientTitle;
//     findTestimonial.reviewText = data.reviewText;
//     findTestimonial.image = data.image;

//     await findTestimonial.save();

//     return NextResponse.json(
//       { message: "Testimonial updated successfully" },
//       {
//         status: 202,
//         statusText: "OK",
//       }
//     );
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { message: "Error: Testimonial did not updated" },
//       {
//         status: 505,
//         statusText: "ERROR",
//       }
//     );
//   }
// };
