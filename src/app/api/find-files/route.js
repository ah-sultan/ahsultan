import { NextResponse } from "next/server";
import fs from "node:fs";

const getFiles = (dir) => {
  const files = [];
  const fileList = fs.readdirSync(dir);
  fileList.forEach((file) => {
    const ifImg =
      file.includes(".png") || file.includes(".jpg") || file.includes(".gif");

    const schema = {
      imgPath: ifImg ? file : false,
      folderName: file,
    };
    files.push(schema);
    return files;
  });

  return files;
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("id");

  try {
    const allFiles = getFiles(`./public${path}`);
    return NextResponse.json(
      { message: `${allFiles.length} files founded`, files: allFiles },
      { status: 203 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `File Not Found`, path: path },
      { status: 203 }
    );
  }
}
