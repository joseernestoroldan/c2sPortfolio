import MoreAboutMe from "@/components/about/MoreAboutMe";
import Container from "@/components/container/Container";
import Image from "next/image";
import React from "react";
import TechCarousel from "@/components/about/techcarousel/TechCarousel";
import { EmblaCarousel } from "@/components/about/emblacarousel/EmblaCarousel";

const AboutPage = () => {
  return (
    <div className="w-full h-auto">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-10 w-full pt-24">
          <div className="relative w-[200px] h-[200px] sm:h-[250px] sm:w-[250px] rounded-full overflow-hidden bg-gradient-to-b from-gray-300 via-gray-200 to-gray-50 my-10 mix-blend-darken dark:mix-blend-lighten">
            <Image
              src={"/cv-sin fondo.png"}
              alt="person"
              fill
              className="object-cover grayscale brightness-90"
            />
          </div>
          <h2 className="opacity-70 text-2xl md:text-3xl font-medium w-full text-center ">
            Jose Ernesto Roldan
          </h2>
          <h1 className="opacity-70 text-4xl md:text-6xl font-semibold w-full text-center ">
            Web Developer
          </h1>
          <h3 className="opacity-70 text-xl font-medium w-full text-center ">
            I have a passion for software. I enjoy creating tools that make life
            easier for people.
          </h3>
          <TechCarousel />
           <MoreAboutMe />
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
