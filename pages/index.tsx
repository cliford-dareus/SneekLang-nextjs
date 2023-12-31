import { useState, type ReactElement } from "react";
import { Layout } from "@/components/Layout";
import type { NextPageWithLayout, ResultType } from "@/types";
import TranlationForm from "@/components/TranlationForm";
import TranslationResult from "@/components/TranslationResult";
import { motion } from "framer-motion";
import { variants } from "@/utils/animations";
import Overlay from "@/components/UI/Overlay";

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
    height: "380px",
  },
};

const Page: NextPageWithLayout = () => {
  const [result, setResult] = useState<ResultType | null>(null);

  return (
    <>
      {result && <Overlay setResult={setResult}/>}
      <motion.div
        animate={result ? "open" : "closed"}
        variants={translationVariants}
        className={` bg-gradient-to-b from-[#9A6AFF] to-[#000] max-h-[650px] overflow-hidden w-full mx-auto md:w-[600px] md:left-1/2 ${
          !result
            ? "flex-1"
            : "absolute bottom-0 md:bottom-[2em]  md:-translate-x-1/2"
        } p-4 md:p-8 rounded-tr-xl rounded-tl-xl md:rounded-br-xl md:rounded-bl-xl`}
      >
        <motion.h1 initial="hide" animate="show" variants={variants} className="text-center text-[32px] font-bold">
          {!result ? "Translation" : "Result"}
        </motion.h1>

        <motion.div initial="hide" animate="show" variants={variants} className="mt-4">
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
