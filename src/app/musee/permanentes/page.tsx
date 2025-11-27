import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Collections Permanentes | Musée de la Poterie",
  description:
    "Découvrez les collections permanentes du Musée de la Poterie à Sadirac : poteries traditionnelles, moules à pain de sucre du commerce triangulaire, outils anciens et four à bois. Plus de 500 pièces retraçant l'histoire céramique de l'Entre-deux-Mers.",
  keywords: ["musée poterie Sadirac", "collection céramique Gironde", "moules pain de sucre", "commerce triangulaire Bordeaux", "patrimoine potier", "four à bois traditionnel"],
};

const collections = [
  {
    title: "Poteries utilitaires",
    period: "XVIIe - XIXe siècle",
    description:
      "Cruches, jarres, pichets et autres récipients du quotidien témoignent de l'art de vivre en Gironde. Ces pièces, fabriquées à Sadirac, étaient exportées dans tout le Sud-Ouest et au-delà.",
    pieces: ["Cruches à vin", "Jarres à huile", "Pichets vernissés", "Terrines"],
    image: "/images/musee/collection-utilitaires.webp",
  },
  {
    title: "Moules à pain de sucre",
    period: "XVIIe - XIXe siècle",
    description:
      "Collection unique témoignant du rôle de Sadirac dans le commerce triangulaire. Ces moules coniques servaient au raffinage du sucre de canne importé des Antilles. Le port de Bordeaux, plaque tournante du commerce colonial, a généré une demande massive de ces céramiques spécifiques.",
    pieces: ["Moules coniques", "Pots à mélasse", "Formes de raffinage", "Céramiques d'exportation"],
    image: "/images/musee/collection-moules-sucre.webp",
    highlight: true,
  },
  {
    title: "Poteries décoratives",
    period: "XIXe - XXe siècle",
    description:
      "Avec l'évolution des modes de vie et le déclin du commerce colonial, les potiers de Sadirac ont développé une production plus ornementale : vases, cache-pots et pièces d'apparat.",
    pieces: ["Vases d'ornement", "Cache-pots", "Pièces de mariage", "Objets commémoratifs"],
    image: "/images/musee/collection-decoratives.webp",
  },
  {
    title: "Outils du potier",
    period: "Époque moderne",
    description:
      "Une collection unique d'outils traditionnels : tours à pied, estèques, ébauchoirs... Tout l'équipement nécessaire au potier d'autrefois.",
    pieces: ["Tours à pied", "Moules en plâtre", "Outils de tournage", "Instruments de mesure"],
    image: "/images/musee/collection-outils.webp",
  },
];

const parcours = [
  {
    title: "L'argile de l'Entre-deux-Mers",
    description: "Découvrez l'origine géologique de l'argile locale et ses propriétés uniques qui ont fait la renommée de Sadirac.",
  },
  {
    title: "Le village potier",
    description: "Au XVIIIe siècle, 150 familles vivaient de la poterie à Sadirac, faisant du bourg l'un des plus grands centres potiers du Sud-Ouest.",
  },
  {
    title: "Le commerce triangulaire",
    description: "Comment les moules à sucre de Sadirac ont participé au raffinage du sucre colonial, révélant les liens entre artisanat local et commerce atlantique.",
  },
  {
    title: "Les techniques",
    description: "Du tournage à la cuisson au four à bois, les savoir-faire transmis de génération en génération.",
  },
];

export default function CollectionsPermanentesPage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Collections Permanentes"
          subtitle="Du XVIIe au XXe siècle : l'âge d'or de la poterie à Sadirac"
          imageSrc="/images/hero/hero-collections.webp"
          imageAlt="Collections du musée de la poterie"
          primaryCta={{
            label: "Planifier ma visite",
            href: "/musee",
          }}
        />

        {/* Introduction */}
        <section className="section-p-default">
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-300)" }}>
                Un patrimoine unique en Gironde
              </h2>
              <p className="body-style1-500 text-content-default-tertiary">
                Le musée de la Maison de la Poterie conserve une collection
                exceptionnelle de céramiques produites à Sadirac du XVIIe siècle
                à nos jours. À travers plus de 500 pièces, découvrez l&apos;histoire
                d&apos;un village entièrement voué à l&apos;art de la terre.
              </p>
            </div>
          </div>
        </section>

        {/* Parcours thématique */}
        <section
          className="section-p-default"
          style={{ backgroundColor: "var(--color-grey-200)" }}
        >
          <div className="wrapper">
            <div style={{ textAlign: "center", marginBottom: "var(--dimension-400)" }}>
              <h2 className="title-style4-600" style={{ marginBottom: "var(--dimension-200)" }}>
                Le parcours de visite
              </h2>
              <p className="body-style1-400 text-content-default-tertiary">
                Une immersion en 4 étapes dans l&apos;univers de la poterie
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "var(--dimension-300)",
              }}
            >
              {parcours.map((etape, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "var(--color-core-white)",
                    padding: "var(--dimension-300)",
                    borderRadius: "var(--radius-primary)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "var(--color-trail-dust-600)",
                      color: "var(--color-core-white)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto var(--dimension-200)",
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-100)" }}>
                    {etape.title}
                  </h3>
                  <p className="body-style1-300 text-content-default-tertiary">
                    {etape.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="section-p-default">
          <div className="wrapper">
            <div style={{ textAlign: "center", marginBottom: "var(--dimension-500)" }}>
              <h2 className="title-style4-600" style={{ marginBottom: "var(--dimension-200)" }}>
                Nos collections
              </h2>
            </div>

            {collections.map((collection, index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "var(--dimension-400)",
                  alignItems: "center",
                  marginBottom: index < collections.length - 1 ? "var(--dimension-600)" : 0,
                }}
                className="lg:grid-cols-2"
              >
                <div style={{ order: index % 2 === 0 ? 0 : 1 }}>
                  <span
                    className="body-style1-200"
                    style={{
                      color: "var(--color-trail-dust-600)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "var(--dimension-100)",
                      display: "block",
                    }}
                  >
                    {collection.period}
                  </span>
                  <h3
                    className="title-style4-500"
                    style={{ marginBottom: "var(--dimension-200)" }}
                  >
                    {collection.title}
                  </h3>
                  <p
                    className="body-style1-400 text-content-default-tertiary"
                    style={{ marginBottom: "var(--dimension-300)" }}
                  >
                    {collection.description}
                  </p>

                  <div style={{ marginBottom: "var(--dimension-200)" }}>
                    <p
                      className="body-style1-300"
                      style={{ fontWeight: 600, marginBottom: "var(--dimension-100)" }}
                    >
                      Pièces remarquables :
                    </p>
                    <ul
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "var(--dimension-050)",
                      }}
                    >
                      {collection.pieces.map((piece, i) => (
                        <li
                          key={i}
                          className="body-style1-300 text-content-default-tertiary"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--dimension-100)",
                          }}
                        >
                          <span style={{ color: "var(--color-trail-dust-600)" }}>•</span>
                          {piece}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className="media media-ratio-4-3"
                  style={{
                    borderRadius: "var(--radius-large)",
                    overflow: "hidden",
                    order: index % 2 === 0 ? 1 : 0,
                  }}
                >
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="media__image object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Four à bois - Section spéciale */}
        <section className="section-p-default background--neutral">
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
                    color: "var(--color-trail-dust-300)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "var(--dimension-100)",
                    display: "block",
                  }}
                >
                  Pièce maîtresse
                </span>
                <h2
                  className="title-style4-600"
                  style={{ marginBottom: "var(--dimension-300)" }}
                >
                  Le four à bois traditionnel
                </h2>
                <p
                  className="body-style1-500"
                  style={{ marginBottom: "var(--dimension-300)", opacity: 0.9 }}
                >
                  Notre four couché, reconstitué selon les techniques ancestrales,
                  est le coeur vivant du musée. Chaque année, nous organisons des
                  cuissons publiques où vous pouvez assister à l&apos;enfournement,
                  la montée en température et le défournement des pièces.
                </p>
                <p
                  className="body-style1-400"
                  style={{ marginBottom: "var(--dimension-400)", opacity: 0.8 }}
                >
                  Prochaine cuisson publique : lors de Céramique en Fête (juin)
                </p>
                <div style={{ display: "flex", gap: "var(--dimension-200)", flexWrap: "wrap" }}>
                  <Button href="/ceramique-en-fete" variant="secondary">
                    Céramique en Fête
                  </Button>
                  <Button href="/musee" variant="tertiary">
                    Horaires de visite
                  </Button>
                </div>
              </div>
              <div
                className="media media-ratio-16-9"
                style={{ borderRadius: "var(--radius-large)", overflow: "hidden" }}
              >
                <img
                  src="/images/musee/collection-four.webp"
                  alt="Four à bois traditionnel"
                  className="media__image object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-p-default">
          <div className="wrapper">
            <div
              style={{
                backgroundColor: "var(--color-grey-100)",
                padding: "var(--dimension-500)",
                borderRadius: "var(--radius-large)",
                textAlign: "center",
              }}
            >
              <h2 className="title-style4-600" style={{ marginBottom: "var(--dimension-300)" }}>
                Venez découvrir nos collections
              </h2>
              <p
                className="body-style1-500 text-content-default-tertiary"
                style={{
                  marginBottom: "var(--dimension-400)",
                  maxWidth: "500px",
                  margin: "0 auto var(--dimension-400)",
                }}
              >
                Le musée est ouvert toute l&apos;année. Visites guidées sur réservation pour les groupes.
              </p>
              <div style={{ display: "flex", gap: "var(--dimension-200)", justifyContent: "center", flexWrap: "wrap" }}>
                <Button href="/musee" variant="primary" size="300">
                  Infos pratiques
                </Button>
                <Button href="/musee/temporaires" variant="secondary" size="300">
                  Expositions temporaires
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
