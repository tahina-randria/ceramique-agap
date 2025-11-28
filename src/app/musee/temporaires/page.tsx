import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Expositions Temporaires | Musée de la Poterie",
  description:
    "Exposition Jean-Nicolas Gérard du 7 juin au 12 juillet 2025. Découvrez les expositions temporaires du Musée de la Poterie à Sadirac : céramique contemporaine, artistes invités.",
  keywords: ["exposition Jean-Nicolas Gérard", "céramique terre vernissée", "art contemporain Gironde", "artistes céramistes"],
};

const expositionActuelle = {
  title: "Jean-Nicolas Gérard",
  subtitle: "Terre vernissée, geste libre",
  dates: "7 juin - 12 juillet 2025",
  description:
    "Invité d'honneur de la 38e édition de Céramique en Fête, Jean-Nicolas Gérard expose son travail à la Maison de la Poterie. Depuis plus de 40 ans, il façonne la terre vernissée avec une liberté rare, explorant sans cesse les liens entre forme, matière et usage. Son travail se distingue par une spontanéité brute, une immédiateté du geste que beaucoup recherchent sans parvenir à l'égaler.",
  citation: "« J'aime que mes pots soient utilisés. Je veux que les gens aient envie de s'en servir au quotidien. »",
  biographie: "Formé à l'École des Beaux-Arts d'Aix-en-Provence en 1978 par Jean Biagini, Jean-Nicolas Gérard se perfectionne auprès de Claire Bogino et Paul Salmona, figures majeures de la terre vernissée. Aujourd'hui reconnu internationalement, il expose aux quatre coins du monde : États-Unis, Australie, Chine, Japon.",
  image: "/images/activites/stages/artiste-jng.webp",
};

const expositionsPassees = [
  {
    title: "Yuko Karamatsu",
    dates: "2024",
    description: "Invitée d'honneur de l'édition 2024, la céramiste japonaise a présenté son travail délicat et poétique.",
    image: "/images/musee/piece-decorative.webp",
  },
  {
    title: "Élianne Monnin",
    dates: "2023",
    description: "Artiste céramiste française, son travail explore les formes organiques et les textures naturelles.",
    image: "/images/musee/collection-decoratives.webp",
  },
  {
    title: "Bénédicte Vallet",
    dates: "2022",
    description: "Céramiste renommée, elle a partagé son univers entre sculpture et création utilitaire.",
    image: "/images/musee/collection-utilitaires.webp",
  },
];

const expositionsAVenir = [
  {
    title: "Terres Croisées",
    dates: "Septembre 2025 - Mars 2026",
    description: "Dialogues entre tradition et modernité avec Jeremy Coleman, Eukeni Callejo et Laure Carpené.",
    status: "Prochainement",
  },
  {
    title: "Résidence Céramique & Écritures",
    dates: "Septembre - Octobre 2025",
    description: "Résidence de création croisant la pratique de la céramique et celle de l'écriture, en partenariat avec la Villa Valmont.",
    status: "Appel à candidatures ouvert",
  },
];

export default function ExpositionsTemporairesPage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Expositions Temporaires"
          subtitle="L'art céramique sous toutes ses formes"
          imageSrc="/images/hero/hero-temporaires.webp"
          imageAlt="Exposition de céramique contemporaine"
          primaryCta={{
            label: "Voir l'exposition actuelle",
            href: "#exposition-actuelle",
          }}
        />

        {/* Exposition actuelle */}
        <section id="exposition-actuelle" className="section-p-default">
          <div className="wrapper">
            <div style={{ textAlign: "center", marginBottom: "var(--dimension-500)" }}>
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
                Exposition en cours
              </span>
              <h2 className="title-style4-700" style={{ marginBottom: "var(--dimension-150)" }}>
                {expositionActuelle.title}
              </h2>
              <p className="title-style1-500 text-content-default-tertiary" style={{ marginBottom: "var(--dimension-150)" }}>
                {expositionActuelle.subtitle}
              </p>
              <p className="body-style1-300" style={{ color: "var(--color-trail-dust-600)" }}>
                {expositionActuelle.dates}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "var(--dimension-500)",
                alignItems: "start",
              }}
              className="lg:grid-cols-2"
            >
              <div
                className="media media-ratio-4-3"
                style={{ borderRadius: "var(--radius-large)", overflow: "hidden" }}
              >
                <img
                  src={expositionActuelle.image}
                  alt={expositionActuelle.title}
                  className="media__image object-cover"
                />
              </div>

              <div>
                <p
                  className="body-style1-500 text-content-default-tertiary"
                  style={{ marginBottom: "var(--dimension-300)" }}
                >
                  {expositionActuelle.description}
                </p>

                <blockquote
                  style={{
                    borderLeft: "4px solid var(--color-trail-dust-600)",
                    paddingLeft: "var(--dimension-200)",
                    marginBottom: "var(--dimension-300)",
                    fontStyle: "italic",
                  }}
                >
                  <p className="body-style1-400 text-content-default-tertiary">
                    {expositionActuelle.citation}
                  </p>
                </blockquote>

                <h3 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Biographie
                </h3>

                <p
                  className="body-style1-300 text-content-default-tertiary"
                  style={{ marginBottom: "var(--dimension-300)" }}
                >
                  {expositionActuelle.biographie}
                </p>

                <div
                  style={{
                    padding: "var(--dimension-200)",
                    backgroundColor: "var(--color-trail-dust-100)",
                    borderRadius: "var(--radius-primary)",
                    marginBottom: "var(--dimension-300)",
                  }}
                >
                  <p className="body-style1-300" style={{ fontWeight: 500 }}>
                    Stage « Terre vernissée » du 2 au 6 juin 2025
                  </p>
                  <p className="body-style1-200 text-content-default-tertiary">
                    Jean-Nicolas Gérard animera un stage intensif avant le festival.
                  </p>
                </div>

                <div style={{ display: "flex", gap: "var(--dimension-200)", flexWrap: "wrap" }}>
                  <Button href="/musee" variant="primary" size="300">
                    Planifier ma visite
                  </Button>
                  <Button href="/ceramique-en-fete/edition-2025" variant="secondary" size="300">
                    Programme du festival
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Événements liés */}
        <section
          className="section-p-default"
          style={{ backgroundColor: "var(--color-grey-200)" }}
        >
          <div className="wrapper">
            <div style={{ textAlign: "center", marginBottom: "var(--dimension-400)" }}>
              <h2 className="title-style4-600" style={{ marginBottom: "var(--dimension-200)" }}>
                Événements liés à l&apos;exposition
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "var(--dimension-300)",
              }}
            >
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <span className="body-style1-100" style={{ color: "var(--color-trail-dust-600)" }}>
                  Samedi 14 décembre 2025
                </span>
                <h3 className="title-style1-400" style={{ marginTop: "var(--dimension-100)", marginBottom: "var(--dimension-150)" }}>
                  Visite guidée par les artistes
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Rencontrez Jeremy Coleman et Laure Carpené qui vous guideront à travers l&apos;exposition et partageront leur démarche artistique.
                </p>
                <p className="body-style1-200" style={{ marginTop: "var(--dimension-150)", color: "var(--color-trail-dust-600)" }}>
                  15h - Gratuit sur réservation
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <span className="body-style1-100" style={{ color: "var(--color-trail-dust-600)" }}>
                  Samedi 25 janvier 2026
                </span>
                <h3 className="title-style1-400" style={{ marginTop: "var(--dimension-100)", marginBottom: "var(--dimension-150)" }}>
                  Atelier avec Eukeni Callejo
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Initiez-vous à la sculpture céramique grand format sous la direction de l&apos;artiste basque.
                </p>
                <p className="body-style1-200" style={{ marginTop: "var(--dimension-150)", color: "var(--color-trail-dust-600)" }}>
                  10h-17h - 80€ - Places limitées
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <span className="body-style1-100" style={{ color: "var(--color-trail-dust-600)" }}>
                  Samedi 15 février 2026
                </span>
                <h3 className="title-style1-400" style={{ marginTop: "var(--dimension-100)", marginBottom: "var(--dimension-150)" }}>
                  Conférence : Tradition et modernité
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Table ronde avec les trois artistes sur la transmission des savoir-faire et l&apos;évolution de la céramique.
                </p>
                <p className="body-style1-200" style={{ marginTop: "var(--dimension-150)", color: "var(--color-trail-dust-600)" }}>
                  16h - Gratuit
                </p>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "var(--dimension-400)" }}>
              <Button href="/contact" variant="secondary" size="100">
                Réserver un événement
              </Button>
            </div>
          </div>
        </section>

        {/* Expositions à venir */}
        <section className="section-p-default">
          <div className="wrapper">
            <div style={{ textAlign: "center", marginBottom: "var(--dimension-400)" }}>
              <h2 className="title-style4-600" style={{ marginBottom: "var(--dimension-200)" }}>
                Prochainement
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "var(--dimension-300)",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {expositionsAVenir.map((expo, index) => (
                <div
                  key={index}
                  style={{
                    padding: "var(--dimension-300)",
                    borderRadius: "var(--radius-primary)",
                    border: "2px dashed var(--color-grey-300)",
                    backgroundColor: "var(--color-grey-50)",
                  }}
                >
                  <span
                    className="body-style1-100"
                    style={{
                      backgroundColor: "var(--color-trail-dust-100)",
                      color: "var(--color-trail-dust-700)",
                      padding: "var(--dimension-050) var(--dimension-100)",
                      borderRadius: "var(--radius-small)",
                    }}
                  >
                    {expo.status}
                  </span>
                  <h3 className="title-style1-500" style={{ marginTop: "var(--dimension-200)", marginBottom: "var(--dimension-100)" }}>
                    {expo.title}
                  </h3>
                  <p className="body-style1-200" style={{ color: "var(--color-trail-dust-600)", marginBottom: "var(--dimension-150)" }}>
                    {expo.dates}
                  </p>
                  <p className="body-style1-300 text-content-default-tertiary">
                    {expo.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expositions passées */}
        <section
          className="section-p-default"
          style={{ backgroundColor: "var(--color-grey-100)" }}
        >
          <div className="wrapper">
            <div style={{ textAlign: "center", marginBottom: "var(--dimension-400)" }}>
              <h2 className="title-style4-600" style={{ marginBottom: "var(--dimension-200)" }}>
                Expositions passées
              </h2>
              <p className="body-style1-400 text-content-default-tertiary">
                Retour sur nos précédentes expositions
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "var(--dimension-300)",
              }}
            >
              {expositionsPassees.map((expo, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "var(--color-core-white)",
                    borderRadius: "var(--radius-primary)",
                    overflow: "hidden",
                  }}
                >
                  <div className="media media-ratio-16-9">
                    <img
                      src={expo.image}
                      alt={expo.title}
                      className="media__image object-cover"
                      style={{ filter: "grayscale(30%)" }}
                    />
                  </div>
                  <div style={{ padding: "var(--dimension-200)" }}>
                    <span className="body-style1-100 text-content-default-tertiary">
                      {expo.dates}
                    </span>
                    <h3 className="title-style1-400" style={{ marginTop: "var(--dimension-050)" }}>
                      {expo.title}
                    </h3>
                    <p className="body-style1-200 text-content-default-tertiary" style={{ marginTop: "var(--dimension-100)" }}>
                      {expo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Devenir exposant */}
        <section className="section-p-default background--neutral">
          <div className="wrapper">
            <div
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                textAlign: "center",
              }}
              className="text--light"
            >
              <h2
                className="title-style4-600"
                style={{ marginBottom: "var(--dimension-300)" }}
              >
                Vous êtes artiste céramiste ?
              </h2>
              <p
                className="body-style1-500"
                style={{ marginBottom: "var(--dimension-400)", opacity: 0.9 }}
              >
                La Maison de la Poterie accueille des expositions temporaires
                tout au long de l&apos;année. Si vous souhaitez présenter votre
                travail dans notre espace, n&apos;hésitez pas à nous contacter
                avec votre dossier artistique.
              </p>
              <div style={{ display: "flex", gap: "var(--dimension-200)", justifyContent: "center", flexWrap: "wrap" }}>
                <Button href="/contact" variant="secondary">
                  Nous contacter
                </Button>
                <a
                  href="mailto:centreceramique33@gmail.com"
                  className="button button--tertiary button--300"
                >
                  <span className="button__content">centreceramique33@gmail.com</span>
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
