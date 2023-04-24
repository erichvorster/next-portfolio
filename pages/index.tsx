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
      <div className=" pt-24 grid grid-cols-3 container mx-auto xl:px-40 xl:pt-24">
        <div className="col-span-2">
          <Bio />
        </div>
        <div className="col-span-1">
          <ScrollLayout />
        </div>
      </div>
    </>
  );
}
