import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useIsDesktop from "../hooks/useIsDesktop";

const experience = [
  {
    title: "Front End Developer · InfoSlips",
    date: "2022 — PRESENT",
    para: "Passionate Front End Developer with extensive experience in creating immersive web applications at InfoSlips. Proficient in leveraging key skills such as component-based architecture, hooks, state management with Context API and Redux Toolkit, and performance optimization techniques within the React ecosystem. Skilled in ensuring full responsiveness and a keen eye for design using advanced CSS, SCSS, and Tailwind CSS. Experienced in building and maintaining web applications with React, Angular, and modern frameworks. Hands-on experience with tools like Webpack, Babel, and Git for version control. Strong expertise in bug fixes, code reviews, NPM package utilization, CMS integration, and collaboration with UI/UX design teams.",
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
      "C#",
      "Webpack",
      "Babel",
    ],
  },
  {
    title: "Business Development Consultant · Discovery Limited",
    date: "2019 — 2022",
    para: "Former Business Development Consultant at Discovery Limited, bringing valuable skills to the role. Developed project plans and strategies to drive sales and identify business opportunities. Collaborated with business analytics to analyze data and address growth areas. Established strong relationships with financial advisors, enhancing communication and interpersonal skills. Proficient in understanding user needs, facilitating training sessions, and effectively communicating complex information.",
    tools: [],
  },
];

const WorkExperience = ({ scrollYProgress }) => {
  const isDesktop = useIsDesktop();

  return (
    <motion.div className=" pt-16 md:pt-28 mt-20 " id="exp">
      <motion.h2
        className={`font-bold mb-10 text-md lg:text-lg md:text-lg text-white flex items-center tracking-widest`}
      >
        EXPERIENCE{" "}
        <span className="text-2xl md:text-4xl ml-2 md:ml-4 mb-2">💼</span>
      </motion.h2>
      {experience.map((exp, i) => (
        <motion.div
          key={exp.title}
          className="flex flex-col md:flex-row text-gray text-sm md:bg-[#081e1e] md:p-5 hover:border-2-white rounded-md transition-all ease-in-out mb-6"
        >
          <div className="w-full md:w-1/4">
            <div className="flex items-center">
              <p className="text-xs md:text-sm whitespace-nowrap mt-1 mb-2">
                {exp.date}
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/4 md:pl-6">
            <div className="flex items-center">
              <h1 className="text-lg mb-2 text-white">{exp.title}</h1>
            </div>
            <div className="max-w-md">
              <p className="">{exp.para}</p>
            </div>
            <motion.div className="flex flex-wrap mt-4">
              {exp.tools.map((tool) => (
                <motion.div
                  className="px-3 py-1 rounded-full bg-tertiary text-secondary mr-1 mb-1"
                  key={tool}
                  whileHover={isDesktop ? { scale: 1.1 } : {}}
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
