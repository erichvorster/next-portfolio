"use client";

import { useRef, useState, type FormEvent } from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SendIcon, type SendIconHandle } from "@/components/ui/send";

const FORM_NAME = "contact";

const reasons = ["Project chat", "AI / engineering", "Design", "Just hello"];

const meta = [
  { label: "Location", value: "Cape Town, ZA" },
  { label: "Timezone", value: "SAST · UTC+02" },
  { label: "Reply by", value: "1–2 days" },
];

const inputClass =
  "block w-full rounded-xl border border-border bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-foreground/60 disabled:opacity-60";

const labelClass = "block text-sm font-medium text-foreground/80";

type Status = "idle" | "submitting" | "sent" | "error";

function encodeFormBody(data: Record<string, string>): string {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export function ContactCard() {
  const [reason, setReason] = useState(reasons[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const iconRef = useRef<SendIconHandle>(null);

  const submitting = status === "submitting";

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setStatus("submitting");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormBody({
          "form-name": FORM_NAME,
          "bot-field": botField,
          reason,
          name,
          email,
          message,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setReason(reasons[0]);
    setBotField("");
    setStatus("idle");
  };

  return (
    <main className="px-6 pt-32 pb-32 md:px-10 md:pt-40 md:pb-40 lg:px-16 lg:pb-56">
      <section className="grid grid-cols-12 gap-x-4 gap-y-10 md:gap-y-0">
        <div className="col-span-12 md:col-span-8">
          <h1 className="max-w-3xl font-medium leading-[1.05] tracking-tight text-[clamp(2rem,6vw,4.5rem)]">
            Drop me a line.
          </h1>
          <p className="mt-6 max-w-md text-base text-muted-foreground md:mt-8">
            Engineering, AI, design, or something you&apos;re building. I read
            everything that lands and reply within a day or two.
          </p>
        </div>

        <aside className="col-span-12 md:col-span-4 md:pl-8 lg:pl-12">
          <p className="mb-3 border-b border-border/60 pb-2 text-sm text-muted-foreground">
            Where I am
          </p>
          <ul className="space-y-2">
            {meta.map((m) => (
              <li
                key={m.label}
                className="flex items-baseline justify-between gap-4 text-sm"
              >
                <span className="text-muted-foreground">{m.label}</span>
                <span className="text-foreground/80">{m.value}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <div className="mx-auto mt-16 max-w-2xl border-t border-border/60 pt-12 md:mt-24 md:pt-16">
        {status === "sent" ? (
          <ThankYou onReset={reset} />
        ) : (
          <form
            name={FORM_NAME}
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={onSubmit}
            className="space-y-8"
          >
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="hidden">
              <label>
                Don&apos;t fill this out if you&apos;re human:{" "}
                <input
                  name="bot-field"
                  value={botField}
                  onChange={(e) => setBotField(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </p>

            <fieldset disabled={submitting}>
              <legend className={labelClass}>What&apos;s this about?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {reasons.map((r) => (
                  <label
                    key={r}
                    className={cn(
                      "cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors",
                      reason === r
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground",
                      submitting && "cursor-not-allowed opacity-60"
                    )}
                  >
                    <input
                      type="radio"
                      name="reason"
                      value={r}
                      checked={reason === r}
                      onChange={() => setReason(r)}
                      className="sr-only"
                    />
                    {r}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Field
                id="contact-name"
                name="name"
                label="Name"
                value={name}
                onChange={setName}
                placeholder="Jane Doe"
                autoComplete="name"
                disabled={submitting}
              />
              <Field
                id="contact-email"
                name="email"
                label="Email"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="jane@example.com"
                autoComplete="email"
                disabled={submitting}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                placeholder="A few lines about what's on your mind…"
                disabled={submitting}
                className={cn(inputClass, "mt-2 resize-y")}
              />
            </div>

            {status === "error" && (
              <p
                role="alert"
                className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              >
                Something went wrong sending that. Please try again, or email me
                directly.
              </p>
            )}

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Goes straight to my inbox.
              </p>
              <button
                type="submit"
                disabled={submitting}
                onMouseEnter={() => iconRef.current?.startAnimation()}
                onMouseLeave={() => iconRef.current?.stopAnimation()}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "h-12 gap-3 self-start rounded-full pr-4 pl-6 text-base sm:self-auto"
                )}
              >
                <span>{submitting ? "Sending…" : "Send message"}</span>
                <SendIcon ref={iconRef} size={20} />
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}

function ThankYou({ onReset }: { onReset: () => void }) {
  return (
    <div className="space-y-6">
      <h2 className="font-medium leading-[1.1] tracking-tight text-[clamp(1.5rem,4vw,2.25rem)]">
        Thanks — that&apos;s landed.
      </h2>
      <p className="max-w-md text-base text-muted-foreground">
        I&apos;ll get back to you within a day or two. If it&apos;s urgent,
        ping me on LinkedIn.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
      >
        Send another →
      </button>
    </div>
  );
}

function Field({
  id,
  name,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  disabled,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  disabled?: boolean;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        className={cn(inputClass, "mt-2")}
      />
    </div>
  );
}
