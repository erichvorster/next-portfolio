import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ proj }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link href={proj.projectLink} target="_blank">
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
          className="bg-transparent md:bg-[#081e1e] hover:bg-[#081e1e] hover:shadow-2xl  md:px-14 md:py-10 mb-12 md:mb-2 group relative z-[6] rounded-lg ease-in-out duration-300 transition-colors"
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
            <p
              className={`mb-1 font-bold text-gray  text-xs transition-colors ease-in-out duration-300 tracking-widest pb-2`}
            >
              {proj.language.toUpperCase()}
            </p>
            <h4 className="mb-1 text-md md:text-xl font-bold tracking-wide  text-white  transition-colors ease-in-out duration-300 ">
              {proj.projectName}{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="h-4 w-4 md:h-5 md:w-5 text-white -rotate-45 mt-1  ml-1"
              />
            </h4>
            <p className="text-sm leading-[20px] text-gray  transition-colors ease-in-out duration-300 ">
              {proj.projectDescription}
            </p>
            <div className="flex flex-wrap mt-3 md:mt-2">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-[6px] bg-tertiary text-secondary rounded-full mr-[6px] mt-[6px] text-xs"
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
