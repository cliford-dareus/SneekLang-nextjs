import React from "react";

type Props = {
    text: string
};

function Button({text}: Props) {
  return (
    <button className="py-1 px-4 bg-white text-black rounded-md self-end mt-2">
      {text}
    </button>
  );
}

export default Button;
