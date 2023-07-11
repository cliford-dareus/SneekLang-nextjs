import { ResultType } from "@/types";
import React, { Dispatch, SetStateAction } from "react";
import Bot from "./UI/Bot";

type Props = {
  result: ResultType;
  setResult: Dispatch<SetStateAction<any | string>>;
};

const TranslationResult = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="font-[600] text-base mb-1">{props.result.from}</h3>
        <div className="px-4 py-2 bg-white rounded-md max-h-[100px] overflow-scroll">
          <p className="text-black">{props.result.originalText}</p>
        </div>
      </div>

      <div>
        <h3 className="font-[600] text-base mb-1">{props.result.to}</h3>
        <div className="px-4 py-2 bg-white rounded-md max-h-[100px] overflow-scroll">
          <p className="text-black">{props.result.translatedText}</p>
        </div>
      </div>

      <Bot text="Tap on a word below to look up its definition"/>

      <button
        className="py-1 px-4 bg-white rounded-md text-black absolute -top-4 right-4"
        onClick={() => props.setResult(null)}
      >
        close
      </button>
    </div>
  );
};

export default TranslationResult;
