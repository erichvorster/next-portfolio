import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const layers = [
  {
    number: "01.",
    title: "Frontend & design",
    description:
      "Where the work usually starts and where most of the muscle memory lives. React and Next.js for the framework, TypeScript everywhere, Tailwind as the layer between design and code. I care about hierarchy, type, motion, and the small details that decide whether something feels finished.",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Motion",
      "Base UI",
      "shadcn/ui",
      "Figma",
    ],
  },
  {
    number: "02.",
    title: "Backend",
    description:
      "Side-project practice for years before it joined the day job. The stack is TypeScript end-to-end — same language on both sides of the API, which is genuinely nice to work in. Node and Fastify on the server, MongoDB for data, REST and GraphQL for the interface, Docker around the rest.",
    items: [
      "TypeScript",
      "Node",
      "Fastify",
      "MongoDB",
      "REST",
      "GraphQL",
      "Docker",
    ],
  },
  {
    number: "03.",
    title: "AI engineering",
    description:
      "Most of my time right now. Agents, MCP servers, and RAG used as building blocks for features that have to work past the demo. That means evals, observability, careful prompt and context design, and a clear sense of where a model shouldn't be trusted on its own. The interesting work is at the seams — where the model meets real data, real users, real consequences.",
    items: [
      "Agents",
      "MCP servers",
      "RAG",
      "Evals",
      "Observability",
      "Prompt & context design",
    ],
  },
  {
    number: "04.",
    title: "Cloud & infra",
    description:
      "AWS, mostly. EKS for orchestration, Helm and Terraform for the deploy and infrastructure side. Comfortable enough here to take a feature from idea to running in production without handing off — and still learning. Kubernetes is the kind of surface where you keep finding rooms you didn't know the house had.",
    items: ["AWS", "EKS", "Helm", "Terraform", "Docker"],
  },
];

export function ProcessSection() {
  return (
    <section className="grid grid-cols-12 gap-x-4 gap-y-16 px-6 pb-32 md:px-10 md:pb-40 lg:px-16 lg:gap-y-0 lg:pb-56">
      <div className="col-span-12 lg:col-span-6">
        <h2 className="font-medium leading-[1.05] tracking-tight text-[clamp(1.75rem,5vw,3.5rem)]">
          What I build with
        </h2>
        <p className="mt-6 max-w-md text-base text-muted-foreground md:mt-8">
          The current toolkit. Mostly TypeScript end-to-end, with the rest
          picked up where it's earned its keep.
        </p>
      </div>

      <div className="col-span-12 lg:col-span-6">
        <Accordion>
          {layers.map((layer) => (
            <AccordionItem key={layer.number} value={layer.number}>
              <AccordionTrigger className="py-6 text-lg font-medium md:text-xl">
                <span className="flex items-baseline gap-4 md:gap-8">
                  <span className="text-muted-foreground tabular-nums">
                    {layer.number}
                  </span>
                  <span>{layer.title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <div className="max-w-md pb-4 md:ml-16">
                  <p className="leading-relaxed">{layer.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
