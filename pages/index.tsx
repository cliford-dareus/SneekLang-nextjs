import { useState, type ReactElement } from "react";
import { Layout } from "@/components/Layout";
import type { NextPageWithLayout, ResultType } from "@/types";
import TranlationForm from "@/components/TranlationForm";
import TranslationResult from "@/components/TranslationResult";
import { motion } from "framer-motion";

const translationVariants = {
  open: {
    height: "550px",
    transition: {
      type: "spring",
      duration: 0.5,
      stiffness: 20,
    },
  },
  closed: {
    height: "385px",
  },
};

const Page: NextPageWithLayout = () => {
  const [result, setResult] = useState<ResultType | null>(null);

  return (
    <>
      {result && <div className="absolute inset-0 bg-black opacity-[.5]"></div>}
      <motion.div
        animate={result ? "open" : "closed"}
        variants={translationVariants}
        className={`bg-green-700 max-h-[650px] mx-auto md:w-[600px] md:left-1/2 ${
          !result
            ? "flex-1"
            : "absolute bottom-0 md:bottom-[2em]  md:-translate-x-1/2"
        } p-4 md:p-8 rounded-tr-xl rounded-tl-xl md:rounded-br-xl md:rounded-bl-xl`}
      >
        <h1 className="text-center text-3xl">
          {!result ? "Translation" : "Result"}
        </h1>

        <motion.div className="mt-4">
          {!result ? (
            <TranlationForm setResult={setResult} />
          ) : (
            <TranslationResult result={result} setResult={setResult} />
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
