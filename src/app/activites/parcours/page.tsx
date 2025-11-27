"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Button from "@/components/ui/Button";

const parcours = [
  {
    id: "maternelle",
    title: "Parcours Maternelle",
    age: "3-6 ans",
    duration: "2h",
    price: "17€/élève",
    description:
      "Une découverte sensorielle de l'argile adaptée aux tout-petits. Toucher, manipuler, créer... Les enfants explorent la matière et repartent avec leur création.",
    activities: [
      "Visite ludique du musée",
      "Manipulation de l'argile",
      "Atelier créatif simple",
      "Création à emporter",
    ],
    minGroup: 10,
    maxGroup: 24,
  },
  {
    id: "primaire",
    title: "Parcours Primaire",
    age: "6-11 ans",
    duration: "2h",
    price: "17€/élève",
    description:
      "Une immersion dans l'histoire de la poterie à Sadirac. Les élèves découvrent le musée, les techniques traditionnelles et créent leur propre pièce.",
    activities: [
      "Visite guidée du musée",
      "Découverte des outils du potier",
      "Atelier modelage ou tournage",
      "Création émaillée à emporter",
    ],
    minGroup: 10,
    maxGroup: 24,
  },
  {
    id: "college",
    title: "Parcours Collège",
    age: "11-15 ans",
    duration: "2h",
    price: "17€/élève",
    description:
      "Un parcours approfondi liant patrimoine local et pratique artistique. Les collégiens explorent l'histoire de la céramique et expérimentent le tournage.",
    activities: [
      "Visite thématique du musée",
      "Histoire de la céramique à Sadirac",
      "Démonstration de tournage",
      "Initiation au tour ou modelage",
    ],
    minGroup: 10,
    maxGroup: 24,
  },
  {
    id: "lycee",
    title: "Parcours Lycée",
    age: "15-18 ans",
    duration: "2h",
    price: "17€/élève",
    description:
      "Un parcours complet combinant histoire de l'art, patrimoine industriel et création contemporaine. Idéal pour les options arts plastiques.",
    activities: [
      "Conférence sur l'histoire de la céramique",
      "Visite complète du musée",
      "Rencontre avec un artiste céramiste",
      "Atelier de création libre",
    ],
    minGroup: 10,
    maxGroup: 24,
  },
];

const infosPedagogiques = [
  {
    title: "Liens avec les programmes",
    content:
      "Nos parcours s'inscrivent dans les programmes scolaires : histoire, arts plastiques, sciences (géologie, chimie), technologie, découverte des métiers d'art.",
  },
  {
    title: "Dossier pédagogique",
    content:
      "Un dossier pédagogique complet est fourni aux enseignants avant la visite pour préparer les élèves et exploiter la sortie en classe.",
  },
  {
    title: "Adaptation",
    content:
      "Nos parcours peuvent être adaptés à vos projets de classe et aux besoins spécifiques des élèves. Rencontre possible avec des céramistes professionnels.",
  },
  {
    title: "Tarif groupe",
    content:
      "Forfait 420€ pour les groupes de 24 élèves et plus. Adhésion classe : 10€ (accès privilégié aux événements).",
  },
];

export default function ParcoursPage() {
  const [formData, setFormData] = useState({
    parcours: "",
    etablissement: "",
    classe: "",
    effectif: "",
    datesSouhaitees: "",
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "parcours",
          activite: formData.parcours,
          date: formData.datesSouhaitees,
          participants: parseInt(formData.effectif) || 1,
          nom: formData.nom,
          prenom: "",
          email: formData.email,
          telephone: formData.telephone,
          etablissement: formData.etablissement,
          niveau: formData.classe,
          nombreEleves: parseInt(formData.effectif) || 1,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSubmitStatus("success");
      setFormData({
        parcours: "",
        etablissement: "",
        classe: "",
        effectif: "",
        datesSouhaitees: "",
        nom: "",
        email: "",
        telephone: "",
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
          title="Parcours Scolaires"
          subtitle="Découvrez notre patrimoine potier avec votre classe"
          imageSrc="/images/hero/hero-parcours.webp"
          imageAlt="Visite scolaire au musée"
          primaryCta={{
            label: "Réserver une visite",
            href: "#reservation",
          }}
        />

        {/* Introduction */}
        <section style={{ padding: "var(--dimension-600) 0 var(--dimension-400)" }}>
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-300)" }}>
                Des parcours adaptés à chaque niveau
              </h2>
              <p className="body-style1-500 text-content-default-tertiary">
                De la maternelle au lycée, nous proposons des parcours
                pédagogiques alliant découverte du patrimoine et pratique
                artistique. Nos médiateurs culturels adaptent le contenu à l&apos;âge
                des élèves et aux objectifs pédagogiques de chaque classe.
              </p>
            </div>
          </div>
        </section>

        {/* Pass Culture */}
        <section style={{ padding: "var(--dimension-300) 0 var(--dimension-400)" }}>
          <div className="wrapper">
            <div
              style={{
                backgroundColor: "var(--color-trail-dust-600)",
                borderRadius: "var(--radius-large)",
                padding: "var(--dimension-400)",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "var(--dimension-300)",
                alignItems: "center",
              }}
              className="lg:grid-cols-[auto_1fr]"
            >
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  borderRadius: "var(--radius-primary)",
                  padding: "var(--dimension-200)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "3rem" }}>🎭</span>
              </div>
              <div style={{ color: "var(--color-core-white)" }}>
                <p className="title-style1-200" style={{ marginBottom: "var(--dimension-050)", opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Nouveauté
                </p>
                <h3 className="title-style4-500" style={{ marginBottom: "var(--dimension-150)" }}>
                  Éligible Pass Culture
                </h3>
                <p className="body-style1-400" style={{ opacity: 0.9 }}>
                  Notre offre est désormais référencée sur la plateforme <strong>ADAGE</strong> et éligible au dispositif <strong>Pass Culture</strong>.
                  Simplifiez vos démarches de réservation et de financement pour vos sorties scolaires.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Liste des parcours */}
        <section style={{ padding: "var(--dimension-300) 0 var(--dimension-400)" }}>
          <div className="wrapper">
            {parcours.map((p, index) => (
              <div
                key={p.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "var(--dimension-400)",
                  alignItems: "center",
                  marginBottom: index < parcours.length - 1 ? "var(--dimension-600)" : 0,
                  padding: "var(--dimension-400)",
                  backgroundColor: index % 2 === 0 ? "var(--color-grey-100)" : "transparent",
                  borderRadius: "var(--radius-large)",
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
                    {p.age}
                  </span>
                  <h3
                    className="title-style4-500"
                    style={{ marginBottom: "var(--dimension-150)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="body-style1-400 text-content-default-tertiary"
                    style={{ marginBottom: "var(--dimension-300)" }}
                  >
                    {p.description}
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "var(--dimension-150)",
                      marginBottom: "var(--dimension-300)",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "var(--color-core-white)",
                        padding: "var(--dimension-150)",
                        borderRadius: "var(--radius-primary)",
                        textAlign: "center",
                      }}
                    >
                      <p className="body-style1-100 text-content-default-tertiary">
                        Durée
                      </p>
                      <p className="title-style1-300">{p.duration}</p>
                    </div>
                    <div
                      style={{
                        backgroundColor: "var(--color-core-white)",
                        padding: "var(--dimension-150)",
                        borderRadius: "var(--radius-primary)",
                        textAlign: "center",
                      }}
                    >
                      <p className="body-style1-100 text-content-default-tertiary">
                        Tarif
                      </p>
                      <p className="title-style1-300">{p.price}</p>
                    </div>
                    <div
                      style={{
                        backgroundColor: "var(--color-core-white)",
                        padding: "var(--dimension-150)",
                        borderRadius: "var(--radius-primary)",
                        textAlign: "center",
                      }}
                    >
                      <p className="body-style1-100 text-content-default-tertiary">
                        Groupe
                      </p>
                      <p className="title-style1-300">{p.minGroup}-{p.maxGroup}</p>
                    </div>
                  </div>

                  <div style={{ marginBottom: "var(--dimension-200)" }}>
                    <p className="body-style1-300" style={{ fontWeight: 600, marginBottom: "var(--dimension-100)" }}>
                      Au programme :
                    </p>
                    <ul>
                      {p.activities.map((activity, i) => (
                        <li
                          key={i}
                          className="body-style1-300 text-content-default-tertiary"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--dimension-100)",
                            marginBottom: "var(--dimension-050)",
                          }}
                        >
                          <span style={{ color: "var(--color-trail-dust-600)" }}>•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button href="#reservation" variant="primary" size="100">
                    Réserver ce parcours
                  </Button>
                </div>

                <div
                  className="media media-ratio-16-9"
                  style={{
                    borderRadius: "var(--radius-large)",
                    overflow: "hidden",
                    order: index % 2 === 0 ? 1 : 0,
                  }}
                >
                  <img
                    src={`/images/activites/parcours/${
                      index === 0
                        ? "parcours-decouverte"
                        : index === 1
                        ? "parcours-historique"
                        : index === 2
                        ? "parcours-pratique"
                        : "parcours-projet"
                    }.webp`}
                    alt={p.title}
                    className="media__image object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Informations pédagogiques */}
        <section
          className="section-p-default"
          style={{ backgroundColor: "var(--color-grey-200)" }}
        >
          <div className="wrapper">
            <div style={{ textAlign: "center", marginBottom: "var(--dimension-400)" }}>
              <h2
                className="title-style4-600"
                style={{ marginBottom: "var(--dimension-200)" }}
              >
                Informations pour les enseignants
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "var(--dimension-300)",
              }}
            >
              {infosPedagogiques.map((info, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "var(--color-core-white)",
                    padding: "var(--dimension-300)",
                    borderRadius: "var(--radius-primary)",
                  }}
                >
                  <h3
                    className="title-style1-400"
                    style={{ marginBottom: "var(--dimension-150)" }}
                  >
                    {info.title}
                  </h3>
                  <p className="body-style1-300 text-content-default-tertiary">
                    {info.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Dossier pédagogique téléchargeable */}
            <div
              style={{
                marginTop: "var(--dimension-400)",
                backgroundColor: "var(--color-core-white)",
                borderRadius: "var(--radius-large)",
                padding: "var(--dimension-400)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
                  marginBottom: "var(--dimension-200)",
                  fontSize: "1.5rem",
                }}
              >
                📄
              </div>
              <h3 className="title-style1-500" style={{ marginBottom: "var(--dimension-150)" }}>
                Téléchargez le dossier pédagogique
              </h3>
              <p
                className="body-style1-300 text-content-default-tertiary"
                style={{ maxWidth: "500px", marginBottom: "var(--dimension-300)" }}
              >
                Retrouvez toutes les informations pour préparer votre visite : histoire du lieu,
                pièces du musée, activités proposées, profils des céramistes intervenants et informations pratiques.
              </p>
              <Button href="/documents/dossier-pedagogique.pdf" variant="primary" size="300">
                Télécharger le PDF
              </Button>
            </div>
          </div>
        </section>

        {/* Formulaire de réservation */}
        <section id="reservation" className="section-p-default">
          <div className="wrapper">
            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "var(--dimension-400)" }}>
                <h2
                  className="title-style4-600"
                  style={{ marginBottom: "var(--dimension-200)" }}
                >
                  Réserver une visite scolaire
                </h2>
                <p className="body-style1-400 text-content-default-tertiary">
                  Remplissez le formulaire ci-dessous et nous vous recontacterons
                  pour organiser votre visite.
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
                    Nous avons bien reçu votre demande de visite scolaire. Notre
                    équipe vous contactera dans les plus brefs délais pour
                    confirmer les disponibilités.
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
                  {/* Parcours */}
                  <div style={{ marginBottom: "var(--dimension-200)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                      Parcours souhaité *
                    </label>
                    <select
                      name="parcours"
                      value={formData.parcours}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "var(--dimension-150) var(--dimension-200)",
                        borderRadius: "var(--radius-primary)",
                        border: "1px solid var(--color-border-input-primary)",
                        fontSize: "var(--size-600)",
                        backgroundColor: "var(--color-core-white)",
                      }}
                    >
                      <option value="">Sélectionnez un parcours</option>
                      <option value="maternelle">Parcours Maternelle (3-6 ans) - 17€/élève</option>
                      <option value="primaire">Parcours Primaire (6-11 ans) - 17€/élève</option>
                      <option value="college">Parcours Collège (11-15 ans) - 17€/élève</option>
                      <option value="lycee">Parcours Lycée (15-18 ans) - 17€/élève</option>
                      <option value="autre">Autre (précisez dans le message)</option>
                    </select>
                  </div>

                  {/* Établissement et Classe */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "2fr 1fr",
                      gap: "var(--dimension-200)",
                      marginBottom: "var(--dimension-200)",
                    }}
                  >
                    <div>
                      <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                        Établissement *
                      </label>
                      <input
                        type="text"
                        name="etablissement"
                        value={formData.etablissement}
                        onChange={handleChange}
                        required
                        placeholder="Nom de l'école ou du collège"
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
                        Classe *
                      </label>
                      <input
                        type="text"
                        name="classe"
                        value={formData.classe}
                        onChange={handleChange}
                        required
                        placeholder="ex: CM2"
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

                  {/* Effectif et Dates */}
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
                        Effectif *
                      </label>
                      <input
                        type="number"
                        name="effectif"
                        value={formData.effectif}
                        onChange={handleChange}
                        required
                        min="10"
                        max="60"
                        placeholder="Nombre d'élèves"
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
                        Dates souhaitées *
                      </label>
                      <input
                        type="text"
                        name="datesSouhaitees"
                        value={formData.datesSouhaitees}
                        onChange={handleChange}
                        required
                        placeholder="ex: Semaine du 15 janvier ou dates précises"
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

                  {/* Contact enseignant */}
                  <div
                    style={{
                      padding: "var(--dimension-200)",
                      backgroundColor: "var(--color-core-white)",
                      borderRadius: "var(--radius-primary)",
                      marginBottom: "var(--dimension-200)",
                    }}
                  >
                    <p className="body-style1-300" style={{ fontWeight: 600, marginBottom: "var(--dimension-150)" }}>
                      Coordonnées de l&apos;enseignant
                    </p>
                    <div style={{ marginBottom: "var(--dimension-150)" }}>
                      <label className="body-style1-200" style={{ display: "block", marginBottom: "var(--dimension-050)" }}>
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
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "var(--dimension-150)",
                      }}
                    >
                      <div>
                        <label className="body-style1-200" style={{ display: "block", marginBottom: "var(--dimension-050)" }}>
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
                      <div>
                        <label className="body-style1-200" style={{ display: "block", marginBottom: "var(--dimension-050)" }}>
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          name="telephone"
                          value={formData.telephone}
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
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: "var(--dimension-300)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                      Projet pédagogique ou questions
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Décrivez votre projet de classe, vos attentes particulières, besoins spécifiques des élèves..."
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
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande de visite"}
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

        {/* Contact direct */}
        <section
          className="section-p-default"
          style={{ backgroundColor: "var(--color-grey-200)" }}
        >
          <div className="wrapper">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-150)" }}>
                  Contact réservations
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Pour toute question ou demande de devis :
                  <br />
                  <br />
                  <strong>Tél :</strong>{" "}
                  <a href="tel:+33781324294" className="link">
                    07 81 32 42 94
                  </a>
                  <br />
                  <strong>Email :</strong>{" "}
                  <a href="mailto:centreceramique33@gmail.com" className="link">
                    centreceramique33@gmail.com
                  </a>
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-150)" }}>
                  Accès
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Maison de la Poterie
                  <br />
                  Place Fouragnan
                  <br />
                  33670 Sadirac
                  <br />
                  <br />
                  Parking bus disponible à proximité
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-150)" }}>
                  Horaires
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Visites scolaires sur réservation
                  <br />
                  Du mardi au vendredi
                  <br />
                  9h - 12h30 / 14h - 17h30
                  <br />
                  <br />
                  <em>Fermé pendant les vacances de Noël</em>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
