import { defineField, defineType } from "sanity";

export default defineType({
  name: "exposition",
  title: "Exposition",
  type: "document",
  fields: [
    defineField({
      name: "titre",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "titre",
        maxLength: 96,
      },
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Temporaire", value: "temporaire" },
          { title: "Permanente", value: "permanente" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dateDebut",
      title: "Date de début",
      type: "date",
    }),
    defineField({
      name: "dateFin",
      title: "Date de fin",
      type: "date",
    }),
    defineField({
      name: "artistes",
      title: "Artistes",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "description",
      title: "Description courte",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "contenu",
      title: "Contenu détaillé",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "image",
      title: "Image principale",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "galerie",
      title: "Galerie photos",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "enCours",
      title: "En cours",
      type: "boolean",
      initialValue: false,
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
        subtitle: type === "temporaire" ? "Temporaire" : "Permanente",
        media,
      };
    },
  },
});
