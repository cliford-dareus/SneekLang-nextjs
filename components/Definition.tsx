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
            </li>
          </>
        ))}
      </ul>

      {content.content.antonyms.map((ant) => (
        <p>{ant}</p>
      ))}
    </article>
  );
};

export default Definition;
