import React, { FC, PropsWithChildren } from "react";
import Navbar from "./UI/Navbar";
import MobileNavbar from "./UI/MobileNavbar";
import { sarpanch } from "@/styles/fonts";
import Image from "next/image";
import BotImage from "@/public/Group 2.png";
import HeroText from "./UI/HeroText";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={`bg-black h-screen min-h-screen text-white flex flex-col overflow-hidden font-sans ${sarpanch.variable} font-sans`}
    >
      <Navbar />
      <main className="h-full flex flex-col relative">
        <div className="h-1/2 p-4 flex items-center relative isolate overflow-hidden">
          <HeroText />
          <Image
            className="absolute right-[-6em] top-10 rotate-[-30deg] z-[-1]"
            src={BotImage}
            alt="Bot image"
            height={360}
          />
        </div>
        {children}
      </main>
      <MobileNavbar />
    </div>
  );
};
