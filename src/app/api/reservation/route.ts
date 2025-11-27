import { NextRequest, NextResponse } from "next/server";

// Types pour le formulaire de réservation
interface ReservationFormData {
  type: "atelier" | "stage" | "parcours" | "ceramique-fete";
  activite: string;
  date?: string;
  horaire?: string;
  participants: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  message?: string;
  // Champs spécifiques parcours scolaire
  etablissement?: string;
  niveau?: string;
  nombreEleves?: number;
  // Champs spécifiques Céramique en Fête
  typeReservation?: "exposant" | "benevole" | "visiteur";
}

// Validation email simple
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validation téléphone français
function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s.-]/g, "");
  return /^(0|\+33)[1-9][0-9]{8}$/.test(cleaned);
}

export async function POST(request: NextRequest) {
  try {
    const body: ReservationFormData = await request.json();

    // Validation des champs obligatoires
    const { type, activite, participants, nom, prenom, email, telephone } = body;

    if (!type || !activite || !nom || !prenom || !email || !telephone) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "L'adresse email n'est pas valide." },
        { status: 400 }
      );
    }

    if (!isValidPhone(telephone)) {
      return NextResponse.json(
        { error: "Le numéro de téléphone n'est pas valide." },
        { status: 400 }
      );
    }

    if (participants < 1 || participants > 30) {
      return NextResponse.json(
        { error: "Le nombre de participants doit être entre 1 et 30." },
        { status: 400 }
      );
    }

    // Validation spécifique par type
    if (type === "parcours" && (!body.etablissement || !body.niveau)) {
      return NextResponse.json(
        { error: "L'établissement et le niveau sont requis pour les parcours scolaires." },
        { status: 400 }
      );
    }

    if (type === "ceramique-fete" && !body.typeReservation) {
      return NextResponse.json(
        { error: "Le type de participation est requis pour Céramique en Fête." },
        { status: 400 }
      );
    }

    // TODO: Intégrer un système de calendrier/booking
    // Options recommandées :
    // - Cal.com (open source)
    // - Calendly API
    // - Google Calendar API
    //
    // Et envoyer un email de confirmation

    // Log pour le développement
    console.log("📅 Nouvelle réservation:", {
      type,
      activite,
      date: body.date || "À définir",
      horaire: body.horaire || "À définir",
      participants,
      contact: `${prenom} ${nom}`,
      email,
      telephone,
      ...(type === "parcours" && {
        etablissement: body.etablissement,
        niveau: body.niveau,
        nombreEleves: body.nombreEleves,
      }),
      ...(type === "ceramique-fete" && {
        typeReservation: body.typeReservation,
      }),
    });

    // Message de confirmation selon le type
    const messages: Record<string, string> = {
      atelier: "Votre demande d'inscription à l'atelier a été enregistrée. Nous vous contacterons pour confirmer votre place.",
      stage: "Votre demande de réservation de stage a été enregistrée. Nous vous contacterons sous 48h pour finaliser l'inscription.",
      parcours: "Votre demande de parcours pédagogique a été enregistrée. Notre équipe vous contactera pour convenir d'une date.",
      "ceramique-fete": "Votre inscription à Céramique en Fête a été enregistrée. Vous recevrez une confirmation par email.",
    };

    return NextResponse.json(
      {
        success: true,
        message: messages[type] || "Votre réservation a été enregistrée.",
        reference: `RES-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de la réservation:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
