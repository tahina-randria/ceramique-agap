"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Button from "@/components/ui/Button";

// Calendrier des stages 2025
const stages2025 = [
  {
    id: "mouler-pour-creer",
    title: "Mouler pour créer",
    instructor: "Marie Heughebaert",
    dates: "24-28 février 2025",
    duration: "5 jours",
    price: "400€",
    level: "Tous niveaux",
    description:
      "Stage intensif de moulage avec Marie Heughebaert. Apprenez à créer des moules en plâtre et à reproduire vos pièces avec précision. Techniques de moulage en creux, de coulage et de pressage.",
    includes: ["Matériel fourni", "Plâtre et argile inclus", "Accompagnement personnalisé"],
    image: "/images/activites/stages/stage-moulage.webp",
    contact: {
      name: "Marie Heughebaert",
    },
  },
  {
    id: "raku-fevrier",
    title: "Cuisson Raku",
    instructor: "Jérémy Coleman",
    dates: "2 et 16 février 2025",
    duration: "2 séances",
    price: "115€",
    priceDetails: "+ adhésion 5€ + 5€/kg terre cuite",
    level: "Intermédiaire",
    description:
      "Découvrez la magie de la cuisson Raku avec Jérémy Coleman. Émaillez vos pièces et vivez l'expérience unique de la cuisson et de l'enfumage pour des effets spectaculaires et uniques à chaque fois.",
    includes: ["Matériel fourni", "Émaux Raku", "Cuisson au four Raku"],
    image: "/images/activites/stages/stage-raku.webp",
    contact: {
      name: "Jérémy Coleman",
      tel: "06 68 97 57 32",
      email: "jerry.coleman@orange.fr",
    },
  },
  {
    id: "nerikomi",
    title: "Nerikomi",
    instructor: "Yuko Karamatsu",
    dates: "16-20 mars 2025",
    duration: "5 jours",
    price: "400€",
    level: "Tous niveaux",
    description:
      "Découvrez la technique japonaise du Nerikomi avec Yuko Karamatsu. Cette méthode ancestrale consiste à assembler des terres colorées pour créer des motifs géométriques ou organiques révélés au tranchage. Un travail minutieux et méditatif.",
    includes: ["Matériel fourni", "Terres colorées", "Cuisson incluse", "8 participants max"],
    image: "/images/activites/stages/stage-nerikomi.webp",
    contact: {
      name: "Yuko Karamatsu",
    },
  },
  {
    id: "modeler-printemps",
    title: "Modeler le printemps",
    instructor: "Laure Carpenè",
    dates: "23 avril 2025",
    duration: "1 jour",
    price: "40€",
    level: "Enfants",
    description:
      "Stage spécial enfants pour les vacances de printemps ! Les enfants découvriront le modelage en créant des pièces sur le thème du printemps : fleurs, animaux, insectes...",
    includes: ["Matériel fourni", "Cuisson incluse", "Goûter offert"],
    image: "/images/activites/stages/stage-enfants-printemps.webp",
    isChildren: true,
    contact: {
      name: "Laure Carpenè",
      tel: "06 22 80 33 68",
      email: "laurecarpene@hotmail.com",
    },
  },
  {
    id: "tournage-avril",
    title: "Stage Tournage",
    instructor: "Laure Carpenè",
    dates: "26-27 avril 2025",
    duration: "2 jours",
    price: "85€/jour",
    priceDetails: "(170€ les 2 jours)",
    level: "Débutant à intermédiaire",
    description:
      "Week-end d'initiation ou de perfectionnement au tournage avec Laure Carpenè. Apprenez les gestes fondamentaux : centrage, creusage, montée des parois. Repartez avec vos créations !",
    includes: ["Matériel fourni", "Terre incluse", "Cuisson et émaillage inclus", "8 participants max"],
    image: "/images/activites/stages/stage-tournage.webp",
    contact: {
      name: "Laure Carpenè",
      tel: "06 22 80 33 68",
      email: "laurecarpene@hotmail.com",
    },
  },
  {
    id: "sculpture-animaliere",
    title: "Sculpture animalière",
    instructor: "Gaëlle Borracherro",
    dates: "28 avril - 2 mai 2025",
    duration: "5 jours",
    price: "350€",
    level: "Tous niveaux",
    description:
      "Stage de sculpture animalière avec Gaëlle Borracherro. Apprenez à observer, comprendre et reproduire les formes animales. Techniques de modelage, d'assemblage et de finition pour créer des sculptures expressives.",
    includes: ["Matériel fourni", "Terre et outils spécialisés", "Cuisson incluse", "10 participants max"],
    image: "/images/activites/stages/stage-sculpture-animaliere.webp",
    contact: {
      name: "Gaëlle Borracherro",
    },
  },
  {
    id: "terre-vernissee",
    title: "Terre vernissée",
    instructor: "Jean-Nicolas Gérard",
    dates: "2-6 juin 2025",
    duration: "5 jours",
    price: "400€",
    level: "Intermédiaire à avancé",
    description:
      "Stage exceptionnel avec Jean-Nicolas Gérard, invité d'honneur de Céramique en Fête 2025. Découvrez les secrets de la terre vernissée traditionnelle : préparation des engobes, techniques de décor à la plume et au pinceau, cuisson au four à bois.",
    includes: ["Matériel fourni", "Cuisson au four à bois", "10 participants max"],
    image: "/images/activites/stages/stage-terre-vernissee.webp",
    highlight: true,
    contact: {
      name: "Jean-Nicolas Gérard",
    },
  },
];

// Liste simplifiée pour le calendrier
const prochainsDates = stages2025.map((stage) => ({
  id: stage.id,
  stage: stage.title,
  dates: stage.dates,
  instructor: stage.instructor,
  price: stage.price,
  highlight: stage.highlight || false,
  isChildren: stage.isChildren || false,
}));

export default function StagesPage() {
  const [formData, setFormData] = useState({
    stage: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    niveau: "debutant",
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
      const selectedStage = stages2025.find((s) => s.id === formData.stage);
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "stage",
          activite: selectedStage?.title || formData.stage,
          date: selectedStage?.dates || "",
          participants: 1,
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          message: `Niveau: ${formData.niveau}. Intervenant: ${selectedStage?.instructor}. ${formData.message}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSubmitStatus("success");
      setFormData({
        stage: "",
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        niveau: "debutant",
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
          title="Stages de Céramique"
          subtitle="Immersions intensives pour approfondir vos techniques"
          imageSrc="/images/hero/hero-stages.webp"
          imageAlt="Stage de céramique à la Maison de la Poterie"
          primaryCta={{
            label: "Voir le calendrier 2025",
            href: "#calendrier",
          }}
        />

        {/* Introduction */}
        <section style={{ padding: "var(--dimension-600) 0 var(--dimension-400)" }}>
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-300)" }}>
                Calendrier des stages 2025
              </h2>
              <p className="body-style1-500 text-content-default-tertiary">
                Tout au long de l&apos;année, la Maison de la Poterie propose des stages
                intensifs encadrés par des céramistes professionnels. Du tournage à la
                sculpture, en passant par le Raku et la terre vernissée, trouvez le stage
                qui correspond à vos envies et votre niveau.
              </p>
            </div>
          </div>
        </section>

        {/* Stage mis en avant - Jean-Nicolas Gérard */}
        <section style={{ padding: "var(--dimension-300) 0 var(--dimension-400)" }}>
          <div className="wrapper">
            <div
              style={{
                backgroundColor: "var(--color-trail-dust-50)",
                borderRadius: "var(--radius-primary)",
                overflow: "hidden",
                border: "2px solid var(--color-trail-dust-300)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0",
                }}
                className="stage-highlight-grid"
              >
                <div
                  className="media media-ratio-4-3"
                  style={{ borderRadius: 0, minHeight: "300px" }}
                >
                  <img
                    src="/images/activites/stages/stage-terre-vernissee.webp"
                    alt="Stage Terre vernissée avec Jean-Nicolas Gérard"
                    className="media__image object-cover"
                  />
                </div>
                <div style={{ padding: "var(--dimension-400)" }}>
                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: "var(--color-trail-dust-600)",
                      color: "var(--color-core-white)",
                      padding: "var(--dimension-050) var(--dimension-150)",
                      borderRadius: "var(--radius-primary-small)",
                      marginBottom: "var(--dimension-200)",
                      fontSize: "var(--size-500)",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Stage exceptionnel
                  </div>
                  <h2 className="title-style1-700" style={{ marginBottom: "var(--dimension-150)" }}>
                    Terre vernissée
                  </h2>
                  <p
                    className="body-style1-400"
                    style={{ color: "var(--color-trail-dust-700)", marginBottom: "var(--dimension-200)" }}
                  >
                    avec Jean-Nicolas Gérard
                  </p>
                  <p
                    className="body-style1-300 text-content-default-tertiary"
                    style={{ marginBottom: "var(--dimension-300)" }}
                  >
                    Stage exceptionnel avec l&apos;invité d&apos;honneur de Céramique en Fête 2025.
                    Découvrez les secrets de la terre vernissée traditionnelle : préparation
                    des engobes, techniques de décor, cuisson au four à bois.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "var(--dimension-150)",
                      marginBottom: "var(--dimension-300)",
                    }}
                  >
                    <div>
                      <p className="body-style1-200 text-content-default-tertiary">Dates</p>
                      <p className="title-style1-400">2-6 juin 2025</p>
                    </div>
                    <div>
                      <p className="body-style1-200 text-content-default-tertiary">Durée</p>
                      <p className="title-style1-400">5 jours</p>
                    </div>
                    <div>
                      <p className="body-style1-200 text-content-default-tertiary">Niveau</p>
                      <p className="title-style1-400">Intermédiaire à avancé</p>
                    </div>
                    <div>
                      <p className="body-style1-200 text-content-default-tertiary">Tarif</p>
                      <p className="title-style1-400">400€</p>
                    </div>
                  </div>
                  <Button href="#reservation" variant="primary" size="300">
                    Réserver ce stage
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendrier complet */}
        <section
          id="calendrier"
          className="section-p-default"
          style={{ backgroundColor: "var(--color-grey-100)" }}
        >
          <div className="wrapper">
            <div style={{ textAlign: "center", marginBottom: "var(--dimension-400)" }}>
              <h2
                className="title-style4-600"
                style={{ marginBottom: "var(--dimension-200)" }}
              >
                Tous les stages 2025
              </h2>
              <p className="body-style1-400 text-content-default-tertiary">
                Cliquez sur un stage pour plus de détails et réserver votre place
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "var(--dimension-300)",
              }}
            >
              {stages2025.filter(s => !s.highlight).map((stage) => (
                <div
                  key={stage.id}
                  style={{
                    backgroundColor: "var(--color-core-white)",
                    borderRadius: "var(--radius-primary)",
                    overflow: "hidden",
                    border: "1px solid var(--color-grey-300)",
                  }}
                >
                  <div
                    className="media media-ratio-16-9"
                    style={{ borderRadius: 0 }}
                  >
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="media__image object-cover"
                    />
                  </div>
                  <div style={{ padding: "var(--dimension-300)" }}>
                    {stage.isChildren && (
                      <div
                        style={{
                          display: "inline-block",
                          backgroundColor: "var(--color-trail-dust-100)",
                          color: "var(--color-trail-dust-700)",
                          padding: "var(--dimension-050) var(--dimension-100)",
                          borderRadius: "var(--radius-primary-small)",
                          marginBottom: "var(--dimension-150)",
                          fontSize: "var(--size-400)",
                          fontWeight: "500",
                        }}
                      >
                        Stage enfants
                      </div>
                    )}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "var(--dimension-150)",
                      }}
                    >
                      <div>
                        <span
                          className="body-style1-100"
                          style={{
                            color: "var(--color-trail-dust-600)",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            display: "block",
                          }}
                        >
                          {stage.dates}
                        </span>
                        <span className="body-style1-100 text-content-default-tertiary">
                          {stage.duration}
                        </span>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span className="title-style1-400">{stage.price}</span>
                        {stage.priceDetails && (
                          <span
                            className="body-style1-100 text-content-default-tertiary"
                            style={{ display: "block" }}
                          >
                            {stage.priceDetails}
                          </span>
                        )}
                      </div>
                    </div>
                    <h3
                      className="title-style1-500"
                      style={{ marginBottom: "var(--dimension-050)" }}
                    >
                      {stage.title}
                    </h3>
                    <p
                      className="body-style1-300"
                      style={{
                        color: "var(--color-trail-dust-600)",
                        marginBottom: "var(--dimension-150)",
                      }}
                    >
                      avec {stage.instructor}
                    </p>
                    <p
                      className="body-style1-200 text-content-default-tertiary"
                      style={{ marginBottom: "var(--dimension-100)" }}
                    >
                      Niveau : {stage.level}
                    </p>
                    <p
                      className="body-style1-300 text-content-default-tertiary"
                      style={{ marginBottom: "var(--dimension-200)" }}
                    >
                      {stage.description}
                    </p>
                    <ul style={{ marginBottom: "var(--dimension-200)" }}>
                      {stage.includes.map((item, index) => (
                        <li
                          key={index}
                          className="body-style1-200 text-content-default-tertiary"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--dimension-100)",
                          }}
                        >
                          <span style={{ color: "var(--color-trail-dust-600)" }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    {stage.contact.tel && (
                      <p
                        className="body-style1-200 text-content-default-tertiary"
                        style={{ marginBottom: "var(--dimension-200)" }}
                      >
                        Contact : {stage.contact.tel}
                        {stage.contact.email && (
                          <>
                            {" "}
                            /{" "}
                            <a href={`mailto:${stage.contact.email}`} className="link">
                              {stage.contact.email}
                            </a>
                          </>
                        )}
                      </p>
                    )}
                    <Button href="#reservation" variant="secondary" size="100" fullWidth>
                      Réserver ce stage
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vue calendrier simplifiée */}
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
                En un coup d&apos;oeil
              </h2>
              <p className="body-style1-400 text-content-default-tertiary">
                Toutes les dates des stages 2025
              </p>
            </div>

            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
              {prochainsDates.map((date, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: date.highlight
                      ? "var(--color-trail-dust-50)"
                      : "var(--color-core-white)",
                    padding: "var(--dimension-200) var(--dimension-300)",
                    borderRadius: "var(--radius-primary)",
                    marginBottom: "var(--dimension-150)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "var(--dimension-150)",
                    border: date.highlight
                      ? "2px solid var(--color-trail-dust-300)"
                      : "1px solid var(--color-grey-300)",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--dimension-100)" }}>
                      <p className="title-style1-400">{date.stage}</p>
                      {date.highlight && (
                        <span
                          style={{
                            backgroundColor: "var(--color-trail-dust-600)",
                            color: "var(--color-core-white)",
                            padding: "2px 8px",
                            borderRadius: "var(--radius-primary-small)",
                            fontSize: "var(--size-400)",
                            fontWeight: "600",
                          }}
                        >
                          Exceptionnel
                        </span>
                      )}
                      {date.isChildren && (
                        <span
                          style={{
                            backgroundColor: "var(--color-trail-dust-100)",
                            color: "var(--color-trail-dust-700)",
                            padding: "2px 8px",
                            borderRadius: "var(--radius-primary-small)",
                            fontSize: "var(--size-400)",
                          }}
                        >
                          Enfants
                        </span>
                      )}
                    </div>
                    <p className="body-style1-200 text-content-default-tertiary">
                      {date.dates} - {date.instructor}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--dimension-200)" }}>
                    <span className="title-style1-300">{date.price}</span>
                    <Button href="#reservation" variant="primary" size="100">
                      Réserver
                    </Button>
                  </div>
                </div>
              ))}
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
                  Réserver un stage
                </h2>
                <p className="body-style1-400 text-content-default-tertiary">
                  Remplissez le formulaire ci-dessous pour réserver votre place.
                  Nous vous confirmerons la disponibilité par email.
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
                    Nous avons bien reçu votre demande de réservation. Nous vous
                    enverrons une confirmation par email dans les 48h.
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
                    Faire une nouvelle réservation
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
                  {/* Stage */}
                  <div style={{ marginBottom: "var(--dimension-200)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                      Stage souhaité *
                    </label>
                    <select
                      name="stage"
                      value={formData.stage}
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
                      <option value="">Sélectionnez un stage</option>
                      {stages2025.map((stage) => (
                        <option key={stage.id} value={stage.id}>
                          {stage.title} - {stage.dates} ({stage.instructor}) - {stage.price}
                        </option>
                      ))}
                    </select>
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

                  {/* Téléphone et Niveau */}
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
                    <div>
                      <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                        Votre niveau
                      </label>
                      <select
                        name="niveau"
                        value={formData.niveau}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "var(--dimension-150) var(--dimension-200)",
                          borderRadius: "var(--radius-primary)",
                          border: "1px solid var(--color-border-input-primary)",
                          fontSize: "var(--size-600)",
                          backgroundColor: "var(--color-core-white)",
                        }}
                      >
                        <option value="debutant">Débutant (aucune expérience)</option>
                        <option value="initie">Initié (quelques ateliers)</option>
                        <option value="intermediaire">Intermédiaire (pratique régulière)</option>
                        <option value="avance">Avancé (plusieurs années)</option>
                        <option value="confirme">Confirmé (pratique professionnelle)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: "var(--dimension-300)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                      Message ou questions
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Questions, attentes particulières..."
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
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande de réservation"}
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

        {/* Conditions de réservation */}
        <section className="section-p-default" style={{ backgroundColor: "var(--color-grey-200)" }}>
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-300)", textAlign: "center" }}>
                Conditions de réservation
              </h2>
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <ul className="body-style1-300 text-content-default-tertiary" style={{ paddingLeft: "var(--dimension-200)" }}>
                  <li style={{ marginBottom: "var(--dimension-150)" }}>
                    <strong>Réservation :</strong> La réservation est confirmée à réception du paiement intégral.
                    Un acompte de 50% peut être demandé lors de l&apos;inscription.
                  </li>
                  <li style={{ marginBottom: "var(--dimension-150)" }}>
                    <strong>Annulation par le stagiaire :</strong> Remboursement intégral si annulation plus de 15 jours
                    avant le stage. Entre 15 et 7 jours : remboursement de 50% ou report possible. Moins de 7 jours :
                    aucun remboursement sauf cas de force majeure.
                  </li>
                  <li style={{ marginBottom: "var(--dimension-150)" }}>
                    <strong>Report :</strong> En cas d&apos;impossibilité, vous pouvez reporter votre stage sur une
                    date ultérieure (sous réserve de disponibilité).
                  </li>
                  <li style={{ marginBottom: "var(--dimension-150)" }}>
                    <strong>Annulation par l&apos;AGAP :</strong> En cas d&apos;annulation du stage par l&apos;AGAP
                    (nombre minimum de participants non atteint, intempéries...), un remboursement intégral ou un
                    report sera proposé.
                  </li>
                  <li>
                    <strong>Nombre minimum :</strong> Les stages sont maintenus à partir de 4 participants.
                    En cas d&apos;annulation, vous serez prévenu au plus tard 5 jours avant.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          className="section-p-default"
          style={{ backgroundColor: "var(--color-grey-900)" }}
        >
          <div className="wrapper">
            <div style={{ textAlign: "center" }}>
              <h2
                className="title-style1-600"
                style={{ color: "var(--color-core-white)", marginBottom: "var(--dimension-200)" }}
              >
                Des questions sur les stages ?
              </h2>
              <p
                className="body-style1-400"
                style={{ color: "var(--color-grey-300)", marginBottom: "var(--dimension-300)" }}
              >
                Notre équipe est à votre disposition pour vous renseigner
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "var(--dimension-200)", flexWrap: "wrap" }}>
                <a
                  href="tel:+33781324294"
                  className="button button--secondary button--300"
                >
                  <span className="button__content">07 81 32 42 94</span>
                </a>
                <a
                  href="mailto:centreceramique33@gmail.com"
                  className="button button--tertiary button--300"
                >
                  <span className="button__content">Envoyer un email</span>
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
