import Link from "next/link";

// Navigation cohérente avec le Header
const footerNav = {
  association: {
    title: "L'Association",
    href: "/association",
    links: [
      { label: "Présentation", href: "/association/presentation" },
      { label: "Adhérer", href: "/association/adherer" },
    ],
  },
  musee: {
    title: "Musée",
    href: "/musee",
    links: [
      { label: "Collections permanentes", href: "/musee/permanentes" },
      { label: "Expositions temporaires", href: "/musee/temporaires" },
    ],
  },
  activites: {
    title: "Activités",
    href: "/activites",
    links: [
      { label: "Ateliers", href: "/activites/ateliers" },
      { label: "Stages", href: "/activites/stages" },
      { label: "Parcours pédagogiques", href: "/activites/parcours" },
    ],
  },
  ceramiqueEnFete: {
    title: "Céramique en Fête",
    href: "/ceramique-en-fete",
    links: [
      { label: "Édition 2026", href: "/ceramique-en-fete/edition-2026" },
      { label: "Archives", href: "/ceramique-en-fete/archives-2024" },
    ],
  },
};

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__container">
          {/* Top Section: Brand + Nav */}
          <div className="footer__top">
            {/* Left: Brand + Contact */}
            <div className="footer__brand">
              <Link href="/" className="footer__logo">
                <span className="footer__logo-text">
                  <span className="title-style1-500">Maison de la Poterie</span>
                  <span className="footer__logo-agap">AGAP</span>
                </span>
              </Link>
              <p className="footer__description body-style1-300">
                Découvrez notre patrimoine potier à Sadirac, participez à nos
                ateliers et laissez-vous inspirer par l&apos;artisanat traditionnel.
              </p>
              <div className="footer__contact">
                <div className="footer__contact-item body-style1-200">
                  <strong>Adresse</strong>
                  <span>Place Fouragnan, 33670 Sadirac</span>
                </div>
                <div className="footer__contact-item body-style1-200">
                  <strong>Téléphone</strong>
                  <a href="tel:+33781324294">07 81 32 42 94</a>
                </div>
                <div className="footer__contact-item body-style1-200">
                  <strong>Email</strong>
                  <a href="mailto:centreceramique33@gmail.com">centreceramique33@gmail.com</a>
                </div>
              </div>
              <div className="footer__social">
                <a
                  href="https://www.facebook.com/ceramique.sadirac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/ceramic_agap_sadirac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Navigation + Map below */}
            <div className="footer__nav-wrapper">
              <div className="footer__nav">
                {Object.values(footerNav).map((section) => (
                  <div key={section.href} className="footer__nav-section">
                    <h3 className="footer__title title-style1-300">
                      <Link href={section.href}>{section.title}</Link>
                    </h3>
                    <ul className="footer__links">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className="footer__link body-style1-200">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Standalone links */}
                <div className="footer__nav-section">
                  <h3 className="footer__title title-style1-300">
                    <Link href="/actualites">Actualités</Link>
                  </h3>
                  <ul className="footer__links">
                    <li>
                      <Link href="/contact" className="footer__link body-style1-200">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Map - Same width as nav */}
              <div className="footer__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1416.4!2d-0.4095!3d44.7530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d9b8c8c8c8c9%3A0x1234567890abcdef!2sMaison%20de%20la%20Poterie%20-%20AGAP!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation de la Maison de la Poterie à Sadirac"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer__bottom">
            <p className="footer__copyright body-style1-100">
              © {new Date().getFullYear()} AGAP - Association des Gens et Amis de la Poterie. Tous droits réservés.
            </p>
            <div className="footer__legal">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer__legal-link body-style1-100">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
