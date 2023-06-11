import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, motionValue } from "framer-motion";
import { faLink, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import erich from "../public/erich.jpg";

const Bio = () => {
  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress.current);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const h1Variant = {
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        delay: 0.4,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
      },
    },
  };
  const h6Variant = {
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        delay: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
      },
    },
  };
  const divVariant = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        delay: 0.6,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
      },
    },
  };

  const liVariant1 = {
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        delay: 0.6,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6,
      },
    },
  };
  const liVariant2 = {
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        delay: 0.7,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.7,
      },
    },
  };
  const liVariant3 = {
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        delay: 0.8,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8,
      },
    },
  };
  const imgVariant = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        delay: 0.9,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.9,
      },
    },
  };
  const imgVariant1 = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        delay: 1.0,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.0,
      },
    },
  };
  const imgVariant2 = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        delay: 1.1,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.1,
      },
    },
  };
  const imgVariant3 = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        delay: 1.2,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.2,
      },
    },
  };

  type BioParagraph = {
    line?: string;
  };

  const bioParagraphs: BioParagraph[] = [
    {
      line: "Im a passionate front-end developer with expertise in JavaScript,TypeScript, and React.",
    },
    {
      line: "I possess a strong desire to learn and continually stay updated on the latest technologies, making me capable of delivering high-quality web applications using CSS, HTML, SCSS, Tailwind CSS, Framer Motion, SQL, npm, Material UI, and Node.js. I have a talent for creating responsive and performant web experiences, always keeping the user in mind. Along with my technical skills, I bring exceptional problem-solving and critical-thinking abilities, allowing me to tackle complex projects.",
    },
  ];

  const navLinks = [
    { name: "PROJECTS", href: "/projects" },
    { name: "TECH STACK", href: "/about" },
    { name: "EXPERIENCE", href: "/contact" },
  ];

  return (
    <div className="flex-col h-full justify-between  lg:fixed  lg:max-w-sm xl:max-w-md">
      <div>
        <div className="w-full  ">
          <motion.h1
            variants={h1Variant}
            initial="hidden"
            animate="visible"
            className="text-6xl text-[#e2c481] font-bold"
          >
            Erich Vorster
          </motion.h1>
          <motion.h6
            className="text-2xl my-6 text-white font-bold"
            variants={h6Variant}
            initial="hidden"
            animate="visible"
          >
            Front End Developer
          </motion.h6>
          <motion.div
            className="text-grey-400"
            variants={divVariant}
            initial="hidden"
            animate="visible"
          >
            {bioParagraphs.map((paragraph, i) => (
              <p className="text-sm pb-4 leading-6 text-neutral-500" key={i}>
                {paragraph.line}
              </p>
            ))}
          </motion.div>
        </div>
        <div className="relative">
          <ul className="mt-8 ">
            <motion.li
              className="mt-5"
              variants={liVariant1}
              initial="hidden"
              animate="visible"
            >
              <Link href={"#projects"} className="flex items-center group">
                <motion.div
                  className={`h-[1px] ${
                    scrollYProgress < 0.23
                      ? "w-40 bg-white"
                      : "w-20 bg-neutral-700"
                  }  mr-3 transiton-all ease-in-out duration-700 group-hover:w-40 group-hover:bg-white`}
                />
                <span
                  className={`text-white text-xs tracking-wider ${
                    scrollYProgress < 0.23
                      ? "w-40 text-white"
                      : "w-20 text-neutral-700 group-hover:text-white"
                  }  `}
                >
                  {navLinks[0].name}
                </span>
              </Link>
            </motion.li>
            <motion.li
              className="mt-5"
              variants={liVariant2}
              initial="hidden"
              animate="visible"
            >
              <Link href={"#tech"} className="flex items-center group">
                <motion.div
                  className={`h-[1px] ${
                    scrollYProgress.current > 0.23 &&
                    scrollYProgress.current < 0.67
                      ? "w-40 bg-white"
                      : "w-20 bg-neutral-700"
                  }  mr-3 transiton-all ease-in-out duration-700 group-hover:w-40 group-hover:bg-white`}
                />
                <span
                  className={`text-white text-xs tracking-wider ${
                    scrollYProgress.current > 0.23 &&
                    scrollYProgress.current < 0.67
                      ? "w-40 text-white"
                      : "w-20 text-neutral-700 group-hover:text-white"
                  }  `}
                >
                  {navLinks[1].name}
                </span>
              </Link>
            </motion.li>
            <motion.li
              className="mt-5"
              variants={liVariant3}
              initial="hidden"
              animate="visible"
            >
              <Link href={"#xp"} className="flex items-center group">
                <motion.div
                  className={`h-[1px] ${
                    scrollYProgress.current > 0.67 &&
                    scrollYProgress.current < 0.99
                      ? "w-40 bg-white"
                      : "w-20 bg-neutral-700"
                  }  mr-3 transiton-all ease-in-out duration-700 group-hover:w-40 group-hover:bg-white `}
                />
                <span
                  className={`text-white text-xs tracking-wider ${
                    scrollYProgress.current > 0.67 &&
                    scrollYProgress.current < 0.99
                      ? "w-40 text-white"
                      : "w-20 text-neutral-700 group-hover:text-white"
                  }  `}
                >
                  {navLinks[2].name}
                </span>
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
      <div className="mt-24">
        <div className="flex justify-between items-center max-w-xs">
          <motion.div variants={imgVariant} initial="hidden" animate="visible">
            <motion.div
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              className="cursor-pointer"
            >
              <div
                className={`rounded-full ${
                  scrollYProgress.current > 0.95
                    ? "bg-transparent opacity-100"
                    : "bg-neutral-700/75 opacity-30"
                }  transition-all ease-in-out duration-300 hover:opacity-100`}
              >
                <Image
                  src={erich}
                  height={60}
                  width={60}
                  alt="erich"
                  className="rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
          <motion.div variants={imgVariant1} initial="hidden" animate="visible">
            <FontAwesomeIcon
              icon={faGithub}
              className={`h-7 w-7  ${
                scrollYProgress.current > 0.96
                  ? "text-white"
                  : "text-neutral-700"
              } transition-all ease-in-out  duration-300 hover:scale-125 cursor-pointer hover:text-white`}
            />
          </motion.div>
          <motion.div variants={imgVariant2} initial="hidden" animate="visible">
            <FontAwesomeIcon
              icon={faLinkedin}
              className={`h-7 w-7  ${
                scrollYProgress.current > 0.96
                  ? "text-white"
                  : "text-neutral-700"
              } transition-all ease-in-out  duration-300 hover:scale-125 cursor-pointer hover:text-white`}
            />
          </motion.div>
          <motion.div variants={imgVariant3} initial="hidden" animate="visible">
            <FontAwesomeIcon
              icon={faMailBulk}
              className={`h-7 w-7  ${
                scrollYProgress.current > 0.96
                  ? "text-white"
                  : "text-neutral-700"
              } transition-all ease-in-out  duration-300 hover:scale-125 cursor-pointer hover:text-white`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
