import Image from "next/image";
import Menu from "../menu/Menu";
import Social from "../social/Social";
import Sidebar from "../sidebar/Sidebar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-[#D6DBDC] dark:bg-gray-900 fixed top-0 left-1/2 -translate-x-1/2 z-30">
      <div className="w-full max-w-4xl mx-auto bg-[#D6DBDC] dark:bg-gray-900">
        <div className="w-full bg-[#D6DBDC] dark:bg-gray-900 pr-4">
          <Social />
        </div>
        <div className="w-full bg-[#D6DBDC] dark:bg-gray-900 py-4  flex flex-row justify-between items-center">
          <Link href="/">
          <div className="w-[110px] h-[30px] relative text-white ">
            <Image
              src={"/LogoColor.svg"}
              alt="code2steps logo"
              fill
              className="dark:invert-0 invert"
            />
          </div>
          </Link>
          <div className="hidden md:inline-block">
            <Menu />
          </div>
          <div className="inline-block md:hidden pr-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
