"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  align?: "center" | "left";
  size?: "default" | "large";
}

export default function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  videoSrc,
  primaryCta,
  secondaryCta,
  align = "center",
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const titleEl = titleRef.current;
    const subtitleEl = subtitleRef.current;
    const actionsEl = actionsRef.current;
    const mediaEl = mediaRef.current;

    if (!section || !content) return;

    // Timeline pour l'animation d'entree
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animation du titre
    if (titleEl) {
      tl.fromTo(
        titleEl,
        { opacity: 0, y: 60, clipPath: "inset(100% 0% 0% 0%)" },
        { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 1 },
        0.3
      );
    }

    // Animation du sous-titre
    if (subtitleEl) {
      tl.fromTo(
        subtitleEl,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.6
      );
    }

    // Animation des boutons
    if (actionsEl) {
      tl.fromTo(
        actionsEl,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.8
      );
    }

    // Effet parallax sur le media au scroll
    if (mediaEl) {
      gsap.to(mediaEl, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Fade out du contenu au scroll
    gsap.to(content, {
      opacity: 0,
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "40% top",
        scrub: true,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`generic__hero generic__hero-text-align--${align} generic__hero-justify--${align}`}
      style={{ minHeight: "100vh" }}
    >
      <div ref={mediaRef} className="generic__hero--media media">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="media__image object-cover"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="media__image object-cover"
          />
        ) : null}
        {/* Overlay sombre pour ameliorer la lisibilite */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            pointerEvents: "none",
          }}
        />
      </div>

      <div ref={contentRef} className="generic__hero--content">
        <h1
          ref={titleRef}
          className="generic__hero--title title-style4-600 desktop:title-style4-700"
          style={{ opacity: 0 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            ref={subtitleRef}
            className="generic__hero--body body-style1-500"
            style={{ opacity: 0 }}
          >
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div
            ref={actionsRef}
            className="generic__hero--actions"
            style={{ opacity: 0 }}
          >
            {primaryCta && (
              <Button href={primaryCta.href} variant="secondary" size="300">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="primary" size="300">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
