import Link from "next/link";
import React from "react";

type Props = {};

function MobileNavbar({}: Props) {
  return (
    <div className="h-[80px] w-full p-4">
      <ul className="h-full flex gap-4 items-center justify-between">
        <li className="">
          <Link href="/ocr">Picture</Link>
        </li>
        <li className="">
          <Link href="/">Translation</Link>
        </li>
        <li>
          <Link href="/dictionary">Dictionary</Link>
        </li>
        <li>
          <Link href="">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavbar;
