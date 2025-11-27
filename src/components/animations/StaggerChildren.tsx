"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StaggerChildrenProps {
  children: React.ReactNode;
  stagger?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  className?: string;
  style?: React.CSSProperties;
  childSelector?: string;
}

export default function StaggerChildren({
  children,
  stagger = 0.1,
  duration = 0.6,
  direction = "up",
  distance = 30,
  className = "",
  style,
  childSelector = ":scope > *",
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const childElements = element.querySelectorAll(childSelector);
    if (childElements.length === 0) return;

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
          return { y: distance };
      }
    };

    gsap.fromTo(
      childElements,
      {
        opacity: 0,
        ...getTransform(),
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        stagger,
        ease: "power3.out",
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
  }, [stagger, duration, direction, distance, childSelector]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
