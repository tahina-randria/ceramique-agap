"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";
import { Calendar, Clock, Users, Mail, Phone, MapPin, Euro } from "lucide-react";

const ateliersEnfants = {
  title: "Ateliers Enfants & Pré-ados",
  age: "Dès 6 ans",
  price: "120€",
  priceDetails: "/ trimestre (10 séances)",
  schedule: "Mercredi 14h00 - 16h00",
  instructor: "Laure Carpenè",
  contact: {
    tel: "06 22 80 33 68",
    email: "laurecarpene@hotmail.com",
  },
  description:
    "Les enfants découvrent le plaisir de travailler l'argile à travers des projets ludiques et créatifs. Modelage, décoration, initiation au tournage... Chaque trimestre, ils repartent avec leurs créations émaillées et cuites.",
  includes: [
    "Groupes de 10 enfants maximum",
    "Matériel et cuisson inclus",
    "Début des ateliers en septembre",
  ],
};

const ateliersAdultes = [
  {
    id: "jeremy-coleman",
    instructor: "Jérémy Coleman",
    specialty: "Tournage & Raku",
    image: "/images/activites/ateliers/jeremy-coleman.webp",
    schedules: [
      "Lundi et mardi 18h30 - 21h30 (2×/mois)",
      "Samedi 9h30 - 12h30 (2×/mois)",
    ],
    rakuInfo: "Ateliers Raku : 4 sessions sur les deux premiers trimestres",
    contact: {
      tel: "06 68 97 57 32",
      email: "jerry.coleman@orange.fr",
    },
  },
  {
    id: "eukeni-callejo",
    instructor: "Eukeni Callejo",
    specialty: "Modelage & Sculpture",
    image: "/images/activites/ateliers/eukeni-callejo.webp",
    schedules: [
      "Samedi 9h30 - 12h30 (2×/mois)",
      "Lundi 9h00 - 12h00 (2×/mois)",
    ],
    contact: {
      tel: "06 30 09 11 15",
      email: "eukenicallejo@gmail.com",
    },
  },
  {
    id: "laure-carpene",
    instructor: "Laure Carpenè",
    specialty: "Céramique utilitaire",
    image: "/images/activites/ateliers/laure-carpene.webp",
    schedules: [
      "Vendredi 9h30 - 12h30 (2×/mois)",
      "Vendredi 13h30 - 16h30 (2×/mois)",
    ],
    contact: {
      tel: "06 22 80 33 68",
      email: "laurecarpene@hotmail.com",
    },
  },
];

const tarifAdultes = {
  price: "140€",
  period: "/ trimestre",
  details: "6H par mois (6 séances)",
  extras: [
    { label: "Terre / cuisson / émail", value: "5€/kg" },
    { label: "Adhésion AGAP (CCC)", value: "10€/an" },
    { label: "Adhésion AGAP (hors CCC)", value: "20€/an" },
  ],
  rakuPrice: "115€ + adhésion 5€ + 5€/kg",
};

export default function AteliersPage() {
  const [formData, setFormData] = useState({
    type: "adulte",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
    enfantNom: "",
    enfantAge: "",
    instructeur: "",
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
          type: "atelier",
          activite: formData.type === "enfant" ? "Atelier Enfant" : `Atelier Adulte - ${formData.instructeur}`,
          participants: 1,
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          message: formData.message,
          ...(formData.type === "enfant" && {
            enfantNom: formData.enfantNom,
            enfantAge: formData.enfantAge,
          }),
        }),
      });

      if (!response.ok) throw new Error("Erreur");

      setSubmitStatus("success");
      setFormData({
        type: "adulte",
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        message: "",
        enfantNom: "",
        enfantAge: "",
        instructeur: "",
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
          title="Ateliers de Céramique"
          subtitle="Initiez-vous au tournage et au modelage avec des céramistes professionnels"
          imageSrc="/images/hero/hero-ateliers.webp"
          imageAlt="Atelier de céramique à la Maison de la Poterie"
          primaryCta={{ label: "S'inscrire", href: "#inscription" }}
        />

        {/* Introduction */}
        <section className="section-p-default">
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="title-style4-700" style={{ marginBottom: "var(--dimension-300)" }}>
                La céramique, un art ancestral
              </h2>
              <p className="body-style1-500 text-content-default-tertiary" style={{ marginBottom: "var(--dimension-200)" }}>
                Tout au long de l&apos;année, l&apos;AGAP propose des ateliers animés par des céramistes passionnés. Modelage, tournage, formes, matières, couleurs... Un univers où l&apos;imagination n&apos;a pas de limites.
              </p>
              <p className="body-style1-400 text-content-default-tertiary">
                Nos ateliers sont accessibles à tous : débutants curieux, amateurs de poterie, enfants comme adultes. L&apos;animateur adapte son enseignement au niveau de chacun.
              </p>
            </div>
          </div>
        </section>

        {/* Ateliers Enfants */}
        <section id="enfants" className="section-p-default" style={{ backgroundColor: "var(--color-grey-100)" }}>
          <div className="wrapper">
            <SectionHeader
              title="Ateliers Enfants"
              subtitle="Éveil à la céramique pour les 6 ans et plus"
              align="center"
            />

            <div
              style={{
                maxWidth: "800px",
                margin: "var(--dimension-400) auto 0",
                backgroundColor: "var(--color-core-white)",
                borderRadius: "var(--radius-large)",
                overflow: "hidden",
                border: "1px solid var(--color-grey-300)",
              }}
            >
              {/* Header de la card */}
              <div
                style={{
                  background: "linear-gradient(135deg, var(--color-trail-dust-500) 0%, var(--color-trail-dust-600) 100%)",
                  padding: "var(--dimension-400)",
                  color: "var(--color-core-white)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--dimension-200)" }}>
                  <div>
                    <p className="body-style1-200" style={{ opacity: 0.85, marginBottom: "var(--dimension-050)" }}>
                      avec {ateliersEnfants.instructor}
                    </p>
                    <h3 className="title-style1-600">{ateliersEnfants.title}</h3>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p className="title-style1-700" style={{ fontSize: "2rem" }}>{ateliersEnfants.price}</p>
                    <p className="body-style1-200" style={{ opacity: 0.85 }}>{ateliersEnfants.priceDetails}</p>
                  </div>
                </div>
              </div>

              {/* Corps de la card */}
              <div style={{ padding: "var(--dimension-400)" }}>
                <p className="body-style1-400 text-content-default-tertiary" style={{ marginBottom: "var(--dimension-300)" }}>
                  {ateliersEnfants.description}
                </p>

                {/* Infos clés en ligne */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "var(--dimension-300)",
                    marginBottom: "var(--dimension-300)",
                    paddingBottom: "var(--dimension-300)",
                    borderBottom: "1px solid var(--color-grey-200)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--dimension-100)" }}>
                    <Calendar size={18} strokeWidth={1.5} style={{ color: "var(--color-trail-dust-600)" }} />
                    <span className="body-style1-400">Mercredi</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--dimension-100)" }}>
                    <Clock size={18} strokeWidth={1.5} style={{ color: "var(--color-trail-dust-600)" }} />
                    <span className="body-style1-400">14h00 - 16h00</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--dimension-100)" }}>
                    <Users size={18} strokeWidth={1.5} style={{ color: "var(--color-trail-dust-600)" }} />
                    <span className="body-style1-400">10 enfants max</span>
                  </div>
                </div>

                {/* Inclus */}
                <div style={{ marginBottom: "var(--dimension-300)" }}>
                  <p className="body-style1-300" style={{ fontWeight: 600, marginBottom: "var(--dimension-150)" }}>
                    Inclus :
                  </p>
                  <ul style={{ margin: 0, paddingLeft: "var(--dimension-200)" }}>
                    {ateliersEnfants.includes.map((item, idx) => (
                      <li key={idx} className="body-style1-300 text-content-default-tertiary" style={{ marginBottom: "var(--dimension-050)" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "var(--dimension-200)",
                    padding: "var(--dimension-200)",
                    backgroundColor: "var(--color-grey-100)",
                    borderRadius: "var(--radius-primary)",
                  }}
                >
                  <div style={{ display: "flex", gap: "var(--dimension-250)", flexWrap: "wrap" }}>
                    <a
                      href={`tel:${ateliersEnfants.contact.tel.replace(/\s/g, "")}`}
                      style={{ display: "flex", alignItems: "center", gap: "var(--dimension-100)", textDecoration: "none" }}
                      className="link body-style1-300"
                    >
                      <Phone size={16} /> {ateliersEnfants.contact.tel}
                    </a>
                    <a
                      href={`mailto:${ateliersEnfants.contact.email}`}
                      style={{ display: "flex", alignItems: "center", gap: "var(--dimension-100)", textDecoration: "none" }}
                      className="link body-style1-300"
                    >
                      <Mail size={16} /> {ateliersEnfants.contact.email}
                    </a>
                  </div>
                  <Button href="#inscription" variant="primary" size="100">
                    S&apos;inscrire
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ateliers Adultes */}
        <section id="adultes" className="section-p-default">
          <div className="wrapper">
            <SectionHeader
              title="Ateliers Adultes"
              subtitle="Tournage, modelage, sculpture... Développez vos compétences"
              align="center"
            />

            {/* Tarification compacte */}
            <div
              style={{
                maxWidth: "700px",
                margin: "var(--dimension-400) auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "var(--dimension-400)",
                flexWrap: "wrap",
                padding: "var(--dimension-250) var(--dimension-300)",
                backgroundColor: "var(--color-core-white)",
                border: "1px solid var(--color-grey-300)",
                borderRadius: "var(--radius-large)",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "var(--dimension-100)" }}>
                <span className="title-style1-600" style={{ color: "var(--color-trail-dust-600)" }}>{tarifAdultes.price}</span>
                <span className="body-style1-300 text-content-default-tertiary">{tarifAdultes.period} ({tarifAdultes.details})</span>
              </div>
              <div style={{ height: "24px", width: "1px", backgroundColor: "var(--color-grey-300)" }} />
              <div style={{ display: "flex", gap: "var(--dimension-200)", flexWrap: "wrap" }}>
                {tarifAdultes.extras.map((extra, idx) => (
                  <span key={idx} className="body-style1-200 text-content-default-tertiary">
                    {extra.label} : <strong style={{ color: "var(--color-content-default-primary)" }}>{extra.value}</strong>
                  </span>
                ))}
              </div>
            </div>

            {/* Cards intervenants avec grande photo */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "var(--dimension-300)",
                marginTop: "var(--dimension-300)",
                maxWidth: "100%",
              }}
              className="ateliers-adultes-grid"
            >
              {ateliersAdultes.map((atelier) => (
                <div
                  key={atelier.id}
                  style={{
                    backgroundColor: "var(--color-core-white)",
                    borderRadius: "var(--radius-large)",
                    border: "1px solid var(--color-grey-300)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 0,
                  }}
                >
                  {/* Image intervenant */}
                  <div
                    style={{
                      aspectRatio: "3/4",
                      backgroundColor: "var(--color-trail-dust-100)",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={atelier.image}
                      alt={atelier.instructor}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center top",
                      }}
                    />
                  </div>

                  {/* Contenu */}
                  <div style={{ padding: "var(--dimension-300)", flex: 1, display: "flex", flexDirection: "column" }}>
                    {/* Nom et spécialité */}
                    <div style={{ marginBottom: "var(--dimension-200)" }}>
                      <h3 className="title-style1-500" style={{ marginBottom: "var(--dimension-050)" }}>
                        {atelier.instructor}
                      </h3>
                      <span
                        style={{
                          display: "inline-block",
                          backgroundColor: "var(--color-trail-dust-100)",
                          color: "var(--color-trail-dust-700)",
                          padding: "var(--dimension-050) var(--dimension-150)",
                          borderRadius: "var(--radius-primary-small)",
                          fontSize: "var(--size-500)",
                          fontWeight: 500,
                        }}
                      >
                        {atelier.specialty}
                      </span>
                    </div>

                    {/* Horaires */}
                    <div style={{ flex: 1, marginBottom: "var(--dimension-200)" }}>
                      <p className="body-style1-200" style={{ fontWeight: 600, marginBottom: "var(--dimension-100)", color: "var(--color-content-default-primary)" }}>
                        Créneaux disponibles
                      </p>
                      {atelier.schedules.map((schedule, idx) => (
                        <p key={idx} className="body-style1-300 text-content-default-tertiary" style={{ marginBottom: "var(--dimension-050)" }}>
                          {schedule}
                        </p>
                      ))}
                      {atelier.rakuInfo && (
                        <p className="body-style1-200" style={{ marginTop: "var(--dimension-100)", color: "var(--color-trail-dust-600)" }}>
                          {atelier.rakuInfo}
                        </p>
                      )}
                    </div>

                    {/* Contact en bas */}
                    <div
                      style={{
                        display: "flex",
                        gap: "var(--dimension-200)",
                        paddingTop: "var(--dimension-200)",
                        borderTop: "1px solid var(--color-grey-200)",
                        flexWrap: "wrap",
                      }}
                    >
                      <a
                        href={`tel:${atelier.contact.tel.replace(/\s/g, "")}`}
                        className="body-style1-200 link"
                        style={{ display: "flex", alignItems: "center", gap: "4px" }}
                      >
                        <Phone size={14} /> {atelier.contact.tel}
                      </a>
                      <a
                        href={`mailto:${atelier.contact.email}`}
                        className="body-style1-200 link"
                        style={{ display: "flex", alignItems: "center", gap: "4px" }}
                      >
                        <Mail size={14} /> Email
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note Raku */}
            <p className="body-style1-200 text-content-default-tertiary" style={{ textAlign: "center", marginTop: "var(--dimension-250)", fontStyle: "italic" }}>
              Tarif spécial Raku : {tarifAdultes.rakuPrice}
            </p>
          </div>
        </section>

        {/* L'atelier équipé */}
        <section className="section-p-default" style={{ backgroundColor: "var(--color-grey-900)" }}>
          <div className="wrapper">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="title-style1-600" style={{ color: "var(--color-core-white)", marginBottom: "var(--dimension-300)" }}>
                Un atelier entièrement équipé
              </h2>
              <p className="body-style1-400" style={{ color: "var(--color-grey-300)", marginBottom: "var(--dimension-300)" }}>
                Tous les cours se déroulent à la Maison de la Poterie dans un espace conçu pour la création : tours de potier, fours, séchoir, émaux et engobes, outils de sculpture, moules en plâtre...
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "var(--dimension-200)", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--dimension-100)", color: "var(--color-grey-300)" }}>
                  <MapPin size={18} />
                  <span className="body-style1-300">Place Fouragnan, 33670 Sadirac</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulaire d'inscription */}
        <section id="inscription" className="section-p-default">
          <div className="wrapper">
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <SectionHeader
                title="Inscription"
                subtitle="Remplissez ce formulaire et nous vous recontacterons"
                align="center"
              />

              {submitStatus === "success" ? (
                <div
                  style={{
                    backgroundColor: "var(--color-trail-dust-50)",
                    border: "2px solid var(--color-trail-dust-200)",
                    padding: "var(--dimension-500)",
                    borderRadius: "var(--radius-large)",
                    textAlign: "center",
                    marginTop: "var(--dimension-400)",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "var(--color-trail-dust-500)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto var(--dimension-300)",
                      color: "var(--color-core-white)",
                      fontSize: "28px",
                    }}
                  >
                    ✓
                  </div>
                  <h3 className="title-style1-500" style={{ marginBottom: "var(--dimension-150)" }}>
                    Demande envoyée !
                  </h3>
                  <p className="body-style1-300 text-content-default-tertiary">
                    Nous vous recontacterons dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="link"
                    style={{ marginTop: "var(--dimension-200)", background: "none", border: "none", cursor: "pointer" }}
                  >
                    Nouvelle inscription
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    backgroundColor: "var(--color-grey-100)",
                    padding: "var(--dimension-400)",
                    borderRadius: "var(--radius-large)",
                    marginTop: "var(--dimension-400)",
                  }}
                >
                  {/* Type d'atelier */}
                  <div style={{ marginBottom: "var(--dimension-250)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)", fontWeight: 500 }}>
                      Type d&apos;atelier
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--dimension-150)" }}>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, type: "adulte" }))}
                        style={{
                          padding: "var(--dimension-200)",
                          borderRadius: "var(--radius-primary)",
                          border: formData.type === "adulte" ? "2px solid var(--color-trail-dust-500)" : "2px solid var(--color-grey-300)",
                          backgroundColor: formData.type === "adulte" ? "var(--color-trail-dust-50)" : "var(--color-core-white)",
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        <p className="body-style1-400" style={{ fontWeight: 600 }}>Adulte</p>
                        <p className="body-style1-200 text-content-default-tertiary">140€/trimestre</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, type: "enfant" }))}
                        style={{
                          padding: "var(--dimension-200)",
                          borderRadius: "var(--radius-primary)",
                          border: formData.type === "enfant" ? "2px solid var(--color-trail-dust-500)" : "2px solid var(--color-grey-300)",
                          backgroundColor: formData.type === "enfant" ? "var(--color-trail-dust-50)" : "var(--color-core-white)",
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        <p className="body-style1-400" style={{ fontWeight: 600 }}>Enfant</p>
                        <p className="body-style1-200 text-content-default-tertiary">120€/trimestre</p>
                      </button>
                    </div>
                  </div>

                  {/* Si adulte : choix intervenant */}
                  {formData.type === "adulte" && (
                    <div style={{ marginBottom: "var(--dimension-250)" }}>
                      <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)", fontWeight: 500 }}>
                        Intervenant souhaité *
                      </label>
                      <select
                        name="instructeur"
                        value={formData.instructeur}
                        onChange={handleChange}
                        required
                        style={{
                          width: "100%",
                          padding: "var(--dimension-150) var(--dimension-200)",
                          borderRadius: "var(--radius-primary)",
                          border: "1px solid var(--color-grey-300)",
                          fontSize: "var(--size-600)",
                          backgroundColor: "var(--color-core-white)",
                        }}
                      >
                        <option value="">Sélectionnez</option>
                        {ateliersAdultes.map((a) => (
                          <option key={a.id} value={a.id}>{a.instructor} ({a.specialty})</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Si enfant : infos enfant */}
                  {formData.type === "enfant" && (
                    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "var(--dimension-150)", marginBottom: "var(--dimension-250)" }}>
                      <div>
                        <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)", fontWeight: 500 }}>
                          Prénom de l&apos;enfant *
                        </label>
                        <input
                          type="text"
                          name="enfantNom"
                          value={formData.enfantNom}
                          onChange={handleChange}
                          required={formData.type === "enfant"}
                          style={{
                            width: "100%",
                            padding: "var(--dimension-150) var(--dimension-200)",
                            borderRadius: "var(--radius-primary)",
                            border: "1px solid var(--color-grey-300)",
                            fontSize: "var(--size-600)",
                          }}
                        />
                      </div>
                      <div>
                        <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)", fontWeight: 500 }}>
                          Âge *
                        </label>
                        <input
                          type="number"
                          name="enfantAge"
                          value={formData.enfantAge}
                          onChange={handleChange}
                          min="6"
                          max="17"
                          required={formData.type === "enfant"}
                          style={{
                            width: "100%",
                            padding: "var(--dimension-150) var(--dimension-200)",
                            borderRadius: "var(--radius-primary)",
                            border: "1px solid var(--color-grey-300)",
                            fontSize: "var(--size-600)",
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Nom / Prénom */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--dimension-150)", marginBottom: "var(--dimension-200)" }}>
                    <div>
                      <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)", fontWeight: 500 }}>
                        {formData.type === "enfant" ? "Nom du parent *" : "Nom *"}
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
                          border: "1px solid var(--color-grey-300)",
                          fontSize: "var(--size-600)",
                        }}
                      />
                    </div>
                    <div>
                      <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)", fontWeight: 500 }}>
                        {formData.type === "enfant" ? "Prénom *" : "Prénom *"}
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
                          border: "1px solid var(--color-grey-300)",
                          fontSize: "var(--size-600)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ marginBottom: "var(--dimension-200)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)", fontWeight: 500 }}>
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
                        border: "1px solid var(--color-grey-300)",
                        fontSize: "var(--size-600)",
                      }}
                    />
                  </div>

                  {/* Téléphone */}
                  <div style={{ marginBottom: "var(--dimension-200)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)", fontWeight: 500 }}>
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
                        border: "1px solid var(--color-grey-300)",
                        fontSize: "var(--size-600)",
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: "var(--dimension-300)" }}>
                    <label className="body-style1-300" style={{ display: "block", marginBottom: "var(--dimension-100)", fontWeight: 500 }}>
                      Message (optionnel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Disponibilités, questions..."
                      style={{
                        width: "100%",
                        padding: "var(--dimension-150) var(--dimension-200)",
                        borderRadius: "var(--radius-primary)",
                        border: "1px solid var(--color-grey-300)",
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
                      Une erreur est survenue. Veuillez réessayer.
                    </div>
                  )}

                  <Button type="submit" variant="primary" size="300" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? "Envoi..." : "Envoyer ma demande"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section-p-default" style={{ backgroundColor: "var(--color-grey-100)" }}>
          <div className="wrapper">
            <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-200)" }}>
                Besoin d&apos;informations ?
              </h2>
              <p className="body-style1-300 text-content-default-tertiary" style={{ marginBottom: "var(--dimension-300)" }}>
                Contactez l&apos;AGAP pour toute question sur les ateliers
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "var(--dimension-200)", flexWrap: "wrap" }}>
                <a href="tel:+33781324294" className="button button--secondary button--300">
                  <span className="button__content">07 81 32 42 94</span>
                </a>
                <a href="mailto:centreceramique33@gmail.com" className="button button--tertiary button--300">
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
