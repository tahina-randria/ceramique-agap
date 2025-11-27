import { defineField, defineType } from "sanity";

export default defineType({
  name: "ceramiste",
  title: "Céramiste",
  type: "document",
  fields: [
    defineField({
      name: "nom",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "nom",
        maxLength: 96,
      },
    }),
    defineField({
      name: "specialite",
      title: "Spécialité",
      type: "string",
      description: "Ex: Grès, Porcelaine, Raku...",
    }),
    defineField({
      name: "bio",
      title: "Biographie",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "siteWeb",
      title: "Site web",
      type: "url",
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "estAnimateur",
      title: "Est animateur à la Maison de la Poterie",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "nom",
      subtitle: "specialite",
      media: "image",
    },
  },
});
