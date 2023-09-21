import React from "react";
import type { Group } from "@/utils/groupMeanings";
import Definition from "./Definition";

type Props = {
  meanings: { [key: string]: Group };
};

const Definitions = ({ meanings }: Props) => {

  const meaningsByType = Object.keys(meanings).map((partOfSpeech) => {
    const item = meanings[partOfSpeech];
    const singleItem = {
      title: partOfSpeech,
      content: item,
    };

    return singleItem;
  });

  return (
    <div className="h-[400px]">
      {meaningsByType &&
        meaningsByType.length > 0 &&
        meaningsByType.map((meanings) => <Definition content={meanings} />)}
    </div>
  );
};

export default Definitions;
