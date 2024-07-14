import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { BackgroundCircles } from "@/components/index";
import heroImg from "public/extraImages/heroImage2.jpg"

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey, Anshul Kahar here.",
      "I am full-stack web developer.",
      "I build things for the web.",
      "I learn new things everyday.",
    ],
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 50,
    deleteSpeed: 20,
  });
  return (
    <div className="pt-16 md:pt-28 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        width={100}
        height={100}
        className="relative h-32 w-32 rounded-full mx-auto object-cover"
        src={heroImg}
        alt="anshul kahar profile image"
        priority={true}
        loading="eager"
      />
      {/* <img
        src="/extraImages/heroImage2.jpg"
        className="h-32 w-32 rounded-full object-cover"
        alt=""
        loading="eager"
      /> */}


      <div className="z-20">
        <h2 className="text-sm text-gray-800 dark:text-gray-400 uppercase tracking-[8px] md:tracking-[15px] pb-2 font-outfit">
          Anshul Kahar
        </h2>
        <span className="text-blue-500 font-semibold bg-white py-1 px-4 border border-gray-400 rounded-full hidden lg:block">
            Full stack developer, I love building in NextJS and ReactJS
          </span>

        <h1 className="pt-2 text-3xl md:text-4xl lg:text-6xl font-semibold px-16 text-black dark:text-gray-200">
          <span className="mr-3 font-outfit text-black dark:text-gray-200">
            {text}
          </span>
          <Cursor cursorBlinking={false} />
        </h1>

        <div className="pt-4 lg:pt-4 font-outfit px-4 md:px-0">
          <Link href="#about">
            <button className="heroButton">about</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton">projects</button>
          </Link>
          <Link href={"#blogs"}>
            <button className="heroButton">blogs</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
