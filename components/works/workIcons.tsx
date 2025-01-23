import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { WorkIconsProps } from "@/types";

const WorkIcons = ({ icon }: WorkIconsProps) => {
  switch (icon) {
    case "next js":
      return <RiNextjsFill className="opacity-80 text-xl mx-1" />;
    case "javascript":
      return <IoLogoJavascript className="opacity-80 text-xl mx-1" />;
    case "html":
      return <FaHtml5 className="opacity-80 text-xl mx-1" />;
    case "css":
      return <IoLogoCss3 className="opacity-80 text-xl mx-1" />;
    default:
      return null;
  }
};

export default WorkIcons;
