import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { StateProps } from "./TranlationForm";
import Button from "./UI/Button";

type Props = {};

type InputFieldsProps = {
  text: string;
};

function DictionaryFrom({ setResult }: StateProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFieldsProps>();

  const onSubmit: SubmitHandler<InputFieldsProps> = async (inputData) => {
    const response = await fetch("/api/dictionary", {
      method: "POST",
      body: JSON.stringify(inputData),
    });

    const data  = await response.json();
    setResult(data[0]);
    console.log(data[0]);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="w-full rounded-md py-1 px-4 text-black outline-none border-none"
        type="text"
        {...register("text")}
        placeholder="eg.sky"
      />
      <Button text="Define"/>
    </form>
  );
}

export default DictionaryFrom;
