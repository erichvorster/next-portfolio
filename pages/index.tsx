import Head from "next/head";
import Bio from "../components/Bio";
import ScrollLayout from "../components/ScrollLayout";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <>
      <div className=" pt-24 grid grid-cols-4 container mx-auto px-6 max-w-screen-xl">
        <div className="col-span-3 md:col-span-2  ">
          <Bio />
        </div>
        <div className="col-span-3 md:col-span-2">
          <ScrollLayout />
        </div>
      </div>
    </>
  );
}
