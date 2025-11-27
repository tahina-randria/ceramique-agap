"use client";

import { Quote, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
  imageSrc?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  variant?: "default" | "cards";
}

export default function Testimonials({
  title = "Ce qu'ils en disent",
  subtitle,
  testimonials,
  variant = "default",
}: TestimonialsProps) {
  return (
    <section className="section-p-default" style={{ backgroundColor: "var(--color-grey-100)" }}>
      <div className="wrapper">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "var(--dimension-500)" }}>
          <h2 className="title-style1-600" style={{ marginBottom: subtitle ? "var(--dimension-150)" : 0 }}>
            {title}
          </h2>
          {subtitle && (
            <p className="body-style1-400 text-content-default-tertiary">{subtitle}</p>
          )}
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--dimension-300)",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "var(--color-core-white)",
                borderRadius: "var(--radius-primary)",
                padding: "var(--dimension-400)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Quote Icon */}
              <div
                style={{
                  position: "absolute",
                  top: "var(--dimension-300)",
                  right: "var(--dimension-300)",
                  opacity: 0.1,
                }}
              >
                <Quote size={48} strokeWidth={1} />
              </div>

              {/* Rating */}
              {testimonial.rating && (
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    marginBottom: "var(--dimension-200)",
                  }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < testimonial.rating! ? "var(--color-yellow-500)" : "transparent"}
                      stroke={i < testimonial.rating! ? "var(--color-yellow-500)" : "var(--color-grey-400)"}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
              )}

              {/* Quote Text */}
              <blockquote
                className="body-style1-400"
                style={{
                  flex: 1,
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  marginBottom: "var(--dimension-300)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "var(--dimension-200)" }}>
                {testimonial.imageSrc ? (
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.author}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-trail-dust-100)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-trail-dust-600)",
                      fontWeight: 600,
                      fontSize: "var(--size-600)",
                    }}
                  >
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                )}
                <div>
                  <div className="title-style1-300">{testimonial.author}</div>
                  {testimonial.role && (
                    <div className="body-style1-200 text-content-default-tertiary">
                      {testimonial.role}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
