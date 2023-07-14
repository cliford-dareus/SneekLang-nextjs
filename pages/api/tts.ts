import { NextApiRequest, NextApiResponse } from "next";

const URL = "https://voicerss-text-to-speech.p.rapidapi.com/";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { lang, text }= JSON.parse(req.body);
    const apiKey = process.env.API_KEY!;
    const speechKey = process.env.SPEECH_KEY!;

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
      },
      body: new URLSearchParams({
        src: `${text}`,

        //@ts-ignore
        hl: `${languages[lang]}`,
        //@ts-ignore
        v:`${voices[lang]}`,
        r: "0",
        c: "WAV",
        f: "8khz_8bit_mono",
        b64: "true",
        key: speechKey,
      }),
    });
    
    const data = await response.text();
    res.status(200).json(data);
  }
};

const languages = {
    en: "en-us",
    fr: "fr-fr",
}

const voices = {
  en : "amy",
  fr: "iva"
}

