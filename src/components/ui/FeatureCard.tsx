"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  ctaLabel?: string;
  variant?: "basic" | "extended";
  align?: "left" | "center";
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  ctaLabel,
  variant = "basic",
  align = "left",
  className = "",
}: FeatureCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const imageContainer = imageRef.current;

    if (!card) return;

    // Animation d'entree de la carte
    gsap.fromTo(
      card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation de zoom subtil sur l'image au hover
    if (imageContainer) {
      const image = imageContainer.querySelector("img");
      if (image) {
        card.addEventListener("mouseenter", () => {
          gsap.to(image, { scale: 1.05, duration: 0.4, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(image, { scale: 1, duration: 0.4, ease: "power2.out" });
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === card) {
          trigger.kill();
        }
      });
    };
  }, []);

  const cardClasses = [
    "feature__card",
    `feature__card--${variant}`,
    `feature__card--align-${align}`,
    href && "feature__card--clickable",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <div ref={imageRef} className="media media-ratio-4-5 feature__card--media">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="media__image object-cover"
          style={{ transition: "transform 0.4s ease" }}
        />
      </div>
      <div className="feature__card--content">
        <div className="feature__card--content--text">
          <h2 className="feature__card--title deck-style1-500">{title}</h2>
          {description && (
            <p className="feature__card--description body-style1-300">
              {description}
            </p>
          )}
        </div>
        {ctaLabel && href && (
          <div className="feature__card--buttons">
            <Button href={href} variant="primary" size="300">
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </>
  );

  if (href && !ctaLabel) {
    return (
      <Link
        href={href}
        className={cardClasses}
        ref={cardRef as React.RefObject<HTMLAnchorElement>}
        style={{ opacity: 0 }}
      >
        {content}
      </Link>
    );
  }

  return (
    <article
      ref={cardRef as React.RefObject<HTMLElement>}
      className={cardClasses}
      style={{ opacity: 0 }}
    >
      {content}
    </article>
  );
}
