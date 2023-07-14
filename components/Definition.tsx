import React from "react";
import { Group } from "./DictionaryResult";

type Props = {
  content: {
    title: string;
    content: Group;
  };
};

const Definition = ({ content }: Props) => {
  return (
    <article className="">
      <h3 className="text-xl">{content.title}</h3>
      <ul className="list-decimal ml-4 mb-4">
        {content.content.definitions.map((def) => (
          <>
            <li className="mt-2">
              {def.definition} <br />{" "}
              <span className="text-slate-300">
                {def.example ? `"${def.example}"` : null}
              </span>
              {def.synonyms.length > 0 && (
                <span className="flex mt-2 flex-wrap items-center">
                  synonyms:{" "}
                  {def.synonyms.map((syn) => (
                    <p className="ml-2 mt-1 border border-green-500 px-3 rounded-3xl cursor-pointer">
                      {syn}
                    </p>
                  ))}
                </span>
              )}
              {def.antonyms.length > 0 && (
                <span className="flex mt-2 flex-wrap items-center">
                  antonyms:{" "}
                  {def.antonyms.map((ant) => (
                    <p className="ml-2 mt-1 border border-green-500 px-3 rounded-3xl cursor-pointer">
                      {ant}
                    </p>
                  ))}
                </span>
              )}
            </li>
          </>
        ))}
      </ul>
    </article>
  );
};

export default Definition;
