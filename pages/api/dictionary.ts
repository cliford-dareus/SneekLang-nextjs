import { NextApiRequest, NextApiResponse } from "next";

const URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {text} = JSON.parse(req.body);
    const response = await fetch(`${URL}/${text}`);
    const data = await response.json();
    res.status(200).json(data);
  }
};
