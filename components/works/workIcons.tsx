import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { WorkIconsProps } from "@/types";

const WorkIcons = ({ icon }: WorkIconsProps) => {
  switch (icon) {
    case "next js":
      return <RiNextjsFill className="opacity-80 text-xl mx-1" />;
    case "javascript":
      return <IoLogoJavascript className="opacity-80 text-xl mx-1" />;
    default:
      return null;
  }
};

export default WorkIcons;
