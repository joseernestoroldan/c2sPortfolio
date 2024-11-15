import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <ul className="flex flex-row justify-between items-center w-[400px]">
      <Link href={"/"}>
        <li>Home</li>
      </Link>
      <Link href={"/about"}>
        <li>About Me</li>
      </Link>
      <Link href={"/works"}>
        <li>Works</li>
      </Link>
      <Link href={"/contact"}>
        <li>Contact</li>
      </Link>
      <Link href={"/learn"}>
        <li>Learn</li>
      </Link>
    </ul>
  );
};

export default Menu;
