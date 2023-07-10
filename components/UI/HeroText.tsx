import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { y: -100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const items = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const HeroText = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={variants}
      className="w-[65%] md:max-w-[500px] md:text-center md:m-auto"
    >
      <motion.p variants={items}>Hi! I’m Sneek.</motion.p>
      <motion.p variants={items} className="text-[32px] leading-[1] md:text-5xl">
        A bot/Ai train to help you with learning language.
      </motion.p>
      <motion.p variants={items}>How may i help you today?</motion.p>
    </motion.div>
  );
};

export default HeroText;
