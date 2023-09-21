import React, { useMemo } from 'react'
import Image from 'next/image'
import BotImage from "@/public/Group 2.png";

type Props = {
    text: string;
    data?: string[];
}

const Bot = ({text, data}: Props) => {
  const words = useMemo(() => {
      const word = data?.translatedText.split(" ")

      if(data?.length === 1) return data

      return word
    }, [data])


  return (
    <div className="mt-8 isolate w-full">
        <div className="w-[65%] p-2 bg-white text-black rounded-md mb-4 text-[13px]">
          {text}
        </div>

        <div className="h-[80px] bg-white rounded-md relative p-2">
          <Image
            className="absolute -top-20 right-4 rotate-[-8deg] z-[-1]"
            src={BotImage}
            alt=""
            width={75}
          />

          <div className="text-black flex flex-wrap gap-4">
            {words?.map((word, i) => (
              <div className="px-2 py-1 shadow-md rounded-md" key={i}>{word}</div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Bot
