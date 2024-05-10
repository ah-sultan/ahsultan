import { NextResponse } from "next/server";




export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("id");

  try {
    const allFiles = getFiles(path);
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
