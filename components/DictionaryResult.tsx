import { type } from "os";
import React, { useEffect } from "react";
import Definitions from "./Definitions";
import { motion } from "framer-motion";

type Props = {
  result: any;
};

export type Group = {
  partOfSpeech: string;
  definitions: definitionsType[];
  antonyms: string[];
  synonyms: string[];
};

type Meaning = {
  partOfSpeech: string;
  definitions: definitionsType[];
  synonyms: string[];
  antonyms: string[];
};

type definitionsType = {
  definition: string;
  example: string;
  synonyms: string;
  antonyms: string;
};

const DictionaryResult = ({ result }: Props) => {
  const groupSimilarMeanings = (meanings: Meaning[]) => {
    return meanings?.reduce((acc, item) => {
      if (acc[item.partOfSpeech]) {
        acc[item.partOfSpeech] = {
          ...acc[item.partOfSpeech],
          definitions: [
            ...acc[item.partOfSpeech].definitions,
            ...item.definitions,
          ],
          synonyms: [...acc[item.partOfSpeech].synonyms, ...item.synonyms],
          antonyms: [...acc[item.partOfSpeech].antonyms, ...item.antonyms],
        };
      } else {
        acc[item.partOfSpeech] = item;
      }

      return acc;
    }, {} as { [key: string]: Group });
  };

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
