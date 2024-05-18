import { getDateAndTime } from "@/lib/getDateAndTime";
import BlogCategorySchema from "@/models/schema/blogCategory";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

// POST METHOD
export const POST = async (req) => {
  const data = await req.json();

  try {
    await connectToDB();
    const newCategory = await BlogCategorySchema({
      title: data.title,
      date: getDateAndTime(),
      blogs: [],
      subCategory: [],
    });

    await newCategory.save();

    return NextResponse.json(
      { message: "Category created Successfully" },
      { statusText: "OK", status: 303 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { statusText: "ERROR", status: 500 }
    );
  }
};

// GET METHOD
export const GET = async () => {
  try {
    await connectToDB();
    const categories = await BlogCategorySchema.find({});
    return NextResponse.json(
      { message: "Category fetch Successfully", categories },
      { statusText: "OK", status: 303 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { statusText: "ERROR", status: 503 }
    );
  }
};

// DELETE METHOD
export const DELETE = async (req) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    await connectToDB();
    await BlogCategorySchema.findByIdAndDelete(id);
    return NextResponse.json(
      {
        message: "Blog Deleted Successfully",
      },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error: Failed to delete Blog",
      },
      { status: 503, statusText: "ERROR" }
    );
  }
};
