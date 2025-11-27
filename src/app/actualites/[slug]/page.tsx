import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { client } from "../../../../sanity/lib/client";
import { actualiteBySlugQuery, articlesReliesQuery, autresArticlesQuery } from "../../../../sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export const revalidate = 0;

interface Actualite {
  _id: string;
  titre: string;
  extrait: string;
  datePublication: string;
  imageSrc: string | null;
  slug: { current: string };
  categorie: string;
  contenu: any[];
}

async function getActualite(slug: string): Promise<Actualite | null> {
  try {
    const data = await client.fetch(actualiteBySlugQuery, { slug });
    return data;
  } catch {
    return null;
  }
}

async function getArticlesRelies(currentSlug: string, categorie: string): Promise<Actualite[]> {
  try {
    let articles = await client.fetch(articlesReliesQuery, { currentSlug, categorie });
    if (!articles || articles.length === 0) {
      articles = await client.fetch(autresArticlesQuery, { currentSlug });
    }
    return articles || [];
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const actualite = await getActualite(slug);

  if (!actualite) {
    return { title: "Article non trouvé" };
  }

  return {
    title: actualite.titre,
    description: actualite.extrait || `Actualité de la Maison de la Poterie de Sadirac`,
  };
}

export default async function ActualitePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const actualite = await getActualite(slug);

  if (!actualite) {
    notFound();
  }

  const articlesRelies = await getArticlesRelies(slug, actualite.categorie);

  return (
    <>
      <Header />
      <main style={{ paddingTop: "var(--dimension-800)", minHeight: "100vh" }}>
        <article className="section-p-default">
          <div className="wrapper" style={{ maxWidth: "800px" }}>
            {/* Breadcrumb */}
            <nav style={{ marginBottom: "var(--dimension-400)", paddingTop: "var(--dimension-200)" }}>
              <a
                href="/actualites"
                className="link body-style1-300"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--dimension-100)",
                  color: "var(--color-trail-dust-600)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                <span style={{ fontSize: "1.2em" }}>←</span> Retour aux actualités
              </a>
            </nav>

            {/* Header de l'article */}
            <header style={{ marginBottom: "var(--dimension-400)" }}>
              {actualite.categorie && (
                <span
                  className="body-style1-100"
                  style={{
                    display: "inline-block",
                    padding: "var(--dimension-50) var(--dimension-150)",
                    backgroundColor: "var(--color-trail-dust-600)",
                    color: "var(--color-core-white)",
                    borderRadius: "var(--radius-primary)",
                    marginBottom: "var(--dimension-200)",
                  }}
                >
                  {categorieLabels[actualite.categorie] || actualite.categorie}
                </span>
              )}

              <h1
                className="title-style4-600"
                style={{ marginBottom: "var(--dimension-200)" }}
              >
                {actualite.titre}
              </h1>

              <p className="body-style1-300 text-content-default-tertiary">
                Publié le {formatDate(actualite.datePublication)}
              </p>
            </header>

            {/* Image principale */}
            {actualite.imageSrc && (
              <div
                className="media media-ratio-16-9"
                style={{
                  marginBottom: "var(--dimension-400)",
                  borderRadius: "var(--radius-primary)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={actualite.imageSrc}
                  alt={actualite.titre}
                  className="media__image object-cover"
                />
              </div>
            )}

            {/* Extrait */}
            {actualite.extrait && (
              <p
                className="body-style1-500"
                style={{
                  marginBottom: "var(--dimension-400)",
                  color: "var(--color-content-default-secondary)",
                  fontStyle: "italic",
                }}
              >
                {actualite.extrait}
              </p>
            )}

            {/* Contenu */}
            {actualite.contenu && actualite.contenu.length > 0 && (
              <div className="prose" style={{ lineHeight: 1.7 }}>
                <PortableText value={actualite.contenu} />
              </div>
            )}

            {/* Maillage interne - Liens contextuels */}
            <div
              style={{
                marginTop: "var(--dimension-500)",
                padding: "var(--dimension-400)",
                backgroundColor: "var(--color-background-secondary)",
                borderRadius: "var(--radius-primary)",
              }}
            >
              <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-200)" }}>
                Découvrir aussi
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "var(--dimension-100)" }}>
                  <a href="/musee" className="link body-style1-300">
                    → Visiter le musée de la céramique
                  </a>
                </li>
                <li style={{ marginBottom: "var(--dimension-100)" }}>
                  <a href="/activites" className="link body-style1-300">
                    → Nos ateliers et stages de poterie
                  </a>
                </li>
                <li style={{ marginBottom: "var(--dimension-100)" }}>
                  <a href="/ceramique-en-fete" className="link body-style1-300">
                    → Le Festival Céramique en Fête
                  </a>
                </li>
                <li>
                  <a href="/contact" className="link body-style1-300">
                    → Nous contacter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>

        {/* Articles reliés */}
        {articlesRelies.length > 0 && (
          <section
            className="section-p-default"
            style={{ backgroundColor: "var(--color-core-white)" }}
          >
            <div className="wrapper">
              <h2 className="title-style4-500" style={{ marginBottom: "var(--dimension-400)" }}>
                Articles similaires
              </h2>
              <div className="content-grid">
                {articlesRelies.map((article) => (
                  <article
                    key={article._id}
                    style={{
                      backgroundColor: "var(--color-background-secondary)",
                      borderRadius: "var(--radius-primary)",
                      overflow: "hidden",
                    }}
                  >
                    <a href={`/actualites/${article.slug.current}`} style={{ display: "block" }}>
                      <div className="media media-ratio-16-9">
                        <img
                          src={article.imageSrc || "/images/hero/hero-festival.webp"}
                          alt={article.titre}
                          className="media__image object-cover"
                        />
                      </div>
                    </a>
                    <div style={{ padding: "var(--dimension-250)" }}>
                      {article.categorie && (
                        <span
                          className="body-style1-100"
                          style={{
                            display: "inline-block",
                            padding: "var(--dimension-50) var(--dimension-100)",
                            backgroundColor: "var(--color-trail-dust-600)",
                            color: "var(--color-core-white)",
                            borderRadius: "var(--radius-primary)",
                            marginBottom: "var(--dimension-100)",
                            fontSize: "0.7rem",
                          }}
                        >
                          {categorieLabels[article.categorie] || article.categorie}
                        </span>
                      )}
                      <h3 className="title-style1-300" style={{ marginBottom: "var(--dimension-100)" }}>
                        <a href={`/actualites/${article.slug.current}`} className="link-nav">
                          {article.titre}
                        </a>
                      </h3>
                      <p
                        className="body-style1-200 text-content-default-tertiary"
                        style={{
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {article.extrait}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to action */}
        <section className="section-p-default">
          <div className="wrapper" style={{ maxWidth: "800px", textAlign: "center" }}>
            <h2 className="title-style4-400" style={{ marginBottom: "var(--dimension-200)" }}>
              Une question ? Contactez-nous !
            </h2>
            <p className="body-style1-400 text-content-default-tertiary" style={{ marginBottom: "var(--dimension-300)" }}>
              L&apos;équipe de la Maison de la Poterie est à votre disposition pour répondre à vos questions.
            </p>
            <div style={{ display: "flex", gap: "var(--dimension-200)", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/contact" className="btn btn--primary">
                Nous contacter
              </a>
              <a href="/actualites" className="btn btn--secondary">
                Toutes les actualités
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
