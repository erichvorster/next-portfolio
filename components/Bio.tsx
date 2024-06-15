import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { faLink, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import erich from "../public/erich.jpg";

const Bio = () => {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const h1Variant = {
    hidden: { opacity: 0, x: -20, transition: { delay: 0.4 } },
    visible: { opacity: 1, x: 0, transition: { delay: 0.4 } },
  };

  const textVariant = (delay) => ({
    hidden: { opacity: 0, x: -20, transition: { delay } },
    visible: { opacity: 1, x: 0, transition: { delay } },
  });

  const divVariant = {
    hidden: { opacity: 0, y: -20, transition: { delay: 0.6 } },
    visible: { opacity: 1, y: 0, transition: { delay: 0.6 } },
  };

  const linkVariant = (delay) => ({
    hidden: { opacity: 0, x: -20, transition: { delay } },
    visible: { opacity: 1, x: 0, transition: { delay } },
  });

  const imgVariant = (delay) => ({
    hidden: { opacity: 0, y: 20, transition: { delay } },
    visible: { opacity: 1, y: 0, transition: { delay } },
  });

  const circleRef = useRef(null);
  const radius = 60;
  const diameter = radius * 2;

  useEffect(() => {
    const circle = circleRef.current;
    if (circle) {
      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;

      const text = circle.dataset.text;
      const characters = text.split("");
      const deltaAngle = 360 / characters.length;
      let currentAngle = -90;

      characters.forEach((character, index) => {
        const span = document.createElement("span");
        span.innerText = character;
        const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
        const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));
        const transform = `translate(${xPos}px, ${yPos}px)`;
        const rotate = `rotate(${index * deltaAngle + 8}deg)`;
        span.style.transform = `${transform} ${rotate}`;
        currentAngle += deltaAngle;
        circle.appendChild(span);
      });
    }
  }, [diameter]);

  const degreeToRadian = (angle) => angle * (Math.PI / 180);

  const navLinks = [
    { name: "ABOUT", href: "#projects", id: 2, progressRange: [0, 0.1] },
    { name: "PROJECTS", href: "#about", id: 1, progressRange: [0.1, 0.3] },
    { name: "TECH STACK", href: "#xp", id: 3, progressRange: [0.3, 0.59] },
    { name: "EXPERIENCE", href: "#exp", id: 4, progressRange: [0.59, 1] },
  ];

  return (
    <div className="flex flex-col justify-between lg:h-screen lg:fixed lg:max-w-sm xl:max-w-md py-12 md:py-20 lg:py-24">
      <div>
        <div className="w-full">
          <motion.h1
            variants={h1Variant}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Erich Vorster
          </motion.h1>
          <motion.h6
            className="text-xl my-3 text-white"
            variants={textVariant(0.5)}
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
            <p className="text-md pb-4 leading-6 text-gray max-w-xs">
              I create seamless, visually stunning, and user-friendly digital
              experiences.
            </p>
          </motion.div>
        </div>
        <ul className="mt-8 hidden lg:block">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              className="mt-5"
              variants={linkVariant(0.6 + index * 0.1)}
              initial="hidden"
              animate="visible"
            >
              <Link href={link.href} className="flex items-center group">
                <motion.div
                  className={`h-[1px] mr-3 ${
                    scrollProgress >= link.progressRange[0] &&
                    scrollProgress < link.progressRange[1]
                      ? "w-16 bg-white"
                      : "w-9 bg-gray"
                  } transition-all ease-in-out duration-300 group-hover:w-16 group-hover:bg-[#d3d4cf]`}
                />
                <span
                  className={`text-xs tracking-wider transition-all ease-in-out duration-300 ${
                    scrollProgress >= link.progressRange[0] &&
                    scrollProgress < link.progressRange[1]
                      ? "text-white"
                      : "text-gray group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-start lg:items-center mt-4 w-48 lg:w-80 lg:max-w-xs ">
        <Link href="#contact" className="relative hidden lg:block">
          <motion.div
            variants={imgVariant(0.9)}
            initial="hidden"
            animate="visible"
            className=""
          >
            <motion.div
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              className="cursor-pointer relative"
            >
              <div
                className={`rounded-full transition-all ease-in-out duration-300 hover:opacity-100 relative`}
              >
                <Image
                  src={erich}
                  alt="erich"
                  className="rounded-full h-16 w-16"
                />
                <div className="absolute inset-0 bg-black/75 opacity-50 rounded-full transition-opacity ease-in-out duration-300 hover:opacity-0"></div>
              </div>
            </motion.div>
          </motion.div>
        </Link>
        <motion.div
          variants={imgVariant(1.0)}
          initial="hidden"
          animate="visible"
        >
          <Link href="https://github.com/erichvorster" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className={`h-7 w-7 transition-all ease-in-out duration-300  cursor-pointer text-gray hover:text-white`}
            />
          </Link>
        </motion.div>
        <motion.div
          variants={imgVariant(1.1)}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="https://www.linkedin.com/in/erichvorster/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={`h-7 w-7  transition-all ease-in-out duration-300  cursor-pointer text-gray hover:text-white`}
            />
          </Link>
        </motion.div>
        <motion.div
          variants={imgVariant(1.1)}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="https://www.instagram.com/erich_vorster/?hl=en"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className={`h-7 w-7 transition-all ease-in-out duration-300  cursor-pointer text-gray hover:text-white`}
            />
          </Link>
        </motion.div>
        <motion.div
          variants={imgVariant(1.2)}
          initial="hidden"
          animate="visible"
        >
          <Link href="mailto:erichvorster1@gmail.com" target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              className={`h-7 w-7  transition-all ease-in-out duration-300  cursor-pointer text-gray hover:text-white`}
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Bio;
