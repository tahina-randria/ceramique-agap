import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/sections/SectionHeader";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import FeatureCard from "@/components/ui/FeatureCard";
import InfoCard from "@/components/ui/InfoCard";
import Button from "@/components/ui/Button";
import { client } from "../../sanity/lib/client";
import { actualitesEnVedetteQuery, actualitesQuery } from "../../sanity/lib/queries";

export const revalidate = 0;

export const metadata = {
  title: "Maison de la Poterie | AGAP Sadirac - Musée, Ateliers & Céramique",
  description:
    "Découvrez la Maison de la Poterie à Sadirac : musée de la céramique, ateliers pour enfants et adultes, stages, visites scolaires. Patrimoine potier de l'Entre-deux-Mers depuis le XIVe siècle.",
  keywords: [
    "poterie Sadirac",
    "musée céramique Gironde",
    "atelier poterie Bordeaux",
    "AGAP",
    "patrimoine potier",
  ],
};

interface Actualite {
  _id: string;
  titre: string;
  extrait: string;
  datePublication: string;
  imageSrc: string | null;
  slug: { current: string };
  categorie: string;
}

async function getActualitesEnVedette(): Promise<Actualite[]> {
  try {
    let articles = await client.fetch(actualitesEnVedetteQuery);
    if (!articles || articles.length === 0) {
      articles = await client.fetch(actualitesQuery);
    }
    return (articles || []).slice(0, 3);
  } catch {
    return [];
  }
}

export default async function Home() {
  const actualites = await getActualitesEnVedette();
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero
          title="L'art de la poterie vivant"
          subtitle="Découvrez notre patrimoine potier à Sadirac, participez à nos ateliers et laissez-vous inspirer par l'artisanat traditionnel de l'Entre-deux-Mers."
          videoSrc="/images/video_hero.mp4"
          primaryCta={{
            label: "Explorer le musée",
            href: "/musee",
          }}
          secondaryCta={{
            label: "Réserver un atelier",
            href: "/activites/ateliers",
          }}
          size="large"
        />

        {/* Stats Section - Chiffres clés */}
        <Stats
          stats={[
            {
              icon: "landmark",
              value: "500+",
              label: "Pièces de collection",
              description: "Poteries, outils, archives",
            },
            {
              icon: "calendar",
              value: "35 ans",
              label: "D'histoire AGAP",
              description: "Depuis 1989",
            },
            {
              icon: "users",
              value: "2 500+",
              label: "Visiteurs/an",
              description: "Céramique en Fête inclus",
            },
            {
              icon: "award",
              value: "40+",
              label: "Céramistes exposants",
              description: "Chaque année au festival",
            },
          ]}
        />

        {/* À la une Section - Actualités dynamiques de Sanity */}
        <section id="actualites-recentes" className="section-p-default">
          <div className="wrapper">
            <SectionHeader
              title="À la une"
              subtitle="Découvrez nos événements et actualités"
              ctaLabel="Voir toutes les actualités"
              ctaHref="/actualites"
            />
            <div className="content-grid">
              {actualites.length > 0 ? (
                <>
                  {actualites[0] && (
                    <FeatureCard
                      title={actualites[0].titre}
                      description={actualites[0].extrait || "Découvrez notre dernière actualité."}
                      imageSrc={actualites[0].imageSrc || "/images/hero/hero-festival.webp"}
                      imageAlt={actualites[0].titre}
                      href={`/actualites/${actualites[0].slug.current}`}
                      ctaLabel="Lire l'article"
                      variant="extended"
                    />
                  )}
                  {actualites[1] && (
                    <FeatureCard
                      title={actualites[1].titre}
                      description={actualites[1].extrait || "Découvrez notre actualité."}
                      imageSrc={actualites[1].imageSrc || "/images/hero/hero-temporaires.webp"}
                      imageAlt={actualites[1].titre}
                      href={`/actualites/${actualites[1].slug.current}`}
                      ctaLabel="Lire l'article"
                    />
                  )}
                  {actualites[2] && (
                    <FeatureCard
                      title={actualites[2].titre}
                      description={actualites[2].extrait || "Découvrez notre actualité."}
                      imageSrc={actualites[2].imageSrc || "/images/hero/hero-ateliers.webp"}
                      imageAlt={actualites[2].titre}
                      href={`/actualites/${actualites[2].slug.current}`}
                      ctaLabel="Lire l'article"
                    />
                  )}
                </>
              ) : (
                <>
                  <FeatureCard
                    title="Céramique en Fête 2025"
                    description="Les 7 et 8 juin 2025, retrouvez plus de 40 céramistes avec Jean-Nicolas Gérard comme invité d'honneur. Le rendez-vous incontournable !"
                    imageSrc="/images/hero/hero-festival.webp"
                    imageAlt="Marché de céramistes en plein air"
                    href="/ceramique-en-fete"
                    ctaLabel="Découvrir le programme"
                    variant="extended"
                  />
                  <FeatureCard
                    title="Nos ateliers de céramique"
                    description="Tournage, modelage, émaillage... Rejoignez nos ateliers hebdomadaires pour enfants (dès 6 ans) et adultes."
                    imageSrc="/images/hero/hero-ateliers.webp"
                    imageAlt="Atelier de poterie en cours"
                    href="/activites"
                    ctaLabel="Voir les ateliers"
                  />
                  <FeatureCard
                    title="Visiter le musée"
                    description="Plus de 200 céramiques du XIVe au XIXe siècle témoignent de 600 ans de tradition potière à Sadirac."
                    imageSrc="/images/hero/hero-musee.webp"
                    imageAlt="Collections du musée"
                    href="/musee"
                    ctaLabel="Découvrir"
                  />
                </>
              )}
            </div>
          </div>
        </section>

        {/* Notre Patrimoine Section */}
        <section id="hero-presentation" className="section-p-default background--neutral">
          <div className="wrapper">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "var(--dimension-500)",
                alignItems: "center",
              }}
              className="lg:grid-cols-2"
            >
              <div className="text--light">
                <span
                  className="body-style1-200"
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    opacity: 0.8,
                    marginBottom: "var(--dimension-100)",
                    display: "block",
                  }}
                >
                  Depuis le XIVe siècle
                </span>
                <h2 className="title-style4-600" style={{ marginBottom: "var(--dimension-300)" }}>
                  Un patrimoine vivant au coeur de l&apos;Entre-deux-Mers
                </h2>
                <p className="body-style1-500" style={{ marginBottom: "var(--dimension-300)", opacity: 0.9 }}>
                  Sadirac fut l&apos;un des plus importants centres potiers du Sud-Ouest.
                  Au XVIIIe siècle, <strong>150 familles de potiers</strong> y travaillaient,
                  exportant leurs créations dans toute la région.
                </p>
                <p className="body-style1-400" style={{ marginBottom: "var(--dimension-400)", opacity: 0.8 }}>
                  Aujourd&apos;hui, l&apos;AGAP (Association des Gens et Amis de la Poterie)
                  préserve et transmet ce patrimoine exceptionnel à travers la Maison de la Poterie :
                  musée, ateliers et événements culturels.
                </p>
                <div style={{ display: "flex", gap: "var(--dimension-200)", flexWrap: "wrap" }}>
                  <Button href="/association/presentation" variant="secondary">
                    Notre histoire
                  </Button>
                  <Button href="/musee/permanentes" variant="tertiary">
                    Les collections
                  </Button>
                </div>
              </div>
              <div
                className="media media-ratio-4-5"
                style={{ borderRadius: "var(--radius-large)", overflow: "hidden" }}
              >
                <img
                  src="/images/musee/collection-utilitaires.webp"
                  alt="Poteries traditionnelles de Sadirac"
                  className="media__image object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Musée & Collections */}
        <section id="musee-collections" className="section-p-default">
          <div className="wrapper">
            <SectionHeader
              title="Le Musée"
              subtitle="Plus de 500 pièces témoignant de plusieurs siècles de tradition potière"
              align="center"
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "var(--dimension-300)",
                marginTop: "var(--dimension-400)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-large)",
                  overflow: "hidden",
                }}
              >
                <div className="media media-ratio-16-9">
                  <img
                    src="/images/musee/collection-outils.webp"
                    alt="Collections permanentes du musée"
                    className="media__image object-cover"
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "var(--dimension-300)",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                    color: "white",
                  }}
                >
                  <h3 className="title-style1-500">Collections permanentes</h3>
                  <p className="body-style1-200" style={{ opacity: 0.9, marginTop: "var(--dimension-050)" }}>
                    Poteries utilitaires, outils, four à bois
                  </p>
                  <a
                    href="/musee/permanentes"
                    className="link"
                    style={{ color: "white", marginTop: "var(--dimension-100)", display: "inline-block" }}
                  >
                    Découvrir →
                  </a>
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-large)",
                  overflow: "hidden",
                }}
              >
                <div className="media media-ratio-16-9">
                  <img
                    src="/images/musee/collection-decoratives.webp"
                    alt="Exposition temporaire Terres Croisées"
                    className="media__image object-cover"
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "var(--dimension-300)",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                    color: "white",
                  }}
                >
                  <h3 className="title-style1-500">Exposition temporaire</h3>
                  <p className="body-style1-200" style={{ opacity: 0.9, marginTop: "var(--dimension-050)" }}>
                    &ldquo;Terres Croisées&rdquo; jusqu&apos;au 15 mars 2025
                  </p>
                  <a
                    href="/musee/temporaires"
                    className="link"
                    style={{ color: "white", marginTop: "var(--dimension-100)", display: "inline-block" }}
                  >
                    En savoir plus →
                  </a>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "var(--dimension-400)" }}>
              <Button href="/musee" variant="primary" size="300">
                Planifier ma visite
              </Button>
            </div>
          </div>
        </section>

        {/* Nos Activités Section */}
        <section id="activites-prochaines" className="section-p-default" style={{ backgroundColor: "var(--color-grey-100)" }}>
          <div className="wrapper">
            <SectionHeader
              title="Nos activités"
              subtitle="Vivez l'expérience de la céramique"
              align="center"
            />
            <div className="content-grid" style={{ marginTop: "var(--dimension-400)" }}>
              <FeatureCard
                title="Ateliers hebdomadaires"
                description="Enfants dès 6 ans (120€/trim.) et adultes (140€/trim.). Tournage, modelage, décoration avec des céramistes professionnels."
                imageSrc="/images/hero/hero-ateliers.webp"
                imageAlt="Atelier de tournage"
                href="/activites/ateliers"
                ctaLabel="Voir les ateliers"
                align="center"
              />
              <FeatureCard
                title="Stages intensifs"
                description="De 1 à 2 jours pour approfondir une technique : tournage, modelage, raku, émaillage. À partir de 100€."
                imageSrc="/images/activites/stages/stage-raku.webp"
                imageAlt="Stage de céramique raku"
                href="/activites/stages"
                ctaLabel="Voir les stages"
                align="center"
              />
              <FeatureCard
                title="Parcours scolaires"
                description="De la maternelle au lycée, des visites et ateliers adaptés à chaque niveau. Dossier pédagogique fourni."
                imageSrc="/images/hero/hero-parcours.webp"
                imageAlt="Visite scolaire au musée"
                href="/activites/parcours"
                ctaLabel="Réserver une visite"
                align="center"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials
          title="Ce qu'ils en disent"
          subtitle="Découvrez les avis de nos visiteurs et participants"
          testimonials={[
            {
              quote: "Une découverte magnifique ! Le musée est passionnant et l'atelier de tournage avec Jeremy était un moment inoubliable. Je recommande vivement.",
              author: "Marie Dupont",
              role: "Participante atelier adultes",
              rating: 5,
            },
            {
              quote: "Mes enfants ont adoré leur stage de poterie. L'équipe est très pédagogue et patiente. Ils sont repartis avec leurs créations et des étoiles dans les yeux !",
              author: "Thomas Bernard",
              role: "Parent d'élèves",
              rating: 5,
            },
            {
              quote: "Céramique en Fête est devenu notre rendez-vous annuel en famille. L'ambiance est chaleureuse, les artisans passionnés. Une vraie fête de la terre !",
              author: "Sophie Martin",
              role: "Visiteuse fidèle depuis 2019",
              rating: 5,
            },
          ]}
        />

        {/* Céramique en Fête - Bannière */}
        <section id="ceramique-en-fete" className="section-p-default background--neutral">
          <div className="wrapper">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "var(--dimension-500)",
                alignItems: "center",
              }}
              className="lg:grid-cols-2"
            >
              <div
                className="media media-ratio-16-9"
                style={{ borderRadius: "var(--radius-large)", overflow: "hidden" }}
              >
                <img
                  src="/images/hero/hero-festival.webp"
                  alt="Céramique en Fête - marché des créateurs"
                  className="media__image object-cover"
                />
              </div>
              <div className="text--light">
                <span
                  className="body-style1-200"
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    opacity: 0.8,
                    marginBottom: "var(--dimension-100)",
                    display: "block",
                  }}
                >
                  7 & 8 juin 2026
                </span>
                <h2 className="title-style4-600" style={{ marginBottom: "var(--dimension-300)" }}>
                  Céramique en Fête
                </h2>
                <p className="body-style1-500" style={{ marginBottom: "var(--dimension-300)", opacity: 0.9 }}>
                  Le rendez-vous annuel des passionnés de céramique ! Pendant deux jours,
                  rencontrez plus de <strong>40 céramistes</strong>, participez à des ateliers,
                  assistez à la cuisson du four à bois et découvrez des pièces uniques.
                </p>
                <ul style={{ marginBottom: "var(--dimension-400)", opacity: 0.85 }}>
                  <li className="body-style1-400" style={{ marginBottom: "var(--dimension-100)" }}>
                    ✓ Marché des créateurs
                  </li>
                  <li className="body-style1-400" style={{ marginBottom: "var(--dimension-100)" }}>
                    ✓ Démonstrations de tournage et raku
                  </li>
                  <li className="body-style1-400" style={{ marginBottom: "var(--dimension-100)" }}>
                    ✓ Ateliers pour petits et grands
                  </li>
                  <li className="body-style1-400">
                    ✓ Cuisson du four à bois traditionnel
                  </li>
                </ul>
                <div style={{ display: "flex", gap: "var(--dimension-200)", flexWrap: "wrap" }}>
                  <Button href="/ceramique-en-fete/edition-2026" variant="secondary">
                    Voir le programme
                  </Button>
                  <Button href="/ceramique-en-fete" variant="tertiary">
                    Toutes les éditions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infos pratiques Section */}
        <section id="infos-pratiques" className="section-p-default" style={{ backgroundColor: "var(--color-grey-200)" }}>
          <div className="wrapper">
            <SectionHeader title="Informations pratiques" align="center" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "var(--dimension-300)",
                marginTop: "var(--dimension-400)",
              }}
            >
              {/* Horaires */}
              <InfoCard icon="clock" title="Horaires du musée">
                <p><strong>Mercredi - Dimanche</strong></p>
                <p>14h00 - 18h00</p>
                <p style={{ marginTop: "var(--dimension-150)" }}>
                  <strong>Groupes & scolaires</strong>
                </p>
                <p>Sur réservation du mardi au vendredi</p>
                <p style={{ marginTop: "var(--dimension-150)", fontStyle: "italic", fontSize: "var(--size-500)" }}>
                  Fermé en janvier et jours fériés
                </p>
              </InfoCard>

              {/* Tarifs */}
              <InfoCard icon="euro" title="Tarifs">
                <p><strong>Entrée musée :</strong> Gratuit</p>
                <p><strong>Visite guidée :</strong> 3€/pers.</p>
                <p style={{ marginTop: "var(--dimension-150)" }}>
                  <strong>Ateliers enfants :</strong> 120€/trim.
                </p>
                <p><strong>Ateliers adultes :</strong> 140€/trim.</p>
                <p style={{ marginTop: "var(--dimension-150)" }}>
                  <strong>Adhésion AGAP :</strong> 10€ ou 20€/an
                </p>
              </InfoCard>

              {/* Accès */}
              <InfoCard icon="map" title="Nous trouver">
                <p><strong>Maison de la Poterie</strong></p>
                <p>Place Fouragnan</p>
                <p>33670 Sadirac</p>
                <p style={{ marginTop: "var(--dimension-150)" }}>
                  <strong>Tél :</strong>{" "}
                  <a href="tel:+33781324294" className="link">07 81 32 42 94</a>
                </p>
                <p>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:centreceramique33@gmail.com" className="link">centreceramique33@gmail.com</a>
                </p>
              </InfoCard>

              {/* Accessibilité */}
              <InfoCard icon="accessibility" title="Accessibilité">
                <p><strong>Accès PMR :</strong> Partiel</p>
                <p>Rez-de-chaussée accessible</p>
                <p style={{ marginTop: "var(--dimension-150)" }}>
                  <strong>Parking :</strong> Gratuit sur place
                </p>
                <p style={{ marginTop: "var(--dimension-150)" }}>
                  <strong>Transports :</strong> Ligne 404
                </p>
                <p>Arrêt &ldquo;Sadirac Centre&rdquo;</p>
              </InfoCard>
            </div>
            <div style={{ textAlign: "center", marginTop: "var(--dimension-400)" }}>
              <Button href="/contact" variant="primary" size="300">
                Nous contacter
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section-p-default">
          <div className="wrapper" style={{ maxWidth: "600px" }}>
            <div style={{ textAlign: "center" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-200)" }}>
                Restez informé
              </h2>
              <p
                className="body-style1-300 text-content-default-tertiary"
                style={{ marginBottom: "var(--dimension-400)" }}
              >
                Inscrivez-vous à notre newsletter pour recevoir les dernières
                actualités, les dates de nos événements et les ouvertures d&apos;inscriptions.
              </p>
              <form
                style={{
                  display: "flex",
                  gap: "var(--dimension-150)",
                  flexDirection: "column",
                }}
              >
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  required
                  style={{
                    padding: "var(--dimension-150) var(--dimension-200)",
                    borderRadius: "var(--radius-primary)",
                    border: "1px solid var(--color-border-input-primary)",
                    fontSize: "var(--size-600)",
                    width: "100%",
                  }}
                />
                <Button type="submit" variant="primary" size="300" fullWidth>
                  S&apos;inscrire à la newsletter
                </Button>
              </form>
              <p
                className="body-style1-100 text-content-default-tertiary"
                style={{ marginTop: "var(--dimension-200)" }}
              >
                En vous inscrivant, vous acceptez notre{" "}
                <a href="/confidentialite" className="link">
                  politique de confidentialité
                </a>
                . Vous pouvez vous désinscrire à tout moment.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
