"use client";

interface PartnerLogoProps {
  name: string;
  logoSrc?: string;
  href?: string;
}

export default function PartnerLogo({ name, logoSrc, href }: PartnerLogoProps) {
  const content = (
    <div
      style={{
        width: "240px",
        height: "120px",
        backgroundColor: "var(--color-core-white)",
        borderRadius: "var(--radius-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--dimension-250)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
        flexShrink: 0,
      }}
      className="partner-logo"
    >
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={`Logo ${name}`}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      ) : (
        <span
          className="body-style1-300 text-content-default-tertiary"
          style={{ textAlign: "center" }}
        >
          {name}
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", flexShrink: 0 }}
        title={name}
      >
        {content}
      </a>
    );
  }

  return content;
}
