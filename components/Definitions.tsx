import React from "react";
import { Group } from "./DictionaryResult";
import Definition from "./Definition";

type Props = {
  meanings: { [key: string]: Group };
};

const Definitions = ({ meanings }: Props) => {
//   console.log(meanings);

  const meaningsByType = Object.keys(meanings).map((partOfSpeech) => {
    const item = meanings[partOfSpeech];
    const singleItem = {
      title: partOfSpeech,
      content: item,
    };
    console.log(singleItem);

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
