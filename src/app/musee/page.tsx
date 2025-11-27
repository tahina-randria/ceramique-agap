import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/sections/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import InfoCard from "@/components/ui/InfoCard";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Musée & Expositions",
  description:
    "Visitez la Maison de la Poterie de Sadirac et découvrez l'histoire de la céramique depuis le XIVe siècle. Collections permanentes, expositions temporaires et démonstrations de potiers dans l'Entre-deux-Mers.",
  keywords: ["musée poterie Sadirac", "exposition céramique Gironde", "patrimoine potier Entre-deux-Mers", "visite culturelle Bordeaux"],
};

export default function MuseePage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Le Musée"
          subtitle="300 ans d'histoire céramique à découvrir"
          imageSrc="/images/hero/hero-musee.webp"
          imageAlt="Intérieur du Musée de la Poterie"
          primaryCta={{
            label: "Préparer ma visite",
            href: "/activites/parcours",
          }}
        />

        {/* Introduction */}
        <section style={{ padding: "var(--dimension-600) 0 var(--dimension-400)" }}>
          <div className="wrapper">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "var(--dimension-500)",
                alignItems: "center",
              }}
            >
              <div style={{ maxWidth: "800px" }}>
                <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-300)" }}>
                  Un voyage dans le temps
                </h2>
                <p className="body-style1-500 text-content-default-tertiary" style={{ marginBottom: "var(--dimension-200)" }}>
                  Le Musée de la Poterie de Sadirac vous invite à découvrir
                  l&apos;extraordinaire histoire de la céramique locale. Installé dans
                  une ancienne poterie du XIXe siècle, le musée présente des
                  collections exceptionnelles retraçant trois siècles de
                  production.
                </p>
                <p className="body-style1-300 text-content-default-tertiary">
                  Des premiers fours à bois aux techniques contemporaines, explorez
                  l&apos;évolution des formes, des décors et des usages de la poterie
                  dans la vie quotidienne.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section style={{ padding: "var(--dimension-300) 0 var(--dimension-400)" }}>
          <div className="wrapper">
            <SectionHeader
              title="Nos collections"
              subtitle="Explorez nos espaces d'exposition"
            />
            <div className="content-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              <FeatureCard
                title="Collections permanentes"
                description="Plus de 500 pièces témoignant de l'âge d'or de la poterie sadiraquaise : cruches, jarres, plats, tuiles vernissées..."
                imageSrc="/images/musee/collection-utilitaires.webp"
                imageAlt="Collections permanentes"
                href="/musee/permanentes"
                ctaLabel="Découvrir"
                variant="extended"
              />
              <FeatureCard
                title="Expositions temporaires"
                description="Tout au long de l'année, le musée accueille des expositions mettant en lumière des artistes céramistes contemporains."
                imageSrc="/images/musee/collection-decoratives.webp"
                imageAlt="Expositions temporaires"
                href="/musee/temporaires"
                ctaLabel="Voir l'exposition actuelle"
                variant="extended"
              />
            </div>
          </div>
        </section>

        {/* Pièces emblématiques */}
        <section className="section-p-default" style={{ backgroundColor: "var(--color-grey-100)" }}>
          <div className="wrapper">
            <SectionHeader
              title="Pièces emblématiques"
              subtitle="Découvrez quelques trésors de nos collections"
              align="center"
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "var(--dimension-300)",
                marginTop: "var(--dimension-400)",
              }}
            >
              {/* Casserole */}
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  borderRadius: "var(--radius-large)",
                  overflow: "hidden",
                }}
              >
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img
                    src="/images/musee/piece-casserole-bifide.webp"
                    alt="Casserole à anse bifide"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "var(--dimension-300)" }}>
                  <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-150)" }}>
                    Casserole à anse bifide
                  </h3>
                  <p className="body-style1-300 text-content-default-tertiary">
                    Caractérisée par une anse bifide offrant une prise en main optimisée.
                    Sa fabrication nécessite une terre maigre, résistante aux chocs thermiques.
                  </p>
                </div>
              </div>

              {/* Bénitiers */}
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  borderRadius: "var(--radius-large)",
                  overflow: "hidden",
                }}
              >
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img
                    src="/images/musee/piece-benitier-chevet.webp"
                    alt="Bénitiers de chevet"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "var(--dimension-300)" }}>
                  <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-150)" }}>
                    Bénitiers de chevet
                  </h3>
                  <p className="body-style1-300 text-content-default-tertiary">
                    Produits suite à la contre-réforme catholique, ces bénitiers en terre cuite
                    représentent principalement des Christs en croix à partir du XVIIe siècle.
                  </p>
                </div>
              </div>

              {/* Moule à pain de sucre */}
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  borderRadius: "var(--radius-large)",
                  overflow: "hidden",
                }}
              >
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img
                    src="/images/musee/piece-moule-sucre.webp"
                    alt="Moule à pain de sucre"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "var(--dimension-300)" }}>
                  <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-150)" }}>
                    Moule à pain de sucre
                  </h3>
                  <p className="body-style1-300 text-content-default-tertiary">
                    Conçu pour le raffinage du sucre au XVIIIe siècle. De forme conique,
                    il accueille le sucre liquide qui cristallise en refroidissant.
                  </p>
                </div>
              </div>

              {/* Mortier */}
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  borderRadius: "var(--radius-large)",
                  overflow: "hidden",
                }}
              >
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img
                    src="/images/musee/piece-mortier-medieval.webp"
                    alt="Mortier médiéval"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "var(--dimension-300)" }}>
                  <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-150)" }}>
                    Mortier médiéval
                  </h3>
                  <p className="body-style1-300 text-content-default-tertiary">
                    Ustensile de tradition médiévale pour écraser et mélanger les ingrédients.
                    Son décor soigné suggère qu&apos;il pouvait être présenté sur la table.
                  </p>
                </div>
              </div>

              {/* Bugadey */}
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  borderRadius: "var(--radius-large)",
                  overflow: "hidden",
                }}
              >
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img
                    src="/images/musee/piece-bugadey.webp"
                    alt="Bugadey / Bugeoir"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "var(--dimension-300)" }}>
                  <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-150)" }}>
                    Bugadey / Bugeoir
                  </h3>
                  <p className="body-style1-300 text-content-default-tertiary">
                    Grand vase utilisé dès le XVIe siècle pour faire la lessive.
                    Le savon était alors réalisé à partir de cendre.
                  </p>
                </div>
              </div>

              {/* Cruche */}
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  borderRadius: "var(--radius-large)",
                  overflow: "hidden",
                }}
              >
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img
                    src="/images/musee/piece-cruche-trois-anses.webp"
                    alt="Cruche à eau à trois anses"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "var(--dimension-300)" }}>
                  <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-150)" }}>
                    Cruche à eau à trois anses
                  </h3>
                  <p className="body-style1-300 text-content-default-tertiary">
                    Datée du XVIIe siècle, ses trois anses facilitaient la prise en main.
                    Son décor à la molette témoigne du savoir-faire local.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infos pratiques */}
        <section className="section-p-default" style={{ backgroundColor: "var(--color-grey-200)" }}>
          <div className="wrapper">
            <SectionHeader title="Informations pratiques" align="center" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "var(--dimension-300)",
                marginTop: "var(--dimension-400)",
              }}
            >
              <InfoCard icon="clock" title="Horaires">
                <p><strong>Mercredi - Dimanche</strong></p>
                <p>14h00 - 18h00</p>
                <p style={{ marginTop: "var(--dimension-150)" }}>
                  <strong>Groupes & scolaires</strong>
                </p>
                <p>Sur réservation du mardi au vendredi</p>
                <p style={{ marginTop: "var(--dimension-150)", fontStyle: "italic" }}>
                  Fermé en janvier et jours fériés
                </p>
              </InfoCard>

              <InfoCard icon="euro" title="Tarifs">
                <p><strong>Entrée musée :</strong> Gratuit</p>
                <p><strong>Visite guidée :</strong> 3€/pers.</p>
                <p style={{ marginTop: "var(--dimension-150)" }}>
                  <strong>Visite groupe :</strong> Sur devis
                </p>
                <p style={{ marginTop: "var(--dimension-150)" }}>
                  <strong>Adhérents AGAP :</strong> Tarif réduit
                </p>
              </InfoCard>

              <InfoCard icon="accessibility" title="Accessibilité">
                <p><strong>Accès PMR :</strong> Partiel</p>
                <p>Rez-de-chaussée accessible</p>
                <p style={{ marginTop: "var(--dimension-150)" }}>
                  <strong>Chiens guides :</strong> Acceptés
                </p>
                <p style={{ marginTop: "var(--dimension-150)" }}>
                  <em>Contactez-nous pour vos besoins spécifiques</em>
                </p>
              </InfoCard>

              <InfoCard icon="car" title="Accès">
                <p><strong>Adresse</strong></p>
                <p>Place Fouragnan, 33670 Sadirac</p>
                <p style={{ marginTop: "var(--dimension-150)" }}>
                  <strong>Parking :</strong> Gratuit sur place
                </p>
                <p style={{ marginTop: "var(--dimension-150)" }}>
                  <strong>Bus :</strong> Ligne 404, arrêt Sadirac Centre
                </p>
              </InfoCard>
            </div>
            <div style={{ textAlign: "center", marginTop: "var(--dimension-400)" }}>
              <Button href="/activites/parcours" variant="primary" size="300">
                Réserver une visite guidée
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
