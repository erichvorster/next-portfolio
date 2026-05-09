import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    number: "01.",
    title: "Discovery & spec",
    description:
      "We start by getting clear on what we're actually building. Problem, users, constraints, edge cases — we write that down. Specs first, code second. Get this part right and the rest is mostly execution.",
  },
  {
    number: "02.",
    title: "Prototype",
    description:
      "I build the smallest version that's still real. Not a mockup, not a Figma file — actual working code that proves the idea works (or shows where it doesn't). This is where AI tooling earns its keep: getting from zero to “I can see it” fast.",
  },
  {
    number: "03.",
    title: "Build",
    description:
      "Once we know what we're building, I build it. Production-grade engineering — typed end-to-end, tests where they matter, evals on AI features, deployment infra that won't surprise us at 3am. No shortcuts on the parts that fail in the real world.",
  },
  {
    number: "04.",
    title: "Ship & support",
    description:
      "We ship to production, watch it work, and iterate. AI features especially need observability from day one — what is the model getting wrong, where, and why. Support is scoped explicitly so there are no surprises on either side.",
  },
];

export function ProcessSection() {
  return (
    <section className="grid grid-cols-12 gap-x-4 gap-y-16 px-6 pb-32 md:px-10 md:pb-40 lg:px-16 lg:gap-y-0 lg:pb-56">
      <div className="col-span-12 lg:col-span-6">
        <h2 className="font-medium leading-[1.05] tracking-tight text-[clamp(1.75rem,5vw,3.5rem)]">
          My way of getting things done
        </h2>
        <p className="mt-6 max-w-md text-base text-muted-foreground md:mt-8">
          Most engagements break into four phases. I keep them lean and
          explicit so we both know what&apos;s happening at each step — and
          what&apos;s coming next.
        </p>
      </div>

      <div className="col-span-12 lg:col-span-6">
        <Accordion>
          {steps.map((step) => (
            <AccordionItem key={step.number} value={step.number}>
              <AccordionTrigger className="py-6 text-lg font-medium md:text-xl">
                <span className="flex items-baseline gap-4 md:gap-8">
                  <span className="text-muted-foreground tabular-nums">
                    {step.number}
                  </span>
                  <span>{step.title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <div className="max-w-md pb-4 md:ml-16">
                  {step.description}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
