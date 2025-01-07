import Link from "next/link";

const Menu = () => {
  return (
    <ul className="hidden flex-row justify-between items-center w-[400px] md:flex">
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
