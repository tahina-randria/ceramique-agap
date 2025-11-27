import { defineField, defineType } from "sanity";

export default defineType({
  name: "evenement",
  title: "Événement (Céramique en Fête)",
  type: "document",
  fields: [
    defineField({
      name: "titre",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "annee",
      title: "Année",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "edition",
      title: "Numéro d'édition",
      type: "number",
      description: "Ex: 38 pour la 38e édition",
    }),
    defineField({
      name: "dateDebut",
      title: "Date de début",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dateFin",
      title: "Date de fin",
      type: "date",
    }),
    defineField({
      name: "inviteHonneur",
      title: "Invité d'honneur",
      type: "object",
      fields: [
        { name: "nom", title: "Nom", type: "string" },
        { name: "bio", title: "Biographie", type: "text" },
        { name: "image", title: "Photo", type: "image", options: { hotspot: true } },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "programme",
      title: "Programme",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "jour", title: "Jour", type: "string" },
            {
              name: "activites",
              title: "Activités",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "heure", title: "Heure", type: "string" },
                    { name: "titre", title: "Activité", type: "string" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "nombreExposants",
      title: "Nombre d'exposants",
      type: "number",
    }),
    defineField({
      name: "nombreVisiteurs",
      title: "Nombre de visiteurs",
      type: "number",
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
      name: "estArchive",
      title: "Est une archive (édition passée)",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "titre",
      annee: "annee",
      media: "image",
    },
    prepare(selection) {
      const { title, annee, media } = selection;
      return {
        title,
        subtitle: annee ? `Édition ${annee}` : "",
        media,
      };
    },
  },
  orderings: [
    {
      title: "Année (récent)",
      name: "anneeDesc",
      by: [{ field: "annee", direction: "desc" }],
    },
  ],
});
