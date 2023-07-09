import { useState, type ReactElement } from "react";
import { Layout } from "@/components/Layout";
import type { NextPageWithLayout, ResultType } from "@/types";
import TranlationForm from "@/components/TranlationForm";
import TranslationResult from "@/components/TranslationResult";

const Page: NextPageWithLayout = () => {
  const [result, setResult] = useState<ResultType | null>(null);

  return (
    <>
      {result && <div className="absolute inset-0 bg-black opacity-[.5]"></div>}
      <div
        className={`bg-green-700 md:w-[700px] md:m-auto ${
          !result ? "flex-1" : "absolute bottom-0 w-full"
        } p-4 rounded-tr-xl rounded-tl-xl`}
      >
        <h1 className="text-center text-3xl">
          {!result ? "Translation" : "Result"}
        </h1>

        <div className="mt-4">
          {!result ? (
            <TranlationForm setResult={setResult} />
          ) : (
            <TranslationResult result={result} setResult={setResult} />
          )}
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
