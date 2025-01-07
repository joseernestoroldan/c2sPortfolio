import React from "react";
import WorkIcons from "./workIcons";
import Image from "next/image";
import { FaExternalLinkSquareAlt as ExternalLinkIcon } from "react-icons/fa";
import { IoLogoVercel as VercelIcon } from "react-icons/io5";
import { SiNetlify as NetlifyIcon } from "react-icons/si";
import { FaGithub as GitHubIcon } from "react-icons/fa";
import Link from "next/link";
import { workCardType } from "@/types";

const WorkCard = ({
  title,
  language,
  description,
  image,
  externalLink,
  vercel,
  netlify,
  git,
}: workCardType) => {
  return (
    <div className="flex flex-col w-full max-w-[600px] p-8 border-dotted border-gray-500 border h-auto mx-auto relative rounded-[0px] overflow-hidden">
      <div className="w-full aspect-video dark:bg-black gray-300 relative ">
        <Image src={image} fill alt="project image" className=" object-cover" />
      </div>

      <div className="pt-8 flex flex-col justify-start items-start">
        <h1 className="text-xl font-bold text-center">{title}</h1>
        <div className="flex flex-row justify-center items-center">
          <p className="text-lg font-medium">Implemented in </p>
          <WorkIcons icon={language} />
        </div>
        <p className="text-base font-normal my-8 indent-4 text-justify">
          {description}
        </p>
        <div className="w-full flex flex-col sm:flex-row justify-start sm:justify-between items-center">
          <Link href={"#"} className="font-bold underline">
            Read More
          </Link>
          <div className="flex flex-row justify-start items-start space-x-4">
            <p className="font-bold">Links:</p>

            {externalLink && (
              <Link href={externalLink} target="_blank">
                <ExternalLinkIcon />
              </Link>
            )}

            {vercel && (
              <Link href={vercel} target="_blank">
                <VercelIcon />
              </Link>
            )}

            {netlify && (
              <Link href={netlify} target="_blank">
                <NetlifyIcon />
              </Link>
            )}

            {git && (
              <Link href={git} target="_blank">
                <GitHubIcon />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
