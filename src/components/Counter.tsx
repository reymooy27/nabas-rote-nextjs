"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
}

export default function Counter({ target, suffix = "" }: CounterProps) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || animated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();

    function animate() {
      const isDecimal = target % 1 !== 0;
      const duration = 1500;
      const start = performance.now();

      function update(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;

        if (isDecimal) {
          setDisplay(current.toFixed(1) + suffix);
        } else {
          setDisplay(Math.floor(current) + suffix);
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          if (isDecimal) {
            setDisplay(target.toFixed(1) + suffix);
          } else {
            setDisplay(target + suffix);
          }
        }
      }

      requestAnimationFrame(update);
    }
  }, [target, suffix]);

  return (
    <span ref={ref} className="font-[Playfair_Display] text-[1.8rem] font-bold text-gold-light max-md:text-xl">
      {display}
    </span>
  );
}