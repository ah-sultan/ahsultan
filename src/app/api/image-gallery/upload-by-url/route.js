import { getDateAndTime } from "@/lib/getDateAndTime";
import ImageGallerySchema from "@/models/schema/ImageGallery";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

// HANDLE POST
export const POST = async (req) => {
  const { url, albumName } = await req.json();

  const publishDate = getDateAndTime("date");
  const publishTime = getDateAndTime("time");

  try {
    // ADD TO DATABASE
    await connectToDB();
    const newImage = new ImageGallerySchema({
      name: "upload by url",
      image: url,
      publishDate,
      publishTime,
      albumName: { _id: albumName._id, name: albumName.name },
      type: "url",
    });
    await newImage.save();
    return NextResponse.json(
      { message: "Image Uploaded Successfully" },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to upload file", error },
      { status: 500, statusText: "ERROR" }
    );
  }
};

// DELETE METHOD
export const DELETE = async (req) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    await connectToDB();
    await ImageGallerySchema.findByIdAndDelete(id);
    return NextResponse.json(
      {
        message: "Image Deleted Successfully",
      },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error: Failed to delete Image",
      },
      { status: 503, statusText: "ERROR" }
    );
  }
};

// PATCH METHOD
export const PATCH = async (req) => {
  const { searchParams } = new URL(req.url);
  const { image, albumName } = await req.json();
  const id = searchParams.get("id");
  try {
    await connectToDB();
    const findImage = await ImageGallerySchema.findById(id);

    findImage.image = image;
    findImage.albumName = albumName;

    await findImage.save()

    return NextResponse.json(
      {
        message: "Image Update Successfully",
      },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error: Failed to Update Image",
      },
      { status: 503, statusText: "ERROR" }
    );
  }
};
