import { Layout } from "@/components/Layout";
import React, { ReactElement, useState } from "react";

type Props = {};

const Dictionary = () => {
  const [result, setResult] = useState();

  return (
    <>
      {!true && <div className="absolute inset-0 bg-black opacity-[.5]"></div>}
      <div
        className={`bg-green-700 ${
          !true ? "flex-1" : "absolute bottom-0 w-full"
        } p-4 rounded-tr-xl rounded-tl-xl`}
      >
        <h1 className="text-center text-3xl">
          {true ? "Dictionary" : "Result"}
        </h1>

        <div className="mt-4">
          
        </div>
      </div>
    </>
  );
};

Dictionary.getLayout = function getLayout(Dictionary: ReactElement) {
  return <Layout>{Dictionary}</Layout>;
};

export default Dictionary;
