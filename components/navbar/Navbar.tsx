import Image from "next/image";
import React from "react";
import Menu from "../menu/Menu";
import { IoLanguageSharp as LanguagesIcon } from "react-icons/io5";
import Social from "../social/Social";

const Navbar = () => {
  return (
    <div className="w-full max-w-5xl mx-auto fixed top-0 left-1/2 -translate-x-1/2 z-30">
      <div className="w-full bg-transparent dark:bg-black"><Social/></div>
      <div className="w-full bg-gradient-to-b from-gray-700 to-transparent py-4  flex flex-row justify-between items-center rounded-[5px]">
        <div className="w-[80px] h-[20px] relative text-white">
          <Image src={"/LogoColor.svg"} alt="code2steps logo" fill className="text-white"/>
        </div>
        <div><Menu/></div>
        <div className="px-4"><LanguagesIcon className="text-xl"/></div>
      </div>
    </div>
  );
};

export default Navbar;