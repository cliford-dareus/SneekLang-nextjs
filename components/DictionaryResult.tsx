import { type } from "os";
import React, { useEffect } from "react";
import Definitions from "./Definitions";
import { motion } from "framer-motion";
import { groupSimilarMeanings } from '@/utils/groupMeanings' 

type Props = {
  result: any;
};

const DictionaryResult = ({ result }: Props) => {
   return (
    <div className="">
      <h2 className="text-xl font-semibold">
        {result?.word} {"  "}{" "}
        <span className="text-base">{result?.phonetic}</span>
      </h2>

      <div className=" h-full overflow-scroll">
        {result && (
          <Definitions meanings={groupSimilarMeanings(result?.meanings)} />
        )}
      </div>
    </div>
  );
};

export default DictionaryResult;
