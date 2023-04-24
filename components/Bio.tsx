import React from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

const Bio = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className=" h-screen flex flex-col  max-h-screen fixed w-2/5 ">
      <div className="w-full  md:pr-36">
        <h1 className="text-5xl font-bold">Erich Vorster</h1>
        <h6 className="text-2xl my-6 font-bold">Front End Developer</h6>
        <div className="text-grey-400">
          <p className="text-sm pb-4 leading-6">
            Im a passionate front-end developer with expertise in JavaScript,
            TypeScript, and React.
          </p>
          <p className="text-sm pb-4 leading-6">
            I possess a strong desire to learn and continually stay updated on
            the latest technologies, making me capable of delivering
            high-quality web applications using CSS, HTML, SCSS, Tailwind CSS,
            Framer Motion, SQL, npm, Material UI, and Node.js. I have a talent
            for creating responsive and performant web experiences, always
            keeping the user in mind. Along with my technical skills, I bring
            exceptional problem-solving and critical-thinking abilities,
            allowing me to tackle complex projects.
          </p>
          <p className="text-sm pb-4 leading-6">
            My ability to work effectively in a team and communicate well with
            clients ensures a collaborative and productive work environment.
            Overall, my passion for front-end development and my combination of
            technical and soft skills make me an ideal candidate for delivering
            cutting-edge solutions that exceed client expectations.
          </p>
        </div>
      </div>
      <div className="h-96 relative">
        {/* <div className="rotate-90">
          <motion.div
            className="progress-bar bg-red-300 h-8 rotate-90 z-10"
            style={{ scaleX }}
          />
        </div> */}
        <div className="mt-8 absolute top-0 left-0 right-0 bottom-0 z-20 ">
          <p className="mt-2 flex bg-transparent">
            About me{" "}
            {/* <div className="h-4 w-4 ml-8 mt-1 rounded-full bg-transparent" /> */}
          </p>
          <p className="mt-2">Projects</p>
          <p className="mt-2">Blog</p>
          <p className="mt-2">Contact</p>
        </div>
      </div>
      {/* <div>
        <div className="w-60 flex justify-between">
          <div className="flex justify-between items-center w-24">
            <Image
              src="github.svg"
              height={35}
              width={35}
              alt="Twitter"
              className="github"
            />
            <small>Github</small>
          </div>
          <div className="flex justify-between items-center w-24">
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
      </div> */}
    </div>
  );
};

export default Bio;
