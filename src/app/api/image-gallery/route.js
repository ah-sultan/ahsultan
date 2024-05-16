import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { connectToDB } from "@/utils/database";
import ImageGallerySchema from "@/models/schema/ImageGallery";
import { getDateAndTime } from "@/lib/getDateAndTime";

// POST METHOD
export const POST = async (req, res) => {
  const formData = await req.formData();

  
  // GET FILES AN PATH NAME
  const files = formData.getAll("file");
  const album = formData.get("albumName");
  const albumName = JSON.parse(album);


  if (!files.length) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const uploadPromises = files.map(async (file) => {
    // GET DATE

    const publishDate = getDateAndTime("date");
    const publishTime = getDateAndTime("time");

    const buffer = Buffer.from(await file.arrayBuffer());

    // DEFINE FILE NAME
    const filename =
      "date-" + Date.now() + "--name-" + file.name.replaceAll(" ", "_");

    try {
      await writeFile(
        path.join(process.cwd(), "public/images/image-gallery/" + filename),
        buffer
      );

      

      // MONGO DB DATABASE

      await connectToDB();
      const newImage = new ImageGallerySchema({
        name: file.name,
        image: "/images/image-gallery/" + filename,
        publishDate,
        publishTime,
        albumName: { _id: albumName._id, name: albumName.name },
      });
      await newImage.save();

      return { filename, status: "success" };
    } catch (error) {
      console.log("Error occurred ", error);
      return { filename, status: "error", error };
    }
  });

  const results = await Promise.all(uploadPromises);

  const errors = results.filter((result) => result.status === "error");
  if (errors.length > 0) {
    return NextResponse.json(
      { message: "Some files failed to upload", errors },
      { status: 500, statusText: "ERROR" }
    );
  }

  return NextResponse.json(
    { message: "All files uploaded successfully", results },
    { statusText: "OK", status: 201 }
  );
};

// GET METHOD
export const GET = async () => {
  try {
    await connectToDB();
    const images = await ImageGallerySchema.find({});

    return NextResponse.json(
      {
        message: "Success to fetch data",
        data: images,
      },
      {
        status: 202,
        statusText: "OK",
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error: Data fetch failed",
        error : error
      },
      {
        status: 503,
        statusText: "ERROR",
      }
    );
  }
};
