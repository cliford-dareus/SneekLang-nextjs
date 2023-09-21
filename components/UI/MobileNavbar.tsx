import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

function MobileNavbar({}: Props) {
  const router = useRouter();

  return (
    <div className="bg-black min-h-[80px] h-[80px] w-full flex items-center justify-center p-4 md:hidden">
      <ul className="relative w-full h-full flex gap-4 items-center justify-between">
        <li className="relative font-bold">
          <Link
            className={`${
              router.pathname === "/ocr"
                ? "before:content-[''] before:absolute before:bottom-[1.5em] before:w-full before:h-[2px] before:bg-white"
                : ""
            }`}
            href="/ocr"
          >
            Picture
          </Link>
        </li>
        <li className="relative font-bold">
          <Link
            className={`${
              router.pathname === "/"
                ? "before:content-[''] before:absolute before:bottom-[1.5em] before:w-full before:h-[2px] before:bg-white"
                : ""
            }`}
            href="/"
          >
            Translation
          </Link>
        </li>
        <li className="relative font-bold">
          <Link
            className={`${
              router.pathname === "/dictionary"
                ? "before:content-[''] before:absolute before:bottom-[1.5em] before:w-full before:h-[2px] before:bg-white"
                : ""
            }`}
            href="/dictionary"
          >
            Dictionary
          </Link>
        </li>
        <li className="relative font-bold">
          <Link
            className={`${
              router.pathname === "/about"
                ? "before:content-[''] before:absolute before:bottom-[1.5em] before:w-full before:h-[2px] before:bg-white"
                : ""
            }`}
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavbar;
