import React from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

const Bio = () => {
  const { scrollYProgress } = useScroll();

  console.log(scrollYProgress);

  // function setScrollYclass = (scrollYProgress) => {
  //   switch (scrollYProgress) {
  //     case scrollYProgress < 800:
  //       return "text-xl";
  //     case scrollYProgress < 2225:
  //       return "text-xl";
  //     case scrollYProgress < 0.3:
  //       return "text-xl";
  //     case scrollYProgress < 0.4:
  //       return "text-xl";
  //       default:
  //       return "text-sm";  };
  // }

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
    {
      line: "My ability to work effectively in a team and communicate well with clients ensures a collaborative and productive work environment. Overall, my passion for front-end development and my combination of technical and soft skills make me an ideal candidate for delivering cutting-edge solutions that exceed client expectations.",
    },
  ];

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className=" h-screen flex flex-col  max-h-screen lg:fixed lg:max-w-xl">
      <div className="w-full  ">
        <motion.h1
          variants={h1Variant}
          initial="hidden"
          animate="visible"
          className="text-5xl font-bold"
        >
          Erich Vorster
        </motion.h1>
        <motion.h6
          className="text-2xl my-6 font-bold"
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
          {navLinks.map((link, i) => (
            <li key={i} className="mt-2">
              <a href="{link.href}">
                <span className="shadow" />
                <span className="">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex justify-between max-w-xs">
          <div className="flex justify-between items-center">
            <Image
              src="github.svg"
              height={35}
              width={35}
              alt="Twitter"
              className="github"
            />
            <small>Github</small>
          </div>
          <div className="flex justify-between items-center">
            <Image
              src="linkedin-in.svg"
              height={35}
              width={35}
              alt="Twitter"
              className="linkedin"
            />
            <small className="pl-4">Linkedin</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
