import React from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";

const experience = [
  {
    title: "Front End Developer / InfoSlips",
    date: "Aug 2022 - Present",
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
    date: "Sep 2019 – May 2022",
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

const WorkExperience = ({ scrollYProgress }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="pt-72"
    >
      <h2
        className={`font-bold  mb-2 text-xl flex items-center tracking-widest transition-all  ease-in-out  ${
          scrollYProgress.current > 0.67 && scrollYProgress.current < 0.99
            ? " text-white/75"
            : " text-neutral-700"
        }`}
      >
        <motion.div
          className={`h-[1px] ${
            scrollYProgress.current > 0.67 && scrollYProgress.current < 0.99
              ? "w-10 bg-white"
              : "w-0 bg-neutral-700"
          }  mr-3 transiton-all ease-in-out duration-700`}
        />
        EXPERIENCE
      </h2>
      {experience.map((exp) => (
        <motion.div
          variants={item}
          key={exp.title}
          className="flex text-neutral-400/75 text-sm mt-12 hover:shadow-xl  hover:bg-neutral-900/25  rounded-md transition-all ease-in-out mb-12"
        >
          <div className="w-1/4">
            <p>{exp.date}</p>
          </div>
          <div className="w-3/4 pl-12">
            <div>
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
                  variants={item}
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
