import emailjs from "@emailjs/nodejs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_API_KEY,
    EMAILJS_PRIVATE_API_KEY,
  } = process.env;
  if (
    !EMAILJS_SERVICE_ID ||
    !EMAILJS_TEMPLATE_ID ||
    !EMAILJS_PUBLIC_API_KEY ||
    !EMAILJS_PRIVATE_API_KEY
  ) {
    throw new Error("Missing required EmailJS environment variables");
  }

  const body = await req.json();
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      body,
      {
        publicKey: EMAILJS_PUBLIC_API_KEY,
        privateKey: EMAILJS_PRIVATE_API_KEY,
      },
    );
    return NextResponse.json({ message: "SEND EMAIL SUCCESS!", response });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { message: "SEND EMAIL FAILED...", error: message },
      { status: 500 },
    );
  }
}
