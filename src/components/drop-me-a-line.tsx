"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SendIcon, type SendIconHandle } from "@/components/ui/send";

interface DropMeALineProps {
  href?: string;
  className?: string;
}

export function DropMeALine({
  href = "/contact",
  className,
}: DropMeALineProps) {
  const iconRef = useRef<SendIconHandle>(null);

  return (
    <a
      href={href}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      className={cn(
        buttonVariants({ variant: "default" }),
        "h-12 gap-3 rounded-full pr-4 pl-6 text-base",
        className
      )}
    >
      <span>Drop me a line</span>
      <SendIcon ref={iconRef} size={20} />
    </a>
  );
}
