import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import Image from "next/image";
import ifs from "../public/ifs.svg";
import disc from "../public/disc.png";
import Link from "next/link";

const experience = [
  {
    title: "Front End Developer · InfoSlips",
    date: "2022 — PRESENT",
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
    title: "Business Development Consultant · Discovery Limited",
    date: "2019 — 2022",
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
    <motion.div className=" pt-16 md:pt-28 mt-20 " id="exp">
      <motion.h2
        className={`font-bold  mb-10 text-md lg:text-lg md:text-lg text-white flex items-center tracking-widest`}
      >
        EXPERIENCE
      </motion.h2>
      {experience.map((exp, i) => (
        <motion.div
          key={exp.title}
          className="flex flex-col md:flex-row text-gray text-sm  md:bg-[#081e1e] md:p-5 hover:border-2-white  rounded-md transition-all ease-in-out mb-6"
        >
          <div className=" w-full md:w-1/4">
            <div className="flex items-center">
              <p className="text-xs md:text-sm whitespace-nowrap mt-1 mb-2">
                {exp.date}
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/4 md:pl-6">
            <div className="flex items-center">
              <h1 className="text-lg mb-2  text-white">{exp.title}</h1>
            </div>
            <div className="max-w-md">
              <p className="">{exp.para}</p>
            </div>
            <motion.div className="flex flex-wrap mt-4">
              {exp.tools.map((tool) => (
                <motion.div
                  className="px-3 py-1 rounded-full bg-tertiary text-secondary mr-1 mb-1"
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
