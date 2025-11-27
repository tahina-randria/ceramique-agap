import { defineField, defineType } from "sanity";

export default defineType({
  name: "actualite",
  title: "Actualité",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "datePublication",
      title: "Date de publication",
      type: "datetime",
      validation: (Rule) => Rule.required(),
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
      name: "resume",
      title: "Résumé",
      type: "text",
      rows: 3,
      description: "Court résumé affiché dans les listes",
    }),
    defineField({
      name: "contenu",
      title: "Contenu",
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
      name: "categorie",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Événement", value: "evenement" },
          { title: "Exposition", value: "exposition" },
          { title: "Atelier", value: "atelier" },
          { title: "Association", value: "association" },
          { title: "Musée", value: "musee" },
        ],
      },
    }),
    defineField({
      name: "enVedette",
      title: "En vedette (afficher sur la page d'accueil)",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "titre",
      date: "datePublication",
      media: "image",
    },
    prepare(selection) {
      const { title, date, media } = selection;
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString("fr-FR") : "",
        media,
      };
    },
  },
  orderings: [
    {
      title: "Date de publication (récent)",
      name: "dateDesc",
      by: [{ field: "datePublication", direction: "desc" }],
    },
  ],
});
