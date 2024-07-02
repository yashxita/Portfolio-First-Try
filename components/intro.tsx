"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1522303225746-3037391fba31?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4x1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🤡
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-12 px-4 text-2xl font-bold !leading-[1.5] text-[#ffffff] text-center mt-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi </span> I'm Yashita,{" "}
        <span className="font-bold italic">This is my first take at,</span>{" "}
        <span className="font-bold">making my portfolio website.</span>
        <span className="font-bold">{" "}I'm currently doing my Btech in CSE from </span>
        <span className="font-bold italic">VIT Vellore.</span>
        <span >{" "}I hope you enjoy your time on this website.</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
            focus:scale-110 hover:scale-110 hover:bg-gray-950 active-scale-105 transition"
        >
          Contact Me Here <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        <a className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none
            focus:scale-110 hover:scale-110 active-scale-105 transition cursor-pointer border border-black/10" href="/CV.pdf" download>
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"></HiDownload>
        </a>

        <a className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active-scale-105 transition cursor-pointer border border-black/10" 
        href="https://linkedin.com" target="_blank">
          <BsLinkedin></BsLinkedin>
        </a>
        <a className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active-scale-105 transition cursor-pointer border border-black/10"
        href="https://github.com" target="_blank">
          <FaGithubSquare></FaGithubSquare>
        </a>
      </motion.div>
    </section>
  );
}
