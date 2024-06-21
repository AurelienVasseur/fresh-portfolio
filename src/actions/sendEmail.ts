"use server";

import { getErrorMessage, validateString } from "@/lib/utils";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }
  let data;
  try {
    // we sould send an email here (with Resend for example)
    // as this is a demo project, we are not doing it
    let p = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        data = "Mail send";
        resolve();
      }, 1000);
    });
    await p;
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};
