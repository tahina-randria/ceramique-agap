import { defineField, defineType } from "sanity";

export default defineType({
  name: "atelier",
  title: "Atelier hebdomadaire",
  type: "document",
  fields: [
    defineField({
      name: "titre",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Enfants", value: "enfants" },
          { title: "Adultes", value: "adultes" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "horaires",
      title: "Horaires",
      type: "string",
      description: "Ex: Mercredi 14h-16h",
    }),
    defineField({
      name: "tarif",
      title: "Tarif",
      type: "string",
      description: "Ex: 120€/trimestre",
    }),
    defineField({
      name: "animateur",
      title: "Animateur",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "inscriptionsOuvertes",
      title: "Inscriptions ouvertes",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "ordre",
      title: "Ordre d'affichage",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "titre",
      type: "type",
      media: "image",
    },
    prepare(selection) {
      const { title, type, media } = selection;
      return {
        title,
        subtitle: type === "enfants" ? "Enfants" : "Adultes",
        media,
      };
    },
  },
});
