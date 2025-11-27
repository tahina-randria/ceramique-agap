import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GSAPProvider from "@/components/animations/GSAPProvider";

// Satoshi - Corps de texte (Variable font)
const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.ttf",
  variable: "--font-sans",
  display: "swap",
});

// Deacon - Titres
const deacon = localFont({
  src: [
    {
      path: "../../public/fonts/Deacon Test/DeaconTest-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Deacon Test/DeaconTest-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Deacon Test/DeaconTest-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Deacon Test/DeaconTest-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ceramique-agap.vercel.app"),
  title: {
    default: "Maison de la Poterie de Sadirac | Musée & Ateliers Céramique Gironde",
    template: "%s | Maison de la Poterie Sadirac",
  },
  icons: {
    icon: "/images/logos/favicon.webp",
    apple: "/images/logos/favicon.webp",
  },
  description:
    "Maison de la Poterie de Sadirac : musée de la céramique, ateliers poterie enfants et adultes, stages tournage, raku et modelage. 700 ans de tradition potière en Gironde, près de Bordeaux.",
  keywords: [
    "poterie Sadirac",
    "céramique Gironde",
    "cours poterie Bordeaux",
    "atelier céramique enfant",
    "stage tournage poterie",
    "musée céramique",
    "Maison de la Poterie",
    "AGAP Sadirac",
    "raku Bordeaux",
    "modelage argile",
    "festival céramique",
    "Céramique en Fête",
    "patrimoine Entre-deux-Mers",
    "visite scolaire poterie",
    "four à bois céramique",
  ],
  authors: [{ name: "AGAP - Association des Gens et Amis de la Poterie" }],
  creator: "AGAP Sadirac",
  publisher: "AGAP - Association des Gens et Amis de la Poterie",
  formatDetection: {
    email: false,
    telephone: true,
  },
  openGraph: {
    title: "Maison de la Poterie de Sadirac | Musée & Ateliers Céramique",
    description:
      "Découvrez 700 ans de tradition potière à Sadirac. Musée, ateliers céramique pour tous âges, stages avec artistes professionnels et festival Céramique en Fête.",
    type: "website",
    locale: "fr_FR",
    url: "https://ceramique-agap.vercel.app",
    siteName: "Maison de la Poterie - AGAP Sadirac",
    images: [
      {
        url: "/images/hero/hero-home.webp",
        width: 1200,
        height: 630,
        alt: "Maison de la Poterie de Sadirac - Musée et ateliers céramique en Gironde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison de la Poterie de Sadirac",
    description:
      "Musée céramique, ateliers poterie et stages à 20min de Bordeaux. Festival Céramique en Fête chaque juin.",
    images: ["/images/hero/hero-home.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ceramique-agap.vercel.app",
  },
  verification: {
    // Ajouter les codes de vérification quand disponibles
    // google: "code-google-search-console",
  },
  category: "Arts & Culture",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Museum",
      "@id": "https://ceramique-agap.vercel.app/#organization",
      name: "Maison de la Poterie de Sadirac",
      alternateName: "AGAP - Association des Gens et Amis de la Poterie",
      description:
        "Musée de la céramique et centre d'art dédié à 700 ans de tradition potière. Ateliers, stages et expositions.",
      url: "https://ceramique-agap.vercel.app",
      logo: "https://ceramique-agap.vercel.app/images/logos/logo-agap.webp",
      image: "https://ceramique-agap.vercel.app/images/hero/hero-home.webp",
      telephone: "+33781324294",
      email: "centreceramique33@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Place Fouragnan",
        addressLocality: "Sadirac",
        postalCode: "33670",
        addressCountry: "FR",
        addressRegion: "Nouvelle-Aquitaine",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 44.7533,
        longitude: -0.4039,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "14:00",
          closes: "18:00",
        },
      ],
      priceRange: "Gratuit - 400€",
      sameAs: [
        "https://www.facebook.com/ceramic.sadirac",
        "https://www.instagram.com/ceramic_agap_sadirac",
      ],
      foundingDate: "1989",
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 44.7533,
          longitude: -0.4039,
        },
        geoRadius: "50000",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://ceramique-agap.vercel.app/#website",
      url: "https://ceramique-agap.vercel.app",
      name: "Maison de la Poterie de Sadirac",
      description: "Site officiel de la Maison de la Poterie et de l'AGAP",
      publisher: {
        "@id": "https://ceramique-agap.vercel.app/#organization",
      },
      inLanguage: "fr-FR",
    },
    {
      "@type": "Event",
      name: "38ème Festival Céramique en Fête 2025",
      description:
        "Festival international de céramique avec marché de potiers, démonstrations, ateliers gratuits et cuisson au four à bois. Invité d'honneur : Jean-Nicolas Gérard.",
      startDate: "2025-06-07T10:00:00+02:00",
      endDate: "2025-06-08T17:00:00+02:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Halle André Lapaillerie - Sadirac",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Place Fouragnan",
          addressLocality: "Sadirac",
          postalCode: "33670",
          addressCountry: "FR",
        },
      },
      organizer: {
        "@id": "https://ceramique-agap.vercel.app/#organization",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        validFrom: "2025-01-01",
      },
      image: "https://ceramique-agap.vercel.app/images/hero/hero-festival.webp",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${satoshi.variable} ${deacon.variable} antialiased`}>
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}
