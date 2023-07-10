import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="h-[50px] p-4 ">
      <div className="max-w-[1100px] mx-auto flex justify-between">
        <Link className="text-white text-2xl" href="/">
          SNEEKLang
        </Link>

        <ul className="hidden md:flex gap-4">
          <li>
            <Link href="/">Translate</Link>
          </li>
          <li>
            <Link href="/dictionary">Dictionary</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
