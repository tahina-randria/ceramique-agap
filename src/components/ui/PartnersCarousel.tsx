"use client";

import PartnerLogo from "./PartnerLogo";

interface Partner {
  name: string;
  logo: string;
  href?: string;
}

interface PartnersCarouselProps {
  partners: Partner[];
}

export default function PartnersCarousel({ partners }: PartnersCarouselProps) {
  // Dupliquer les partenaires pour l'effet de boucle infinie
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="partners-carousel">
      <div className="partners-carousel__track">
        {duplicatedPartners.map((partner, index) => (
          <PartnerLogo
            key={`${partner.name}-${index}`}
            name={partner.name}
            logoSrc={partner.logo}
            href={partner.href}
          />
        ))}
      </div>
    </div>
  );
}
