import { ResultType } from "@/types";
import React, { Dispatch, SetStateAction, useState } from "react";
import Bot from "./UI/Bot";
import TTSButton from "./UI/TTSButton";

type Props = {
  result: ResultType;
  setResult: Dispatch<SetStateAction<any | string>>;
};

const TranslationResult = ({ result, setResult }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex gap-4">
          <h3 className="font-[600] text-base mb-1">{result.from}</h3>
          <TTSButton
            lang={result.from}
            text={result.originalText}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
          />
        </div>
        <div className="px-4 py-2 bg-white rounded-md max-h-[100px] overflow-scroll">
          <p className="text-black">{result.originalText}</p>
        </div>
      </div>

      <div>
        <div className="flex gap-4">
          <h3 className="font-[600] text-base mb-1">{result.to}</h3>
          <TTSButton
            lang={result.to}
            text={result.translatedText}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
          />
        </div>
        <div className="px-4 py-2 bg-white rounded-md max-h-[100px] overflow-scroll">
          <p className="text-black">{result.translatedText}</p>
        </div>
      </div>

      <Bot text="Tap on a word below to look up its definition" />

      <button
        className="py-1 px-4 bg-white rounded-md text-black absolute -top-4 right-4"
        onClick={() => setResult(null)}
      >
        close
      </button>
    </div>
  );
};

export default TranslationResult;
