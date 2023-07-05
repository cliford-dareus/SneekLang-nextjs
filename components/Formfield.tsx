import React, { Dispatch, SetStateAction } from "react";
import { FieldsInputsProps } from "./FormTextArea";

const Formfield = ({ register, errors, name }: FieldsInputsProps) => {
  return (
    <div className="w-full flex rounded-md overflow-hidden bg-slate-300 px-4 py-[5px] mb-2">
      <p className="w-[2.5em]">{name}</p>
      <select
        {...register(name)}
        className="w-full outline-none border-none bg-transparent pl-4 text-black"
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="creole">Creole</option>
      </select>
    </div>
  );
};

export default Formfield;
