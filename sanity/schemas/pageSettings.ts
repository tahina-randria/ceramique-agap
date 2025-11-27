import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageSettings",
  title: "Paramètres du site",
  type: "document",
  fields: [
    defineField({
      name: "titre",
      title: "Titre du site",
      type: "string",
      initialValue: "Maison de la Poterie - AGAP Sadirac",
    }),
    defineField({
      name: "description",
      title: "Description SEO",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "horaires",
      title: "Horaires d'ouverture",
      type: "object",
      fields: [
        { name: "joursSemaine", title: "Jours de la semaine", type: "string" },
        { name: "heures", title: "Heures", type: "string" },
        { name: "fermeture", title: "Périodes de fermeture", type: "string" },
      ],
    }),
    defineField({
      name: "contact",
      title: "Informations de contact",
      type: "object",
      fields: [
        { name: "telephone", title: "Téléphone", type: "string" },
        { name: "email", title: "Email", type: "string" },
        { name: "adresse", title: "Adresse", type: "text" },
      ],
    }),
    defineField({
      name: "tarifs",
      title: "Tarifs",
      type: "object",
      fields: [
        { name: "entreeMusee", title: "Entrée musée", type: "string" },
        { name: "visiteGuidee", title: "Visite guidée", type: "string" },
        { name: "atelierEnfants", title: "Atelier enfants", type: "string" },
        { name: "atelierAdultes", title: "Atelier adultes", type: "string" },
        { name: "adhesion", title: "Adhésion AGAP", type: "string" },
      ],
    }),
    defineField({
      name: "reseauxSociaux",
      title: "Réseaux sociaux",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook", type: "url" },
        { name: "instagram", title: "Instagram", type: "url" },
      ],
    }),
    defineField({
      name: "messageAccueil",
      title: "Message d'accueil (bannière)",
      type: "string",
      description: "Message affiché en haut du site (laisser vide pour masquer)",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Paramètres du site",
      };
    },
  },
});
