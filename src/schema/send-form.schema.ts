import z from "zod";

export const sendFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(50),
  email: z.string().email("Invalid email address"),
  text: z.string().min(10, "Text must be at least 10 characters").max(500),
  subject: z.string().min(1, "Subject is required").max(100),
});
