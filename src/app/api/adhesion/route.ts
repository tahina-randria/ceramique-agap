import { NextRequest, NextResponse } from "next/server";

// Types pour le formulaire d'adhésion
interface AdhesionFormData {
  type: "individuel" | "famille" | "bienfaiteur" | "entreprise";
  civilite: string;
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  adresse: string;
  codePostal: string;
  ville: string;
  newsletter: boolean;
  message?: string;
}

// Tarifs d'adhésion
const tarifs: Record<string, number> = {
  individuel: 15,
  famille: 25,
  bienfaiteur: 50,
  entreprise: 100,
};

// Validation email simple
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validation code postal français
function isValidCodePostal(code: string): boolean {
  return /^[0-9]{5}$/.test(code);
}

export async function POST(request: NextRequest) {
  try {
    const body: AdhesionFormData = await request.json();

    // Validation des champs obligatoires
    const { type, civilite, nom, prenom, email, adresse, codePostal, ville } = body;

    if (!type || !civilite || !nom || !prenom || !email || !adresse || !codePostal || !ville) {
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

    if (!isValidCodePostal(codePostal)) {
      return NextResponse.json(
        { error: "Le code postal doit contenir 5 chiffres." },
        { status: 400 }
      );
    }

    if (!tarifs[type]) {
      return NextResponse.json(
        { error: "Type d'adhésion invalide." },
        { status: 400 }
      );
    }

    const montant = tarifs[type];

    // TODO: Intégrer un système de paiement
    // Options recommandées :
    // - Stripe (https://stripe.com) - Le plus populaire
    // - HelloAsso (https://helloasso.com) - Gratuit pour associations
    // - PayPal
    //
    // Exemple avec Stripe :
    // import Stripe from 'stripe';
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ['card'],
    //   line_items: [{
    //     price_data: {
    //       currency: 'eur',
    //       product_data: { name: `Adhésion ${type} AGAP` },
    //       unit_amount: montant * 100,
    //     },
    //     quantity: 1,
    //   }],
    //   mode: 'payment',
    //   success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/association/adhesion-confirmee`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/association/adherer`,
    // });
    // return NextResponse.json({ checkoutUrl: session.url });

    // Log pour le développement
    console.log("🎫 Nouvelle demande d'adhésion:", {
      type,
      montant: `${montant}€`,
      civilite,
      nom,
      prenom,
      email,
      telephone: body.telephone || "Non renseigné",
      adresse: `${adresse}, ${codePostal} ${ville}`,
      newsletter: body.newsletter,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Votre demande d'adhésion a été enregistrée.",
        montant,
        // checkoutUrl: "/paiement" // À activer avec Stripe/HelloAsso
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de la demande d'adhésion:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
