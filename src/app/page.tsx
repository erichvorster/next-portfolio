import { SiteHeader } from "@/components/site-header";
import { SocialColumn } from "@/components/social-column";
import { ProcessSection } from "@/components/process-section";
import { ContactSection } from "@/components/contact-section";
import { DropMeALine } from "@/components/drop-me-a-line";
import { ScrambleText } from "@/components/scramble-text";

const heroPhrases = [
  "Software\ndeveloper",
  "Design\nenthusiast",
  "AI\ntinkerer",
  "Cloud\nexplorer",
];

const services = [
  {
    number: "01",
    title: "AI Integration",
    description:
      "Adding AI features to existing products — Agents, MCP servers, RAG. With evals, observability, and a clear view of what to trust the model on and what not.",
  },
  {
    number: "02",
    title: "Full-Stack Builds",
    description:
      "End-to-end product engineering on a modern TypeScript stack. Frontend, backend, data, deploy — a feature from idea to running in production.",
  },
  {
    number: "03",
    title: "Frontend & Design",
    description:
      "UI engineering with a design sensibility. React, Tailwind, motion. Comfortable in Figma and in the codebase that the Figma file becomes.",
  },
  {
    number: "04",
    title: "Technical Reviews",
    description:
      "Code review, architecture audits, AI integration sanity-checks. A second pair of eyes from someone who builds these systems every day.",
  },
];

export default function Page() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO — fills viewport, content bottom-aligned */}
        <section id="top" className="flex min-h-svh flex-col justify-end px-6 pb-[10vh] md:px-10 lg:px-16">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between xl:gap-8">
            <h1 className="font-sans font-medium leading-[0.85] tracking-[-0.04em] text-[clamp(2.5rem,13vw,16rem)] whitespace-pre">
              <ScrambleText phrases={heroPhrases} />
            </h1>
            <p className="max-w-xs text-sm text-muted-foreground md:text-base xl:max-w-[260px] xl:flex-shrink-0 xl:pb-3">
              specialized in AI features, full-stack TypeScript, design, and
              cloud.
            </p>
          </div>
        </section>

        {/* INTRO + SOCIAL */}
        <section className="grid grid-cols-12 gap-x-4 gap-y-12 px-6 pt-32 pb-32 md:px-10 md:pt-48 md:pb-40 md:gap-y-0 lg:px-16 lg:pt-64 lg:pb-56">
          <div className="col-span-12 md:col-span-9">
            <p className="max-w-3xl text-2xl leading-[1.15] tracking-tight md:text-3xl lg:text-4xl">
              I&apos;m a software engineer at Infoslips. I came in through
              frontend and design in 2022, and have grown into backend and —
              for the past nine months — AI features built with Agents, MCP,
              and RAG.
            </p>
            <div className="mt-10">
              <DropMeALine />
            </div>
          </div>

          <SocialColumn />
        </section>

        {/* WHAT I CAN HELP YOU WITH */}
        <section className="px-6 pb-32 md:px-10 md:pb-40 lg:px-16 lg:pb-56">
          <h2 className="mb-20 max-w-4xl font-medium leading-[1.05] tracking-tight text-[clamp(1.75rem,5vw,3.5rem)] md:mb-28 lg:mb-32">
            I can help you with&hellip;
          </h2>

          <div className="grid grid-cols-1 gap-x-4 gap-y-16 md:grid-cols-2 md:gap-y-20 xl:grid-cols-4 xl:gap-y-0">
            {services.map((service) => (
              <article
                key={service.number}
                className="flex min-h-[200px] flex-col border-l border-border pl-6 md:min-h-[340px]"
              >
                <p className="text-5xl font-light text-foreground/20 md:text-6xl lg:text-7xl">
                  {service.number}
                </p>
                <div className="mt-auto pt-12">
                  <h3 className="text-lg font-medium md:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ProcessSection />

        <ContactSection />
      </main>
    </>
  );
}
