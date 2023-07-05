import React, { Dispatch, SetStateAction } from "react";
import Formfield from "./Formfield";
import FormTextArea from "./FormTextArea";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  setResult: Dispatch<SetStateAction<any | string>>;
};

type InputFieldType = {
  from: string;
  to: string;
  text: string;
};

const TranlationForm = (props: Props) => {
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
      translatedText: data.translations.translatedText,
    });
  };

  const formProps = { register, errors };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Formfield {...formProps} name="from" />
      <Formfield {...formProps} name="to" />
      <FormTextArea {...formProps} name="text" />

      <button className="">Translate</button>
    </form>
  );
};

export default TranlationForm;
