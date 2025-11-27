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

// Données statiques de fallback
const actualitesStatiques = [
  {
    _id: "static-1",
    titre: "Céramique en Fête 2026 : le programme dévoilé",
    extrait: "Découvrez le programme complet de la nouvelle édition qui se tiendra les 7 et 8 juin 2026.",
    datePublication: "2025-11-15",
    imageSrc: "/images/hero/hero-festival.webp",
    slug: { current: "ceramique-en-fete-2026" },
    categorie: "evenement",
  },
  {
    _id: "static-2",
    titre: "Nouvelle exposition : Terres Croisées",
    extrait: "À partir du 15 septembre, découvrez le travail de Jeremy Coleman, Eukeni Callejo et Laure Carpené.",
    datePublication: "2025-09-01",
    imageSrc: "/images/activites/ateliers/jeremy-coleman.webp",
    slug: { current: "exposition-terres-croisees" },
    categorie: "exposition",
  },
  {
    _id: "static-3",
    titre: "Stages d'hiver : inscriptions ouvertes",
    extrait: "Les inscriptions pour nos stages de décembre et janvier sont ouvertes ! Tournage, modelage, raku...",
    datePublication: "2025-10-20",
    imageSrc: "/images/hero/hero-stages.webp",
    slug: { current: "stages-hiver-2025" },
    categorie: "atelier",
  },
];

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
    if (data && data.length > 0) {
      return [...data, ...actualitesStatiques];
    }
    return actualitesStatiques;
  } catch {
    return actualitesStatiques;
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

export default async function ActualitesPage() {
  const actualites = await getActualites();

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
              {actualites.map((actu) => (
                <article
                  key={actu._id}
                  style={{
                    backgroundColor: "var(--color-core-white)",
                    borderRadius: "var(--radius-primary)",
                    overflow: "hidden",
                  }}
                >
                  <div className="media media-ratio-16-9">
                    <img
                      src={actu.imageSrc || "/images/hero/hero-festival.webp"}
                      alt={actu.titre}
                      className="media__image object-cover"
                    />
                  </div>
                  <div style={{ padding: "var(--dimension-300)" }}>
                    <p
                      className="body-style1-100 text-content-default-tertiary"
                      style={{ marginBottom: "var(--dimension-100)" }}
                    >
                      {formatDate(actu.datePublication)}
                    </p>
                    <h2 className="title-style1-400" style={{ marginBottom: "var(--dimension-150)" }}>
                      <a href={`/actualites/${actu.slug.current}`} className="link-nav">
                        {actu.titre}
                      </a>
                    </h2>
                    <p className="body-style1-300 text-content-default-tertiary">
                      {actu.extrait}
                    </p>
                    <a
                      href={`/actualites/${actu.slug.current}`}
                      className="link title-style1-200"
                      style={{ display: "inline-block", marginTop: "var(--dimension-200)" }}
                    >
                      Lire la suite
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
