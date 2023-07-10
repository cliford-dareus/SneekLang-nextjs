import React, { Dispatch, SetStateAction } from "react";
import { FieldsInputsProps } from "./FormTextArea";

const Formfield = ({
  register,
  errors,
  name,
  defaultValue,
}: FieldsInputsProps) => {
  return (
    <div className="w-full flex rounded-md overflow-hidden bg-white px-4 py-1 mb-2">
      <p className="w-[2.5em] text-black font-semibold">{name}</p>
      <select
        {...register(name)}
        className="w-full outline-none border-none bg-transparent pl-8 text-black"
      >
        <option >
          --Languages--
        </option>
        <option defaultValue={defaultValue} value="en">English</option>
        <option defaultValue={defaultValue} value="fr">French</option>
        <option value="creole">Creole</option>
      </select>
    </div>
  );
};

export default Formfield;
