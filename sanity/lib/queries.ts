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

export const actualitesEnVedetteQuery = groq`
  *[_type == "actualite" && (publie == true || !defined(publie)) && enVedette == true] | order(datePublication desc)[0...3] {
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

export const articlesReliesQuery = groq`
  *[_type == "actualite" && (publie == true || !defined(publie)) && slug.current != $currentSlug && categorie == $categorie] | order(datePublication desc)[0...3] {
    _id,
    titre,
    slug,
    datePublication,
    "extrait": resume,
    "imageSrc": image.asset->url,
    categorie
  }
`;

export const autresArticlesQuery = groq`
  *[_type == "actualite" && (publie == true || !defined(publie)) && slug.current != $currentSlug] | order(datePublication desc)[0...3] {
    _id,
    titre,
    slug,
    datePublication,
    "extrait": resume,
    "imageSrc": image.asset->url,
    categorie
  }
`;
