"use client";

import { Clock, Euro, MapPin, Phone, Mail, Car, Accessibility } from "lucide-react";
import { ReactNode } from "react";

type IconType = "clock" | "euro" | "map" | "phone" | "mail" | "car" | "accessibility";

interface InfoCardProps {
  icon: IconType;
  title: string;
  children: ReactNode;
}

const iconMap = {
  clock: Clock,
  euro: Euro,
  map: MapPin,
  phone: Phone,
  mail: Mail,
  car: Car,
  accessibility: Accessibility,
};

export default function InfoCard({ icon, title, children }: InfoCardProps) {
  const IconComponent = iconMap[icon];

  return (
    <div
      style={{
        backgroundColor: "var(--color-core-white)",
        padding: "var(--dimension-300)",
        borderRadius: "var(--radius-primary)",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--dimension-150)",
          marginBottom: "var(--dimension-200)",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "var(--color-trail-dust-100)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <IconComponent
            size={20}
            strokeWidth={1.5}
            style={{ color: "var(--color-trail-dust-600)" }}
          />
        </div>
        <h3 className="title-style1-400">{title}</h3>
      </div>
      <div className="body-style1-300 text-content-default-tertiary">{children}</div>
    </div>
  );
}
