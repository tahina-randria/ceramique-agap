import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { client } from "../../../sanity/lib/client";
import { actualitesQuery } from "../../../sanity/lib/queries";

export const revalidate = 0;

export const metadata = {
  title: "Actualités",
  description:
    "Suivez l'actualité de la Maison de la Poterie de Sadirac : événements, expositions temporaires, nouveaux ateliers et vie de l'AGAP.",
  keywords: ["actualités céramique Sadirac", "événements poterie Gironde", "expositions AGAP"],
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

async function getActualites(): Promise<Actualite[]> {
  try {
    const data = await client.fetch(actualitesQuery);
    return data || [];
  } catch {
    return [];
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const categorieLabels: Record<string, string> = {
  evenement: "Événement",
  exposition: "Exposition",
  atelier: "Atelier",
  association: "Association",
  musee: "Musée",
};

export default async function ActualitesPage() {
  const actualites = await getActualites();

  return (
    <>
      <Header />
      <main style={{ paddingTop: "var(--dimension-800)", minHeight: "100vh" }}>
        <section className="section-p-default">
          <div className="wrapper">
            <div style={{ marginBottom: "var(--dimension-500)", paddingTop: "var(--dimension-200)" }}>
              <h1 className="title-style4-700" style={{ marginBottom: "var(--dimension-200)" }}>
                Actualités
              </h1>
              <p className="body-style1-500 text-content-default-tertiary">
                Suivez toute l&apos;actualité du musée et de l&apos;association
              </p>
            </div>

            {actualites.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "var(--dimension-600)",
                  backgroundColor: "var(--color-core-white)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <p className="body-style1-400 text-content-default-tertiary">
                  Aucune actualité pour le moment.
                </p>
                <p className="body-style1-300 text-content-default-tertiary" style={{ marginTop: "var(--dimension-100)" }}>
                  Revenez bientôt pour découvrir nos dernières nouvelles !
                </p>
              </div>
            ) : (
              <div className="content-grid">
                {actualites.map((actu) => (
                  <article
                    key={actu._id}
                    style={{
                      backgroundColor: "var(--color-core-white)",
                      borderRadius: "var(--radius-primary)",
                      overflow: "hidden",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                  >
                    <a href={`/actualites/${actu.slug.current}`} style={{ display: "block" }}>
                      <div className="media media-ratio-16-9">
                        <img
                          src={actu.imageSrc || "/images/hero/hero-festival.webp"}
                          alt={actu.titre}
                          className="media__image object-cover"
                        />
                      </div>
                    </a>
                    <div style={{ padding: "var(--dimension-300)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "var(--dimension-150)", marginBottom: "var(--dimension-150)" }}>
                        {actu.categorie && (
                          <span
                            className="body-style1-100"
                            style={{
                              padding: "var(--dimension-50) var(--dimension-100)",
                              backgroundColor: "var(--color-trail-dust-600)",
                              color: "var(--color-core-white)",
                              borderRadius: "var(--radius-primary)",
                              fontSize: "0.75rem",
                            }}
                          >
                            {categorieLabels[actu.categorie] || actu.categorie}
                          </span>
                        )}
                        <span className="body-style1-100 text-content-default-tertiary">
                          {formatDate(actu.datePublication)}
                        </span>
                      </div>
                      <h2 className="title-style1-400" style={{ marginBottom: "var(--dimension-150)" }}>
                        <a href={`/actualites/${actu.slug.current}`} className="link-nav">
                          {actu.titre}
                        </a>
                      </h2>
                      <p className="body-style1-300 text-content-default-tertiary" style={{ marginBottom: "var(--dimension-200)" }}>
                        {actu.extrait || "Cliquez pour lire l'article complet."}
                      </p>
                      <a
                        href={`/actualites/${actu.slug.current}`}
                        className="link title-style1-200"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "var(--dimension-50)",
                          color: "var(--color-trail-dust-600)",
                        }}
                      >
                        Lire la suite <span>→</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
