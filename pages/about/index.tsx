import { Layout } from "@/components/Layout";
import Bot from "@/components/UI/Bot";
import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import { variants } from "@/utils/animations";

type Props = {};

function About({}: Props) {
  return (
    <div className="bg-gradient-to-b from-[#9A6AFF] to-[#000] max-h-[650px] overflow-hidden w-full mx-auto md:w-[600px] md:left-1/2 p-4 md:p-8 rounded-tr-xl rounded-tl-xl md:rounded-br-xl md:rounded-bl-xl md:absolute bottom-0 md:bottom-[2em]  md:-translate-x-1/2 flex-1">
      <motion.h1
        initial="hide"
        animate="show"
        variants={variants}
        className="text-center text-[32px] font-bold"
      >
        About
      </motion.h1>
      <motion.p initial="hide" animate="show" variants={variants}>
        Due to work my mother don’t have time to go to an English so I develop
        this simple app for her to use on her spar time at work.
      </motion.p>
      <motion.div
        className="mt-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <Bot text="Check out my socials." />
      </motion.div>
    </div>
  );
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
