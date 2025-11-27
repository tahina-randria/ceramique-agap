"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Button from "@/components/ui/Button";
import { Ticket, BadgePercent, Mail, CalendarHeart } from "lucide-react";

const avantages = [
  {
    icon: Ticket,
    title: "Entrée gratuite",
    description: "Accès illimité au musée et aux expositions temporaires.",
  },
  {
    icon: BadgePercent,
    title: "Tarifs réduits",
    description: "Réductions sur les ateliers, stages et événements.",
  },
  {
    icon: Mail,
    title: "Newsletter",
    description: "Informations en avant-première sur les événements.",
  },
  {
    icon: CalendarHeart,
    title: "Invitations",
    description: "Vernissages et événements réservés aux adhérents.",
  },
];

const tarifsAdhesion = {
  annuelle: [
    { type: "enfant", labelCCC: "15€", labelHorsCCC: "20€", note: "Autorisation parentale requise" },
    { type: "adulte", labelCCC: "15€", labelHorsCCC: "25€", note: null },
    { type: "famille", labelCCC: "30€", labelHorsCCC: "45€", note: null },
  ],
  stage: [
    { type: "stage_court", label: "5€", description: "Stage de 1 à 2 jours (assurance incluse)" },
    { type: "stage_long", label: "10€", description: "Stage de plus de 2 jours (assurance incluse)" },
  ],
  pedagogique: {
    label: "10€",
    description: "Par réservation à la journée",
  },
};

export default function AdhererPage() {
  const [formData, setFormData] = useState({
    typeAdhesion: "adulte",
    residenceCCC: true,
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    adresse: "",
    codePostal: "",
    ville: "",
    droitImage: true,
    reglementAccepte: false,
    newsletter: false,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/adhesion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: formData.typeAdhesion,
          residenceCCC: formData.residenceCCC,
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          adresse: formData.adresse,
          codePostal: formData.codePostal,
          ville: formData.ville,
          droitImage: formData.droitImage,
          reglementAccepte: formData.reglementAccepte,
          newsletter: formData.newsletter,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSubmitStatus("success");
      setFormData({
        typeAdhesion: "adulte",
        residenceCCC: true,
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        adresse: "",
        codePostal: "",
        ville: "",
        droitImage: true,
        reglementAccepte: false,
        newsletter: false,
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        <Hero
          title="Adhérer à l'AGAP"
          subtitle="Rejoignez notre communauté de passionnés et soutenez la préservation du patrimoine céramique de Sadirac"
          imageSrc="/images/hero/hero-association.webp"
          imageAlt="Atelier de poterie à la Maison de la Poterie"
          primaryCta={{
            label: "Remplir le formulaire",
            href: "#formulaire",
          }}
        />

        {/* Avantages */}
        <section className="section-p-default">
          <div className="wrapper">
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-100)", textAlign: "center" }}>
                Les avantages adhérents
              </h2>
              <p className="body-style1-400 text-content-default-tertiary" style={{ textAlign: "center", marginBottom: "var(--dimension-300)" }}>
                En rejoignant l&apos;AGAP, vous bénéficiez de nombreux avantages
              </p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "var(--dimension-200)"
              }}>
                {avantages.map((avantage, index) => {
                  const IconComponent = avantage.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        padding: "var(--dimension-300)",
                        backgroundColor: "var(--color-core-white)",
                        borderRadius: "var(--radius-primary)",
                        border: "1px solid var(--color-grey-200)",
                        textAlign: "center"
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          backgroundColor: "var(--color-trail-dust-100)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto var(--dimension-200)"
                        }}
                      >
                        <IconComponent size={24} strokeWidth={1.5} style={{ color: "var(--color-trail-dust-600)" }} />
                      </div>
                      <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-100)" }}>
                        {avantage.title}
                      </h3>
                      <p className="body-style1-200 text-content-default-tertiary">
                        {avantage.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="background--secondary section-p-default">
          <div className="wrapper">
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-100)", textAlign: "center" }}>
                Tarifs d&apos;adhésion 2025-2026
              </h2>
              <p className="body-style1-400 text-content-default-tertiary" style={{ textAlign: "center", marginBottom: "var(--dimension-300)" }}>
                Assurance incluse dans toutes les adhésions
              </p>

              {/* Adhésion annuelle */}
              <h3 className="title-style1-500" style={{ marginBottom: "var(--dimension-150)", color: "var(--color-trail-dust-600)" }}>
                Adhésion annuelle
              </h3>
              <div style={{
                backgroundColor: "var(--color-core-white)",
                borderRadius: "var(--radius-primary)",
                overflow: "hidden",
                marginBottom: "var(--dimension-400)"
              }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ backgroundColor: "var(--color-trail-dust-600)", color: "white" }}>
                      <th style={{ padding: "var(--dimension-200)", textAlign: "left" }} className="body-style1-300">Type</th>
                      <th style={{ padding: "var(--dimension-200)", textAlign: "center" }} className="body-style1-300">Résidents CCC*</th>
                      <th style={{ padding: "var(--dimension-200)", textAlign: "center" }} className="body-style1-300">Hors CCC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid var(--color-grey-200)" }}>
                      <td style={{ padding: "var(--dimension-200)" }} className="body-style1-400">
                        Enfant
                        <span className="body-style1-200 text-content-default-tertiary" style={{ display: "block" }}>
                          Autorisation parentale requise
                        </span>
                      </td>
                      <td style={{ padding: "var(--dimension-200)", textAlign: "center" }} className="title-style1-400">15€</td>
                      <td style={{ padding: "var(--dimension-200)", textAlign: "center" }} className="title-style1-400">20€</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--color-grey-200)" }}>
                      <td style={{ padding: "var(--dimension-200)" }} className="body-style1-400">Adulte</td>
                      <td style={{ padding: "var(--dimension-200)", textAlign: "center" }} className="title-style1-400">15€</td>
                      <td style={{ padding: "var(--dimension-200)", textAlign: "center" }} className="title-style1-400">25€</td>
                    </tr>
                    <tr>
                      <td style={{ padding: "var(--dimension-200)" }} className="body-style1-400">Famille</td>
                      <td style={{ padding: "var(--dimension-200)", textAlign: "center" }} className="title-style1-400">30€</td>
                      <td style={{ padding: "var(--dimension-200)", textAlign: "center" }} className="title-style1-400">45€</td>
                    </tr>
                  </tbody>
                </table>
                <p className="body-style1-200 text-content-default-tertiary" style={{ padding: "var(--dimension-150) var(--dimension-200)", backgroundColor: "var(--color-grey-100)" }}>
                  *CCC : Communauté de Communes du Créonnais
                </p>
              </div>

              {/* Adhésion stage */}
              <h3 className="title-style1-500" style={{ marginBottom: "var(--dimension-150)", color: "var(--color-trail-dust-600)" }}>
                Adhésion stage
              </h3>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "var(--dimension-150)"
              }}>
                <div style={{
                  padding: "var(--dimension-200)",
                  backgroundColor: "var(--color-core-white)",
                  borderRadius: "var(--radius-primary)",
                }}>
                  <p className="title-style1-300" style={{ marginBottom: "var(--dimension-050)" }}>Stage 1-2 jours</p>
                  <p className="title-style4-500" style={{ color: "var(--color-trail-dust-600)", marginBottom: "var(--dimension-050)" }}>5€</p>
                  <p className="body-style1-200 text-content-default-tertiary">Assurance incluse</p>
                </div>
                <div style={{
                  padding: "var(--dimension-200)",
                  backgroundColor: "var(--color-core-white)",
                  borderRadius: "var(--radius-primary)",
                }}>
                  <p className="title-style1-300" style={{ marginBottom: "var(--dimension-050)" }}>Stage +2 jours</p>
                  <p className="title-style4-500" style={{ color: "var(--color-trail-dust-600)", marginBottom: "var(--dimension-050)" }}>10€</p>
                  <p className="body-style1-200 text-content-default-tertiary">Assurance incluse</p>
                </div>
                <div style={{
                  padding: "var(--dimension-200)",
                  backgroundColor: "var(--color-core-white)",
                  borderRadius: "var(--radius-primary)",
                }}>
                  <p className="title-style1-300" style={{ marginBottom: "var(--dimension-050)" }}>Parcours pédagogique</p>
                  <p className="title-style4-500" style={{ color: "var(--color-trail-dust-600)", marginBottom: "var(--dimension-050)" }}>10€</p>
                  <p className="body-style1-200 text-content-default-tertiary">Par réservation/jour</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulaire d'adhésion */}
        <section id="formulaire" className="section-p-default">
          <div className="wrapper">
            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "var(--dimension-300)" }}>
                <h2
                  className="title-style1-600"
                  style={{ marginBottom: "var(--dimension-100)" }}
                >
                  Formulaire d&apos;adhésion
                </h2>
                <p className="body-style1-400 text-content-default-tertiary">
                  Remplissez le formulaire ci-dessous pour devenir membre de l&apos;AGAP.
                  Nous vous contacterons pour finaliser votre adhésion.
                </p>
              </div>

              {submitStatus === "success" ? (
                <div
                  style={{
                    backgroundColor: "var(--color-grey-100)",
                    padding: "var(--dimension-400)",
                    borderRadius: "var(--radius-primary)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "var(--color-trail-dust-100)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto var(--dimension-300)",
                      fontSize: "32px",
                    }}
                  >
                    ✓
                  </div>
                  <h3 className="title-style1-500" style={{ marginBottom: "var(--dimension-150)" }}>
                    Demande envoyée !
                  </h3>
                  <p className="body-style1-300 text-content-default-tertiary">
                    Merci pour votre intérêt ! Nous avons bien reçu votre demande
                    d&apos;adhésion. Nous vous contacterons dans les prochains jours
                    pour finaliser votre inscription et vous indiquer les modalités
                    de paiement.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="link"
                    style={{
                      marginTop: "var(--dimension-200)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Faire une nouvelle demande
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    backgroundColor: "var(--color-grey-100)",
                    padding: "var(--dimension-400)",
                    borderRadius: "var(--radius-primary)",
                  }}
                >
                  {/* Type d'adhésion */}
                  <div style={{ marginBottom: "var(--dimension-300)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-150)" }}>
                      Type d&apos;adhésion annuelle *
                    </label>
                    <div style={{ display: "flex", gap: "var(--dimension-150)", flexWrap: "wrap" }}>
                      {["enfant", "adulte", "famille"].map((type) => (
                        <label
                          key={type}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--dimension-100)",
                            padding: "var(--dimension-150) var(--dimension-200)",
                            backgroundColor: formData.typeAdhesion === type ? "var(--color-trail-dust-100)" : "var(--color-core-white)",
                            border: formData.typeAdhesion === type ? "2px solid var(--color-trail-dust-600)" : "2px solid var(--color-grey-300)",
                            borderRadius: "var(--radius-primary)",
                            cursor: "pointer",
                            flex: 1,
                            minWidth: "120px",
                          }}
                        >
                          <input
                            type="radio"
                            name="typeAdhesion"
                            value={type}
                            checked={formData.typeAdhesion === type}
                            onChange={handleChange}
                          />
                          <span className="title-style1-300" style={{ textTransform: "capitalize" }}>{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Résidence CCC */}
                  <div style={{ marginBottom: "var(--dimension-300)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-150)" }}>
                      Résidez-vous dans la Communauté de Communes du Créonnais ? *
                    </label>
                    <div style={{ display: "flex", gap: "var(--dimension-150)" }}>
                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "var(--dimension-100)",
                          padding: "var(--dimension-150) var(--dimension-200)",
                          backgroundColor: formData.residenceCCC ? "var(--color-trail-dust-100)" : "var(--color-core-white)",
                          border: formData.residenceCCC ? "2px solid var(--color-trail-dust-600)" : "2px solid var(--color-grey-300)",
                          borderRadius: "var(--radius-primary)",
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="radio"
                          name="residenceCCC"
                          value="true"
                          checked={formData.residenceCCC === true}
                          onChange={() => setFormData((prev) => ({ ...prev, residenceCCC: true }))}
                        />
                        <span className="body-style1-300">Oui</span>
                      </label>
                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "var(--dimension-100)",
                          padding: "var(--dimension-150) var(--dimension-200)",
                          backgroundColor: !formData.residenceCCC ? "var(--color-trail-dust-100)" : "var(--color-core-white)",
                          border: !formData.residenceCCC ? "2px solid var(--color-trail-dust-600)" : "2px solid var(--color-grey-300)",
                          borderRadius: "var(--radius-primary)",
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="radio"
                          name="residenceCCC"
                          value="false"
                          checked={formData.residenceCCC === false}
                          onChange={() => setFormData((prev) => ({ ...prev, residenceCCC: false }))}
                        />
                        <span className="body-style1-300">Non</span>
                      </label>
                    </div>
                    <p className="body-style1-200 text-content-default-tertiary" style={{ marginTop: "var(--dimension-100)" }}>
                      Tarif : {formData.typeAdhesion === "enfant" ? (formData.residenceCCC ? "15€" : "20€") :
                               formData.typeAdhesion === "adulte" ? (formData.residenceCCC ? "15€" : "25€") :
                               (formData.residenceCCC ? "30€" : "45€")}
                    </p>
                  </div>

                  {/* Nom et Prénom */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "var(--dimension-200)",
                      marginBottom: "var(--dimension-200)",
                    }}
                  >
                    <div>
                      <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        style={{
                          width: "100%",
                          padding: "var(--dimension-150) var(--dimension-200)",
                          borderRadius: "var(--radius-primary)",
                          border: "1px solid var(--color-border-input-primary)",
                          fontSize: "var(--size-600)",
                        }}
                      />
                    </div>
                    <div>
                      <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                        style={{
                          width: "100%",
                          padding: "var(--dimension-150) var(--dimension-200)",
                          borderRadius: "var(--radius-primary)",
                          border: "1px solid var(--color-border-input-primary)",
                          fontSize: "var(--size-600)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ marginBottom: "var(--dimension-200)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "var(--dimension-150) var(--dimension-200)",
                        borderRadius: "var(--radius-primary)",
                        border: "1px solid var(--color-border-input-primary)",
                        fontSize: "var(--size-600)",
                      }}
                    />
                  </div>

                  {/* Téléphone */}
                  <div style={{ marginBottom: "var(--dimension-200)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "var(--dimension-150) var(--dimension-200)",
                        borderRadius: "var(--radius-primary)",
                        border: "1px solid var(--color-border-input-primary)",
                        fontSize: "var(--size-600)",
                      }}
                    />
                  </div>

                  {/* Adresse */}
                  <div style={{ marginBottom: "var(--dimension-200)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                      Adresse
                    </label>
                    <input
                      type="text"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleChange}
                      placeholder="Numéro et nom de rue"
                      style={{
                        width: "100%",
                        padding: "var(--dimension-150) var(--dimension-200)",
                        borderRadius: "var(--radius-primary)",
                        border: "1px solid var(--color-border-input-primary)",
                        fontSize: "var(--size-600)",
                      }}
                    />
                  </div>

                  {/* Code postal et Ville */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 2fr",
                      gap: "var(--dimension-200)",
                      marginBottom: "var(--dimension-200)",
                    }}
                  >
                    <div>
                      <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                        Code postal
                      </label>
                      <input
                        type="text"
                        name="codePostal"
                        value={formData.codePostal}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "var(--dimension-150) var(--dimension-200)",
                          borderRadius: "var(--radius-primary)",
                          border: "1px solid var(--color-border-input-primary)",
                          fontSize: "var(--size-600)",
                        }}
                      />
                    </div>
                    <div>
                      <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                        Ville
                      </label>
                      <input
                        type="text"
                        name="ville"
                        value={formData.ville}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "var(--dimension-150) var(--dimension-200)",
                          borderRadius: "var(--radius-primary)",
                          border: "1px solid var(--color-border-input-primary)",
                          fontSize: "var(--size-600)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Droit à l'image */}
                  <div style={{ marginBottom: "var(--dimension-200)", padding: "var(--dimension-200)", backgroundColor: "var(--color-grey-100)", borderRadius: "var(--radius-primary)" }}>
                    <p className="body-style1-300" style={{ marginBottom: "var(--dimension-150)" }}>
                      <strong>Droit à l&apos;image</strong>
                    </p>
                    <p className="body-style1-200 text-content-default-tertiary" style={{ marginBottom: "var(--dimension-150)" }}>
                      L&apos;association AGAP peut être amenée à prendre des photos lors d&apos;activités en atelier pour un usage de communication.
                    </p>
                    <div style={{ display: "flex", gap: "var(--dimension-200)" }}>
                      <label style={{ display: "flex", alignItems: "center", gap: "var(--dimension-100)", cursor: "pointer" }}>
                        <input
                          type="radio"
                          name="droitImage"
                          value="true"
                          checked={formData.droitImage === true}
                          onChange={() => setFormData((prev) => ({ ...prev, droitImage: true }))}
                        />
                        <span className="body-style1-300">J&apos;accepte</span>
                      </label>
                      <label style={{ display: "flex", alignItems: "center", gap: "var(--dimension-100)", cursor: "pointer" }}>
                        <input
                          type="radio"
                          name="droitImage"
                          value="false"
                          checked={formData.droitImage === false}
                          onChange={() => setFormData((prev) => ({ ...prev, droitImage: false }))}
                        />
                        <span className="body-style1-300">Je n&apos;accepte pas</span>
                      </label>
                    </div>
                  </div>

                  {/* Règlement intérieur */}
                  <div style={{ marginBottom: "var(--dimension-200)" }}>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "var(--dimension-100)",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        name="reglementAccepte"
                        checked={formData.reglementAccepte}
                        onChange={handleChange}
                        required
                        style={{ width: "18px", height: "18px", marginTop: "2px" }}
                      />
                      <span className="body-style1-300">
                        Je reconnais avoir pris connaissance et accepter le règlement intérieur de l&apos;association AGAP *
                      </span>
                    </label>
                  </div>

                  {/* Newsletter */}
                  <div style={{ marginBottom: "var(--dimension-200)" }}>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--dimension-100)",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        style={{ width: "18px", height: "18px" }}
                      />
                      <span className="body-style1-300">
                        Je souhaite recevoir la newsletter de l&apos;AGAP
                      </span>
                    </label>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: "var(--dimension-300)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                      Message (optionnel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Questions, motivations, comment avez-vous connu l'AGAP..."
                      style={{
                        width: "100%",
                        padding: "var(--dimension-150) var(--dimension-200)",
                        borderRadius: "var(--radius-primary)",
                        border: "1px solid var(--color-border-input-primary)",
                        fontSize: "var(--size-600)",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  {submitStatus === "error" && (
                    <div
                      style={{
                        backgroundColor: "#fee2e2",
                        color: "#991b1b",
                        padding: "var(--dimension-200)",
                        borderRadius: "var(--radius-primary)",
                        marginBottom: "var(--dimension-200)",
                      }}
                      className="body-style1-300"
                    >
                      Une erreur est survenue. Veuillez réessayer ou nous contacter
                      directement par téléphone.
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="300"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande d'adhésion"}
                  </Button>

                  <p
                    className="body-style1-100 text-content-default-tertiary"
                    style={{ marginTop: "var(--dimension-200)", textAlign: "center" }}
                  >
                    En soumettant ce formulaire, vous acceptez notre{" "}
                    <a href="/confidentialite" className="link">
                      politique de confidentialité
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Moyens de paiement et Contact */}
        <section
          className="section-p-default"
          style={{
            backgroundColor: "var(--color-trail-dust-600)"
          }}
        >
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-100)", color: "var(--color-core-white)" }}>
                Modalités de paiement
              </h2>
              <p className="body-style1-400" style={{ color: "rgba(255,255,255,0.85)", marginBottom: "var(--dimension-300)" }}>
                Chèque bancaire à l&apos;ordre de l&apos;AGAP, virement ou carte bancaire sur place
              </p>
              <div
                style={{
                  padding: "var(--dimension-300)",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "var(--radius-primary)",
                  marginBottom: "var(--dimension-400)"
                }}
              >
                <p className="body-style1-300" style={{ color: "rgba(255,255,255,0.9)", marginBottom: "var(--dimension-100)" }}>
                  Adhérez directement sur place à la Maison de la Poterie
                </p>
                <p className="title-style1-400" style={{ color: "var(--color-core-white)" }}>
                  Place Fouragnan, 33670 Sadirac
                </p>
              </div>

              <p className="body-style1-400" style={{ color: "rgba(255,255,255,0.85)", marginBottom: "var(--dimension-200)" }}>
                Des questions ? Contactez-nous
              </p>
              <div style={{ display: "flex", gap: "var(--dimension-150)", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="tel:+33781324294"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px 24px",
                    backgroundColor: "var(--color-core-white)",
                    borderRadius: "var(--radius-primary)",
                    color: "var(--color-trail-dust-600)",
                    fontWeight: 500,
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                >
                  07 81 32 42 94
                </a>
                <a
                  href="mailto:centreceramique33@gmail.com"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px 24px",
                    backgroundColor: "transparent",
                    border: "2px solid var(--color-core-white)",
                    borderRadius: "var(--radius-primary)",
                    color: "var(--color-core-white)",
                    fontWeight: 500,
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                >
                  Nous écrire
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
