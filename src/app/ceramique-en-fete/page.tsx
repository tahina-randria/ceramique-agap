import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/sections/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Céramique en Fête - 38e édition | Festival Céramique Sadirac",
  description:
    "38e édition de Céramique en Fête les 7 et 8 juin 2025 à Sadirac. Invité d'honneur Jean-Nicolas Gérard. Marché de 40+ céramistes, démonstrations, ateliers raku, concert. Festival labellisé Scènes d'Été en Gironde.",
  keywords: ["Céramique en Fête 2025", "festival poterie Gironde", "Jean-Nicolas Gérard", "marché céramistes Sadirac", "Scènes d'Été Gironde"],
};

export default function CeramiqueEnFetePage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Céramique en Fête"
          subtitle="38e édition • 7 & 8 juin 2025 • Sadirac"
          imageSrc="/images/hero/hero-festival.webp"
          imageAlt="Céramique en Fête à Sadirac"
          primaryCta={{
            label: "Découvrir le programme",
            href: "/ceramique-en-fete/edition-2025",
          }}
          size="large"
        />

        {/* Présentation */}
        <section className="section-p-default">
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-300)" }}>
                Un festival unique et pluridisciplinaire
              </h2>
              <p className="body-style1-500 text-content-default-tertiary">
                Chaque année en juin, Sadirac accueille &quot;Céramique en
                Fête&quot;, un événement majeur qui réunit céramistes, potiers et
                amateurs autour d&apos;un week-end festif et créatif. Ancré au cœur
                de l&apos;Entre-Deux-Mers, le festival se distingue par son ouverture
                à d&apos;autres disciplines artistiques : musique, cinéma, contes,
                performances et conférences.
              </p>
              <p className="body-style1-300 text-content-default-tertiary" style={{ marginTop: "var(--dimension-200)" }}>
                Labellisé <strong>Scènes d&apos;Été en Gironde</strong> et parrainé par les <strong>Ateliers d&apos;Art de France</strong>,
                Céramique en Fête attire chaque année entre 2 000 et 3 000 visiteurs.
              </p>
            </div>
          </div>
        </section>

        {/* Invité d'honneur */}
        <section className="section-p-default section-pt-none">
          <div className="wrapper">
            <div
              style={{
                backgroundColor: "var(--color-trail-dust-600)",
                borderRadius: "var(--radius-large)",
                padding: "var(--dimension-500)",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "var(--dimension-400)",
                alignItems: "center",
              }}
            >
              <div style={{ color: "var(--color-core-white)" }}>
                <p className="title-style1-200" style={{ marginBottom: "var(--dimension-100)", opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Invité d&apos;honneur 2025
                </p>
                <h3 className="title-style4-700" style={{ marginBottom: "var(--dimension-200)" }}>
                  Jean-Nicolas Gérard
                </h3>
                <p className="body-style1-500" style={{ marginBottom: "var(--dimension-200)", opacity: 0.9 }}>
                  Grand céramiste reconnu internationalement, Jean-Nicolas Gérard façonne la terre
                  vernissée depuis plus de 40 ans. Ses pièces, exposées aux quatre coins du monde,
                  témoignent d&apos;un geste libre et d&apos;un profond attachement à l&apos;objet du quotidien.
                </p>
                <p className="body-style1-300" style={{ marginBottom: "var(--dimension-300)", opacity: 0.8 }}>
                  Exposition du 7 juin au 12 juillet 2025 à la Maison de la Poterie.
                </p>
                <Button href="/ceramique-en-fete/edition-2025" variant="secondary">
                  Découvrir le programme complet
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Programme type */}
        <section className="section-p-default" style={{ backgroundColor: "var(--color-grey-200)" }}>
          <div className="wrapper">
            <SectionHeader title="Au programme" align="center" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "var(--dimension-300)",
                marginTop: "var(--dimension-400)",
              }}
            >
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-200)" }}>
                  Marché des céramistes
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Plus de 40 céramistes de France et d&apos;Europe présentent leurs créations :
                  grès, faïence, raku, porcelaine, terre vernissée... Un voyage à travers
                  les multiples facettes de la céramique contemporaine.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-200)" }}>
                  Démonstrations & Raku
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Assistez à des démonstrations de tournage et découvrez la cuisson raku.
                  Les céramistes partagent leurs techniques et secrets avec passion.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-200)" }}>
                  Ateliers enfants
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Ateliers gratuits de modelage pour les plus jeunes (15h-18h).
                  L&apos;occasion parfaite de mettre les mains dans la terre !
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-200)" }}>
                  Conférences & Culture
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Conférences sur l&apos;histoire céramique, projections cinéma,
                  lectures de contes, installation artistique et concert live.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-200)" }}>
                  Concours « Pichet »
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Compétition ouverte aux céramistes exposants. Vote du public et
                  des professionnels. Le premier prix rejoint les collections du musée.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-200)" }}>
                  Restauration locale
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Buvette, grillades, crêpes et glaces. Partenariat avec producteurs
                  locaux et brasseur artisanal. Gobelets réutilisables Ecocup.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Éco-responsabilité */}
        <section className="section-p-default">
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-300)" }}>
                Un festival éco-responsable
              </h2>
              <p className="body-style1-400 text-content-default-tertiary">
                Depuis 2008, Céramique en Fête intègre les principes du développement durable :
                impression sur papier recyclé, tri sélectif renforcé, gobelets réutilisables Ecocup,
                partenariat avec producteurs locaux et brasseur artisanal. Une démarche en
                collaboration avec le SEMOCTOM et le Conseil Départemental de la Gironde.
              </p>
            </div>
          </div>
        </section>

        {/* Invités d'honneur passés */}
        <section className="section-p-default" style={{ backgroundColor: "var(--color-grey-100)" }}>
          <div className="wrapper">
            <SectionHeader
              title="Un festival en constante évolution"
              subtitle="Chaque année, un artiste de renom enrichit le festival"
              align="center"
            />
            <p className="body-style1-300 text-content-default-tertiary" style={{ textAlign: "center", maxWidth: "700px", margin: "var(--dimension-300) auto 0" }}>
              Parmi les invités marquants des années précédentes : <strong>Yuko Karamatsu</strong>, <strong>Élianne Monnin</strong> et <strong>Bénédicte Vallet</strong>.
              Ce dialogue entre tradition et modernité permet au festival de se réinventer continuellement.
            </p>
          </div>
        </section>

        {/* Archives */}
        <section className="section-p-default">
          <div className="wrapper">
            <SectionHeader
              title="Éditions précédentes"
              subtitle="Revivez les moments forts des années passées"
            />
            <div className="content-grid" style={{ marginTop: "var(--dimension-300)" }}>
              <FeatureCard
                title="37e édition - 2024"
                description="40+ exposants, 2 500 visiteurs, une édition sous le signe du renouveau."
                imageSrc="/images/CEF-2024/cef-2024-4.webp"
                imageAlt="Céramique en Fête 2024"
                href="/ceramique-en-fete/archives-2024"
              />
              <FeatureCard
                title="36e édition - 2023"
                description="45 exposants, des milliers de visiteurs, une rétrospective exceptionnelle."
                imageSrc="/images/CEF-2023/cef-2023-4.webp"
                imageAlt="Céramique en Fête 2023"
                href="/ceramique-en-fete/archives-2023"
              />
              <FeatureCard
                title="35e édition - 2022"
                description="Le retour en force après la pandémie, avec un nouveau parcours."
                imageSrc="/images/CEF-2023/cef-2023-6.webp"
                imageAlt="Céramique en Fête 2022"
                href="/ceramique-en-fete/archives-2022"
              />
            </div>
          </div>
        </section>

        {/* Partenaires */}
        <section className="section-p-default" style={{ backgroundColor: "var(--color-grey-900)" }}>
          <div className="wrapper">
            <div style={{ textAlign: "center", color: "var(--color-core-white)" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-200)" }}>
                Devenez partenaire
              </h2>
              <p
                className="body-style1-300"
                style={{ marginBottom: "var(--dimension-400)", color: "var(--color-grey-400)", maxWidth: "500px", margin: "0 auto var(--dimension-400)" }}
              >
                Associez votre image à un événement culturel majeur de la région bordelaise.
              </p>
              <Button href="/contact" variant="secondary">
                Nous contacter
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
