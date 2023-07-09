import DictionaryFrom from "@/components/DictionaryFrom";
import DictionaryResult from "@/components/DictionaryResult";
import { Layout } from "@/components/Layout";
import Bot from "@/components/UI/Bot";
import React, { ReactElement, useState } from "react";

type Props = {};

const Dictionary = () => {
  const [result, setResult] = useState();

  return (
    <>
      {result && <div className="absolute inset-0 bg-black opacity-[.5]"></div>}
      <div
        className={`bg-green-700 max-h-[650px] overflow-hidden ${
          !result ? "" : "absolute bottom-0 w-full"
        } p-4 rounded-tr-xl rounded-tl-xl`}
      >
        <h1 className="text-center text-3xl">
          {!result ? "Dictionary" : "Result"}
        </h1>
        {!result && (
          <>
            <p>Enter an English word to define...</p>
            <div className="mt-4 mb-8">
              <DictionaryFrom setResult={setResult} />
            </div>
            <Bot text="Sorry! we only have English Dictionary for now..." />
          </>
        )}

        <DictionaryResult result={result}/>
      </div>
    </>
  );
};

Dictionary.getLayout = function getLayout(Dictionary: ReactElement) {
  return <Layout>{Dictionary}</Layout>;
};

export default Dictionary;
