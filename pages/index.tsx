import Head from "next/head";
import Bio from "../components/Bio";
import ScrollLayout from "../components/ScrollLayout";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function Home() {
  // const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  return (
    <>
      <div className=" grid grid-cols-4 container mx-auto px-8 max-w-screen-xl lg:px-12">
        <div className="col-span-4 lg:col-span-2  mt-8 h-screen pt-24">
          <Bio />
        </div>
        <div className="col-span-4 lg:col-span-2 pt-24">
          <ScrollLayout />
        </div>
      </div>
    </>
  );
}
