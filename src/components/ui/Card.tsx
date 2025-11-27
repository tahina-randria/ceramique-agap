import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  aspectRatio?: "1-1" | "4-5" | "16-9";
  className?: string;
  children?: ReactNode;
}

export default function Card({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  aspectRatio = "4-5",
  className = "",
  children,
}: CardProps) {
  const cardContent = (
    <>
      <div className={`media media-ratio-${aspectRatio}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="media__image object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="title-style1-400 mb-2">{title}</h3>
        {description && (
          <p className="body-style1-300 text-content-default-tertiary">
            {description}
          </p>
        )}
        {children}
      </div>
    </>
  );

  const cardClasses = `card card--${aspectRatio} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={`${cardClasses} motion-scale-up block`}>
        {cardContent}
      </Link>
    );
  }

  return <article className={cardClasses}>{cardContent}</article>;
}
