import React from 'react'
import Image from 'next/image'
import BotImage from "@/public/Group 2.png";

type Props = {
    text: string;
    data?: string[];
}

const Bot = ({text, data}: Props) => {
  return (
    <div className="mt-8 isolate w-full">
        <div className="w-[65%] p-2 bg-white text-black rounded-md mb-4 text-[13px]">
          {text}
        </div>

        <div className="h-[80px] bg-black rounded-md relative">
          <Image
            className="absolute -top-20 right-4 rotate-[-8deg] z-[-1]"
            src={BotImage}
            alt=""
            width={75}
          />
        </div>
      </div>
  )
}

export default Bot