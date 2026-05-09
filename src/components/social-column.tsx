"use client";

import { useRef } from "react";
import type { ComponentType, Ref, RefAttributes } from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/github";
import { LinkedinIcon } from "@/components/ui/linkedin";
import { AtSignIcon } from "@/components/ui/at-sign";

interface IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

type AnimatedIcon = ComponentType<
  { size?: number; className?: string } & RefAttributes<IconHandle>
>;

interface SocialLinkData {
  label: string;
  href: string;
  Icon: AnimatedIcon;
}

const socialLinks: SocialLinkData[] = [
  {
    label: "GitHub",
    href: "https://github.com/erichvorster",
    Icon: GithubIcon as AnimatedIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/erichvorster/",
    Icon: LinkedinIcon as AnimatedIcon,
  },
  {
    label: "Email",
    href: "mailto:erichvorster1@gmail.com",
    Icon: AtSignIcon as AnimatedIcon,
  },
];

function SocialLinkItem({ label, href, Icon }: SocialLinkData) {
  const iconRef = useRef<IconHandle>(null);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "h-auto w-full justify-start gap-3 px-3 py-2 text-sm font-normal"
      )}
    >
      <Icon ref={iconRef as Ref<IconHandle>} size={16} />
      <span>{label}</span>
    </a>
  );
}

export function SocialColumn() {
  return (
    <aside className="col-span-12 md:col-span-3">
      <p className="mb-3 border-b border-border/60 pb-2 text-sm text-muted-foreground">
        Let&apos;s get connected
      </p>
      <ul className="-ml-3 space-y-1">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <SocialLinkItem {...link} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
