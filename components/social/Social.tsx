import { FaWhatsapp as WhatsAppIcon } from "react-icons/fa";
import { FaInstagram as IgIcon } from "react-icons/fa";
import { FaYoutube as YoutubeIcon } from "react-icons/fa";
import { FaGithub as GithubIcon } from "react-icons/fa";
import Link from "next/link";

const Social = () => {
  return (
    <div className="w-full flex flex-row justify-end items-center space-x-4 py-4">
      <Link href="https://wa.me/584245042502" target="_blank">
        <WhatsAppIcon className="text-xl opacity-75" />
      </Link>

      <Link href={"https://www.instagram.com/code2steps/"} target="_blank">
        <IgIcon className="text-xl opacity-75" />{" "}
      </Link>
      <YoutubeIcon className="text-xl opacity-75" />
      <Link href={"https://github.com/joseernestoroldan"} target="_blank">
        <GithubIcon className="text-xl opacity-75" />
      </Link>
    </div>
  );
};

export default Social;
