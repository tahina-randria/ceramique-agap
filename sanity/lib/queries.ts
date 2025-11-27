import { groq } from "next-sanity";

// Actualités
export const actualitesQuery = groq`
  *[_type == "actualite"] | order(datePublication desc) {
    _id,
    titre,
    slug,
    resume,
    datePublication,
    image,
    contenu,
    categorie
  }
`;

export const actualiteBySlugQuery = groq`
  *[_type == "actualite" && slug.current == $slug][0] {
    _id,
    titre,
    slug,
    resume,
    datePublication,
    image,
    contenu,
    categorie
  }
`;

// Ateliers
export const ateliersQuery = groq`
  *[_type == "atelier"] | order(ordre asc) {
    _id,
    titre,
    description,
    public,
    horaire,
    tarif,
    image,
    actif
  }
`;

// Stages
export const stagesQuery = groq`
  *[_type == "stage"] | order(dateDebut asc) {
    _id,
    titre,
    description,
    dateDebut,
    dateFin,
    horaires,
    tarif,
    placesDisponibles,
    animateur,
    image,
    complet
  }
`;

// Expositions
export const expositionsQuery = groq`
  *[_type == "exposition"] | order(dateDebut desc) {
    _id,
    titre,
    artiste,
    description,
    dateDebut,
    dateFin,
    image,
    enCours
  }
`;

export const expositionEnCoursQuery = groq`
  *[_type == "exposition" && enCours == true][0] {
    _id,
    titre,
    artiste,
    description,
    dateDebut,
    dateFin,
    image
  }
`;

// Événements Céramique en Fête
export const evenementsQuery = groq`
  *[_type == "evenement"] | order(annee desc) {
    _id,
    titre,
    annee,
    dates,
    inviteHonneur,
    description,
    programme,
    imagePrincipale,
    galerie
  }
`;

export const evenementByAnneeQuery = groq`
  *[_type == "evenement" && annee == $annee][0] {
    _id,
    titre,
    annee,
    dates,
    inviteHonneur,
    description,
    programme,
    imagePrincipale,
    galerie
  }
`;

// Céramistes
export const ceramistesQuery = groq`
  *[_type == "ceramiste"] | order(nom asc) {
    _id,
    nom,
    specialite,
    bio,
    photo,
    siteWeb,
    reseauxSociaux
  }
`;

// Paramètres du site
export const pageSettingsQuery = groq`
  *[_type == "pageSettings"][0] {
    titre,
    description,
    horaires,
    contact,
    tarifs,
    reseauxSociaux,
    messageAccueil
  }
`;
