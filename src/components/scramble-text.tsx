"use client";

import { useEffect, useRef, useState } from "react";

interface ScrambleTextProps {
  /** Phrases to cycle through. Order is the cycle order. */
  phrases: string[];
  /** Time in ms for the scramble transition between phrases. */
  scrambleDuration?: number;
  /** Time in ms each phrase is held fully visible before scrambling out. */
  holdDuration?: number;
  /** Characters to draw from while scrambling. Defaults to lowercase a–z. */
  charset?: string;
  className?: string;
}

const DEFAULT_CHARSET = "!?+=<>{}[]()*~/-|',.;:`";

export function ScrambleText({
  phrases,
  scrambleDuration = 1200,
  holdDuration = 2500,
  charset = DEFAULT_CHARSET,
  className,
}: ScrambleTextProps) {
  const [text, setText] = useState(phrases[0] ?? "");

  // Stable reference of random chars per index so they don't churn every frame
  // (which would look like static-noise rather than a controlled scramble).
  const charStateRef = useRef(new Map<number, string>());

  useEffect(() => {
    if (phrases.length === 0) return;
    if (phrases.length === 1) {
      setText(phrases[0]);
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let rafId: number | undefined;
    let currentIdx = 0;

    const scrambleTo = (target: string, onDone: () => void) => {
      let startTime: number | null = null;
      const targetLength = target.length;
      charStateRef.current.clear();

      const tick = (timestamp: number) => {
        if (cancelled) return;
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / scrambleDuration, 1);

        const next = target
          .split("")
          .map((char, i) => {
            const lockThreshold = i / Math.max(targetLength, 1);
            if (progress >= lockThreshold) {
              charStateRef.current.delete(i);
              return char;
            }
            // Preserve whitespace and line breaks visually.
            if (char === " " || char === "\n" || char === " ") return char;
            // Refresh ~30% of frames so the chars feel alive but not chaotic.
            if (Math.random() > 0.7 || !charStateRef.current.has(i)) {
              charStateRef.current.set(
                i,
                charset[Math.floor(Math.random() * charset.length)]
              );
            }
            return charStateRef.current.get(i)!;
          })
          .join("");

        setText(next);

        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setText(target);
          onDone();
        }
      };

      rafId = requestAnimationFrame(tick);
    };

    const scheduleNext = () => {
      timeoutId = setTimeout(() => {
        if (cancelled) return;
        const nextIdx = (currentIdx + 1) % phrases.length;
        scrambleTo(phrases[nextIdx], () => {
          currentIdx = nextIdx;
          if (!cancelled) scheduleNext();
        });
      }, holdDuration);
    };

    setText(phrases[0]);
    scheduleNext();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [phrases, scrambleDuration, holdDuration, charset]);

  return <span className={className}>{text}</span>;
}
