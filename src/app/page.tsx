import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Layers, Terminal, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React, Next.js, TypeScript",
  },
  {
    icon: Terminal,
    title: "Backend",
    description: "Node.js, REST, GraphQL",
  },
  {
    icon: Layers,
    title: "Systems",
    description: "Architecture & Infrastructure",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Core Web Vitals & Optimization",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Dot grid background texture */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Nav */}
        <nav className="flex items-center justify-between border-b border-border py-5">
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            portfolio
          </span>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm">
              Work
            </Button>
            <Button variant="ghost" size="sm">
              About
            </Button>
            <Button variant="outline" size="sm">
              Contact
            </Button>
          </div>
        </nav>

        {/* Hero */}
        <section className="pb-24 pt-32">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              Software Engineer
            </span>
          </div>

          <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight sm:text-7xl">
            Building things
            <br />
            for the{" "}
            <span className="font-mono text-primary/60">
              web
              <span className="animate-pulse">_</span>
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            I craft fast, accessible, and thoughtfully designed digital
            experiences. Currently focused on design systems and
            developer&nbsp;tooling.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button size="lg">
              View Projects
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
            <Button variant="outline" size="lg">
              Read the Blog
            </Button>
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center gap-4 pb-16">
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            What I Do
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Skills grid */}
        <section className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group bg-background p-8 transition-colors hover:bg-muted/50"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-muted">
                <skill.icon className="size-5 text-foreground transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-sm font-semibold tracking-tight">
                {skill.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Interested in working together?
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&rsquo;s build something great.
          </h2>
          <div className="mt-8">
            <Button size="lg">
              Get in Touch
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="font-mono text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()}
            </span>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Twitter
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
