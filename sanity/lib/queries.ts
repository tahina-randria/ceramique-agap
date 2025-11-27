import { groq } from "next-sanity";

export const actualitesQuery = groq`
  *[_type == "actualite" && (publie == true || !defined(publie))] | order(datePublication desc) {
    _id,
    titre,
    slug,
    datePublication,
    "extrait": resume,
    "imageSrc": image.asset->url,
    categorie
  }
`;

export const actualiteBySlugQuery = groq`
  *[_type == "actualite" && slug.current == $slug][0] {
    _id,
    titre,
    slug,
    datePublication,
    "extrait": resume,
    contenu,
    "imageSrc": image.asset->url,
    categorie
  }
`;
