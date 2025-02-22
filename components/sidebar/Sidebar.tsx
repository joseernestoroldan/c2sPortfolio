"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdBackspace } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  if (open === false) {
    return (
      <GiHamburgerMenu
        onClick={() => setOpen(true)}
        className="text-white text-3xl"
      />
    );
  }
  return (
    <div className="bg-gray-900 bg-opacity-90 top-0 right-0 left-0 h-screen z-20 absolute flex flex-col items-center pt-24 space-y-8">
      <Link href={"/"}>
        <div
          onClick={() => setOpen(false)}
          className="text-white text-nowrap w-min text-center capitalize text-xl font-semibold"
        >
          Home
        </div>
      </Link>
      <Link href={"/about"}>
        <div
          onClick={() => setOpen(false)}
          className="text-white text-nowrap w-min text-center capitalize text-xl font-semibold"
        >
          About Me
        </div>
      </Link>

      <Link href={"/works"}>
        <div
          onClick={() => setOpen(false)}
          className="text-white text-nowrap w-min text-center capitalize text-xl font-semibold"
        >
          Works
        </div>
      </Link>

      <Link href={"/contact"}>
        <div
          onClick={() => setOpen(false)}
          className="text-white text-nowrap w-min text-center capitalize text-xl font-semibold"
        >
          Contact
        </div>
      </Link>

      <Link href={"/learn"}>
        <div
          onClick={() => setOpen(false)}
          className="text-white text-nowrap w-min text-center capitalize text-xl font-semibold"
        >
          Learn
        </div>
      </Link>

      <IoMdBackspace
        onClick={() => setOpen(false)}
        className="text-4xl text-white absolute top-0 right-10"
      />
    </div>
  );
};

export default Sidebar;
