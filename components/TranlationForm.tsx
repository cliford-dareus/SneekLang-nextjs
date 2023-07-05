import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Formfield from "./Formfield";
import FormTextArea from "./FormTextArea";

type Props = {
  setResult: Dispatch<SetStateAction<any | string>>;
};

const TranlationForm = (props: Props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch("/api/translate", {
      method: "POST",
      body: JSON.stringify({ from, to, text }),
    });

    const { data } = await response.json();
    props.setResult({
      from,
      to,
      originalText: text,
      translatedText: data.translations.translatedText,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Formfield name="from" value={from} onChange={setFrom} />
      <Formfield name="to" value={to} onChange={setTo} />
      <FormTextArea name="textarea" value={text} onChange={setText} />

      <button>Translate</button>
    </form>
  );
};

export default TranlationForm;
