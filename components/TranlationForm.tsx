import React, { Dispatch, SetStateAction } from "react";
import Formfield from "./UI/Formfield";
import FormTextArea from "./UI/FormTextArea";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./UI/Button";

export type StateProps = {
  setResult: Dispatch<SetStateAction<any | string>>;
};

export type InputFieldType = {
  from: string;
  to: string;
  text: string;
};

const TranlationForm = (props: StateProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFieldType>();

  const onSubmit: SubmitHandler<InputFieldType> = async (inputData) => {
    const response = await fetch("/api/translate", {
      method: "POST",
      body: JSON.stringify(inputData),
    });

    const { data } = await response.json();
    props.setResult({
      from: inputData.from,
      to: inputData.to,
      originalText: inputData.text,
      translatedText: data?.translations.translatedText,
    });
  };

  const formProps = { register, errors };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      <Formfield {...formProps} name="from" defaultValue="en" />
      <Formfield {...formProps} name="to" defaultValue="fr" />
      <FormTextArea {...formProps} name="text" />

      <Button text="Translate"/>
    </form>
  );
};

export default TranlationForm;
