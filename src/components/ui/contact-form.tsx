"use client";

import { sendEmailContact } from "@/actions/send-email-contact";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Textarea } from "./textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50)
    .refine((value) => value.trim().split(" ").length >= 2, "Full name must include first and last name"),
  email: z.string().email("Invalid email address"),
  text: z.string().min(10, "Text must be at least 10 characters").max(500),
  subject: z.string().min(1, "Subject is required").max(100),
});

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "🎉 New contact from website 🥳",
      text: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Submitting form with values:", values);
    startTransition(async () => {
      try {
        await sendEmailContact(values);
        toast.success("Message sent successfully!");
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong. Please try again later.");
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="matheus@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Text Message</FormLabel>
                <FormControl>
                  <Textarea className="h-[200px] resize-none" placeholder="Describe the service you need." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={isPending} className="w-full" type="submit">
          Submit
          {isPending && (
            <div>
              <Loader className="animate-spin" />
            </div>
          )}
        </Button>
      </form>
    </Form>
  );
}
