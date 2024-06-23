import emailjs from "@emailjs/nodejs";

export const handler = async (event) => {
  const {
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_API_KEY,
    EMAILJS_PRIVATE_API_KEY,
  } = process.env;
  const body = JSON.parse(event.body);
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      body,
      { publicKey: EMAILJS_PUBLIC_API_KEY, privateKey: EMAILJS_PRIVATE_API_KEY }
    );
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "SEND EMAIL SUCCESS!", response }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "SEND EMAIL FAILED...",
        error: error.text,
      }),
    };
  }
};
