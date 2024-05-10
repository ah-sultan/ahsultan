import { getDateAndTime } from "@/lib/getDateAndTime";
import ImgCloudSchema from "@/models/schema/imgCloud";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { folderPath, folderName, imgPath } = await req.json();
  const date = getDateAndTime();

  try {
    await connectToDB();
    const newCloudFile = new ImgCloudSchema({
      folderName,
      folderPath,
      imgPath,
      date,
    });
    await newCloudFile.save();
    return NextResponse.json(
      {
        success: `New file created`,
        files: { folderName, folderPath, imgPath },
      },
      { status: 202, statusText: true }
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to created" }, { status: 505 });
  }
};

export const GET = async () => {
  try {
    await connectToDB();
    const files = await ImgCloudSchema.find({});

    return NextResponse.json(
      {
        message: "Data Fetching Successfully",
        files,
      },
      {
        status: 202,
        statusText: "OK",
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "This is server side Error",
      },
      {
        status: 505,
        statusText: "ERROR",
      }
    );
  }
};
