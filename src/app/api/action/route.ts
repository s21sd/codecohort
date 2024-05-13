// import prisma from "@/DB/db.config.js";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     if (req.method === "POST") {
//         console.log("HO");
//         const { roomname, description, githubRepo, language } = req.body;

//         try {
//             const room = await prisma.room.create({
//                 data: {
//                     roomname,
//                     description,
//                     githubRepo,
//                     language,
//                 },
//             });
//             console.log(room);
//             return res.status(200).json(room); // Respond with the created room
//         } catch (error) {
//             console.error("Error creating room:", error);
//             return res.status(500).json({ message: "Error creating room" });
//         }
//     } else {
//         return res.status(405).json({ message: "Method not allowed" });
//     }
// }






import prisma from "@/DB/db.config.js";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
export async function POST(
    req: NextApiRequest,
    res: NextApiResponse
) {
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
        console.log(room);
        return NextResponse.json({ success: true, message: "Success" });
    } catch (error) {
        console.error("Error creating room:", error);
        return NextResponse.json({ success: false, message: "Error creating room", error: error });

    }

}
