import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PartnersCarousel from "@/components/ui/PartnersCarousel";

export const metadata = {
  title: "L'Association AGAP",
  description:
    "L'AGAP (Association des Gens et Amis de la Poterie) gère la Maison de la Poterie de Sadirac. Préservation du patrimoine céramique, ateliers, expositions et événements culturels.",
  keywords: ["AGAP Sadirac", "association poterie Gironde", "patrimoine céramique Entre-deux-Mers"],
};

export default function PresentationPage() {
  const bureauMembers = [
    { role: "Président", name: "Jean-François Bourlard" },
    { role: "Co-Présidente", name: "Gaëlle Borrachero" },
    { role: "Trésorière", name: "Anne-Marie Millera" },
    { role: "Trésorière", name: "Sylvie Manchado" },
    { role: "Secrétaire", name: "Laure Carpené" },
    { role: "Chargée de développement", name: "Odile Garat" },
  ];

  const partners = [
    { name: "Mairie de Sadirac", logo: "/images/logos/logo-mairie-sadirac.webp", href: "https://www.sadirac.fr" },
    { name: "Région Nouvelle-Aquitaine", logo: "/images/logos/logo-region-nouvelle-aquitaine.webp", href: "https://www.nouvelle-aquitaine.fr" },
    { name: "Département de la Gironde", logo: "/images/logos/logo-departement-gironde.webp", href: "https://www.gironde.fr" },
    { name: "Communauté de Communes de l'Entre-deux-Mers", logo: "/images/logos/logo-cdc-entre-deux-mers.webp", href: "https://www.entredeuxmers.com" },
    { name: "DRAC Nouvelle-Aquitaine", logo: "/images/logos/logo-drac.webp", href: "https://www.culture.gouv.fr/Regions/DRAC-Nouvelle-Aquitaine" },
    { name: "Office de Tourisme de l'Entre-deux-Mers", logo: "/images/logos/logo-office-tourisme.webp", href: "https://www.entredeuxmers.com" },
    { name: "Ateliers d'Art de France", logo: "/images/logos/logo-ateliers-art-france.webp", href: "https://www.ateliersdart.com" },
    { name: "Scènes d'Été en Gironde", logo: "/images/logos/logo-scene-ete.webp", href: "https://www.gironde.fr/culture/scenes-dete-en-gironde" },
    { name: "1001 Soleils", logo: "/images/logos/logo-1001-soleils.webp", href: "https://www.1001soleils.fr" },
    { name: "Thélem Assurances", logo: "/images/logos/logo-thelem-assurances.webp", href: "https://www.thelem-assurances.fr" },
    { name: "Solargril", logo: "/images/logos/logo-solargril.webp", href: "https://www.solargil.com" },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero
          title="L'Association"
          subtitle="Préserver et transmettre le patrimoine céramique de Sadirac"
          imageSrc="/images/hero/hero-association.webp"
          imageAlt="L'équipe bénévole de l'AGAP"
          primaryCta={{
            label: "Adhérer à l'association",
            href: "/association/adherer",
          }}
        />

        {/* Qui sommes-nous */}
        <section id="qui-sommes-nous" className="section-p-default">
          <div className="wrapper">
            <div className="two-col-grid">
              <div>
                <h2 className="title-style4-700" style={{ marginBottom: "var(--dimension-300)" }}>
                  Qui sommes-nous ?
                </h2>
                <p className="body-style1-500 text-content-default-tertiary" style={{ marginBottom: "var(--dimension-200)" }}>
                  L&apos;AGAP (Association des Gens et Amis de la Poterie) gère la Maison de la Poterie,
                  située à Sadirac dans l&apos;Entre-deux-Mers. Ce territoire a été un haut lieu de la
                  céramique depuis le XIVe siècle, avec une activité qui a culminé au XVIIIe siècle
                  lorsque 150 familles de potiers y travaillaient.
                </p>
                <p className="body-style1-400 text-content-default-tertiary">
                  Aujourd&apos;hui, l&apos;AGAP perpétue cette tradition en proposant des ateliers de céramique
                  pour enfants et adultes, des expositions, des visites pour les scolaires et des
                  événements culturels comme Céramique en Fête.
                </p>
              </div>
              <div
                style={{
                  borderRadius: "var(--radius-large)",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/images/association/facade-maison-poterie.webp"
                  alt="Façade de la Maison de la Poterie de Sadirac"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nos missions */}
        <section id="nos-missions" className="section-p-default background--secondary">
          <div className="wrapper">
            <div style={{ textAlign: "center", marginBottom: "var(--dimension-400)" }}>
              <h2 className="title-style4-700" style={{ marginBottom: "var(--dimension-150)" }}>
                Nos missions
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "var(--dimension-300)",
              }}
              className="missions-grid"
            >
              {/* Conserver */}
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  borderRadius: "var(--radius-large)",
                  padding: "var(--dimension-400)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-trail-dust-100)",
                    margin: "0 auto var(--dimension-300)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-trail-dust-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 8v13H3V8" />
                    <path d="M1 3h22v5H1z" />
                    <path d="M10 12h4" />
                  </svg>
                </div>
                <h3 className="title-style1-500" style={{ marginBottom: "var(--dimension-150)" }}>
                  Conserver
                </h3>
                <p className="body-style1-400 text-content-default-tertiary">
                  Préserver les collections, les outils et les témoignages de l&apos;histoire potière.
                  Le musée abrite plus de 500 pièces.
                </p>
              </div>

              {/* Transmettre */}
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  borderRadius: "var(--radius-large)",
                  padding: "var(--dimension-400)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-trail-dust-100)",
                    margin: "0 auto var(--dimension-300)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-trail-dust-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="title-style1-500" style={{ marginBottom: "var(--dimension-150)" }}>
                  Transmettre
                </h3>
                <p className="body-style1-400 text-content-default-tertiary">
                  Partager ce patrimoine à travers des visites guidées et ateliers.
                  Plus de 2 500 visiteurs chaque année.
                </p>
              </div>

              {/* Valoriser */}
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  borderRadius: "var(--radius-large)",
                  padding: "var(--dimension-400)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-trail-dust-100)",
                    margin: "0 auto var(--dimension-300)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-trail-dust-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                </div>
                <h3 className="title-style1-500" style={{ marginBottom: "var(--dimension-150)" }}>
                  Valoriser
                </h3>
                <p className="body-style1-400 text-content-default-tertiary">
                  Organiser des expositions et événements culturels pour faire rayonner l&apos;art
                  de la terre.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre équipe */}
        <section id="equipe-bureau" className="section-p-default">
          <div className="wrapper">
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
              {/* Titre */}
              <div style={{ textAlign: "center", marginBottom: "var(--dimension-500)" }}>
                <h2 className="title-style4-700" style={{ marginBottom: "var(--dimension-200)" }}>
                  Notre équipe
                </h2>
                <p
                  className="body-style1-500 text-content-default-tertiary"
                  style={{ maxWidth: "600px", margin: "0 auto" }}
                >
                  Depuis 1989, l&apos;AGAP est animée par une équipe de bénévoles passionnés
                  qui œuvrent pour faire vivre la Maison de la Poterie.
                </p>
              </div>

              {/* Photo équipe */}
              <div
                style={{
                  borderRadius: "var(--radius-large)",
                  overflow: "hidden",
                  marginBottom: "var(--dimension-500)",
                }}
              >
                <img
                  src="/images/association/equipe.webp"
                  alt="L'équipe de bénévoles de l'AGAP"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              {/* Le bureau - grille 3x2 */}
              <div style={{ textAlign: "center", marginBottom: "var(--dimension-300)" }}>
                <h3 className="title-style1-500">Le bureau</h3>
              </div>

              <div className="bureau-grid">
                {bureauMembers.map((member, index) => (
                  <div key={index} style={{ textAlign: "center" }}>
                    <p className="title-style1-400" style={{ marginBottom: "var(--dimension-050)" }}>
                      {member.name}
                    </p>
                    <p className="body-style1-300 text-content-default-tertiary">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Le lieu */}
        <section className="section-p-default background--secondary">
          <div className="wrapper">
            <div className="two-col-grid">
              <div
                style={{
                  borderRadius: "var(--radius-large)",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/images/association/halle-sadirac.webp"
                  alt="La halle de Sadirac lors de Céramique en Fête"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <div>
                <h2 className="title-style4-700" style={{ marginBottom: "var(--dimension-300)" }}>
                  Un lieu vivant
                </h2>
                <p className="body-style1-500 text-content-default-tertiary" style={{ marginBottom: "var(--dimension-200)" }}>
                  La Maison de la Poterie est bien plus qu&apos;un musée : c&apos;est un lieu de rencontre,
                  d&apos;apprentissage et de partage autour de l&apos;art de la terre.
                </p>
                <p className="body-style1-400 text-content-default-tertiary" style={{ marginBottom: "var(--dimension-300)" }}>
                  Chaque année, lors de Céramique en Fête, la halle de Sadirac accueille plus de
                  40 céramistes venus de toute la France pour partager leur passion avec le public.
                </p>

                {/* Bénévoles CTA */}
                <div className="benevoles-cta">
                  <div>
                    <p
                      className="title-style1-500"
                      style={{ color: "var(--color-core-white)", marginBottom: "var(--dimension-050)" }}
                    >
                      + de 20 bénévoles actifs
                    </p>
                    <p
                      className="body-style1-300"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      Le cœur de l&apos;association
                    </p>
                  </div>
                  <a
                    href="/association/adherer"
                    className="button button--secondary button--200"
                  >
                    <span className="button__content">Rejoindre</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partenaires */}
        <section id="partenaires" className="section-p-default">
          <div className="wrapper">
            <div style={{ textAlign: "center", marginBottom: "var(--dimension-300)" }}>
              <h2 className="title-style4-700" style={{ marginBottom: "var(--dimension-200)" }}>
                Nos partenaires
              </h2>
              <p className="body-style1-500 text-content-default-tertiary">
                L&apos;AGAP bénéficie du soutien de nombreuses institutions qui partagent
                notre engagement pour la préservation du patrimoine.
              </p>
            </div>
          </div>
          <div className="wrapper">
            <PartnersCarousel partners={partners} />
          </div>
          <div className="wrapper">
            <p className="body-style1-300 text-content-default-tertiary" style={{ marginTop: "var(--dimension-300)", textAlign: "center" }}>
              Vous souhaitez devenir partenaire ?{" "}
              <a href="/contact" className="link">Contactez-nous</a>
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-p-default" style={{ backgroundColor: "var(--color-trail-dust-600)" }}>
          <div className="wrapper">
            <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
              <h2
                className="title-style4-600"
                style={{ color: "var(--color-core-white)", marginBottom: "var(--dimension-200)" }}
              >
                Rejoignez-nous
              </h2>
              <p
                className="body-style1-500"
                style={{ color: "rgba(255,255,255,0.9)", marginBottom: "var(--dimension-300)" }}
              >
                Adhérez à l&apos;AGAP et participez à la préservation du patrimoine céramique de Sadirac.
              </p>
              <a
                href="/association/adherer"
                className="button button--secondary button--300"
              >
                <span className="button__content">Adhérer à l&apos;association</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
