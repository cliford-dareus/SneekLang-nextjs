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
              <span>
                {def.synonyms.map((syn) => (
                  <p>synonyms: {syn}</p>
                ))}
              </span>
              <span>
                {def.antonyms.map((ant) => (
                  <p>antonyms: {ant}</p>
                ))}
              </span>
            </li>
          </>
        ))}
      </ul>
    </article>
  );
};

export default Definition;
