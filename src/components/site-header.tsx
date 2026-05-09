"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { DropMeALine } from "@/components/drop-me-a-line";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-3 left-1/2 z-50 flex -translate-x-1/2 items-center justify-between bg-background/80 px-4 py-3 backdrop-blur-md transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] md:top-4 md:px-6 md:py-4",
        scrolled
          ? "w-[calc(100%-3rem)] max-w-[100vw] rounded-full md:w-[calc(100%-1.5rem)] md:max-w-lg"
          : "w-[calc(100%-3rem)] max-w-[100vw] rounded-none md:w-[calc(100%-5rem)] lg:w-[calc(100%-8rem)]"
      )}
    >
      <Link
        href="/"
        className="text-base font-medium tracking-tight transition-opacity hover:opacity-60"
      >
        Erich Vorster
      </Link>
      <div className="flex items-center">
        <div
          className={cn(
            "hidden justify-end overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] md:flex",
            scrolled
              ? "max-w-[200px] mr-2"
              : "pointer-events-none max-w-0 mr-0"
          )}
        >
          <DropMeALine className="h-10 gap-2 pr-3 pl-4 text-sm whitespace-nowrap" />
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
