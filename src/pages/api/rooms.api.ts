"use client"
import prisma from "@/DB/db.config.js";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "POST") {
    console.log("HO")
    const { roomname, description, githubRepo, language } = req.body;

    try {
      const room = await prisma.room.create({
        data: {
          roomname,
          description,
          githubRepo,
          language,
        },
      });
      console.log(room)
    } catch (error) {
      return res.status(500).json({ message: "error creating room" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" })
  }
}
