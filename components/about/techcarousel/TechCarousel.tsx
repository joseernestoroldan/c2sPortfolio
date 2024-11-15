"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "../techcarousel/slick.css"; // Import Slick CSS for basic styles
import "../techcarousel/slick-theme.css";
import { FaReact as ReactIcon } from "react-icons/fa";
import { RiNextjsFill as NextIcon } from "react-icons/ri";
import { IoLogoJavascript as JsIcon } from "react-icons/io5";
import { FaAngular as AngularIcon } from "react-icons/fa";
import { IoLogoVercel as VercelIcon } from "react-icons/io5";
import { FaVuejs as VueIcon } from "react-icons/fa";
import { SiSanity as SanityIcon } from "react-icons/si";
import { SiContentful as ContentfulIcon } from "react-icons/si";
import { SiMongodb as MongoIcon } from "react-icons/si";
import { GrMysql as MySQLIcon } from "react-icons/gr";
import { SiPostgresql as PostgreSqlIcon } from "react-icons/si";
import { SiPrisma as PrismaIcon } from "react-icons/si";
import { SiNetlify as NetlifyIcon } from "react-icons/si";
import { FaWordpress as WordpressIcon } from "react-icons/fa";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaFigma as FigmaIcon } from "react-icons/fa";
import { SiAdobexd as AdobeXDIcon } from "react-icons/si";

function TechCarousel() {
  const settings = {
    className: "center",
    arrows: false,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="slider-container w-full max-w-[300px] sm:max-w-3xl mx-auto">
      <Slider {...settings}>
        <div className="w-full">
          <div className="flex flex-col justify-center items-center w-full">
            <ReactIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">ReactJS</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <NextIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">NextJS</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <JsIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">Javascript</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <AngularIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">Angular</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <VercelIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">Vercel</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <VueIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">VueJS</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <SanityIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">Sanity.io</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <ContentfulIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">ContentFul</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <MongoIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">MongoDB</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <MySQLIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">MySQL</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <PostgreSqlIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">PostgreSQL</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <PrismaIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">Prisma.io</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <NetlifyIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">Netlify</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <WordpressIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">Wordpress</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <GithubIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">Github</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <FigmaIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">Figma</h3>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center w-full">
            <AdobeXDIcon className=" text-3xl md:text-6xl font-bold text-gray-500 dark:text-gray-300" />
            <h3 className="text-center text-xs sm:text-base">AdobeXD</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default TechCarousel;
