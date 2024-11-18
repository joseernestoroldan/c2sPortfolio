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
  console.log("externalLink:", externalLink);
  console.log("vercel:", vercel);
  console.log("netlify:", netlify);
  console.log("git:", git);

  return (
    // <div className="flex flex-row w-[70%] h-[300px] border border-gray-600 border-opacity-35 p-8 group mx-auto rounded-2xl relative hover:scale-105 hover:bg-gray-300 hover:dark:bg-slate-700 hover:dark:bg-opacity-30">
    <div className="flex flex-col md:flex-row w-[90%] lg:w-[70%] h-auto space-y-4 md:space-y-0 p-8 group mx-auto rounded-[5px] relative hover:scale-105 bg-gradient-to-br dark:from-black dark:via-gray-700 dark:to-black from-transparent via-gray-400 to-transparent">
      <div className="w-full md:w-1/2  flex flex-col items-center justify-start space-y-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex flex-col items-center justify-center text-center text-lg sm:text-2xl font-semibold opacity-70">
            {title}
          </h1>
          <div className="flex flex-row justify-center items-center opacity-70">
            <p className="text-base">Implemented in </p>
            <WorkIcons icon={language} />
          </div>
        </div>

        <p className="indent-6 text-base text-justify opacity-70 transition-opacity duration-500">
          {description}
        </p>
        <Link
          className="text-cyan-700 dark:text-cyan-500 opacity-80 font-bold underline"
          href={"#"}
        >
          Read More
        </Link>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-start items-center -space-y-2 ">
        <div className=" relative w-[240px] h-[160px] md:w-[280px] md:h-[200px] p-4 group-hover:scale-50 origin-top-right transition-transform duration-500 rounded-[5px] overflow-hidden">
          <Image
            src={image}
            fill
            alt="project image"
            className=" object-cover"
          />
        </div>
        <div className="absolute hidden md:flex flex-row justify-end items-center top-[60%] opacity-0 group-hover:opacity-70 transition-opacity duration-500 space-x-4">
          <p className="font-bold">Links:</p>

          {externalLink && (
            <Link href={externalLink}>
              <ExternalLinkIcon />
            </Link>
          )}

          {vercel && (
            <Link href={vercel}>
              <VercelIcon />
            </Link>
          )}

          {netlify && (
            <Link href={netlify}>
              <NetlifyIcon />
            </Link>
          )}

          {git && (
            <Link href={git}>
              <GitHubIcon />
            </Link>
          )}
        </div>

        <div className="pt-8 md:hidden flex flex-row justify-end items-center space-x-4">
          <p className="font-bold">Links:</p>
          {externalLink && (
            <Link href={externalLink}>
              <ExternalLinkIcon />
            </Link>
          )}

          {vercel && (
            <Link href={vercel}>
              <VercelIcon />
            </Link>
          )}

          {netlify && (
            <Link href={netlify}>
              <NetlifyIcon />
            </Link>
          )}

          {git && (
            <Link href={git}>
              <GitHubIcon />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
