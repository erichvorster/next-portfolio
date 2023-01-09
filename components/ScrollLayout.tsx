import React from "react";
import ProjectCard from "./ProjectCard";

const arr = [1, 2, 3, 4, 5, 6, 7];

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
