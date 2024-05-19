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
    const findCategory = await BlogCategorySchema.findById(category._id);
    const newBlog = new BlogSchema({
      title,
      thumbnail,
      blogBanner,
      body,
      keywords,
      comments: [],
      publishedDate,
    });

    newBlog.category = findCategory;

    await newBlog.save();

    findCategory.blogs.push(newBlog._id);
    await findCategory.save();

    return NextResponse.json(
      { success: "Blog Added Successfully" },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    console.log(error);
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

// DELETE METHOD
export const DELETE = async (req) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    await connectToDB();
    const findBlog = await BlogSchema.findById(id);
    const findCategory = await BlogCategorySchema.findById(
      findBlog.category._id
    );
    const updateCategory = findCategory.blogs.filter(
      (blogId) => blogId.toString() !== findBlog._id.toString()
    );

    findCategory.blogs = updateCategory;
    await findCategory.save()
    await BlogSchema.findByIdAndDelete(id);

    return NextResponse.json(
      {
        message: "Blog Deleted Successfully",
      },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error: Failed to delete blog",
      },
      { status: 503, statusText: "ERROR" }
    );
  }
};

// PATH METHOD
export const PATCH = async (req) => {
  const { title, thumbnail, blogBanner, category, body, keywords } =
    await req.json();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    await connectToDB();
    const findBlog = await BlogSchema.findById(id);
    const prevCategory = await BlogCategorySchema.findById(
      findBlog.category._id
    );
    const findNewCategory = await BlogCategorySchema.findById(category._id);

    if (prevCategory._id.toString() !== findNewCategory._id.toString()) {
      // UPDATE PREVIOUS CATEGORY
      const updatePrevCategory = prevCategory.blogs.filter(
        (blogId) => blogId.toString() !== findBlog._id.toString()
      );
      prevCategory.blogs = updatePrevCategory;

      // UPDATE NEW CATEGORY
      findNewCategory.blogs.push(findBlog._id);

      await prevCategory.save();
      await findNewCategory.save();
    }

    findBlog.title = title;
    findBlog.thumbnail = thumbnail;
    findBlog.blogBanner = blogBanner;
    findBlog.category = category;
    findBlog.body = body;
    findBlog.keywords = keywords;

    await findBlog.save();

    return NextResponse.json(
      { message: "Blog updated successfully" },
      {
        status: 202,
        statusText: "OK",
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error: Blog did not updated" },
      {
        status: 505,
        statusText: "ERROR",
      }
    );
  }
};
