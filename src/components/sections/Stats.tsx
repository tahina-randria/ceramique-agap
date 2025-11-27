"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Landmark, Users, Calendar, Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Stat {
  icon: "landmark" | "users" | "calendar" | "award";
  value: string;
  label: string;
  description?: string;
}

interface StatsProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  variant?: "default" | "dark" | "cards";
}

const iconMap = {
  landmark: Landmark,
  users: Users,
  calendar: Calendar,
  award: Award,
};

export default function Stats({ title, subtitle, stats, variant = "default" }: StatsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const isDark = variant === "dark";
  const isCards = variant === "cards";

  useEffect(() => {
    const section = sectionRef.current;
    const statsContainer = statsRef.current;

    if (!section || !statsContainer) return;

    // Animation stagger des stats
    const statItems = statsContainer.querySelectorAll(".stat-item");

    gsap.fromTo(
      statItems,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation des icones (rotation subtile)
    const icons = statsContainer.querySelectorAll(".stat-icon");
    gsap.fromTo(
      icons,
      { rotation: -10, scale: 0 },
      {
        rotation: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
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
      className={`${isDark ? "background--neutral" : ""}`}
      style={{
        backgroundColor: isDark ? undefined : "var(--color-trail-dust-600)",
        padding: "var(--dimension-600) 0",
      }}
    >
      <div className="wrapper">
        {(title || subtitle) && (
          <div style={{ textAlign: "center", marginBottom: "var(--dimension-400)" }}>
            {title && (
              <h2
                className="title-style1-500"
                style={{
                  marginBottom: subtitle ? "var(--dimension-100)" : 0,
                  color: "var(--color-core-white)",
                }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className="body-style1-300"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div
          ref={statsRef}
          className="stats-grid"
          style={{
            display: "grid",
            gap: isCards ? "var(--dimension-300)" : "var(--dimension-200)",
          }}
        >
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            const isLast = index === stats.length - 1;

            return (
              <div
                key={index}
                className="stat-item"
                style={{
                  textAlign: "center",
                  padding: isCards
                    ? "var(--dimension-400)"
                    : "var(--dimension-200)",
                  backgroundColor: isCards ? "var(--color-core-white)" : "transparent",
                  borderRadius: isCards ? "var(--radius-primary)" : 0,
                  position: "relative",
                  opacity: 0,
                }}
              >
                {/* Icone */}
                <div
                  className="stat-icon"
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: isCards
                      ? "var(--color-trail-dust-100)"
                      : "rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto var(--dimension-200)",
                  }}
                >
                  <IconComponent
                    size={28}
                    strokeWidth={1.5}
                    style={{
                      color: isCards
                        ? "var(--color-trail-dust-600)"
                        : "var(--color-core-white)",
                    }}
                  />
                </div>

                {/* Valeur - Grande et proeminente */}
                <div
                  className="title-style4-600"
                  style={{
                    color: isCards
                      ? "var(--color-trail-dust-600)"
                      : "var(--color-core-white)",
                    marginBottom: "var(--dimension-150)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div
                  className="title-style1-300"
                  style={{
                    color: isCards
                      ? "var(--color-content-default-primary)"
                      : "var(--color-core-white)",
                    marginBottom: stat.description ? "var(--dimension-100)" : 0,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </div>

                {/* Description */}
                {stat.description && (
                  <p
                    className="body-style1-200"
                    style={{
                      color: isCards
                        ? "var(--color-content-default-tertiary)"
                        : "rgba(255,255,255,0.7)",
                      marginTop: "var(--dimension-050)",
                    }}
                  >
                    {stat.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
