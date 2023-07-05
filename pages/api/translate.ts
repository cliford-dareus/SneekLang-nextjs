import { NextApiRequest, NextApiResponse } from "next";

const URL = "https://deep-translate1.p.rapidapi.com/language/translate/v2";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {from, to, text} = JSON.parse(req.body);
    const apiKey = process.env.API_KEY!;

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
      },
      body: JSON.stringify({
        q: text,
        source: from,
        target: to,
      }),
    });

    const data = await response.json();
    res.status(200).json(data);
  }
};
