"use client";
import { useEffect, useRef, useState } from "react";
import DetailsAboutMe from "./DetailsAboutMe";

const MoreAboutMe = () => {
  const [toggle, setToggle] = useState(false);
  const top = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toggle && top.current) {
      top.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [toggle]);

  return (
    <div  ref={top}  className="flex flex-col justify-start rounded-[5px] items-center space-y-12 w-full max-w-[760px] lg:max-w-5xl mx-auto text-black dark:text-white over">
      {!toggle && (
        <button
          className="border border-gray-800 dark:border-white border-opacity-20 opacity-70 p-4 rounded-full"
          onClick={() => setToggle(!toggle)}
        >
          More About me
        </button>
      )}

      {toggle && <DetailsAboutMe />}

      {toggle && (
        <button
       
          className="border border-gray-800 dark:border-white border-opacity-20 opacity-70 py-4 px-8 rounded-full"
          onClick={() => setToggle(!toggle)}
        >
          Colapse
        </button>
      )}
      
    </div>
  );
};

export default MoreAboutMe;
