import { NextRequest, NextResponse } from "next/server";

// Types pour le formulaire de contact
interface ContactFormData {
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  sujet: string;
  message: string;
}

// Validation email simple
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validation des champs obligatoires
    const { nom, prenom, email, sujet, message } = body;

    if (!nom || !prenom || !email || !sujet || !message) {
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

    // TODO: Intégrer un service d'envoi d'emails
    // Options recommandées :
    // - Resend (https://resend.com) - Simple et moderne
    // - SendGrid (https://sendgrid.com) - Robuste et éprouvé
    // - Nodemailer avec SMTP
    //
    // Exemple avec Resend :
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@maisondelapoterie.fr',
    //   to: 'centreceramique33@gmail.com',
    //   subject: `[Contact] ${sujet} - ${prenom} ${nom}`,
    //   html: `...`
    // });

    // Log pour le développement
    console.log("📧 Nouveau message de contact:", {
      nom,
      prenom,
      email,
      telephone: body.telephone || "Non renseigné",
      sujet,
      message: message.substring(0, 100) + "...",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Votre message a bien été envoyé. Nous vous répondrons sous 48h ouvrées.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
