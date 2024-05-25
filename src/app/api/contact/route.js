import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
  auth: {
    user: process.env.CONTACT_EMAIL,
    pass: process.env.CONTACT_PASSWORD,
  },
});

export const POST = async (req) => {
  const { name, email, subject, date, message } = await req.json();
  const createHtml = `<div>
  <div style={font-size: 20px; font-weight: 600}>
  <p>Name: ${name}</p>
  <p>Email: ${email}</p>
  <p>Subject: ${subject}</p>
  <p>Date: ${date}</p>
  <br>
  <hr>
  <p>
  ${message}
  </p>
  </div>
    </div>`;

  try {
    await transporter.sendMail({
      from: email, // sender address
      to: process.env.CONTACT_TO,
      subject: subject,
      text: message,
      html: createHtml,
    });

    return NextResponse.json(
      { message: "Message send successfully" },
      {
        status: 202,
        statusText: "OK",
      }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 505, statusText: "ERROR" }
    );
  }
};
