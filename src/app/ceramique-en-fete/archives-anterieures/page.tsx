import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Archives antérieures | Céramique en Fête",
  description: "Retour sur les éditions 2015 à 2019 de Céramique en Fête à Sadirac.",
};

const editions = [
  {
    year: "2019",
    title: "Édition 2019",
    description: "La dernière édition avant la pandémie. 40 exposants et plus de 2 200 visiteurs pour un week-end mémorable.",
    highlights: ["40 exposants", "2 200 visiteurs", "Cuisson four à bois"],
  },
  {
    year: "2018",
    title: "Édition 2018",
    description: "Une édition sous le signe de l'innovation avec des démonstrations de nouvelles techniques.",
    highlights: ["35 exposants", "1 900 visiteurs", "Démonstrations raku"],
  },
  {
    year: "2017",
    title: "Édition 2017",
    description: "Le 20e anniversaire de l'événement célébré avec une exposition rétrospective.",
    highlights: ["Exposition rétrospective", "Anciens exposants invités", "Concert"],
  },
  {
    year: "2016",
    title: "Édition 2016",
    description: "Focus sur la céramique contemporaine avec des artistes invités d'autres régions.",
    highlights: ["Artistes invités", "30 exposants", "Ateliers enfants"],
  },
  {
    year: "2015",
    title: "Édition 2015",
    description: "Une édition conviviale qui a posé les bases du format actuel.",
    highlights: ["25 exposants", "1 500 visiteurs", "Marché des créateurs"],
  },
];

export default function ArchivesAnterieuresPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="section-p-default"
          style={{ backgroundColor: "var(--color-grey-200)", paddingTop: "var(--dimension-700)" }}
        >
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <span
                className="body-style1-200"
                style={{
                  color: "var(--color-trail-dust-600)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Archives
              </span>
              <h1 className="title-style4-700" style={{ marginTop: "var(--dimension-100)", marginBottom: "var(--dimension-200)" }}>
                Éditions antérieures
              </h1>
              <p className="body-style1-500 text-content-default-tertiary">
                Retour sur les éditions 2015 à 2019 de Céramique en Fête.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-p-default">
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              {editions.map((edition, index) => (
                <div
                  key={edition.year}
                  id={`edition-${edition.year}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: "var(--dimension-300)",
                    marginBottom: index < editions.length - 1 ? "var(--dimension-500)" : 0,
                    paddingBottom: index < editions.length - 1 ? "var(--dimension-500)" : 0,
                    borderBottom: index < editions.length - 1 ? "1px solid var(--color-grey-300)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "var(--color-trail-dust-600)",
                      color: "var(--color-core-white)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 600,
                      fontSize: "var(--size-600)",
                    }}
                  >
                    {edition.year}
                  </div>
                  <div>
                    <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-150)" }}>
                      {edition.title}
                    </h2>
                    <p
                      className="body-style1-400 text-content-default-tertiary"
                      style={{ marginBottom: "var(--dimension-200)" }}
                    >
                      {edition.description}
                    </p>
                    <div style={{ display: "flex", gap: "var(--dimension-100)", flexWrap: "wrap" }}>
                      {edition.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          style={{
                            backgroundColor: "var(--color-grey-200)",
                            padding: "var(--dimension-050) var(--dimension-150)",
                            borderRadius: "var(--radius-small)",
                            fontSize: "var(--size-500)",
                          }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Note historique */}
        <section
          className="section-p-default"
          style={{ backgroundColor: "var(--color-grey-100)" }}
        >
          <div className="wrapper">
            <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-300)" }}>
                Une tradition depuis 1997
              </h2>
              <p className="body-style1-400 text-content-default-tertiary">
                Céramique en Fête est né en 1997, à l&apos;initiative de l&apos;AGAP,
                pour célébrer le patrimoine potier de Sadirac et faire découvrir
                la céramique contemporaine au grand public. Depuis, l&apos;événement
                n&apos;a cessé de grandir, attirant chaque année plus de visiteurs
                et d&apos;exposants.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section
          className="section-p-default"
          style={{ backgroundColor: "var(--color-grey-200)" }}
        >
          <div className="wrapper">
            <div style={{ display: "flex", gap: "var(--dimension-200)", justifyContent: "center", flexWrap: "wrap" }}>
              <Button href="/ceramique-en-fete/edition-2026" variant="primary" size="300">
                Édition 2026
              </Button>
              <Button href="/ceramique-en-fete/archives-2022" variant="secondary" size="300">
                Archives 2022
              </Button>
              <Button href="/ceramique-en-fete" variant="tertiary" size="300">
                Retour
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
