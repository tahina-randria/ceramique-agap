import { defineField, defineType } from "sanity";

export default defineType({
  name: "stage",
  title: "Stage",
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
      name: "horaires",
      title: "Horaires",
      type: "string",
      description: "Ex: 9h-12h et 14h-17h",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "contenu",
      title: "Contenu détaillé",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "tarif",
      title: "Tarif",
      type: "string",
    }),
    defineField({
      name: "placesDisponibles",
      title: "Places disponibles",
      type: "number",
    }),
    defineField({
      name: "animateur",
      title: "Animateur",
      type: "string",
    }),
    defineField({
      name: "niveauRequis",
      title: "Niveau requis",
      type: "string",
      options: {
        list: [
          { title: "Débutant", value: "debutant" },
          { title: "Intermédiaire", value: "intermediaire" },
          { title: "Avancé", value: "avance" },
          { title: "Tous niveaux", value: "tous" },
        ],
      },
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
  ],
  preview: {
    select: {
      title: "titre",
      date: "dateDebut",
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
});
