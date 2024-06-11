import Head from "next/head";
import Bio from "../components/Bio";
import ScrollLayout from "../components/ScrollLayout";
import { useScroll, useMotionValueEvent } from "framer-motion";
import GradientBlob from "../components/GradientBlob";

export default function Home() {
  // const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  return (
    <>
      <div className="hidden md:block">
        <GradientBlob />
      </div>

      <div className=" grid grid-cols-4 container  h-screen mx-auto px-5 max-w-screen-xl md:px-14 lg:px-24">
        <div className="col-span-4 lg:col-span-2">
          <Bio />
        </div>
        <div className="col-span-4 lg:col-span-2" id="projects">
          <ScrollLayout />
        </div>
      </div>
    </>
  );
}
