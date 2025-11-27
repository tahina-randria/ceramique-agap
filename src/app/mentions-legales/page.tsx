import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de la Maison de la Poterie - AGAP Sadirac.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "var(--dimension-700)" }}>
        <section className="section-p-default section-pt-none">
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h1 className="title-style4-600" style={{ marginBottom: "var(--dimension-400)" }}>
                Mentions légales
              </h1>

              <article style={{ marginBottom: "var(--dimension-400)" }}>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Éditeur du site
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>
                    <strong>AGAP - Association des Gens et Amis de la Poterie</strong>
                  </p>
                  <p>Association loi 1901</p>
                  <p>Place Fouragnan</p>
                  <p>33670 Sadirac</p>
                  <p style={{ marginTop: "var(--dimension-150)" }}>
                    Téléphone : 07 81 32 42 94
                    <br />
                    Email : centreceramique33@gmail.com
                  </p>
                  <p style={{ marginTop: "var(--dimension-150)" }}>
                    Directeur de la publication : Jean-François Bourlard (Président)
                  </p>
                </div>
              </article>

              <article style={{ marginBottom: "var(--dimension-400)" }}>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Hébergement
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>Ce site est hébergé par :</p>
                  <p><strong>Vercel Inc.</strong></p>
                  <p>440 N Barranca Ave #4133</p>
                  <p>Covina, CA 91723, États-Unis</p>
                  <p style={{ marginTop: "var(--dimension-150)" }}>
                    Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="link">vercel.com</a>
                  </p>
                </div>
              </article>

              <article style={{ marginBottom: "var(--dimension-400)" }}>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Identification de l&apos;association
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p><strong>AGAP - Association des Gens et Amis de la Poterie</strong></p>
                  <p>Association loi 1901 déclarée en préfecture de la Gironde</p>
                  <p style={{ marginTop: "var(--dimension-150)" }}>
                    N° RNA : W332000000
                    <br />
                    N° SIRET : [À compléter]
                  </p>
                </div>
              </article>

              <article style={{ marginBottom: "var(--dimension-400)" }}>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Propriété intellectuelle
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>
                    L&apos;ensemble de ce site relève de la législation française et
                    internationale sur le droit d&apos;auteur et la propriété
                    intellectuelle. Tous les droits de reproduction sont réservés, y
                    compris pour les documents téléchargeables et les représentations
                    iconographiques et photographiques.
                  </p>
                  <p style={{ marginTop: "var(--dimension-150)" }}>
                    La reproduction de tout ou partie de ce site sur un support
                    électronique quel qu&apos;il soit est formellement interdite sauf
                    autorisation expresse du directeur de la publication.
                  </p>
                </div>
              </article>

              <article style={{ marginBottom: "var(--dimension-400)" }}>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Crédits photographiques
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>
                    Sauf mention contraire, les photographies présentes sur ce site
                    sont la propriété de l&apos;AGAP ou utilisées avec l&apos;autorisation de
                    leurs auteurs.
                  </p>
                </div>
              </article>

              <article style={{ marginBottom: "var(--dimension-400)" }}>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Liens hypertextes
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>
                    Les liens hypertextes mis en place dans le cadre du présent site
                    internet en direction d&apos;autres ressources présentes sur le
                    réseau Internet ne sauraient engager la responsabilité de l&apos;AGAP.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Données personnelles
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>
                    Pour en savoir plus sur le traitement de vos données personnelles,
                    veuillez consulter notre{" "}
                    <a href="/confidentialite" className="link">
                      politique de confidentialité
                    </a>
                    .
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
