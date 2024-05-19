import ServiceSchema from "@/models/schema/service";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

// POST METHOD
export const POST = async (req) => {
  const { title, serviceNo, description, body } = await req.json();
  try {
    await connectToDB();
    const newService = new ServiceSchema({
      title,
      serviceNo,
      description,
      body,
    });
    await newService.save();

    return NextResponse.json(
      { success: "New Service Added Successfully" },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to added Service" },
      { status: 505, statusText: "ERROR" }
    );
  }
};

// GET METHOD
export const GET = async (req) => {
  try {
    await connectToDB();
    const service = await ServiceSchema.find({});

    return NextResponse.json(
      { message: "success to get testimonials", data: services },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error: this is server side error" },
      { status: 503, statusText: "ERROR" }
    );
  }
};

// DELETE METHOD
export const DELETE = async (req) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    await connectToDB();
    await ServiceSchema.findByIdAndDelete(id);
    return NextResponse.json(
      {
        message: "Service Deleted Successfully",
      },
      { status: 202, statusText: "OK" }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error: Failed to delete service",
      },
      { status: 503, statusText: "ERROR" }
    );
  }
};

// PATH METHOD
export const PATCH = async (req) => {
  const {title, serviceNo, description, body} = await req.json();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    await connectToDB();
    const findService = await ServiceSchema.findById(id);
    findService.title = title;
    findService.serviceNo = serviceNo;
    findService.description = description;
    findService.body = body;

    await findService.save();

    return NextResponse.json(
      { message: "Service updated successfully" },
      {
        status: 202,
        statusText: "OK",
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error: Service did not updated" },
      {
        status: 505,
        statusText: "ERROR",
      }
    );
  }
};
