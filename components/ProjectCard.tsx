import React from "react";
import { motion } from "framer-motion";

const ProjectCard = () => {
  return (
    <motion.div className=" relative group/gradient hover:cursor-pointer ">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 17 }}
        className="z-[0] bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-900 group-hover/gradient:z-[5] absolute group-hover/gradient:inset-x-[5px] group-hover/gradient:inset-y-[1px] group-hover/gradient:bg-gradient-to-r group-hover/gradient:from-indigo-500 group-hover/gradient:via-purple-500 group-hover/gradient:to-pink-500 blur opacity-100 rounded group-hover/gradient:opacity-100 animate-tilt transition-all duration-700 ease-in-out"
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 17 }}
        className="bg-neutral-800/25 hover:bg-neutral-800 p-10 m-2 group relative z-[6] rounded-lg"
      >
        <div className="h-[3px] w-[120px]  mb-3 rounded-full group-hover:bg-indigo-500 group-hover:shadow-xxl group-hover:shadow-indigo-500/90  transition-all ease-in-out duration-700 "></div>
        <div className="text-gray-300">
          <p className="mb-1 font-bold text-neutral-500 group-hover:text-[#EDEDED] transition-all ease-in-out duration-200 ">
            TYPESCRIPT
          </p>
          <h4 className="mb-1 text-2xl font-bold text-neutral-500 group-hover:text-[#EDEDED] transition-all ease-in-out duration-200 ">
            Project name here
          </h4>
          <p className="text-sm  text-neutral-500 group-hover:text-neutral-600 transition-all ease-in-out duration-200 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            corrupti.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
