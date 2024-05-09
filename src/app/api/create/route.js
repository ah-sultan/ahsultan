import { NextResponse } from "next/server";
import fs from "node:fs";

export const POST = async () => {
  const random = Math.ceil(Math.random() * 100000);
  const folderName = `./public/new`;

  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
    return NextResponse.json({
      message: "folder created successfully",
      path: folderName,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      message: "ERROR",
      path: random,
    });
  }
};
