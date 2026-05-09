import Image from "next/image";

import { DropMeALine } from "@/components/drop-me-a-line";

export function ContactSection() {
  return (
    <section className="px-6 pb-12 md:px-10 md:pb-16 lg:px-16">
      {/* Heading + CTA */}
      <div className="flex flex-col gap-10 pb-20 md:flex-row md:items-end md:justify-between md:gap-12 md:pb-28 lg:pb-32">
        <div className="flex flex-1 flex-col items-start gap-6 md:gap-8">
          <Image
            src="/erich.png"
            alt="Erich Vorster"
            width={128}
            height={128}
            priority
            className="h-14 w-14 shrink-0 rounded-full object-cover md:h-16 md:w-16"
          />
          <h2 className="max-w-5xl font-medium leading-[1.05] tracking-tight text-[clamp(2rem,6vw,4.5rem)]">
            Let&apos;s talk about a project, collaboration, or an idea
            you&apos;ve been chewing on.
          </h2>
        </div>

        <DropMeALine className="shrink-0 self-start md:self-end" />
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-6 border-t border-border/60 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          © 2026 Erich Vorster. All rights reserved.
        </p>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href="https://github.com/erichvorster"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/erichvorster/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="mailto:erichvorster1@gmail.com"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Email
          </a>
        </nav>

        <a
          href="#top"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Back to top ↑
        </a>
      </div>
    </section>
  );
}
