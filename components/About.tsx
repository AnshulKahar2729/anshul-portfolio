import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import profilePic from "public/extraImages/profilePic.jpeg";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-16 lg:pt-28"
    >
      <h3 className="ml-6 absolute top-[12%] md:top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
        About
      </h3>

      <Image
        width={350}
        height={450}
        src={profilePic}
        className="-mb-28 md:mb-0 md:ml-16 flex-shrink-0 w-40 h-40 rounded-xl object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[350px] xl:h-[450px]"
        alt="anshul kahar profile image"
        priority={false}
        placeholder="blur"
      />

      <div className="px-0 md:px-8 lg:px-20 text-black dark:text-white">
        <h4 className="text-3xl md:text-4xl font-semibold mt-8 lg:mt-2 font-outfit lg:ml-6 md:ml-6">
          $: /whoami
        </h4>

        <div className="bg-blue-300/20 dark:bg-blue-300/10 py-[6px] md:ml-6 inline-flex items-center rounded-2xl gap-1 mt-2 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-point-filled animate-pulse ml-3 h-4 w-4 pt-[2px]"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
              strokeWidth="0"
              fill="currentColor"
            ></path>
          </svg>
          <p className="font-outfit mr-5 text-[12px] font-light">
            open to opportunities
          </p>
        </div>

        <p className="text-sm md:text-base lg:text-lg font-light md:px-7 pt-3 font-outfit">
          Welcome to my digital abode! <br />
          <br /> I am Anshul,{" "}
          <span className="text-blue-500 font-semibold">
            a full stack developer
          </span>{" "}
          with a passion for building scalable and user-friendly web
          applications. I love to create elegant solutions to complex problems.
          <br />
          <span>
            I am proficient in building web-apps using{" "}
            <span className="text-blue-500 font-semibold">
              NextJS, tRPC, React, Prisma, MongoDB, PostgreSQL, Node. js, Express JS.{" "}
            </span>
          </span>
        </p>
      </div>
    </motion.div>
  );
}
