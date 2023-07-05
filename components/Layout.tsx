import React, { FC, PropsWithChildren } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { sarpanch } from "@/styles/fonts";
import Image from "next/image";
import BotImage from "@/public/Group 2.png";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={`bg-black h-screen min-h-screen text-white flex flex-col overflow-hidden font-sans ${sarpanch.variable} font-sans`}
    >
      <Navbar />
      <main className="h-full flex flex-col relative">
        <div className="h-1/2 p-4 flex items-center relative isolate overflow-hidden">
          <div className="w-[65%]">
            <p>Hi! I’m Sneek.</p>
            <p className="text-3xl">
              A bot/Ai train to help you with learning langauage.
            </p>
            <p>How may i help you today?</p>
          </div>
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
