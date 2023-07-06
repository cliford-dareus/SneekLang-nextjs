import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="h-[50px] p-4">
      <div className="">
        <Link className="text-white text-2xl" href="/">
          SNEEKLang
        </Link>

        <ul className="hidden ">
          <li>
            <Link href="">Translate</Link>
          </li>
          <li>
            <Link href="">Dictionary</Link>
          </li>
          <li>
            <Link href="">About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
