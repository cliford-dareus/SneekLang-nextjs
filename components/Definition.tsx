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
      <ul className="list-decimal">
        {content.content.definitions.map((def) => (
          <li className="">{def.definition}</li>
        ))}
      </ul>
    </article>
  );
};

export default Definition;
