"use server";

import { EmailTemplate } from "@/components/email/email-template";
import { Resend } from "resend";

interface FormSendEmailContactData {
  name: string;
  email: string;
  subject: string;
  text: string;
}

export async function sendEmailContact(formData: FormSendEmailContactData) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not defined");
  }

  if (
    formData.name.trim().length === 0 ||
    formData.email.trim().length === 0 ||
    formData.text.trim().length === 0 ||
    formData.subject.trim().length === 0
  ) {
    throw new Error("All fields are required");
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "info@alphajanitorialcorp.com",
      to: "info@alphajanitorialcorp.com",
      subject: formData.subject,
      react: EmailTemplate({
        name: formData.name,
        email: formData.email,
        text: formData.text,
      }),
    });

    if (error) {
      console.log("Error sending email:", error);
      throw new Error("Failed to send email");
    }

    console.log("Email sent successfully:", data);
    return data;
  } catch (error) {
    console.log("Error in sendEmailContact:", error);
    throw error;
  }
}
