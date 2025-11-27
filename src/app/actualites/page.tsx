import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/sections/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";

export const metadata = {
  title: "Actualités",
  description:
    "Suivez l'actualité de la Maison de la Poterie de Sadirac : événements, expositions temporaires, nouveaux ateliers et vie de l'AGAP.",
  keywords: ["actualités céramique Sadirac", "événements poterie Gironde", "expositions AGAP"],
};

const actualites = [
  {
    title: "Céramique en Fête 2026 : le programme dévoilé",
    description:
      "Découvrez le programme complet de la nouvelle édition qui se tiendra les 7 et 8 juin 2026.",
    date: "15 novembre 2025",
    imageSrc: "/images/hero/hero-festival.webp",
    imageAlt: "Céramique en Fête 2026",
    href: "/ceramique-en-fete/edition-2026",
  },
  {
    title: "Nouvelle exposition : Terres Croisées",
    description:
      "À partir du 15 septembre, découvrez le travail de Jeremy Coleman, Eukeni Callejo et Laure Carpené.",
    date: "1er septembre 2025",
    imageSrc: "/images/activites/ateliers/jeremy-coleman.webp",
    imageAlt: "Exposition Terres Croisées",
    href: "/musee/temporaires",
  },
  {
    title: "Stages d'hiver : inscriptions ouvertes",
    description:
      "Les inscriptions pour nos stages de décembre et janvier sont ouvertes ! Tournage, modelage, raku...",
    date: "20 octobre 2025",
    imageSrc: "/images/hero/hero-stages.webp",
    imageAlt: "Stages de céramique",
    href: "/activites/stages",
  },
  {
    title: "Retour sur Céramique en Fête 2024",
    description:
      "50 exposants, 2 500 visiteurs : retour en images sur une édition réussie.",
    date: "15 septembre 2025",
    imageSrc: "/images/musee/piece-decorative.webp",
    imageAlt: "Céramique en Fête 2024",
    href: "/ceramique-en-fete/archives-2024",
  },
  {
    title: "Partenariat avec les écoles de Bordeaux Métropole",
    description:
      "Le musée accueillera plus de 2000 élèves cette année dans le cadre de son programme pédagogique.",
    date: "1er septembre 2025",
    imageSrc: "/images/activites/ateliers/atelier-enfants.webp",
    imageAlt: "Programme scolaire",
    href: "/activites/parcours",
  },
  {
    title: "Nouveaux ateliers adultes : tournage avancé",
    description:
      "Un nouvel atelier pour les céramistes confirmés souhaitant perfectionner leur technique de tournage.",
    date: "15 août 2025",
    imageSrc: "/images/hero/hero-ateliers.webp",
    imageAlt: "Atelier tournage avancé",
    href: "/activites/ateliers",
  },
];

export default function ActualitesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "var(--dimension-700)" }}>
        <section className="section-p-default section-pt-none">
          <div className="wrapper">
            <div style={{ marginBottom: "var(--dimension-500)" }}>
              <h1 className="title-style4-700" style={{ marginBottom: "var(--dimension-200)" }}>
                Actualités
              </h1>
              <p className="body-style1-500 text-content-default-tertiary">
                Suivez toute l&apos;actualité du musée et de l&apos;association
              </p>
            </div>

            <div className="content-grid">
              {actualites.map((actu, index) => (
                <article
                  key={index}
                  style={{
                    backgroundColor: "var(--color-core-white)",
                    borderRadius: "var(--radius-primary)",
                    overflow: "hidden",
                  }}
                >
                  <div className="media media-ratio-16-9">
                    <img
                      src={actu.imageSrc}
                      alt={actu.imageAlt}
                      className="media__image object-cover"
                    />
                  </div>
                  <div style={{ padding: "var(--dimension-300)" }}>
                    <p
                      className="body-style1-100 text-content-default-tertiary"
                      style={{ marginBottom: "var(--dimension-100)" }}
                    >
                      {actu.date}
                    </p>
                    <h2 className="title-style1-400" style={{ marginBottom: "var(--dimension-150)" }}>
                      <a href={actu.href} className="link-nav">
                        {actu.title}
                      </a>
                    </h2>
                    <p className="body-style1-300 text-content-default-tertiary">
                      {actu.description}
                    </p>
                    <a
                      href={actu.href}
                      className="link title-style1-200"
                      style={{ display: "inline-block", marginTop: "var(--dimension-200)" }}
                    >
                      Lire la suite
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination placeholder */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "var(--dimension-100)",
                marginTop: "var(--dimension-500)",
              }}
            >
              <button className="button button--tertiary button--100">1</button>
              <button className="button button--secondary button--100">2</button>
              <button className="button button--secondary button--100">3</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
