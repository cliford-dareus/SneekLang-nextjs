import React, { Dispatch, SetStateAction } from "react";

type Props = {
  name: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

const FormTextArea = (props: Props) => {
  return (
    <textarea
      className="w-full outline-none border-none rounded-md text-black"
      name={props.name}
      id={props.name}
      cols={30}
      rows={5}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    ></textarea>
  );
};

export default FormTextArea;
