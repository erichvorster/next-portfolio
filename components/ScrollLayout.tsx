import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import WorkExpreience from "./WorkExpreience";
import ContactForm from "./ContactForm";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Hi from "./WavingHand";

const projects = [
  {
    language: "TypeScript",
    projectName: "DSTV Now Clone",
    projectDescription:
      "A clone of the popular South African streaming service DSTV Now.",
    projectLink: "https://stunning-donut-f45f69.netlify.app",
    githubLink: "https://github.com/erichvorster/nextjs-dstv-clone",
    tech: ["NextJS", "JavaScript", "TailwindCSS", "TMDB API"],
  },
  {
    language: "JavaScript",
    projectName: "Crypto Tracker",
    projectDescription: "A simple crypto tracker app",
    projectLink: "https://jocular-dusk-7ef7f0.netlify.app",
    githubLink: "https://github.com/erichvorster/react-crypto-site",
    tech: ["React", "JavaScript", "MaterialUI", "Coinranking API"],
  },
  {
    language: "JavaScript",
    projectName: "Wifi Provider Site",
    projectDescription: "A site for a wifi provider company",
    projectLink: "https://roaring-mochi-4de1e0.netlify.app",
    githubLink: "https://github.com/erichvorster/fibr",
    tech: ["JavaScript", "SCSS", "GSAP"],
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
const container2 = {
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

const ScrollLayout = () => {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  // Update the scroll progress whenever it changes
  scrollYProgress.onChange((latest) => {
    setScrollProgress(latest);
  });

  console.log(scrollYProgress);

  return (
    <div className="mt-28">
      {/* Projects section */}
      <motion.div
        variants={container2}
        initial="hidden"
        viewport={{ once: true }}
        whileInView="visible"
      >
        <motion.h2
          variants={item}
          className={`font-bold flex items-center mt-4 text-xl tracking-widest ml-2  mb-12 ${
            scrollYProgress.current < 0.15 ? " text-white" : " text-neutral-700"
          }`}
        >
          <motion.div
            className={`h-[1px] ${
              scrollYProgress.current < 0.15
                ? "w-10 bg-white"
                : "w-0 bg-neutral-700"
            }  mr-3 transiton-all ease-in-out duration-300`}
          />
          PERSONAL PROJECTS
        </motion.h2>
        <motion.div className="group/bg">
          {projects.map((proj, i) => (
            <motion.div variants={item2} key={i} className="w-full">
              <ProjectCard proj={proj} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={item}
          className="flex items-center text-neutral-600 hover:text-white  transition-all ease-in-out duration-300 group mt-6 ml-4 cursor-pointer"
        >
          <Link href="https://github.com/erichvorster" target="_blank">
            More projects{" "}
          </Link>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="h-4 w-4 text-neutral-600 transition-all ease-in-out duration-300 hover:scale-125 group-hover:text-white group-hover:translate-x-2 ml-2"
          />
        </motion.div>
      </motion.div>

      {/* ABOUT SECTION */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-28 mt-20"
        id="about"
      >
        <motion.h2
          variants={item2}
          className={`font-bold  mb-2 text-xl flex items-center tracking-widest ml-2 transition-all  ease-in-out  ${
            scrollYProgress.current > 0.15 && scrollYProgress.current < 0.59
              ? " text-white"
              : " text-neutral-700"
          }`}
        >
          <motion.div
            className={`h-[1px] ${
              scrollYProgress.current > 0.15 && scrollYProgress.current < 0.59
                ? "w-10 bg-white"
                : "w-0 bg-neutral-700"
            }  mr-3 transition-all ease-in-out duration-300`}
          />
          ABOUT ME
        </motion.h2>
        <motion.div
          variants={item2}
          className={`flex flex-col md:flex-row items-center justify-between mt-6 ${
            scrollYProgress.current > 0.15 && scrollYProgress.current < 0.59
              ? " text-white"
              : " text-neutral-700"
          }`}
        >
          <motion.div
            variants={item2}
            className="w-full flex flex-col items-center md:items-start"
            initial="hidden"
            whileInView="visible"
          >
            <motion.p className="text-center md:text-left text-neutral-400 text-sm mb-4 ml-2">
              I am a self-motivated front-end developer with a strong drive to
              excel within collaborative team environments. My passion lies in
              crafting immersive web experiences using my expertise in HTML,
              CSS, and JavaScript. With a focus on front-end frameworks like
              React, I am dedicated to staying at the forefront of software
              development trends and continuously expanding my technological
              skills.
              <br />
              <br />
              My journey as a front-end developer has equipped me with a diverse
              skill set. I specialize in constructing fully responsive web
              applications using React, from functional to class-based
              components. With an in-depth understanding of React hooks and
              component lifecycles, I thrive on creating dynamic user interfaces
              that deliver exceptional user experiences.
              <br />
              <br />I am not just content with my current skill set – I am
              always eager to learn and grow. I have hands-on experience using
              TypeScript with React and Angular, and I am adept at utilizing
              state management tools like Redux Toolkit and React Query for
              efficient data management. I have seamlessly integrated RESTful
              APIs using tools like Axios and React Query, enhancing user
              interactivity and engagement.
            </motion.p>
            <motion.div
              variants={item2}
              className="flex items-center text-neutral-600 hover:text-white  transition-all ease-in-out duration-300 group mt-6 ml-2 cursor-pointer"
            >
              <a href="../public/resume/erichvorster.pdf" download>
                View full resume
              </a>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="h-4 w-4 text-neutral-600 transition-all ease-in-out duration-300 hover:scale-125 group-hover:text-white group-hover:translate-x-2 ml-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* TECH STACK SECTION */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-28 mt-20"
        id="xp"
      >
        <motion.h2
          variants={item2}
          // // initial="hidden"
          // // whileInView="visible"
          className={`font-bold  mb-2 text-xl flex items-center tracking-widest ml-2 transition-all  ease-in-out  ${
            scrollYProgress.current > 0.3 && scrollYProgress.current < 0.59
              ? " text-white"
              : " text-neutral-700"
          }`}
        >
          <motion.div
            className={`h-[1px] ${
              scrollYProgress.current > 0.3 && scrollYProgress.current < 0.59
                ? "w-10 bg-white"
                : "w-0 bg-neutral-700"
            }  mr-3 transiton-all ease-in-out duration-300`}
          />
          TECH STACK
        </motion.h2>
        <motion.div className="grid grid-cols-3 gap-4 px-2 mt-12  ">
          <motion.div
            className=" bg-neutral-800  rounded item p-2 "
            variants={item}
            whileHover={{
              scale: 0.8,
              rotate: -10,
            }}
          >
            <div className="    ">
              <div className=" z-10">
                <Link href="https://tailwindcss.com/" target="_blank">
                  <svg viewBox="0 0 128 128">
                    <defs>
                      <linearGradient
                        id="tailwindcss-original-wordmark-a"
                        gradientUnits="userSpaceOnUse"
                        x1="2.21"
                        y1="511.596"
                        x2="3.211"
                        y2="511.596"
                        gradientTransform="matrix(27.16757 5.6391 -9.3985 16.30055 4747.487 -8290.643)"
                      >
                        <stop offset="0" stop-color="#2298bd"></stop>
                        <stop offset="1" stop-color="#0ed7b5"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M13.227 56.074c-3.528 0-5.727 1.778-6.602 5.301 1.324-1.773 2.875-2.426 4.625-1.977 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.977-1-.25-1.722-.977-2.523-1.801-1.301-1.324-2.801-2.852-6.074-2.852zM6.602 64C3.074 64 .875 65.773 0 69.3c1.324-1.777 2.875-2.425 4.625-1.976 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.972-1-.25-1.722-.972-2.523-1.796C11.398 65.523 9.898 64 6.602 64zm0 0"
                      fill="url(#tailwindcss-original-wordmark-a)"
                    ></path>
                    <path
                      d="M39.676 62.75h-2.301v4.477c0 1.199.773 1.171 2.3 1.097v1.801c-3.1.375-4.323-.477-4.323-2.898V62.75h-1.704v-1.926h1.704v-2.5l2-.597v3.097h2.296v1.926zm8.8-1.926h2v9.301h-2v-1.352c-.703.977-1.8 1.579-3.25 1.579-2.527 0-4.624-2.153-4.624-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.546.597 3.25 1.574zm-2.953 7.625c1.676 0 2.954-1.25 2.954-2.972 0-1.727-1.278-2.977-2.954-2.977-1.671 0-2.949 1.25-2.949 2.977.028 1.722 1.278 2.972 2.95 2.972zm8.301-9.023c-.699 0-1.273-.602-1.273-1.278 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.579 1.278-1.278 1.278zm-1 10.699v-9.3h2v9.3zm4.324 0V56.551h2v13.574zm15.079-9.3h2.125l-2.926 9.3h-1.977l-1.926-6.273-1.949 6.273h-1.972l-2.926-9.3H62.8l1.8 6.425 1.95-6.426h1.926l1.921 6.426zm4.597-1.4c-.699 0-1.273-.6-1.273-1.277 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.551 1.278-1.278 1.278zm-1 10.7v-9.3h2v9.3zm9.227-9.55c2.074 0 3.574 1.425 3.574 3.823v5.727h-2v-5.5c0-1.426-.824-2.148-2.074-2.148-1.324 0-2.375.773-2.375 2.671v5h-2v-9.296h2v1.199c.625-1 1.625-1.477 2.875-1.477zm13.125-3.473h2v13.023h-2v-1.352c-.7.977-1.801 1.579-3.25 1.579-2.528 0-4.625-2.153-4.625-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.55.597 3.25 1.574zm-2.95 11.347c1.672 0 2.95-1.25 2.95-2.972 0-1.727-1.278-2.977-2.95-2.977-1.675 0-2.953 1.25-2.953 2.977 0 1.722 1.278 2.972 2.954 2.972zm11.672 1.926c-2.796 0-4.921-2.148-4.921-4.898 0-2.778 2.097-4.903 4.921-4.903 1.829 0 3.403.95 4.153 2.403l-1.727 1c-.398-.875-1.324-1.426-2.449-1.426-1.648 0-2.875 1.25-2.875 2.926 0 1.671 1.25 2.921 2.875 2.921 1.125 0 2.023-.574 2.477-1.421l1.722.972c-.75 1.477-2.347 2.426-4.176 2.426zm7.528-7c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.801-2.176l1.727-1c.296.852 1.046 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.398-2.848 1.528 0 2.801.699 3.454 1.921l-1.704.954c-.324-.727-.972-1.051-1.75-1.051-.722-.028-1.347.3-1.347.949zm8.574 0c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.8-2.176l1.726-1c.3.852 1.05 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.403-2.848 1.523 0 2.796.699 3.449 1.921l-1.7.954c-.328-.727-.976-1.051-1.75-1.051-.726-.028-1.351.3-1.351.949zm0 0"
                      fill="#2d3748"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className=" bg-neutral-800 rounded item p-6 relative "
            variants={item}
            whileHover={{
              scale: 0.8,
              rotate: -10,
            }}
          >
            <div className="   ">
              <Link href="https://www.w3schools.com/html/" target="_blank">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#E44D26"
                    d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                  ></path>
                  <path
                    fill="#F16529"
                    d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                  ></path>
                  <path
                    fill="#EBEBEB"
                    d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                  ></path>
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className=" bg-neutral-800  rounded item p-6"
            variants={item}
            whileHover={{
              scale: 0.8,
              rotate: -10,
            }}
          >
            <Link href="https://sass-lang.com/" target="_blank">
              <svg viewBox="0 0 128 128">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#CB6699"
                  d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153a11.696 11.696 0 00-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896a10.384 10.384 0 002.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888a3.701 3.701 0 00-.48 1.364 1.737 1.737 0 001.383 1.971 9.661 9.661 0 002.708.193c3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605a.869.869 0 00-.205.67c.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788a25.401 25.401 0 00-9.765 1.503c-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5a2.854 2.854 0 00-.786-.258c-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368a11.643 11.643 0 00-5.354.438c-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436a172.189 172.189 0 011.578-7.099c.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568a2.592 2.592 0 01-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091a39.478 39.478 0 01-9.765 2.083c-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79a40.494 40.494 0 00-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zM54.303 70.98c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417a1.689 1.689 0 01-.283.334c-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054a6.27 6.27 0 011.595-.706c.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354a2.385 2.385 0 01.093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"
                ></path>
              </svg>
            </Link>
          </motion.div>
          <motion.div
            className="col-span-2 row-span-2  bg-neutral-800 h-full rounded item p-8"
            variants={item}
            whileHover={{
              scale: 0.8,
              rotate: -10,
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 7, repeat: Infinity }}
            >
              <Link href="https://react.dev/" target="_blank">
                <svg viewBox="0 0 128 128">
                  <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4"></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                  </g>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className=" bg-neutral-800  rounded item p-6"
            variants={item}
            whileHover={{
              scale: 0.8,
              rotate: -10,
            }}
          >
            <Link href="https://angular.io/" target="_blank">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#C4473A"
                  d="M52.864 64h23.28L63.769 38.123zM63.81 1.026L4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635L63.81 1.026zM48.044 75l-7.265 18.176-13.581.056 36.608-81.079-.07-.153h-.064l.001-.133.063.133h.141l.123-.274V12h-.124l-.069.153 38.189 81.417-13.074-.287-8.042-18.58-17.173.082"
                ></path>
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="col-span-1  bg-neutral-800  rounded item p-6"
            variants={item}
            whileHover={{
              scale: 0.8,
              rotate: -10,
            }}
          >
            <Link href="https://www.w3schools.com/css/" target="_blank">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#1572B6"
                  d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                ></path>
                <path
                  fill="#33A9DC"
                  d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                ></path>
                <path
                  fill="#fff"
                  d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                ></path>
                <path
                  fill="#fff"
                  d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                ></path>
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className=" bg-neutral-800  rounded item p-4"
            variants={item}
            whileHover={{
              scale: 0.8,
              rotate: -10,
            }}
          >
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
            >
              <svg viewBox="0 0 128 128">
                <path
                  fill="#F0DB4F"
                  d="M1.408 1.408h125.184v125.185H1.408z"
                ></path>
                <path
                  fill="#323330"
                  d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                ></path>
              </svg>
            </Link>
          </motion.div>
          <motion.div
            className="col-span-2 row-span-2  bg-neutral-800 h-full rounded p-8"
            variants={item}
            whileHover={{
              scale: 0.8,
              rotate: -10,
            }}
          >
            <Link href={"https://nextjs.org/"} target="_blank">
              <svg viewBox="0 0 128 128">
                <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
              </svg>
            </Link>
          </motion.div>
          <motion.div
            className="col-span-1  bg-neutral-800  rounded item p-4"
            variants={item}
            whileHover={{
              scale: 0.8,
              rotate: -10,
            }}
          >
            <Link href="https://github.com/" target="_blank">
              <svg viewBox="0 0 128 128">
                <g fill="#181616">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                  ></path>
                  <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                </g>
              </svg>
            </Link>
          </motion.div>
          <motion.div
            className="col-span-2 row-span-2  bg-neutral-800 h-full rounded item p-8"
            variants={item}
            whileHover={{
              scale: 0.8,
              rotate: -10,
            }}
          >
            <Link href="https://www.typescriptlang.org/" target="_blank">
              <svg viewBox="0 0 128 128">
                <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
                <path
                  data-name="original"
                  fill="#007acc"
                  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                ></path>
              </svg>
            </Link>
          </motion.div>
          <motion.div
            className=" bg-neutral-800  rounded item p-4"
            variants={item}
            whileHover={{
              scale: 0.8,
              rotate: -10,
            }}
          >
            <Link href="https://mui.com/" target="_blank">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#1FA6CA"
                  d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6z"
                ></path>
                <path
                  fill="#1C7FB6"
                  d="M48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"
                ></path>
                <path
                  fill="#1FA6CA"
                  d="M48 77.8v18.4l32 18.4V96.2L48 77.8z"
                ></path>
                <path
                  fill="#1C7FB6"
                  d="M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"
                ></path>
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="col-span-1  bg-neutral-800  rounded item p-4"
            variants={item}
            whileHover={{
              scale: 0.8,
              rotate: -10,
            }}
          >
            <Link href="https://getbootstrap.com/" target="_blank">
              <svg viewBox="0 0 128 128">
                <defs>
                  <linearGradient
                    id="bootstrap-original-a"
                    x1="76.079"
                    x2="523.48"
                    y1="10.798"
                    y2="365.95"
                    gradientTransform="translate(1.11 14.613) scale(.24566)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9013fe" offset="0"></stop>
                    <stop stop-color="#6610f2" offset="1"></stop>
                  </linearGradient>
                  <linearGradient
                    id="bootstrap-original-b"
                    x1="193.51"
                    x2="293.51"
                    y1="109.74"
                    y2="278.87"
                    gradientTransform="translate(0 52)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff" offset="0"></stop>
                    <stop stop-color="#f1e5fc" offset="1"></stop>
                  </linearGradient>
                  <filter
                    id="bootstrap-original-c"
                    x="161.9"
                    y="135.46"
                    width="197"
                    height="249"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    ></feBlend>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
                <path
                  d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"
                  fill="url(#bootstrap-original-a)"
                ></path>
                <path
                  transform="translate(1.494 2.203) scale(.24566)"
                  d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z"
                  fill="url(#bootstrap-original-b)"
                  filter="url(#bootstrap-original-c)"
                  stroke="#fff"
                ></path>
              </svg>
            </Link>
          </motion.div>
          <motion.div
            className=" bg-neutral-800  rounded item p-2"
            variants={item}
            whileHover={{
              scale: 0.8,
              rotate: -10,
            }}
          >
            <Link href="https://www.npmjs.com/" target="_blank">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#cb3837"
                  d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"
                ></path>
              </svg>
            </Link>
          </motion.div>
          <motion.div
            className=" bg-neutral-800  rounded item p-4"
            variants={item}
            whileHover={{
              scale: 0.8,
              rotate: -10,
            }}
          >
            <Link href="https://jquery.com/" target="_blank">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#0868AC"
                  d="M9.625 32.181C-1.404 48.032-.031 68.657 8.394 85.501c.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52a75.27 75.27 0 001.586 1.812l.033.033.061.068a80.44 80.44 0 001.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184a66.92 66.92 0 002.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185a72.498 72.498 0 01-2.352-.765l-.323-.117a72.245 72.245 0 01-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198a92.857 92.857 0 01-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51a58.591 58.591 0 01-1.751-.982l-.591-.33a81.221 81.221 0 01-2.28-1.397l-.615-.41a59.283 59.283 0 01-1.623-1.079l-.522-.367a89.287 89.287 0 01-1.534-1.109l-.679-.514a64.473 64.473 0 01-1.384-1.082l-.617-.495a82.693 82.693 0 01-1.724-1.453l-.189-.159a83.466 83.466 0 01-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509a70.541 70.541 0 01-1.598-1.69l-.079-.084a67.39 67.39 0 01-1.621-1.844l-.424-.504a70.602 70.602 0 01-1.167-1.442l-.427-.532a78.406 78.406 0 01-1.347-1.794c-12.15-16.574-16.516-39.432-6.805-58.204m25.629-2.434c-7.977 11.478-7.543 26.844-1.321 38.983a50.581 50.581 0 003.528 5.889c1.195 1.713 2.52 3.751 4.106 5.127a48.111 48.111 0 001.79 1.858l.472.465a51.69 51.69 0 001.828 1.698l.074.064.018.018a55.268 55.268 0 002.135 1.767l.485.378a54.08 54.08 0 002.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635a50.376 50.376 0 01-2.333-.674l-.701-.227a45.423 45.423 0 01-1.631-.562l-.736-.274a56.418 56.418 0 01-1.756-.708l-.473-.2a47.728 47.728 0 01-2.148-.999c-.363-.177-.72-.364-1.078-.548l-.622-.32a44.502 44.502 0 01-1.363-.77l-.326-.185a47.844 47.844 0 01-1.651-1.008l-.498-.332a61.759 61.759 0 01-1.069-.707 57.456 57.456 0 01-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84m22.278-.775c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832a33.242 33.242 0 01-3.201-1.329 33.215 33.215 0 01-5.612-3.424c-9.969-7.565-16.162-21.994-9.657-33.745"
                ></path>
              </svg>
            </Link>
          </motion.div>
          <motion.div
            className=" bg-neutral-800 rounded item p-4"
            variants={item}
            whileHover={{
              scale: 0.8,
              rotate: -10,
            }}
          >
            <Link
              href="https://www.atlassian.com/software/jira?&aceid=&adposition=&adgroup=140479881486&campaign=18442480203&creative=663390759269&device=c&keyword=jira&matchtype=e&network=g&placement=&ds_kids=p73335832032&ds_e=GOOGLE&ds_eid=700000001558501&ds_e1=GOOGLE&gclid=Cj0KCQjwldKmBhCCARIsAP-0rfyQArIqEJcOozyMu7UlX9iM_7cMAEAzS1t4JOg1wn7IARjSXtn0eTUaAtZBEALw_wcB&gclsrc=aw.ds"
              target="_blank"
            >
              <svg viewBox="0 0 128 128">
                <defs>
                  <linearGradient
                    id="jira-original-a"
                    gradientUnits="userSpaceOnUse"
                    x1="22.034"
                    y1="9.773"
                    x2="17.118"
                    y2="14.842"
                    gradientTransform="scale(4)"
                  >
                    <stop offset=".176" stop-color="#0052cc"></stop>
                    <stop offset="1" stop-color="#2684ff"></stop>
                  </linearGradient>
                  <linearGradient
                    id="jira-original-b"
                    gradientUnits="userSpaceOnUse"
                    x1="16.641"
                    y1="15.564"
                    x2="10.957"
                    y2="21.094"
                    gradientTransform="scale(4)"
                  >
                    <stop offset=".176" stop-color="#0052cc"></stop>
                    <stop offset="1" stop-color="#2684ff"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M108.023 16H61.805c0 11.52 9.324 20.848 20.847 20.848h8.5v8.226c0 11.52 9.328 20.848 20.848 20.848V19.977A3.98 3.98 0 00108.023 16zm0 0"
                  fill="#2684ff"
                ></path>
                <path
                  d="M85.121 39.04H38.902c0 11.519 9.325 20.847 20.844 20.847h8.504v8.226c0 11.52 9.328 20.848 20.848 20.848V43.016a3.983 3.983 0 00-3.977-3.977zm0 0"
                  fill="url(#jira-original-a)"
                ></path>
                <path
                  d="M62.219 62.078H16c0 11.524 9.324 20.848 20.848 20.848h8.5v8.23c0 11.52 9.328 20.844 20.847 20.844V66.059a3.984 3.984 0 00-3.976-3.98zm0 0"
                  fill="url(#jira-original-b)"
                ></path>
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <div>
        <div>
          <WorkExpreience scrollYProgress={scrollYProgress} />
          <motion.div
            variants={item}
            className="flex items-center text-neutral-600 hover:text-white  transition-all ease-in-out duration-300 group mt-6 ml-4 cursor-pointer"
          >
            <Link href="https://github.com/erichvorster" target="_blank">
              View full resume
            </Link>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="h-4 w-4 text-neutral-600 transition-all ease-in-out duration-300 hover:scale-125 group-hover:text-white group-hover:translate-x-2 ml-2"
            />
          </motion.div>
        </div>
      </div>
      <div className=" mb-[115px] pt-52" id="contact">
        <h1
          className={`font-bold  mb-2 text-xl tracking-widest transition-all  flex items-center last:ease-in-out  ${
            scrollYProgress.current > 0.9 ? " text-white" : " text-neutral-700"
          }`}
        >
          <motion.div
            className={`h-[1px] ${
              scrollYProgress.current > 0.9
                ? "w-10 bg-white"
                : "w-0 bg-neutral-700"
            }  mr-3 transiton-all ease-in-out duration-300`}
          />{" "}
          SAY HI
          <Hi />
        </h1>
        <ContactForm scrollYProgress={scrollYProgress} />

        <p
          className={`text-neutral-500 mt-[60px] text-sm text-center ${
            scrollYProgress.current > 0.99 ? "opacity-100" : "opacity-25"
          } transition-all ease-in-out duration-300 delay-100 `}
        >
          Built by yours truely using{" "}
          <span className="text-white underline">NextJS</span>,
          <span className="text-white underline">TailwindCSS</span> and
          <span className="text-white underline">Framer Motion</span>
        </p>
      </div>
    </div>
  );
};

export default ScrollLayout;
