import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import fs from "node:fs";

export const POST = async () => {
  const formData = await req.formData();
  const files = formData.getAll("file");
  if (!files) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });

    

  }

  try {
    files.forEach((file) => {
        
    })
  } catch (error) {}
};
