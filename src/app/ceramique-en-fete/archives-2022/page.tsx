import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Céramique en Fête 2022 | Archives",
  description: "Retour sur l'édition 2022 de Céramique en Fête à Sadirac.",
};

const moments = [
  {
    title: "35 exposants",
    description: "Artisans et créateurs",
  },
  {
    title: "1 800 visiteurs",
    description: "Après deux ans sans événement",
  },
  {
    title: "10 ateliers",
    description: "Pour tous les âges",
  },
  {
    title: "Le retour",
    description: "Après la pause Covid",
  },
];

const galerie = [
  "/images/musee/collection-utilitaires.webp",
  "/images/musee/collection-moules-sucre.webp",
  "/images/musee/collection-decoratives.webp",
  "/images/musee/collection-outils.webp",
];

export default function Archives2022Page() {
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
                Céramique en Fête 2022
              </h1>
              <p className="body-style1-500 text-content-default-tertiary">
                Le grand retour après deux années d&apos;interruption.
              </p>
            </div>
          </div>
        </section>

        {/* Chiffres clés */}
        <section className="section-p-default">
          <div className="wrapper">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "var(--dimension-300)",
              }}
            >
              {moments.map((moment, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: "center",
                    padding: "var(--dimension-300)",
                  }}
                >
                  <p
                    className="title-style4-600"
                    style={{ color: "var(--color-trail-dust-600)", marginBottom: "var(--dimension-100)" }}
                  >
                    {moment.title}
                  </p>
                  <p className="body-style1-300 text-content-default-tertiary">
                    {moment.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section
          className="section-p-default"
          style={{ backgroundColor: "var(--color-grey-100)" }}
        >
          <div className="wrapper">
            <h2
              className="title-style1-600"
              style={{ textAlign: "center", marginBottom: "var(--dimension-400)" }}
            >
              Galerie photos
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "var(--dimension-200)",
              }}
            >
              {galerie.map((photo, index) => (
                <div
                  key={index}
                  className="media media-ratio-1-1"
                  style={{ borderRadius: "var(--radius-primary)", overflow: "hidden" }}
                >
                  <img
                    src={photo}
                    alt={`Céramique en Fête 2022 - Photo ${index + 1}`}
                    className="media__image object-cover"
                  />
                </div>
              ))}
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
              <Button href="/ceramique-en-fete/archives-2023" variant="secondary" size="300">
                Archives 2023
              </Button>
              <Button href="/ceramique-en-fete/archives-anterieures" variant="secondary" size="300">
                Archives antérieures
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
