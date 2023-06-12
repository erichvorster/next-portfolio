import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, motionValue } from "framer-motion";
import {
  faLink,
  faMailBulk,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import erich from "../public/erich.jpg";

const Bio = () => {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  // Update the scroll progress whenever it changes
  scrollYProgress.onChange((latest) => {
    setScrollProgress(latest);
  });
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

  const circleRef = useRef<HTMLDivElement>(null);

  const degreeToRadian = (angle: number) => {
    return angle * (Math.PI / 180);
  };

  const radius = 60;
  const diameter = radius * 2;

  useEffect(() => {
    //Ref could be null here
    const circle = circleRef.current;
    if (circle != null) {
      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;
    }

    const text = circle!.dataset.text;
    const characters = text!.split("");

    const deltaAngle = 360 / characters.length;
    const characterOffsetAngle = 8;
    let currentAngle = -90;

    characters.forEach((character, index) => {
      const span = document.createElement("span");
      span.innerText = character;
      const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
      const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

      const transform = `translate(${xPos}px, ${yPos}px)`;
      const rotate = `rotate(${index * deltaAngle + characterOffsetAngle}deg)`;
      span.style.transform = `${transform} ${rotate}`;

      currentAngle += deltaAngle;
      circle!.appendChild(span);
    });
  }, [diameter]);

  const bioParagraphs: BioParagraph[] = [
    {
      line: " ",
    },
    {
      line: "I possess a strong desire to learn and continually stay updated on the latest technologies, making me capable of delivering high-quality web applications using ",
    },
  ];

  const navLinks = [
    { name: "PROJECTS", href: "/projects" },
    { name: "TECH STACK", href: "/about" },
    { name: "EXPERIENCE", href: "/contact" },
  ];

  return (
    <div className="flex flex-col justify-between lg:h-screen  lg:fixed  lg:max-w-sm xl:max-w-md py-24 ">
      <div>
        <div className="w-full  ">
          <motion.h1
            variants={h1Variant}
            initial="hidden"
            animate="visible"
            className="text-6xl font-bold text-white"
          >
            Erich Vorster
          </motion.h1>
          <motion.h6
            className="text-2xl my-3 text-white font-bold"
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
            <p className="text-sm pb-4 leading-6 text-neutral-500 max-w-xs">
              I am a front end developer passionate about building beautiful
              user interfaces.
            </p>
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
                <small
                  className={`text-white text-xs tracking-wider ${
                    scrollYProgress.current < 0.15
                      ? " text-white mr-2"
                      : " text-neutral-700 group-hover:text-white mr-2"
                  }  `}
                >
                  01
                </small>
                <motion.div
                  className={`h-[1px] ${
                    scrollYProgress.current < 0.15
                      ? "w-10 bg-white"
                      : "w-5 bg-neutral-700"
                  }  mr-3 transiton-all ease-in-out duration-300 group-hover:w-10 group-hover:bg-white`}
                />
                <span
                  className={`text-white text-xs tracking-wider ${
                    scrollYProgress.current < 0.15
                      ? " text-white"
                      : " text-neutral-700 group-hover:text-white"
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
                <small
                  className={`text-white text-xs tracking-wider ${
                    scrollYProgress.current > 0.15 &&
                    scrollYProgress.current < 0.59
                      ? " text-white mr-2"
                      : " text-neutral-700 group-hover:text-white mr-2"
                  }  `}
                >
                  02
                </small>
                <motion.div
                  className={`h-[1px] ${
                    scrollYProgress.current > 0.15 &&
                    scrollYProgress.current < 0.59
                      ? "w-10 bg-white"
                      : "w-5 bg-neutral-700"
                  }  mr-3 transiton-all ease-in-out duration-300 group-hover:w-10 group-hover:bg-white`}
                />
                <span
                  className={`text-white text-xs tracking-wider ${
                    scrollYProgress.current > 0.15 &&
                    scrollYProgress.current < 0.59
                      ? " text-white"
                      : " text-neutral-700 group-hover:text-white"
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
                <small
                  className={`text-white text-xs tracking-wider ${
                    scrollYProgress.current > 0.59 &&
                    scrollYProgress.current < 0.99
                      ? " text-white mr-2"
                      : " text-neutral-700 group-hover:text-white mr-2"
                  }  `}
                >
                  03
                </small>
                <motion.div
                  className={`h-[1px] ${
                    scrollYProgress.current > 0.59 &&
                    scrollYProgress.current < 0.99
                      ? "w-10 bg-white"
                      : "w-5 bg-neutral-700"
                  }  mr-3 transiton-all ease-in-out duration-300 group-hover:w-10 group-hover:bg-white `}
                />
                <span
                  className={`text-white text-xs tracking-wider ${
                    scrollYProgress.current > 0.59 &&
                    scrollYProgress.current < 0.99
                      ? "w-10 text-white"
                      : "w-5 text-neutral-700 group-hover:text-white"
                  }  `}
                >
                  {navLinks[2].name}
                </span>
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between items-center max-w-xs">
          <Link href="#contact" className="relative">
            <motion.div
              variants={imgVariant}
              initial="hidden"
              animate="visible"
            >
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
                  <div
                    ref={circleRef}
                    id="circle"
                    data-text="CONTACT-CONTACT-CONTACT-"
                    className={`${
                      scrollYProgress.current > 0.95
                        ? "text-neutral-300"
                        : "text-transparent"
                    } transition-all duration-300 ease-in-out hover:text-neutral-300`}
                  ></div>
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
          </Link>
          <motion.div variants={imgVariant1} initial="hidden" animate="visible">
            <FontAwesomeIcon
              icon={faGithub}
              className={`h-7 w-7  ${
                scrollYProgress.current > 0.96
                  ? "text-white"
                  : "text-neutral-700 "
              } transition-all ease-in-out  duration-300 hover:scale-125 cursor-pointer `}
            />
          </motion.div>
          <motion.div variants={imgVariant2} initial="hidden" animate="visible">
            <FontAwesomeIcon
              icon={faLinkedin}
              className={`h-7 w-7  ${
                scrollYProgress.current > 0.96
                  ? "text-white"
                  : "text-neutral-700 "
              } transition-all ease-in-out  duration-300 hover:scale-125 cursor-pointer hover:text-white`}
            />
          </motion.div>
          <motion.div variants={imgVariant3} initial="hidden" animate="visible">
            <FontAwesomeIcon
              icon={faEnvelope}
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
