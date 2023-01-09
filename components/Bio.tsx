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
      <div className="w-[500px] md:max-w-sm md:pr-12">
        <h1 className="text-5xl font-bold">Erich Vorster</h1>
        <h6 className="text-2xl my-6 font-bold">
          Front End Developer at InfoSlips
        </h6>
        <div className="text-grey-400">
          <p className="text-sm pb-4 leading-6">
            I am a Front End Developer passionate about all things JavaScript.
          </p>
          <p className="text-sm pb-4 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
            dolores.
          </p>
          <p className="text-sm pb-4 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            asperiores repellendus dolores sed, soluta, facere quae esse dolore
            harum expedita quia quis, voluptates vitae doloremque nesciunt.
            Rerum voluptates et fuga!
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
