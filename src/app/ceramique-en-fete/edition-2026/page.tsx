"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Button from "@/components/ui/Button";

const programmeJour1 = [
  { heure: "10h00", activite: "Ouverture du marché des créateurs" },
  { heure: "10h30", activite: "Démonstration de tournage" },
  { heure: "11h00", activite: "Atelier enfants : modelage" },
  { heure: "12h00", activite: "Pause déjeuner - Food trucks sur place" },
  { heure: "14h00", activite: "Visite guidée du musée" },
  { heure: "15h00", activite: "Allumage du four à bois" },
  { heure: "16h00", activite: "Conférence : L'histoire de la poterie à Sadirac" },
  { heure: "17h30", activite: "Apéritif musical" },
  { heure: "19h00", activite: "Fermeture du marché" },
];

const programmeJour2 = [
  { heure: "10h00", activite: "Ouverture du marché des créateurs" },
  { heure: "10h30", activite: "Atelier raku : préparation des pièces" },
  { heure: "11h00", activite: "Démonstration de sculpture" },
  { heure: "12h00", activite: "Pause déjeuner - Food trucks sur place" },
  { heure: "14h00", activite: "Défournement du four à bois" },
  { heure: "15h00", activite: "Cuisson raku en direct" },
  { heure: "16h00", activite: "Remise des prix du concours" },
  { heure: "17h00", activite: "Clôture de l'édition 2026" },
];

const infosPratiques = [
  {
    title: "Dates",
    content: "7 et 8 juin 2026",
    icon: "📅",
  },
  {
    title: "Horaires",
    content: "10h - 19h (samedi)\n10h - 17h (dimanche)",
    icon: "🕐",
  },
  {
    title: "Lieu",
    content: "Maison de la Poterie\nPlace Fouragnan\n33670 Sadirac",
    icon: "📍",
  },
  {
    title: "Tarifs",
    content: "Entrée gratuite\nAteliers : 5€ à 15€",
    icon: "🎟️",
  },
];

export default function Edition2026Page() {
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
          activite: "Céramique en Fête 2026",
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
          title="Céramique en Fête 2026"
          subtitle="7 et 8 juin 2026 - Le rendez-vous annuel des passionnés de céramique"
          imageSrc="/images/hero/hero-festival.webp"
          imageAlt="Céramique en Fête"
          primaryCta={{
            label: "Réserver un atelier",
            href: "#reservation",
          }}
          secondaryCta={{
            label: "Voir le programme",
            href: "#programme",
          }}
          size="large"
        />

        {/* Introduction */}
        <section className="section-p-default">
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-300)" }}>
                Un week-end dédié à la céramique
              </h2>
              <p className="body-style1-500 text-content-default-tertiary">
                Pour sa nouvelle édition, Céramique en Fête vous invite à découvrir
                le travail de dizaines d&apos;artisans céramistes, à participer à des
                ateliers, et à vivre des moments uniques autour du feu et de la terre.
              </p>
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

        {/* Programme */}
        <section id="programme" className="section-p-default">
          <div className="wrapper">
            <div style={{ textAlign: "center", marginBottom: "var(--dimension-500)" }}>
              <h2 className="title-style4-600" style={{ marginBottom: "var(--dimension-200)" }}>
                Programme
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "var(--dimension-400)",
              }}
            >
              {/* Samedi */}
              <div>
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
                  {programmeJour1.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        gap: "var(--dimension-200)",
                        padding: "var(--dimension-150)",
                        backgroundColor: index % 2 === 0 ? "var(--color-grey-100)" : "transparent",
                        borderRadius: "var(--radius-small)",
                      }}
                    >
                      <span
                        className="body-style1-300"
                        style={{
                          fontWeight: 600,
                          minWidth: "60px",
                          color: "var(--color-trail-dust-600)",
                        }}
                      >
                        {item.heure}
                      </span>
                      <span className="body-style1-300">{item.activite}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dimanche */}
              <div>
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
                  {programmeJour2.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        gap: "var(--dimension-200)",
                        padding: "var(--dimension-150)",
                        backgroundColor: index % 2 === 0 ? "var(--color-grey-100)" : "transparent",
                        borderRadius: "var(--radius-small)",
                      }}
                    >
                      <span
                        className="body-style1-300"
                        style={{
                          fontWeight: 600,
                          minWidth: "60px",
                          color: "var(--color-trail-dust-600)",
                        }}
                      >
                        {item.heure}
                      </span>
                      <span className="body-style1-300">{item.activite}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marché des créateurs */}
        <section id="marche-createurs" className="section-p-default background--neutral">
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }} className="text--light">
              <h2
                className="title-style4-600"
                style={{ marginBottom: "var(--dimension-300)" }}
              >
                Le marché des créateurs
              </h2>
              <p
                className="body-style1-500"
                style={{ marginBottom: "var(--dimension-300)", opacity: 0.9 }}
              >
                Plus de 40 céramistes venus de toute la France exposent et vendent
                leurs créations. Pièces utilitaires, sculptures, bijoux, objets
                décoratifs... Trouvez la pièce unique qui vous correspond.
              </p>
              <ul style={{ marginBottom: "var(--dimension-300)", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "var(--dimension-200)", listStyle: "none", padding: 0 }}>
                {["Céramique utilitaire", "Sculptures", "Bijoux", "Décoration", "Pièces uniques"].map((item) => (
                  <li
                    key={item}
                    className="body-style1-400"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--dimension-100)",
                      opacity: 0.9,
                    }}
                  >
                    <span style={{ color: "var(--color-trail-dust-300)" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="body-style1-300" style={{ opacity: 0.7 }}>
                Vous êtes céramiste et souhaitez exposer ? Contactez-nous !
              </p>
            </div>
          </div>
        </section>

        {/* Réservation ateliers */}
        <section id="reservation" className="section-p-default">
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
                  Les ateliers sont en nombre limité. Réservez dès maintenant
                  pour garantir votre place !
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
                    Réservation enregistrée !
                  </h3>
                  <p className="body-style1-300 text-content-default-tertiary">
                    Vous recevrez une confirmation par email avec les détails de vos ateliers.
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
                  <div style={{ marginBottom: "var(--dimension-200)" }}>
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
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n} personne{n > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: "var(--dimension-300)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-150)" }}>
                      Ateliers souhaités
                    </label>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--dimension-100)" }}>
                      {[
                        { id: "modelage-enfants", label: "Modelage enfants (samedi 11h) - 5€" },
                        { id: "tournage-demo", label: "Initiation tournage (samedi 14h) - 15€" },
                        { id: "raku", label: "Atelier raku (dimanche 10h30) - 15€" },
                        { id: "visite", label: "Visite guidée (samedi 14h) - Gratuit" },
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
                              : "var(--color-core-white)",
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
                    {isSubmitting ? "Envoi en cours..." : "Réserver"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Archives */}
        <section
          className="section-p-default"
          style={{ backgroundColor: "var(--color-grey-200)" }}
        >
          <div className="wrapper">
            <div style={{ textAlign: "center" }}>
              <h2 className="title-style1-600" style={{ marginBottom: "var(--dimension-300)" }}>
                Éditions précédentes
              </h2>
              <div style={{ display: "flex", gap: "var(--dimension-200)", justifyContent: "center", flexWrap: "wrap" }}>
                <Button href="/ceramique-en-fete/archives-2024" variant="secondary" size="100">
                  2024
                </Button>
                <Button href="/ceramique-en-fete/archives-2023" variant="secondary" size="100">
                  2023
                </Button>
                <Button href="/ceramique-en-fete/archives-2022" variant="secondary" size="100">
                  2022
                </Button>
                <Button href="/ceramique-en-fete/archives-anterieures" variant="tertiary" size="100">
                  Archives antérieures
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
