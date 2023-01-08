import React from "react";
import ProjectCard from "./ProjectCard";

const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const ScrollLayout = () => {
  return (
    <div>
      {arr.map((arr, i) => (
        <div key={i} className="w-full">
          <ProjectCard />
        </div>
      ))}
    </div>
  );
};

export default ScrollLayout;
