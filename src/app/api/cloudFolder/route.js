import { NextResponse } from "next/server";
import fs from "node:fs";

export const POST = async (req) => {
  const { path } = await req.json();
  const folderName = `./public/${path}`;

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
      path: folderName,
    });
  }
};

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("id");
  const folderName = `./public/${path}`;

  try {
    if (fs.existsSync(folderName)) {
      // RESPONSE
      return NextResponse.json(
        {
          message: "file already exists",
          path: folderName,
        },
        {
          status: 303,
          statusText: true,
          ok: false,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "file dose not exists",
          path: folderName,
        },
        {
          status: 303,
          statusText: false,
          ok: false
        }
      );
    }
  } catch (err) {
    console.error(err);
    // RESPONSE
    return NextResponse.json(
      {
        message: "ERROR",
        path: folderName,
      },
      {
        status: 505,
      }
    );
  }
};
