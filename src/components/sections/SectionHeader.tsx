"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = ref.current;
    const titleEl = titleRef.current;
    const subtitleEl = subtitleRef.current;

    if (!element) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    if (titleEl) {
      tl.fromTo(
        titleEl,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        0
      );
    }

    if (subtitleEl) {
      tl.fromTo(
        subtitleEl,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        0.15
      );
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`section-header ${
        align === "center" ? "text-center" : ""
      } ${className}`}
      style={{
        marginBottom: "var(--dimension-400)",
        display: "flex",
        flexDirection: align === "center" ? "column" : "row",
        justifyContent: "space-between",
        alignItems: align === "center" ? "center" : "flex-end",
        gap: "var(--dimension-200)",
      }}
    >
      <div>
        <h2 ref={titleRef} className="title-style1-600" style={{ opacity: 0 }}>
          {title}
        </h2>
        {subtitle && (
          <p
            ref={subtitleRef}
            className="body-style1-300 text-content-default-tertiary"
            style={{ marginTop: "var(--dimension-100)", opacity: 0 }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {ctaLabel && ctaHref && (
        <Button href={ctaHref} variant="secondary" size="300">
          {ctaLabel}
        </Button>
      )}
    </div>
  );
}
