"use client";

import { useRef, useEffect, forwardRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  style,
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Anime les enfants directs de la section
    const childElements = element.querySelectorAll(":scope > .wrapper > *");

    if (childElements.length > 0) {
      gsap.fromTo(
        childElements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay]);

  return (
    <section ref={ref} className={className} style={style}>
      {children}
    </section>
  );
}
