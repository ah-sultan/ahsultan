import multer from "multer";
import { NextResponse } from "next/server";

const UPLOADS_FOLDER = "public";

let upload = multer({
  dest: UPLOADS_FOLDER,
});

export const POST = async () => {
  try {
    upload.single("avatar");
    return NextResponse.json(
      {
        message: "file Uploaded Successfully",
      },
      { status: 202 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "file Uploaded Failed",
      },
      { status: 202 }
    );
  }
};
