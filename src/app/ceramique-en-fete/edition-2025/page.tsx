"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/sections/SectionHeader";

const programmeSamedi = [
  { heure: "10h00", activite: "Ouverture du 38e marché des céramistes", lieu: "Place Fouragnan" },
  { heure: "11h00", activite: "Inauguration du festival & vernissage expo Jean-Nicolas Gérard", lieu: "Maison de la Poterie" },
  { heure: "11h00", activite: "Présentation du concours « Pichet »", lieu: "Maison de la Poterie" },
  { heure: "10h-18h", activite: "Installation artistique Emmanuel Aragon (en direct)", lieu: "Maison de la Poterie" },
  { heure: "10h-18h", activite: "Atelier Raku & Tombola", lieu: "Place Fouragnan" },
  { heure: "15h00", activite: "Conférence Pierre Régaldo-Saint Blancard (histoire céramique)", lieu: "Bibliothèque" },
  { heure: "15h-18h", activite: "Ateliers gratuits pour enfants", lieu: "Maison de la Poterie" },
  { heure: "19h00", activite: "Fermeture du marché", lieu: "Place Fouragnan" },
  { heure: "21h00", activite: "Concert Jérémie Malodj'", lieu: "Place Fouragnan" },
];

const programmeDimanche = [
  { heure: "10h00", activite: "Reprise du marché des céramistes & expositions", lieu: "Place Fouragnan" },
  { heure: "10h-18h", activite: "Installation artistique Emmanuel Aragon", lieu: "Maison de la Poterie" },
  { heure: "10h-18h", activite: "Cuisson raku & décoration de bols", lieu: "Place Fouragnan" },
  { heure: "11h00", activite: "Intronisation par la Confrérie des Cruches Sadiracaises", lieu: "Maison de la Poterie" },
  { heure: "15h-18h", activite: "Ateliers gratuits pour enfants", lieu: "Maison de la Poterie" },
  { heure: "16h00", activite: "Lecture conte « La souris grise et le monde vert » (dès 3 ans)", lieu: "Bibliothèque" },
  { heure: "18h00", activite: "Résultats du concours « Pichet »", lieu: "Place Fouragnan" },
  { heure: "19h00", activite: "Clôture du festival", lieu: "Place Fouragnan" },
];

const programmeAvantFestival = [
  { date: "2-6 juin 2025", activite: "Stage « Terre vernissée » avec Jean-Nicolas Gérard", lieu: "Maison de la Poterie" },
  { date: "4 juin 2025", activite: "Soirée cinéma : Ernest Cole, photographe (Raoul Peck) + buffet", lieu: "Cinéma Max Linder, Créon" },
];

const infosPratiques = [
  {
    title: "Dates",
    content: "7 et 8 juin 2025\n38e édition",
    icon: "📅",
  },
  {
    title: "Horaires",
    content: "10h - 19h (samedi)\n10h - 19h (dimanche)",
    icon: "🕐",
  },
  {
    title: "Lieu",
    content: "Maison de la Poterie\nPlace Fouragnan\n33670 Sadirac",
    icon: "📍",
  },
  {
    title: "Tarifs",
    content: "Entrée gratuite\nAteliers enfants : gratuits",
    icon: "🎟️",
  },
];

export default function Edition2025Page() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    nombrePersonnes: "1",
    ateliers: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (atelier: string) => {
    setFormData((prev) => ({
      ...prev,
      ateliers: prev.ateliers.includes(atelier)
        ? prev.ateliers.filter((a) => a !== atelier)
        : [...prev.ateliers, atelier],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "ceramique-fete",
          activite: "Céramique en Fête 2025 - 38e édition",
          participants: parseInt(formData.nombrePersonnes) || 1,
          nom: formData.nom.split(" ").slice(-1)[0] || formData.nom,
          prenom: formData.nom.split(" ").slice(0, -1).join(" ") || "",
          email: formData.email,
          telephone: "",
          typeReservation: "visiteur",
          message: `Ateliers souhaités: ${formData.ateliers.join(", ") || "Aucun"}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSubmitStatus("success");
      setFormData({ nom: "", email: "", nombrePersonnes: "1", ateliers: [] });
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
          title="38e édition"
          subtitle="7 & 8 juin 2025 • Invité d'honneur : Jean-Nicolas Gérard"
          imageSrc="/images/hero/hero-festival.webp"
          imageAlt="Céramique en Fête 2025"
          primaryCta={{
            label: "Voir le programme",
            href: "#programme",
          }}
          secondaryCta={{
            label: "S'inscrire aux ateliers",
            href: "#reservation",
          }}
          size="large"
        />

        {/* Introduction */}
        <section style={{ padding: "var(--dimension-600) 0 var(--dimension-400)" }}>
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-300)" }}>
                Un programme riche et varié
              </h2>
              <p className="body-style1-500 text-content-default-tertiary">
                Pour sa 38e édition, Céramique en Fête met à l&apos;honneur <strong>Jean-Nicolas Gérard</strong>,
                grand céramiste de la terre vernissée reconnu internationalement. Marché de plus de
                40 céramistes, démonstrations, ateliers, concert, conférences... Un week-end de
                partage et de découverte au cœur de l&apos;Entre-Deux-Mers.
              </p>
            </div>
          </div>
        </section>

        {/* Invité d'honneur */}
        <section style={{ padding: "var(--dimension-300) 0 var(--dimension-400)" }}>
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
                  Invité d&apos;honneur
                </p>
                <h3 className="title-style4-700" style={{ marginBottom: "var(--dimension-200)" }}>
                  Jean-Nicolas Gérard
                </h3>
                <p className="body-style1-400" style={{ marginBottom: "var(--dimension-200)", opacity: 0.9 }}>
                  Depuis plus de 40 ans, Jean-Nicolas Gérard façonne la terre vernissée avec une liberté rare.
                  Formé à l&apos;École des Beaux-Arts d&apos;Aix-en-Provence, il se distingue par une spontanéité brute,
                  un geste instinctif qui rend chaque pièce unique et vivante.
                </p>
                <p className="body-style1-300" style={{ marginBottom: "var(--dimension-200)", opacity: 0.8 }}>
                  &quot;J&apos;aime que mes pots soient utilisés. Je veux que les gens aient envie de s&apos;en servir au quotidien.&quot;
                </p>
                <p className="body-style1-300" style={{ marginBottom: "var(--dimension-300)", opacity: 0.8 }}>
                  <strong>Exposition :</strong> 7 juin - 12 juillet 2025 à la Maison de la Poterie
                </p>
                <p className="body-style1-300" style={{ opacity: 0.8 }}>
                  <strong>Stage :</strong> 2-6 juin 2025 - &quot;Terre vernissée&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Infos pratiques */}
        <section
          id="infos-pratiques"
          className="section-p-default"
          style={{ backgroundColor: "var(--color-grey-200)" }}
        >
          <div className="wrapper">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "var(--dimension-300)",
              }}
            >
              {infosPratiques.map((info, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "var(--color-core-white)",
                    padding: "var(--dimension-300)",
                    borderRadius: "var(--radius-primary)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "var(--dimension-150)" }}>
                    {info.icon}
                  </div>
                  <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-100)" }}>
                    {info.title}
                  </h3>
                  <p
                    className="body-style1-300 text-content-default-tertiary"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {info.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avant le festival */}
        <section className="section-p-default">
          <div className="wrapper">
            <SectionHeader
              title="Avant le festival"
              subtitle="Stage et soirée cinéma"
              align="center"
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "var(--dimension-300)",
                marginTop: "var(--dimension-400)",
              }}
            >
              {programmeAvantFestival.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "var(--color-grey-100)",
                    padding: "var(--dimension-300)",
                    borderRadius: "var(--radius-primary)",
                  }}
                >
                  <p className="title-style1-200" style={{ color: "var(--color-trail-dust-600)", marginBottom: "var(--dimension-100)" }}>
                    {item.date}
                  </p>
                  <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-150)" }}>
                    {item.activite}
                  </h3>
                  <p className="body-style1-300 text-content-default-tertiary">
                    {item.lieu}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programme */}
        <section id="programme" className="section-p-default" style={{ backgroundColor: "var(--color-grey-100)" }}>
          <div className="wrapper">
            <SectionHeader
              title="Programme complet"
              subtitle="Samedi 7 et dimanche 8 juin 2025"
              align="center"
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                gap: "var(--dimension-400)",
                marginTop: "var(--dimension-400)",
              }}
            >
              {/* Samedi */}
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-large)",
                }}
              >
                <h3
                  className="title-style1-500"
                  style={{
                    marginBottom: "var(--dimension-300)",
                    paddingBottom: "var(--dimension-150)",
                    borderBottom: "2px solid var(--color-trail-dust-600)",
                  }}
                >
                  Samedi 7 juin
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--dimension-150)" }}>
                  {programmeSamedi.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--dimension-050)",
                        padding: "var(--dimension-150)",
                        backgroundColor: index % 2 === 0 ? "var(--color-grey-100)" : "transparent",
                        borderRadius: "var(--radius-small)",
                      }}
                    >
                      <div style={{ display: "flex", gap: "var(--dimension-150)", alignItems: "baseline" }}>
                        <span
                          className="body-style1-300"
                          style={{
                            fontWeight: 600,
                            minWidth: "65px",
                            color: "var(--color-trail-dust-600)",
                          }}
                        >
                          {item.heure}
                        </span>
                        <span className="body-style1-300" style={{ fontWeight: 500 }}>{item.activite}</span>
                      </div>
                      <span className="body-style1-200 text-content-default-tertiary" style={{ marginLeft: "80px" }}>
                        {item.lieu}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dimanche */}
              <div
                style={{
                  backgroundColor: "var(--color-core-white)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-large)",
                }}
              >
                <h3
                  className="title-style1-500"
                  style={{
                    marginBottom: "var(--dimension-300)",
                    paddingBottom: "var(--dimension-150)",
                    borderBottom: "2px solid var(--color-trail-dust-600)",
                  }}
                >
                  Dimanche 8 juin
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--dimension-150)" }}>
                  {programmeDimanche.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--dimension-050)",
                        padding: "var(--dimension-150)",
                        backgroundColor: index % 2 === 0 ? "var(--color-grey-100)" : "transparent",
                        borderRadius: "var(--radius-small)",
                      }}
                    >
                      <div style={{ display: "flex", gap: "var(--dimension-150)", alignItems: "baseline" }}>
                        <span
                          className="body-style1-300"
                          style={{
                            fontWeight: 600,
                            minWidth: "65px",
                            color: "var(--color-trail-dust-600)",
                          }}
                        >
                          {item.heure}
                        </span>
                        <span className="body-style1-300" style={{ fontWeight: 500 }}>{item.activite}</span>
                      </div>
                      <span className="body-style1-200 text-content-default-tertiary" style={{ marginLeft: "80px" }}>
                        {item.lieu}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Temps forts */}
        <section className="section-p-default">
          <div className="wrapper">
            <SectionHeader
              title="Les temps forts"
              align="center"
            />
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
                  backgroundColor: "var(--color-grey-100)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-200)" }}>
                  Exposition Jean-Nicolas Gérard
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Découvrez les créations de notre invité d&apos;honneur. Vernissage le samedi 7 juin à 11h.
                  Exposition visible jusqu&apos;au 12 juillet 2025.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-grey-100)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-200)" }}>
                  Installation Emmanuel Aragon
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  L&apos;artiste installera devant le public son travail lié à l&apos;écriture et à la céramique,
                  tout au long du week-end.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-grey-100)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-200)" }}>
                  Concours « Pichet »
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Compétition ouverte aux céramistes du marché. Thème choisi en hommage au travail
                  de Jean-Nicolas Gérard. Vote du public et des professionnels.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-grey-100)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-200)" }}>
                  Conférence Pierre Régaldo
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Spécialiste des recherches archéologiques sur Sadirac, Pierre Régaldo-Saint Blancard
                  présentera l&apos;histoire céramique locale.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-grey-100)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-200)" }}>
                  Concert Jérémie Malodj&apos;
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Auteur-compositeur bordelais né aux Seychelles, il compose des chansons métissées
                  et poétiques. Samedi 21h, gratuit.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "var(--color-grey-100)",
                  padding: "var(--dimension-300)",
                  borderRadius: "var(--radius-primary)",
                }}
              >
                <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-200)" }}>
                  Confrérie des Cruches
                </h3>
                <p className="body-style1-300 text-content-default-tertiary">
                  Cérémonie d&apos;intronisation par la Confrérie des Cruches Sadiracaises,
                  association de bienfaisance. Dimanche 11h.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Réservation ateliers */}
        <section id="reservation" className="section-p-default" style={{ backgroundColor: "var(--color-grey-200)" }}>
          <div className="wrapper">
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: "var(--dimension-400)" }}>
                <h2
                  className="title-style4-600"
                  style={{ marginBottom: "var(--dimension-200)" }}
                >
                  Réserver un atelier
                </h2>
                <p className="body-style1-400 text-content-default-tertiary">
                  Inscrivez-vous pour participer aux ateliers du festival.
                  Les ateliers enfants sont gratuits !
                </p>
              </div>

              {submitStatus === "success" ? (
                <div
                  style={{
                    backgroundColor: "var(--color-core-white)",
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
                    Inscription enregistrée !
                  </h3>
                  <p className="body-style1-300 text-content-default-tertiary">
                    Vous recevrez une confirmation par email. Rendez-vous les 7 et 8 juin !
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
                    Faire une nouvelle inscription
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    backgroundColor: "var(--color-core-white)",
                    padding: "var(--dimension-400)",
                    borderRadius: "var(--radius-primary)",
                  }}
                >
                  <div style={{ marginBottom: "var(--dimension-200)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                      Nom complet *
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

                  <div style={{ marginBottom: "var(--dimension-200)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)" }}>
                      Nombre de personnes
                    </label>
                    <select
                      name="nombrePersonnes"
                      value={formData.nombrePersonnes}
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
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} personne{n > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: "var(--dimension-300)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-150)" }}>
                      Activités souhaitées
                    </label>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--dimension-100)" }}>
                      {[
                        { id: "atelier-enfants-sam", label: "Ateliers enfants - Samedi 15h-18h (gratuit)" },
                        { id: "atelier-enfants-dim", label: "Ateliers enfants - Dimanche 15h-18h (gratuit)" },
                        { id: "raku-sam", label: "Atelier Raku - Samedi" },
                        { id: "raku-dim", label: "Décoration bols Raku - Dimanche" },
                        { id: "visite-musee", label: "Visite libre du musée (gratuit)" },
                        { id: "conference", label: "Conférence Pierre Régaldo - Samedi 15h (gratuit)" },
                        { id: "conte", label: "Lecture conte enfants - Dimanche 16h (gratuit)" },
                      ].map((atelier) => (
                        <label
                          key={atelier.id}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--dimension-100)",
                            padding: "var(--dimension-150)",
                            backgroundColor: formData.ateliers.includes(atelier.id)
                              ? "var(--color-trail-dust-100)"
                              : "var(--color-grey-100)",
                            borderRadius: "var(--radius-small)",
                            cursor: "pointer",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={formData.ateliers.includes(atelier.id)}
                            onChange={() => handleCheckbox(atelier.id)}
                            style={{ width: "18px", height: "18px" }}
                          />
                          <span className="body-style1-300">{atelier.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="300"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "S'inscrire"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section-p-default" style={{ backgroundColor: "var(--color-grey-900)" }}>
          <div className="wrapper">
            <div style={{ textAlign: "center", color: "var(--color-core-white)" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-300)" }}>
                Informations & contacts
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "var(--dimension-300)",
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
              >
                <div>
                  <p className="title-style1-300" style={{ marginBottom: "var(--dimension-100)", opacity: 0.7 }}>AGAP</p>
                  <p className="body-style1-300" style={{ opacity: 0.9 }}>07 81 32 42 94</p>
                  <p className="body-style1-300" style={{ opacity: 0.9 }}>centreceramique33@gmail.com</p>
                </div>
                <div>
                  <p className="title-style1-300" style={{ marginBottom: "var(--dimension-100)", opacity: 0.7 }}>Maison de la Poterie</p>
                  <p className="body-style1-300" style={{ opacity: 0.9 }}>05 56 30 60 03</p>
                  <p className="body-style1-300" style={{ opacity: 0.9 }}>museepoterie@sadirac.fr</p>
                </div>
                <div>
                  <p className="title-style1-300" style={{ marginBottom: "var(--dimension-100)", opacity: 0.7 }}>Cinéma Max Linder</p>
                  <p className="body-style1-300" style={{ opacity: 0.9 }}>05 56 23 30 04</p>
                  <p className="body-style1-300" style={{ opacity: 0.9 }}>lemaxlinder@gmail.com</p>
                </div>
              </div>
              <div style={{ marginTop: "var(--dimension-400)" }}>
                <Button href="/contact" variant="secondary">
                  Nous contacter
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
