"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  className = "",
  style,
  priority = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    // Calculer le deplacement en fonction de la vitesse
    const yPercent = speed * 100;

    gsap.fromTo(
      image,
      { yPercent: -yPercent / 2 },
      {
        yPercent: yPercent / 2,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        overflow: "hidden",
        position: "relative",
        ...style,
      }}
    >
      <div
        ref={imageRef}
        style={{
          position: "absolute",
          top: "-15%",
          left: 0,
          width: "100%",
          height: "130%",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  );
}
