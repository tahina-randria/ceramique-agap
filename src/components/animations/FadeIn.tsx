"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 40,
  className = "",
  style,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const getTransform = () => {
      switch (direction) {
        case "up":
          return { y: distance };
        case "down":
          return { y: -distance };
        case "left":
          return { x: distance };
        case "right":
          return { x: -distance };
        default:
          return {};
      }
    };

    gsap.fromTo(
      element,
      {
        opacity: 0,
        ...getTransform(),
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: once ? "play none none none" : "play reverse play reverse",
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
  }, [direction, delay, duration, distance, once]);

  return (
    <div ref={ref} className={className} style={{ ...style, opacity: 0 }}>
      {children}
    </div>
  );
}
