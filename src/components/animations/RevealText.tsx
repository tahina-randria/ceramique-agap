"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealTextProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
}

export default function RevealText({
  children,
  as: Component = "div",
  className = "",
  style,
  delay = 0,
  duration = 1,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Animation de reveal avec clip-path
    gsap.fromTo(
      element,
      {
        clipPath: "inset(100% 0% 0% 0%)",
        opacity: 0,
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        duration,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration]);

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{ ...style, opacity: 0 }}
    >
      {children}
    </Component>
  );
}
