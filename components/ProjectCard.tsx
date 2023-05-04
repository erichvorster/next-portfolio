import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = () => {
  return (
    <div className=" relative group/gradient hover:cursor-pointer  ">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 17 }}
        className="bg-neutral-800/25 hover:bg-neutral-800 p-10 m-2 group relative z-[6] rounded-lg ease-in-out duration-300 transition-colors"
      >
        <div className="flex justify-between">
          <div className="h-[3px] w-[120px]  mb-3 rounded-full group-hover:bg-indigo-500 group-hover:shadow-xxl group-hover:shadow-indigo-500/90  transition-all ease-in-out duration-700 " />
          <div className="flex w-16 justify-between">
            <FontAwesomeIcon
              icon={faGithub}
              className="h-6 w-6 "
              color="#000"
            />
            <FontAwesomeIcon
              icon={faLink}
              className="h-6 w-6 text-neutral-500"
              style={{ color: "#000" }}
            />
          </div>
        </div>

        <div className="text-gray-300">
          <p className="mb-1 font-bold text-neutral-500 group-hover:text-[#EDEDED] transition-colors ease-in-out duration-700 ">
            TYPESCRIPT
          </p>
          <h4 className="mb-1 text-2xl font-bold text-neutral-500 group-hover:text-[#EDEDED] transition-colors ease-in-out duration-700 ">
            Project name here
          </h4>
          <p className="text-sm  text-neutral-500 group-hover:text-[#EDEDED]  transition-colors ease-in-out duration-700 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            corrupti.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
