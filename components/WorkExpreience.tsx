import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import Image from "next/image";
import ifs from "../public/ifs.svg";
import disc from "../public/disc.png";
import Link from "next/link";

const experience = [
  {
    title: "Front End Developer / InfoSlips",
    date: "Aug 2022 ",
    para: "Experienced Front End Developer specializing in correspondence and communication at InfoSlips. Skilled in building and maintaining web applications using React, Angular, and modern frameworks. Proficient in ensuring mobile responsiveness, leveraging UI libraries like Bootstrap, and collaborating with design teams. Expertise in bug fixes, code reviews, NPM package utilization, CMS integration, and version control with Git.",
    tools: [
      "React",
      "Angular",
      "Bootstrap",
      "Git",
      "NPM",
      "CSS",
      "HTML",
      "JavaScript",
      "TypeScript",
      "SCSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Business Development Consultant / Discovery Limited",
    date: "Sep 2019 ",
    para: "Former Business Development Consultant at Discovery Limited, bringing valuable skills to the role of Front End Developer. Developed project plans and strategies to drive sales and identify business opportunities. Collaborated with business analytics to analyze data and address growth areas. Established strong relationships with financial advisors, enhancing communication and interpersonal skills. Proficient in understanding user needs, facilitating training sessions, and effectively communicating complex information.",
    tools: [],
  },
];

const container = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.075,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const item2 = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const WorkExperience = ({ scrollYProgress }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="pt-28 mt-20"
      id="exp"
    >
      <motion.h2
        variants={item2}
        className={`font-bold  mb-2 text-xl flex items-center tracking-widest transition-all  ease-in-out  ${
          scrollYProgress.current > 0.59 && scrollYProgress.current < 0.96
            ? " text-white"
            : " text-neutral-700"
        }`}
      >
        <motion.div
          className={`h-[1px] ${
            scrollYProgress.current > 0.59 && scrollYProgress.current < 0.96
              ? "w-10 bg-white"
              : "w-0 bg-neutral-700"
          }  mr-3 transiton-all ease-in-out duration-300`}
        />
        EXPERIENCE
      </motion.h2>
      {experience.map((exp, i) => (
        <motion.div
          variants={item2}
          key={exp.title}
          className="flex text-neutral-400/75 text-sm mt-12  hover:border-2-white  rounded-md transition-all ease-in-out mb-12"
        >
          <div className="w-1/4">
            <div className="flex items-center">
              <motion.div
                className={`h-[1px] ${
                  scrollYProgress.current > 0.59 &&
                  scrollYProgress.current < 0.96
                    ? "w-5 bg-white"
                    : "w-0 bg-neutral-700"
                }  mr-3 transiton-all ease-in-out duration-300`}
              />
              <p className="text-sm whitespace-nowrap">{exp.date}</p>
            </div>
          </div>
          <div className="w-3/4 pl-12">
            <div className="flex items-center">
              <Link
                href={
                  i === 0
                    ? "https://www.infoslips.com/"
                    : "https://www.discovery.co.za/portal/"
                }
                target="_blank"
              >
                <Image
                  className={`${
                    i === 0 ? "ifs mr-2" : "mr-8"
                  } mb-2 cursor-pointer hover:scale-125 transition-all ease-in-out`}
                  src={i === 0 ? ifs : disc}
                  width={i === 0 ? 40 : 30}
                  height={i === 0 ? 40 : 30}
                  alt="ifs"
                />
              </Link>
              <h1 className="text-lg mb-2 font-bold text-white">{exp.title}</h1>
            </div>
            <div className="max-w-md">
              <p className="">{exp.para}</p>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="visible"
              className="flex flex-wrap mt-4"
            >
              {exp.tools.map((tool) => (
                <motion.div
                  variants={item2}
                  className="px-3 py-1 rounded-full bg-neutral-700 mr-1 mb-1"
                  key={tool}
                >
                  {tool}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default WorkExperience;
