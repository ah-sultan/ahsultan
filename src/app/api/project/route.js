import { getDateAndTime } from "@/lib/getDateAndTime";
import ProjectSchema from "@/models/schema/project";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

// POST METHOD
export const POST = async (req) => {
  const {
    title,
    thumbnail,
    summary,
    bannerImage,
    category,
    viewProject,
    duration,
    technologies,
    publishedDate,
    body,
  } = await req.json();
  try {
    await connectToDB();
    const newProject = new ProjectSchema({
      title,
      thumbnail,
      summary,
      bannerImage,
      category,
      viewProject,
      duration,
      technologies,
      publishedDate,
      body,
    });
    await newProject.save();

    return NextResponse.json(
      { success: "New Project Added Successfully" },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to added" },
      { status: 505, statusText: "ERROR" }
    );
  }
};

// DELETE METHOD
export const DELETE = async (req) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    await connectToDB();
    await ProjectSchema.findByIdAndDelete(id);

    return NextResponse.json(
      { success: "Project Deleted Successfully" },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to Delete Project" },
      { status: 505, statusText: "ERROR" }
    );
  }
};

// POST METHOD
export const PATCH = async (req) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const {
    title,
    thumbnail,
    summary,
    bannerImage,
    category,
    viewProject,
    duration,
    technologies,
    body,
    publishedDate,
  } = await req.json();
  try {
    await connectToDB();
    // const findProject = new ProjectSchema.findById(id);
    const findProject = await ProjectSchema.findById(id);

    findProject.title = title;
    findProject.thumbnail = thumbnail;
    findProject.summary = summary;
    findProject.bannerImage = bannerImage;
    findProject.category = category;
    findProject.viewProject = viewProject;
    findProject.duration = duration;
    findProject.technologies = technologies;
    findProject.publishedDate = publishedDate;
    findProject.body = body;

    await findProject.save();

    return NextResponse.json(
      { success: "New Project Updated Successfully" },
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
