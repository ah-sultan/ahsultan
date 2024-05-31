import { NextResponse } from "next/server";
import path from "path";
import fs from 'fs/promises'
import { writeFile } from "fs/promises";
import { connectToDB } from "@/utils/database";
import ImageGallerySchema from "@/models/schema/ImageGallery";
import { getDateAndTime } from "@/lib/getDateAndTime";
import { fstat, unlink } from "fs/promises";

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

      // ADD TO DATABASE
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
        error: error,
      },
      {
        status: 503,
        statusText: "ERROR",
      }
    );
  }
};

// DELETE METHOD
export const DELETE = async (req) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    await connectToDB();

    // FIND IMAGE ON DATABASE
    const findImage = await ImageGallerySchema.findById(id);

    if (!findImage) {
      return NextResponse.json(
        { message: "Error: Image Not Found" },
        { status: 505, statusText: "ERROR" }
      );
    }

    // MAKE IMAGE FILE DIRECTORY
    const filePath = path.join(process.cwd(), "public" + findImage.image);

    // DELETE IMAGE FROM  LOCAL DIRECTORY
    try {
      await unlink(filePath);
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "Error: Image Not Found on Local directory" },
        { status: 505, statusText: "ERROR" }
      );
    }

    await connectToDB();
    // DELETE IMAGE FROM DATABASE
    await ImageGallerySchema.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Image deleted Successfully" },
      { status: 200, statusText: "OK" }
    );
  } catch (error) {
    // IF DID NOT DELETE IMAGE FROM DATABASE
    console.log(error);
    return NextResponse.json(
      { message: "Error: Image did not delete" },
      { status: 505, statusText: "ERROR" }
    );
  }
};


// PATCH METHOD
export const PATCH = async (req) => {
  const formData = await req.formData();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const file = formData.get("file");

  try {
    await connectToDB();
    // FIND IMAGE ON DATABASE
    const findImage = await ImageGallerySchema.findById(id);

    if (!findImage) {
      return NextResponse.json(
        { message: "Error: Image Not Found" },
        { status: 404, statusText: "NOT FOUND" }
      );
    }

    // HANDLE UPLOAD IMAGE
    const handleUpload = async () => {
      // CREATE FILE BUFFER
      const buffer = Buffer.from(await file.arrayBuffer());

      // CREATE FILE NAME
      const filename =
        "date-" + Date.now() + "--name-" + file.name.replaceAll(" ", "_");

      // UPLOAD NEW FILE
      try {
        await fs.writeFile(
          path.join(process.cwd(), "public/images/image-gallery", filename),
          buffer
        );

        // Update the image path in the database
        findImage.image = `/images/image-gallery/${filename}`;
      } catch (error) {
        console.error("File upload error:", error);
        throw new Error("File upload failed");
      }
    };

    // DELETE AND UPDATE IMAGE
    try {
      const filePath = path.join(process.cwd(), "public", findImage.image);
      await fs.unlink(filePath);
    } catch (error) {
      console.error("File delete error:", error);
      // If file delete fails, continue to upload the new file
    }

    await handleUpload();
    await findImage.save();

    return NextResponse.json(
      { message: "Image updated successfully" },
      {
        status: 202,
        statusText: "ACCEPTED",
      }
    );
  } catch (error) {
    console.error("Server side error:", error);
    return NextResponse.json(
      { message: "Error: Server side problem" },
      { status: 500, statusText: "INTERNAL SERVER ERROR" }
    );
  }
};
