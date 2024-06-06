import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

// Hitting GET http://localhost:3000/api/hello will return "Hello from Glide!"
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: "Hello from Glide!" });
}
