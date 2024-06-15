import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const ProjectCard = ({ proj }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHover = () => {
    if (isDesktop) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isDesktop) setIsHovered(false);
  };

  return (
    <Link href={proj.projectLink} target="_blank">
      <div
        className={`relative ${
          isHovered ? "text-white" : "text-white"
        } group/gradient hover:cursor-pointer`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          whileHover={isDesktop ? { scale: 1.1 } : {}}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 17 }}
          className={`bg-transparent ${
            isDesktop
              ? "md:bg-[#081e1e] hover:bg-[#081e1e] hover:shadow-2xl"
              : "bg-[#081e1e]"
          }  md:px-14 md:py-10 mb-12 md:mb-2 group relative z-[6] rounded-lg ease-in-out duration-300 transition-colors`}
        >
          <div className="flex justify-between"></div>
          <div className="text-gray-300">
            <p
              className={`mb-1 font-bold text-gray text-xs transition-colors ease-in-out duration-300 tracking-widest pb-2`}
            >
              {proj.language.toUpperCase()}
            </p>
            <h4
              className={`mb-1 text-md md:text-xl font-bold tracking-wide transition-colors ease-in-out duration-300 ${
                isHovered ? "text-secondary" : "text-white"
              }`}
            >
              {proj.projectName}{" "}
              <motion.div
                animate={
                  isHovered
                    ? { y: -5, x: 5, color: "#FF5722" }
                    : { y: 0, x: 0, color: "#FFFFFF" }
                }
                className="inline-block transition-colors ease-in-out duration-300"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={`h-4 w-4 md:h-5 md:w-5 ${
                    isHovered ? "text-secondary" : "text-white"
                  } -rotate-45 mt-1 ml-1 transition-colors ease-in-out duration-300`}
                />
              </motion.div>
            </h4>
            <p className="text-sm leading-[20px] text-gray transition-colors ease-in-out duration-300">
              {proj.projectDescription}
            </p>
            <div className="flex flex-wrap mt-3 md:mt-2">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-tertiary text-secondary mr-1 mb-1  mt-[6px] text-sm"
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
