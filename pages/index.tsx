import Head from "next/head";
import Bio from "../components/Bio";
import ScrollLayout from "../components/ScrollLayout";

export default function Home() {
  return (
    <>
      <div className=" pt-24 grid grid-cols-2 container mx-auto xl:px-40 xl:pt-24">
        <div className="">
          <Bio />
        </div>
        <div>
          <ScrollLayout />
        </div>
      </div>
    </>
  );
}
