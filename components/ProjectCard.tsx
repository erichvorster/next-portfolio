import React from "react";
import { motion } from "framer-motion";

const ProjectCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="rounded"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 17 }}
        className="bg-neutral-800 p-10 m-2 group rounded  "
      >
        <div className="h-[3px] w-[120px]  bg-neutral-500 mb-3 rounded-full group-hover:bg-indigo-500 group-hover:shadow-xxl group-hover:shadow-indigo-500/90  transition-all ease-in-out duration-300 "></div>
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
