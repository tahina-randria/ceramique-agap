"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

interface SubMenuItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: SubMenuItem[];
}

const navigation: NavItem[] = [
  {
    label: "L'Association",
    href: "/association",
    children: [
      { label: "Présentation", href: "/association/presentation" },
      { label: "Adhérer", href: "/association/adherer" },
    ],
  },
  {
    label: "Musée",
    href: "/musee",
    children: [
      { label: "Collections permanentes", href: "/musee/permanentes" },
      { label: "Expositions temporaires", href: "/musee/temporaires" },
    ],
  },
  {
    label: "Activités",
    href: "/activites",
    children: [
      { label: "Ateliers", href: "/activites/ateliers" },
      { label: "Stages", href: "/activites/stages" },
      { label: "Parcours pédagogiques", href: "/activites/parcours" },
    ],
  },
  {
    label: "Céramique en Fête",
    href: "/ceramique-en-fete",
    children: [
      { label: "Édition 2026", href: "/ceramique-en-fete/edition-2026" },
      { label: "Archives", href: "/ceramique-en-fete/archives-2024" },
    ],
  },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

const mobileNavigation = [
  { label: "Accueil", href: "/" },
  { label: "L'Association", href: "/association" },
  { label: "Musée", href: "/musee" },
  { label: "Activités", href: "/activites" },
  { label: "Événements", href: "/ceramique-en-fete" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : "header--at-top"}`}>
      <div className="header-wrapper">
        {/* Logo a gauche */}
        <Link href="/" className="header__logo-link">
          <Image
            src="/images/logos/logo-agap-maison-blanc.webp"
            alt="Maison de la Poterie - AGAP"
            width={180}
            height={50}
            className="header__logo-image"
            priority
          />
        </Link>

        {/* Navigation centrale dans une pill blanche */}
        <nav className="header__nav-pill">
          {navigation.map((item) => (
            <div
              key={item.href}
              className="header__nav-item"
              onMouseEnter={() => item.children && setOpenSubmenu(item.href)}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <Link
                href={item.href}
                className="header__nav-link"
              >
                {item.label}
                {item.children && <ChevronDown size={14} className="header__nav-chevron" />}
              </Link>

              {/* Submenu */}
              {item.children && openSubmenu === item.href && (
                <div className="header__submenu">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="header__submenu-link"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA a droite */}
        <Link href="/contact" className="header__cta">
          Nous rejoindre
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="header__menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${isMobileMenuOpen ? "header__mobile-menu--open" : ""}`}>
        <nav className="header__mobile-nav">
          {mobileNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`header__mobile-link ${pathname === item.href ? "header__mobile-link--active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="header__overlay header__overlay--active"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
