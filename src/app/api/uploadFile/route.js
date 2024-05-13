import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import fs from "node:fs";

export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("file");
  const filePath = formData.get("path");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  console.log(filename);

  try {
    await writeFile(
      // path.join(process.cwd(), "public/uploads/" + filename),
      path.join(process.cwd(), "public" + filePath),
      buffer
    );
    return NextResponse.json(
      { Message: "success" },
      { statusText: "OK", status: 201 }
    );
  } catch (error) {
    console.log("Error occurred ", error);
    return NextResponse.json(
      { Message: "Failed To Upload" },
      { status: 500, statusText: "ERROR" }
    );
  }
};

export const DELETE = async (req) => {
  const { searchParams } = new URL(req.url);
  const getPath = searchParams.get("filePath");
  const filePath = `./public${getPath}`;

  try {
    fs.stat(filePath, function (err, stats) {
      console.log(err);

      fs.unlink(filePath, function (err) {
        console.log(err);
      });
    });

    return NextResponse.json(
      {
        message: "File Deleted Successfully",
      },
      {
        status: 202,
        statusText: "OK",
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error: File Not Deleted",
      },
      {
        status: 505,
        statusText: "ERROR",
      }
    );
  }
};
