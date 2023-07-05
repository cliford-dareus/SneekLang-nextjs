import { ResultType } from "@/types";
import React, { Dispatch, SetStateAction } from "react";
import BotImage from "@/public/Group 2.png";
import Image from "next/image";

type Props = {
  result: ResultType;
  setResult: Dispatch<SetStateAction<any | string>>;
};

const TranslationResult = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="font-[600] text-base mb-1">{props.result.from}</h3>
        <div className="px-4 py-2 bg-slate-300 rounded-md max-h-[150px] overflow-scroll">
          <p className="text-black">{props.result.originalText}</p>
        </div>
      </div>

      <div>
        <h3 className="font-[600] text-base mb-1">{props.result.to}</h3>
        <div className="px-4 py-2 bg-slate-300 rounded-md max-h-[150px] overflow-scroll">
          <p className="text-black">{props.result.translatedText}</p>
        </div>
      </div>

      <div className="mt-4 isolate">
        <div className="w-[65%] p-2 bg-white text-black rounded-md mb-4">
          Tap on a word below to look up its definition
        </div>

        <div className="h-[100px] bg-black rounded-md relative">
          <Image
            className="absolute -top-20 right-4 rotate-[-8deg] z-[-1]"
            src={BotImage}
            alt=""
            width={75}
          />
        </div>
      </div>
      <button
        className="py-2 px-4 bg-white rounded-md text-black absolute -top-4 right-4"
        onClick={() => props.setResult(null)}
      >
        close
      </button>
    </div>
  );
};

export default TranslationResult;
