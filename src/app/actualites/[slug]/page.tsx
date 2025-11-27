import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { client } from "../../../../sanity/lib/client";
import { actualiteBySlugQuery } from "../../../../sanity/lib/queries";
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

            {/* Call to action */}
            <div
              style={{
                marginTop: "var(--dimension-500)",
                padding: "var(--dimension-400)",
                backgroundColor: "var(--color-background-secondary)",
                borderRadius: "var(--radius-primary)",
                textAlign: "center",
              }}
            >
              <p className="body-style1-400" style={{ marginBottom: "var(--dimension-200)" }}>
                Une question ? Contactez-nous !
              </p>
              <a href="/contact" className="btn btn--primary">
                Nous contacter
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
