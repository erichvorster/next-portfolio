import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const ProjectCard = ({ proj }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={proj.projectLink}>
      <div
        className={`relative ${
          isHovered ? "opacity-100 text-white" : "text-white opacity-75"
        } group/gradient hover:cursor-pointer `}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 17 }}
          className="bg-neutral-800 hover:bg-neutral-800 hover:shadow-2xl px-14 py-10 m-2 group relative z-[6] rounded ease-in-out duration-300 transition-colors"
        >
          <div className="flex justify-between">
            {/*      
          <div className="flex w-16 justify-between">
            <FontAwesomeIcon
              icon={faGithub}
              className="h-6 w-6 text-transparent group-hover:text-[#6e5494] transition-all ease-in-out duration-700 hover:scale-125"
            />
            <FontAwesomeIcon
              icon={faLink}
              className="h-6 w-6 text-transparent group-hover:text-[#4078c0] transition-all ease-in-out duration-700 hover:scale-125"
              style={{ fill: "#000" }}
            />
          </div> */}
          </div>

          <div className="text-gray-300">
            <p className="mb-1 font-bold  group-hover:text-[#EDEDED] text-sm transition-colors ease-in-out duration-300 tracking-widest">
              {proj.language.toUpperCase()}
            </p>
            <h4 className="mb-1 text-xl font-bold tracking-wide group-hover:text-[#EDEDED] transition-colors ease-in-out duration-300 ">
              {proj.projectName}
            </h4>
            <p className="text-sm   group-hover:text-[#EDEDED]  transition-colors ease-in-out duration-300 ">
              {proj.projectDescription}
            </p>
            <div className="flex flex-wrap mt-2">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-1 bg-neutral-600 rounded-full mr-1 mt-1 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default ProjectCard;
