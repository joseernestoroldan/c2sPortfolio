"use client";

import React from "react";
import Slider from "react-slick";





function FadeTextCarousel() {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className=" w-full max-w-[600px] ">
      <Slider {...settings}>
        <div className="text-justify indent-6 opacity-80 text-gray-900 dark:text-white mx-auto">
          Greetings! I'm Jose, a seasoned software developer with a passion for
          crafting exceptional digital experiences. With a robust skill set
          spanning a variety of technologies and frameworks, I specialize in
          delivering cutting-edge web solutions that captivate and inspire.
        </div>
        <div className="text-justify indent-6 opacity-70 text-gray-900 dark:text-white">
          My journey into the world of software development began with an
          insatiable curiosity and a drive for innovation. Over the years, I've
          honed my expertise in frontend development, mastering the intricacies
          of JavaScript and its popular libraries and frameworks like ReactJS,
          Angular, and Vue.js. From crafting sleek user interfaces to
          architecting scalable web applications, I excel in bringing ideas to
          life with precision and finesse.
        </div>
        <div className="text-justify indent-6 opacity-70 text-gray-900 dark:text-white">
          {" "}
          But my expertise doesn't end at the frontend. I'm well-versed in
          backend technologies too. Whether it's leveraging the flexibility of
          composable content clouds like Sanity or the efficiency of Prisma ORM,
          I specialize in building robust backend solutions that power seamless
          user experiences. I'm proficient in Node.js for server-side
          development and proficient in managing data with databases such as
          MongoDB, MySQL, and PostgreSQL.
        </div>
        <div className="text-justify indent-6 opacity-70 text-gray-900 dark:text-white">
          {" "}
          In addition to my technical prowess, I bring a collaborative and
          detail-oriented approach to every project. I thrive in fast-paced
          environments, where I can leverage my problem-solving skills and
          adaptability to overcome challenges and deliver results that exceed
          expectations.
        </div>
        <div className="text-justify indent-6 opacity-70 text-gray-900 dark:text-white">
          When I'm not immersed in code, you can find me staying up-to-date with
          the latest trends in technology, experimenting with new tools and
          frameworks, or indulging in outdoor adventures.
        </div>
        <div className="text-justify indent-6 opacity-70 text-gray-900 dark:text-white">
          Whether you're a startup looking to establish your online presence, an
          enterprise seeking to optimize your backend operations, or an
          individual with a bold digital vision, I'm here to help turn your
          ideas into reality. Let's collaborate and create something remarkable
          together!
        </div>
      </Slider>
    </div>
  );
}

export default FadeTextCarousel;
