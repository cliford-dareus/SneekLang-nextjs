import DictionaryFrom from "@/components/DictionaryFrom";
import DictionaryResult from "@/components/DictionaryResult";
import { Layout } from "@/components/Layout";
import Bot from "@/components/UI/Bot";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { easeIn, motion } from "framer-motion";

type Props = {};

const dictionaryVariants = {
  open: {
    height: "550px",
    transition: {
      type: "spring",
      duration: .5,
      stiffness: 20,
    },
  },
  closed: {
    height: "344px",
  },
};

const Dictionary = () => {
  const [result, setResult] = useState();

  return (
    <>
      {result && <div className="absolute inset-0 bg-black opacity-[.5]"></div>}
      <motion.div
        animate={result ? "open" : "closed"}
        variants={dictionaryVariants}
        className={`bg-green-700 max-h-[650px] overflow-hidden ${
          !result ? "flex-1" : "absolute bottom-0 w-full"
        } p-4 rounded-tr-xl rounded-tl-xl`}
      >
        <motion.div>
          <h1 className="text-center text-3xl">
            {!result ? "Dictionary" : "Result"}
          </h1>
          {!result && (
            <>
              <p>Enter an English word to define...</p>
              <div className="mt-4 mb-8">
                <DictionaryFrom setResult={setResult} />
              </div>

              <motion.div initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}}>
                <Bot text="Sorry! we only have English Dictionary for now..." />
              </motion.div>
            </>
          )}

          {result && <DictionaryResult result={result} />}
        </motion.div>
      </motion.div>
    </>
  );
};

Dictionary.getLayout = function getLayout(Dictionary: ReactElement) {
  return <Layout>{Dictionary}</Layout>;
};

export default Dictionary;
