import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { ContactCard } from "@/components/contact-card";

export const metadata: Metadata = {
  title: "Contact — Erich Vorster",
  description: "Drop me a line. Engineering, AI, design, or something you're building.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <ContactCard />
    </>
  );
}
