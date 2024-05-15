import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { connectToDB } from "@/utils/database";
import ImageGallerySchema from "@/models/schema/ImageGallery";

export const POST = async (req, res) => {
  const formData = await req.formData();

  const files = formData.getAll("file");
  const album = formData.get("albumName");
  const albumName = JSON.parse(album);

  if (!files.length) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const uploadPromises = files.map(async (file) => {
    // GET DATE

    const date = new Date();
    const publishDate = `${date.getMonth()} ${date.getDate()} ${date.getFullYear()}`;
    const publishTime = `H: ${date.getHours()} - M: ${date.getMinutes()} - S: ${date.getSeconds()}`;

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
