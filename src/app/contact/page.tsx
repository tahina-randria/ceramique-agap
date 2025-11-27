"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InfoCard from "@/components/ui/InfoCard";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    sujet: "",
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSubmitStatus("success");
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        sujet: "",
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
      <main style={{ paddingTop: "var(--dimension-700)" }}>
        <section className="section-p-default">
          <div className="wrapper">
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <h1 className="title-style4-700" style={{ marginBottom: "var(--dimension-200)" }}>
                Contact
              </h1>
              <p className="body-style1-500 text-content-default-tertiary" style={{ marginBottom: "var(--dimension-500)" }}>
                Une question ? Un projet ? N&apos;hésitez pas à nous contacter.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "var(--dimension-500)",
                }}
              >
                {/* Infos de contact en cartes */}
                <div
                  id="nous-contacter"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "var(--dimension-300)",
                  }}
                >
                  <InfoCard icon="map" title="Adresse">
                    <p><strong>Maison de la Poterie</strong></p>
                    <p>Place Fouragnan</p>
                    <p>33670 Sadirac</p>
                    <p style={{ marginTop: "var(--dimension-150)" }}>
                      <a
                        href="https://maps.google.com/?q=Place+Fouragnan+33670+Sadirac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        Ouvrir dans Google Maps →
                      </a>
                    </p>
                  </InfoCard>

                  <div id="horaires">
                    <InfoCard icon="phone" title="Téléphone">
                      <p>
                        <a href="tel:+33781324294" className="link" style={{ fontSize: "var(--size-700)", fontWeight: 500 }}>
                          07 81 32 42 94
                        </a>
                      </p>
                      <p style={{ marginTop: "var(--dimension-150)" }}>
                        <strong>Horaires d&apos;appel :</strong>
                      </p>
                      <p>Mercredi - Dimanche : 14h - 18h</p>
                    </InfoCard>
                  </div>

                  <InfoCard icon="mail" title="Email">
                    <p>
                      <a href="mailto:centreceramique33@gmail.com" className="link">
                        centreceramique33@gmail.com
                      </a>
                    </p>
                    <p style={{ marginTop: "var(--dimension-150)" }}>
                      Réponse sous 48h ouvrées
                    </p>
                  </InfoCard>
                </div>

                {/* Formulaire */}
                <div
                  style={{
                    backgroundColor: "var(--color-grey-100)",
                    padding: "var(--dimension-400)",
                    borderRadius: "var(--radius-primary)",
                  }}
                >
                  <h2 className="title-style1-500" style={{ marginBottom: "var(--dimension-300)" }}>
                    Envoyez-nous un message
                  </h2>

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
                          color: "var(--color-trail-dust-600)",
                        }}
                      >
                        ✓
                      </div>
                      <h3 className="title-style1-500" style={{ marginBottom: "var(--dimension-150)" }}>
                        Message envoyé !
                      </h3>
                      <p className="body-style1-300 text-content-default-tertiary">
                        Merci pour votre message. Nous vous répondrons dans les plus brefs délais
                        (sous 48h ouvrées).
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
                        Envoyer un autre message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                          gap: "var(--dimension-200)",
                          marginBottom: "var(--dimension-200)",
                        }}
                      >
                        <div>
                          <label
                            htmlFor="contact-nom"
                            className="body-style1-300"
                            style={{ display: "block", marginBottom: "var(--dimension-100)" }}
                          >
                            Nom *
                          </label>
                          <input
                            type="text"
                            id="contact-nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            autoComplete="family-name"
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
                          <label
                            htmlFor="contact-prenom"
                            className="body-style1-300"
                            style={{ display: "block", marginBottom: "var(--dimension-100)" }}
                          >
                            Prénom *
                          </label>
                          <input
                            type="text"
                            id="contact-prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            autoComplete="given-name"
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

                      <div style={{ marginBottom: "var(--dimension-200)" }}>
                        <label
                          htmlFor="contact-email"
                          className="body-style1-300"
                          style={{ display: "block", marginBottom: "var(--dimension-100)" }}
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          autoComplete="email"
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
                        <label
                          htmlFor="contact-telephone"
                          className="body-style1-300"
                          style={{ display: "block", marginBottom: "var(--dimension-100)" }}
                        >
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="contact-telephone"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                          autoComplete="tel"
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
                        <label
                          htmlFor="contact-sujet"
                          className="body-style1-300"
                          style={{ display: "block", marginBottom: "var(--dimension-100)" }}
                        >
                          Sujet *
                        </label>
                        <select
                          id="contact-sujet"
                          name="sujet"
                          value={formData.sujet}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          style={{
                            width: "100%",
                            padding: "var(--dimension-150) var(--dimension-200)",
                            borderRadius: "var(--radius-primary)",
                            border: "1px solid var(--color-border-input-primary)",
                            fontSize: "var(--size-600)",
                            backgroundColor: "var(--color-core-white)",
                          }}
                        >
                          <option value="">Choisissez un sujet</option>
                          <option value="reservation">Réservation atelier/stage</option>
                          <option value="visite">Visite du musée</option>
                          <option value="groupe">Demande groupe/scolaire</option>
                          <option value="adhesion">Adhésion AGAP</option>
                          <option value="partenariat">Partenariat / Mécénat</option>
                          <option value="presse">Presse / Média</option>
                          <option value="ceramique-fete">Céramique en Fête</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div style={{ marginBottom: "var(--dimension-300)" }}>
                        <label
                          htmlFor="contact-message"
                          className="body-style1-300"
                          style={{ display: "block", marginBottom: "var(--dimension-100)" }}
                        >
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          rows={5}
                          placeholder="Décrivez votre demande..."
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
                          role="alert"
                          aria-live="polite"
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
                          directement par téléphone au 07 81 32 42 94.
                        </div>
                      )}

                      <Button
                        type="submit"
                        variant="primary"
                        size="300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                      </Button>

                      <p
                        className="body-style1-100 text-content-default-tertiary"
                        style={{ marginTop: "var(--dimension-200)" }}
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

                {/* Réseaux sociaux */}
                <div className="social-section">
                  <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-200)", color: "var(--color-core-white)" }}>
                    Suivez-nous sur les réseaux
                  </h3>
                  <p className="body-style1-300" style={{ color: "var(--color-core-white)", opacity: 0.9, marginBottom: "var(--dimension-300)" }}>
                    Restez informé de nos actualités, expositions et événements
                  </p>
                  <div className="social-buttons">
                    <a
                      href="https://www.facebook.com/ceramique.sadirac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/ceramic_agap_sadirac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>

                {/* Carte Google Maps */}
                <div id="acces">
                  <h3 className="title-style1-400" style={{ marginBottom: "var(--dimension-200)" }}>
                    Comment nous trouver
                  </h3>
                  <div
                    style={{
                      borderRadius: "var(--radius-primary)",
                      overflow: "hidden",
                      height: "350px",
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1416.4!2d-0.4095!3d44.7530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d9b8c8c8c8c9%3A0x1234567890abcdef!2sMaison%20de%20la%20Poterie%20-%20AGAP!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                      width="100%"
                      height="350"
                      style={{ border: 0, filter: "grayscale(1) contrast(1.1)" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localisation Maison de la Poterie - Sadirac"
                    />
                  </div>
                  <p className="body-style1-200 text-content-default-tertiary" style={{ marginTop: "var(--dimension-150)" }}>
                    <strong>En voiture :</strong> Parking gratuit sur place. À 20 min de Bordeaux via la D936.
                    <br />
                    <strong>En bus :</strong> Ligne 404, arrêt &ldquo;Sadirac Centre&rdquo;.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
