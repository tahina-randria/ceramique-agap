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
  title: {
    default: "Maison de la Poterie | AGAP - Sadirac",
    template: "%s | Maison de la Poterie - Sadirac",
  },
  description:
    "Découvrez la Maison de la Poterie de Sadirac, haut lieu de la céramique depuis le XIVe siècle. Ateliers pour enfants et adultes, expositions, visites scolaires et événements culturels.",
  keywords: [
    "céramique",
    "poterie",
    "Sadirac",
    "AGAP",
    "Maison de la Poterie",
    "ateliers céramique",
    "cours poterie Bordeaux",
    "patrimoine Entre-deux-Mers",
    "musée céramique Gironde",
    "tournage",
    "modelage",
  ],
  authors: [{ name: "AGAP - Association des Gens et Amis de la Poterie" }],
  creator: "AGAP Sadirac",
  publisher: "AGAP - Association des Gens et Amis de la Poterie",
  openGraph: {
    title: "Maison de la Poterie | AGAP - Sadirac",
    description:
      "Découvrez la Maison de la Poterie de Sadirac, haut lieu de la céramique depuis le XIVe siècle. Ateliers, expositions et événements culturels.",
    type: "website",
    locale: "fr_FR",
    siteName: "Maison de la Poterie - AGAP Sadirac",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison de la Poterie | AGAP - Sadirac",
    description:
      "Découvrez la Maison de la Poterie de Sadirac. Ateliers céramique, expositions et patrimoine potier.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ceramique-sadirac.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${satoshi.variable} ${deacon.variable} antialiased`}>
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}
