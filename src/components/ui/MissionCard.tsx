"use client";

import { Archive, GraduationCap, Sparkles } from "lucide-react";
import { ReactNode } from "react";

type MissionIcon = "archive" | "graduationCap" | "sparkles";

interface MissionCardProps {
  icon: MissionIcon;
  title: string;
  children: ReactNode;
}

const iconMap = {
  archive: Archive,
  graduationCap: GraduationCap,
  sparkles: Sparkles,
};

export default function MissionCard({ icon, title, children }: MissionCardProps) {
  const IconComponent = iconMap[icon];

  return (
    <div
      style={{
        display: "flex",
        gap: "var(--dimension-200)",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "var(--radius-primary-small)",
          backgroundColor: "var(--color-trail-dust-100)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <IconComponent
          size={24}
          strokeWidth={1.5}
          style={{ color: "var(--color-trail-dust-600)" }}
        />
      </div>
      <div>
        <h3 className="title-style1-500" style={{ marginBottom: "var(--dimension-100)" }}>
          {title}
        </h3>
        <div className="body-style1-400 text-content-default-tertiary">{children}</div>
      </div>
    </div>
  );
}
