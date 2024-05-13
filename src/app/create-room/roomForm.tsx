"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import api from '@/pages/api/rooms.api';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  roomname: z.string().min(2, {
    message: "Room Name must be at least 2 characters.",
  }),
  description : z.string().min(1).max(500),
  githubRepo:z.string().min(1).max(50),
  language: z.string().min(1).max(100),
});

function RoomForm() {

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('pages/api/rooms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roomname: "",
      description:"",
      githubRepo:"",
      language:""
    },
  });


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <FormField
          control={form.control}
          name="roomname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Room Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Room Name " {...field} />
              </FormControl>
              {/* <FormDescription>
                Please Name your Room
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Room Description" {...field} />
              </FormControl>
              <FormDescription>
              What's your project about? Give a brief overview of what you're working on.🧑🏻‍💻
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="githubRepo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github Repo Link🔗</FormLabel>
              <FormControl>
                <Input placeholder="Copy-paste / provide the link of the github repo" {...field} />
              </FormControl>
              {/* <FormDescription>
                Please Name your Room
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Coding Languages & Tools</FormLabel>
              <FormControl>
                <Input placeholder="Enter the details" {...field} />
              </FormControl>
              <FormDescription>
              Tools of the trade: What languages, frameworks, and technologies are you using to build your project?🌐
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


        <Button type="submit">Create Room</Button>
      </form>
    </Form>
  );
}

export default RoomForm;
