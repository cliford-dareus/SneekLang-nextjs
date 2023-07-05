import React, { Dispatch, SetStateAction } from "react";

type Props = {
  name: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

const Formfield = (props: Props) => {
  return (
    <div className="w-full flex rounded-md overflow-hidden bg-slate-300 px-4 py-[5px] mb-2">
      <p className="w-[2.5em]">{props.name}</p>
      <select
        name={props.name}
        id={props.name}
        className="w-full outline-none border-none bg-transparent pl-4 text-black"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="creole">Creole</option>
      </select>
    </div>
  );
};

export default Formfield;
