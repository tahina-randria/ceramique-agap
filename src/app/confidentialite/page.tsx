import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles du site de la Maison de la Poterie - AGAP Sadirac.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "var(--dimension-700)" }}>
        <section className="section-p-default section-pt-none">
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h1 className="title-style4-600" style={{ marginBottom: "var(--dimension-400)" }}>
                Politique de confidentialité
              </h1>

              <p className="body-style1-300 text-content-default-tertiary" style={{ marginBottom: "var(--dimension-400)" }}>
                Dernière mise à jour : 26 novembre 2025
              </p>

              <article style={{ marginBottom: "var(--dimension-400)" }}>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Introduction
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>
                    L&apos;AGAP (Association des Gens et Amis de la Poterie)
                    s&apos;engage à protéger la vie privée des utilisateurs de son site
                    internet. Cette politique de confidentialité explique comment nous
                    collectons, utilisons et protégeons vos données personnelles.
                  </p>
                </div>
              </article>

              <article style={{ marginBottom: "var(--dimension-400)" }}>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Données collectées
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>Nous pouvons collecter les données suivantes :</p>
                  <ul style={{ marginTop: "var(--dimension-150)", paddingLeft: "var(--dimension-300)" }}>
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse postale (pour les livraisons)</li>
                    <li>Données de navigation (cookies)</li>
                  </ul>
                </div>
              </article>

              <article style={{ marginBottom: "var(--dimension-400)" }}>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Utilisation des données
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>Vos données sont utilisées pour :</p>
                  <ul style={{ marginTop: "var(--dimension-150)", paddingLeft: "var(--dimension-300)" }}>
                    <li>Traiter vos réservations d&apos;ateliers et de visites</li>
                    <li>Vous envoyer des informations sur nos activités (newsletter)</li>
                    <li>Répondre à vos demandes de contact</li>
                    <li>Améliorer nos services</li>
                    <li>Respecter nos obligations légales</li>
                  </ul>
                </div>
              </article>

              <article style={{ marginBottom: "var(--dimension-400)" }}>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Base légale du traitement
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>
                    Le traitement de vos données repose sur votre consentement,
                    l&apos;exécution d&apos;un contrat (réservation), nos intérêts légitimes
                    ou nos obligations légales.
                  </p>
                </div>
              </article>

              <article style={{ marginBottom: "var(--dimension-400)" }}>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Conservation des données
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>
                    Vos données sont conservées pendant la durée nécessaire à la
                    finalité pour laquelle elles ont été collectées, et au maximum
                    3 ans après votre dernière interaction avec notre association.
                  </p>
                </div>
              </article>

              <article style={{ marginBottom: "var(--dimension-400)" }}>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Vos droits
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  <ul style={{ marginTop: "var(--dimension-150)", paddingLeft: "var(--dimension-300)" }}>
                    <li>Droit d&apos;accès à vos données</li>
                    <li>Droit de rectification</li>
                    <li>Droit à l&apos;effacement</li>
                    <li>Droit à la limitation du traitement</li>
                    <li>Droit à la portabilité</li>
                    <li>Droit d&apos;opposition</li>
                  </ul>
                  <p style={{ marginTop: "var(--dimension-150)" }}>
                    Pour exercer ces droits, contactez-nous à :{" "}
                    <a href="mailto:centreceramique33@gmail.com" className="link">
                      centreceramique33@gmail.com
                    </a>
                  </p>
                </div>
              </article>

              <article style={{ marginBottom: "var(--dimension-400)" }}>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Cookies
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>
                    Notre site utilise des cookies pour améliorer votre expérience de
                    navigation. Vous pouvez configurer votre navigateur pour refuser
                    les cookies ou être alerté lorsque des cookies sont envoyés.
                  </p>
                  <p style={{ marginTop: "var(--dimension-150)" }}>
                    <strong>Types de cookies utilisés :</strong>
                  </p>
                  <ul style={{ marginTop: "var(--dimension-100)", paddingLeft: "var(--dimension-300)" }}>
                    <li><strong>Cookies essentiels</strong> : nécessaires au fonctionnement du site (session, préférences)</li>
                    <li><strong>Cookies analytiques</strong> : permettent de mesurer l&apos;audience du site (Vercel Analytics)</li>
                  </ul>
                  <p style={{ marginTop: "var(--dimension-150)" }}>
                    <strong>Durée de conservation des cookies :</strong>
                  </p>
                  <ul style={{ marginTop: "var(--dimension-100)", paddingLeft: "var(--dimension-300)" }}>
                    <li>Cookies essentiels : durée de la session</li>
                    <li>Cookies analytiques : 13 mois maximum</li>
                  </ul>
                  <p style={{ marginTop: "var(--dimension-150)" }}>
                    Vous pouvez gérer vos préférences cookies à tout moment via les paramètres de votre navigateur.
                  </p>
                </div>
              </article>

              <article style={{ marginBottom: "var(--dimension-400)" }}>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Transferts de données
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>
                    Notre site est hébergé par Vercel Inc. (États-Unis). Les données peuvent
                    être transférées vers des serveurs situés hors de l&apos;Union Européenne.
                  </p>
                  <p style={{ marginTop: "var(--dimension-150)" }}>
                    Ces transferts sont encadrés par le Data Privacy Framework (DPF)
                    UE-États-Unis, qui garantit un niveau de protection adéquat des données
                    personnelles.
                  </p>
                </div>
              </article>

              <article style={{ marginBottom: "var(--dimension-400)" }}>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Sécurité
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>
                    Nous mettons en œuvre des mesures techniques et organisationnelles
                    appropriées pour protéger vos données contre tout accès non
                    autorisé, modification, divulgation ou destruction.
                  </p>
                </div>
              </article>

              <article>
                <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                  Contact
                </h2>
                <div className="body-style1-300 text-content-default-tertiary">
                  <p>
                    Pour toute question relative à cette politique de confidentialité,
                    vous pouvez nous contacter :
                  </p>
                  <p style={{ marginTop: "var(--dimension-150)" }}>
                    AGAP - Association des Gens et Amis de la Poterie
                    <br />
                    Place Fouragnan
                    <br />
                    33670 Sadirac
                    <br />
                    Téléphone : 07 81 32 42 94
                    <br />
                    Email :{" "}
                    <a href="mailto:centreceramique33@gmail.com" className="link">
                      centreceramique33@gmail.com
                    </a>
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
