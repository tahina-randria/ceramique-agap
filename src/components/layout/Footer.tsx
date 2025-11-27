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
              <div className="footer__social body-style1-200">
                <a
                  href="https://www.facebook.com/ceramique.sadirac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <span className="footer__social-divider">·</span>
                <a
                  href="https://www.instagram.com/ceramic_agap_sadirac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
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
