import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/sections/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";

export const metadata = {
  title: "Ateliers & Cours de Céramique",
  description:
    "Ateliers de poterie pour enfants (dès 6 ans) et adultes à Sadirac. Tournage, modelage, émaillage avec des artistes céramistes professionnels. 120€/trimestre enfants, 140€/trimestre adultes.",
  keywords: ["atelier poterie Bordeaux", "cours céramique Gironde", "stage tournage", "modelage enfants adultes Sadirac"],
};

export default function ActivitesPage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Nos Activités"
          subtitle="Vivez l'expérience de la céramique"
          imageSrc="/images/hero/hero-activites.webp"
          imageAlt="Atelier de poterie en cours"
          primaryCta={{
            label: "Réserver un atelier",
            href: "/activites/ateliers",
          }}
        />

        {/* Introduction */}
        <section className="section-p-default">
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-300)" }}>
                Mettez les mains dans l&apos;argile
              </h2>
              <p className="body-style1-500 text-content-default-tertiary">
                Que vous soyez débutant curieux ou passionné confirmé, nous
                proposons des activités adaptées à tous les niveaux. Encadrés par
                des céramistes professionnels, découvrez le plaisir unique de
                façonner l&apos;argile et de créer vos propres pièces.
              </p>
            </div>
          </div>
        </section>

        {/* Types d'activités */}
        <section className="section-p-default section-pt-none">
          <div className="wrapper">
            <div className="content-grid">
              <FeatureCard
                title="Ateliers"
                description="Sessions de 2 à 3 heures pour s'initier au tournage, au modelage ou à la décoration. Repartez avec votre création !"
                imageSrc="/images/hero/hero-ateliers.webp"
                imageAlt="Atelier de tournage"
                href="/activites/ateliers"
                ctaLabel="Voir les ateliers"
                variant="extended"
              />
              <FeatureCard
                title="Stages"
                description="Immersion de 2 à 5 jours pour approfondir une technique : tournage, émaillage, cuisson raku..."
                imageSrc="/images/hero/hero-stages.webp"
                imageAlt="Stage de céramique"
                href="/activites/stages"
                ctaLabel="Voir les stages"
                variant="extended"
              />
              <FeatureCard
                title="Parcours découverte"
                description="Visites guidées du musée et des ateliers, avec démonstrations de potiers. Idéal pour les groupes et scolaires."
                imageSrc="/images/hero/hero-parcours.webp"
                imageAlt="Visite guidée"
                href="/activites/parcours"
                ctaLabel="Réserver une visite"
                variant="extended"
              />
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="section-p-default" style={{ backgroundColor: "var(--color-grey-200)" }}>
          <div className="wrapper">
            <SectionHeader title="Pour tous les publics" align="center" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "var(--dimension-300)",
                marginTop: "var(--dimension-400)",
              }}
            >
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                  textAlign: "center",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-100)" }}>
                  Enfants
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Ateliers ludiques dès 6 ans, anniversaires céramique, activités
                  périscolaires
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                  textAlign: "center",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-100)" }}>
                  Familles
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Ateliers parent-enfant, stages vacances, visites animées
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                  textAlign: "center",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-100)" }}>
                  Scolaires
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Programmes pédagogiques adaptés, de la maternelle au lycée
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                  textAlign: "center",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-100)" }}>
                  Entreprises
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Team building, séminaires créatifs, événements privés
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-p-default">
          <div className="wrapper">
            <div
              style={{
                backgroundColor: "var(--color-grey-900)",
                padding: "var(--dimension-500)",
                borderRadius: "var(--radius-large)",
                textAlign: "center",
              }}
            >
              <h2
                className="title-style4-600"
                style={{ marginBottom: "var(--dimension-300)", color: "var(--color-core-white)" }}
              >
                Prêt à créer ?
              </h2>
              <p
                className="body-style1-500"
                style={{
                  marginBottom: "var(--dimension-400)",
                  color: "var(--color-grey-300)",
                  maxWidth: "500px",
                  margin: "0 auto var(--dimension-400)",
                }}
              >
                Consultez notre calendrier et réservez votre prochaine expérience céramique.
              </p>
              <div style={{ display: "flex", gap: "var(--dimension-200)", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/activites/ateliers" className="button button--secondary button--300">
                  <span className="button__content">Voir les ateliers</span>
                </a>
                <a href="/contact" className="button button--tertiary button--300">
                  <span className="button__content">Nous contacter</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
