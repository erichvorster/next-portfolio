import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Not found",
  description: "This page doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="grid min-h-svh place-items-center px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl text-center">
          <p className="font-mono text-sm text-muted-foreground tabular-nums">
            404
          </p>
          <h1 className="mt-4 font-medium leading-[1.05] tracking-tight text-[clamp(2rem,6vw,4.5rem)]">
            Page not found.
          </h1>
          <p className="mt-6 text-base text-muted-foreground">
            That link doesn&apos;t lead anywhere. Try the homepage, or get in
            touch if you were expecting something else.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="text-sm text-foreground underline-offset-4 hover:underline"
            >
              Back to home
            </Link>
            <span className="hidden text-muted-foreground sm:inline">·</span>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
