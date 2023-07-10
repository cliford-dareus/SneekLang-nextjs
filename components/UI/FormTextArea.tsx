import React, { Dispatch, SetStateAction } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface IFields {
  from: string;
  to: string;
  text: string;
}

export type FieldsInputsProps = {
  register: UseFormRegister<IFields>;
  errors: FieldErrors;
  name: "from" | "to" | "text";
  defaultValue?: string;
};

const FormTextArea = ({ register, errors, name }: FieldsInputsProps) => {
  return (
    <textarea
      className="w-full outline-none border-none rounded-md text-black bg-white p-4"
      {...register(name, { required: true })}
    ></textarea>
  );
};

export default FormTextArea;
