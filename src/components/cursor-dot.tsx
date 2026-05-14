"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * A small dot that follows the cursor with a slight spring-smoothed delay.
 * Hidden on touch / pointer-coarse devices, and until the user moves the
 * mouse for the first time (so it doesn't render at 0,0 on load).
 */
export function CursorDot() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  // Raw mouse position. Initialised offscreen so the first paint never
  // flashes a dot at (0, 0).
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Spring-smoothed values are what actually drive the transform.
  // Lower stiffness + higher mass = more trailing/lag behind the cursor.
  const springX = useSpring(x, { stiffness: 80, damping: 18, mass: 1.3 });
  const springY = useSpring(y, { stiffness: 80, damping: 18, mass: 1.3 });

  useEffect(() => {
    // Only enable for devices with a fine pointer (mouse/trackpad).
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mql.matches);

    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled, visible, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
      style={{ x: springX, y: springY }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    />
  );
}
