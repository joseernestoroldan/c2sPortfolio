"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathName = usePathname();
  return (
    <ul className="hidden flex-row justify-between items-center w-[400px] md:flex">
      <Link href={"/"}>
        <li className={`${pathName === "/" ? "underline underline-offset-4": ""}`}>Home</li>
      </Link>
      <Link href={"/about"}>
        <li className={`${pathName === "/about" ? "underline underline-offset-4": ""}`}>About Me</li>
      </Link>
      <Link href={"/works"}>
        <li className={`${pathName === "/works" ? "underline underline-offset-4": ""}`}>Works</li>
      </Link>
      <Link href={"/contact"}>
        <li className={`${pathName === "/contact" ? "underline underline-offset-4": ""}`}>Contact</li>
      </Link>
      <Link href={"/learn"}>
        <li className={`${pathName === "/learn" ? "underline underline-offset-4": ""}`}>Learn</li>
      </Link>
    </ul>
  );
};

export default Menu;
