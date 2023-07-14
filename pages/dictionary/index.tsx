import DictionaryFrom from "@/components/DictionaryFrom";
import DictionaryResult from "@/components/DictionaryResult";
import { Layout } from "@/components/Layout";
import Bot from "@/components/UI/Bot";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { easeIn, motion } from "framer-motion";
import { variants } from "@/utils/animations";
import Overlay from "@/components/UI/Overlay";

const dictionaryVariants = {
  open: {
    height: "550px",
    transition: {
      type: "spring",
      duration: 0.5,
      stiffness: 20,
    },
  },
  closed: {
    height: "344px",
  },
};

const Dictionary = () => {
  const [result, setResult] = useState(null);

  return (
    <>
      {result && <Overlay setResult={setResult}/>}
      <motion.div
        animate={result ? "open" : "closed"}
        variants={dictionaryVariants}
        className={`bg-gradient-to-b from-[#9A6AFF] to-[#000] max-h-[650px] w-full mx-auto md:w-[600px] md:left-1/2 overflow-hidden ${
          !result
            ? "flex-1"
            : "absolute bottom-0 md:bottom-[2em] md:-translate-x-1/2"
        } p-4 md:p-8 rounded-tr-xl rounded-tl-xl md:rounded-br-xl md:rounded-bl-xl`}
      >
        <motion.div>
          <motion.h1
            initial="hide"
            animate="show"
            variants={variants}
            className="text-center text-[32px] font-bold"
          >
            {!result ? "Dictionary" : "Result"}
          </motion.h1>
          {!result && (
            <>
              <motion.p initial="hide" animate="show" variants={variants}>Enter an English word to define...</motion.p>
              <motion.div
                initial="hide"
                animate="show"
                variants={variants}
                className="mt-2 mb-8"
              >
                <DictionaryFrom setResult={setResult} />
              </motion.div>

              <motion.div
                className="mt-4"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: .3
                }}
              >
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
