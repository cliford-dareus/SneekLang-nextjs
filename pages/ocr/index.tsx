import { Layout } from "@/components/Layout";
import React, { ReactElement } from "react";

type Props = {};

const Ocr = (props: Props) => {
  return (
    <div className="bg-green-700 flex-1 p-4 rounded-tr-xl rounded-tl-xl">
      Picture
    </div>
  );
};

Ocr.getLayout = function getLayout(Ocr: ReactElement) {
  return <Layout>{Ocr}</Layout>;
};

export default Ocr;
