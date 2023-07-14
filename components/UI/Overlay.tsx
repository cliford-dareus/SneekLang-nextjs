import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setResult: Dispatch<SetStateAction<any | string>>;
};

const Overlay = ({ setResult }: Props) => {
  return (
    <div
      className="absolute inset-0 bg-black opacity-[.5]"
      onClick={() => setResult(null)}
    ></div>
  );
};

export default Overlay;
