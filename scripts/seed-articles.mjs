import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "o34ifnc2",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const articles = [
  {
    _type: "actualite",
    titre: "38ème Festival Céramique en Fête : Jean-Nicolas Gérard invité d'honneur",
    slug: { _type: "slug", current: "38eme-festival-ceramique-en-fete-2025" },
    datePublication: "2025-01-15T10:00:00.000Z",
    resume: "Le 38ème Festival international Céramique en Fête se tiendra les 7 et 8 juin 2025 à Sadirac avec Jean-Nicolas Gérard comme invité d'honneur. Plus de 40 céramistes professionnels vous attendent.",
    categorie: "evenement",
    publie: true,
    enVedette: true,
    contenu: [
      { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "La Maison de la Poterie de Sadirac est heureuse de vous annoncer la 38ème édition du Festival international Céramique en Fête, qui se déroulera les samedi 7 et dimanche 8 juin 2025." }] },
      { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Jean-Nicolas Gérard, invité d'honneur" }] },
      { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Cette année, nous avons l'immense honneur d'accueillir Jean-Nicolas Gérard, céramiste de renommée internationale. Né en 1954 à Brazzaville, il s'est installé en Provence où il travaille la terre vernissée depuis 1983 dans son atelier de Valensole. Son travail se caractérise par des pièces d'usage pour la table, aux décors expressifs faits de grands aplats d'engobes et de lignes tracées au stylet." }] },
      { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Son exposition sera visible à la Maison de la Poterie du 7 juin au 12 juillet 2025. Le vernissage aura lieu le samedi 7 juin à 11h sous la Halle André Lapaillerie." }] },
      { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Programme du week-end" }] },
      { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Plus de 40 céramistes professionnels venus de toute la France et d'Europe exposeront leurs créations sous la Halle André Lapaillerie. Au programme : démonstrations de tournage, cuisson raku nocturne, ateliers enfants gratuits, concert le samedi soir." }] },
      { _type: "block", _key: "b7", style: "h2", children: [{ _type: "span", _key: "s7", text: "Informations pratiques" }] },
      { _type: "block", _key: "b8", style: "normal", children: [{ _type: "span", _key: "s8", text: "Entrée libre et gratuite. Restauration sur place. Parking gratuit. Le festival est labellisé \"Scènes d'été en Gironde\"." }] },
    ],
  },
  {
    _type: "actualite",
    titre: "L'histoire de la poterie à Sadirac : 600 ans de tradition céramique",
    slug: { _type: "slug", current: "histoire-poterie-sadirac-tradition" },
    datePublication: "2025-01-10T10:00:00.000Z",
    resume: "Découvrez l'histoire exceptionnelle de Sadirac, village de l'Entre-deux-Mers où 150 potiers façonnaient l'argile bleue au XVIIIe siècle.",
    categorie: "musee",
    publie: true,
    enVedette: false,
    contenu: [
      { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "À 20 minutes de Bordeaux, le village de Sadirac cache un patrimoine exceptionnel. Depuis l'Antiquité, et de manière continue depuis le XIVe siècle, cette terre de l'Entre-deux-Mers a vu se succéder des générations de potiers." }] },
      { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "L'argile bleue, trésor du sous-sol" }] },
      { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "C'est la richesse exceptionnelle du sous-sol en argile bleue qui a fait le destin de Sadirac. Cette terre, appréciée des potiers pour sa plasticité remarquable, a permis le développement d'une industrie florissante pendant plus de six siècles." }] },
      { _type: "block", _key: "b4", style: "h2", children: [{ _type: "span", _key: "s4", text: "L'apogée au XVIIIe siècle" }] },
      { _type: "block", _key: "b5", style: "normal", children: [{ _type: "span", _key: "s5", text: "Au milieu du XVIIIe siècle, Sadirac comptait 150 potiers en activité, soit la moitié de la population du village ! Ces artisans utilisaient une cinquantaine de fours monumentaux pour cuire leurs créations. Les poteries de Sadirac étaient exportées dans le monde entier depuis le Port de la Lune à Bordeaux." }] },
      { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "La poterie Fouragnan, au cœur du village, comptait à elle seule une quarantaine d'ateliers au XIXe siècle. La propriété du Maine de Labadie, foyer de l'industrie potière, est réputée pour avoir reçu le roi Louis XIII en 1615." }] },
      { _type: "block", _key: "b7", style: "h2", children: [{ _type: "span", _key: "s7", text: "La Maison de la Poterie aujourd'hui" }] },
      { _type: "block", _key: "b8", style: "normal", children: [{ _type: "span", _key: "s8", text: "Créée autour des vestiges d'un four potier du XIXe siècle, la Maison de la Poterie valorise ce patrimoine unique. Entièrement rénové en 2007, le musée présente une collection remarquable de plus de 200 poteries découvertes lors de fouilles archéologiques menées par Pierre Régaldo-Saint Blancard." }] },
      { _type: "block", _key: "b9", style: "normal", children: [{ _type: "span", _key: "s9", text: "Sadirac est membre de l'Association Française des Cités de la Céramique (AfCC), reconnaissance de son patrimoine exceptionnel. Aujourd'hui, une dizaine d'artistes potiers font revivre le savoir-faire local." }] },
    ],
  },
  {
    _type: "actualite",
    titre: "Retour sur Céramique en Fête 2024 : Yuko Kuramatsu à l'honneur",
    slug: { _type: "slug", current: "retour-ceramique-en-fete-2024-yuko-kuramatsu" },
    datePublication: "2024-07-15T10:00:00.000Z",
    resume: "La 37ème édition du festival a accueilli la céramiste japonaise Yuko Kuramatsu, maître du nerikomi. Retour sur un week-end exceptionnel.",
    categorie: "evenement",
    publie: true,
    enVedette: false,
    contenu: [
      { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "Les 8 et 9 juin 2024, la 37ème édition du Festival Céramique en Fête a une nouvelle fois transformé Sadirac en capitale de la céramique. Cette année, c'est Yuko Kuramatsu, céramiste japonaise installée à Poitiers, qui était notre invitée d'honneur." }] },
      { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Yuko Kuramatsu, maître du nerikomi" }] },
      { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Née au Japon, Yuko Kuramatsu est installée en France depuis 1997. Elle a découvert la céramique en 2012 et s'est rapidement passionnée pour le nerikomi, une technique ancestrale japonaise qui consiste à mélanger des porcelaines teintées avec des pigments naturels pour créer des motifs uniques." }] },
      { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Ses pièces, d'une finesse remarquable, jouent avec la translucidité de la porcelaine. Elle ne les émaille pas, préférant conserver la matité et la douceur naturelle du matériau. Chaque pièce est poncée à la main après cuisson, offrant un toucher incomparable." }] },
      { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Une exposition exceptionnelle" }] },
      { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "L'exposition de Yuko Kuramatsu à la Maison de la Poterie, visible du 8 juin au 13 juillet 2024, a présenté ses créations pour l'art de la table : assiettes, coupelles, bols aux motifs géométriques hypnotiques." }] },
    ],
  },
  {
    _type: "actualite",
    titre: "Nos ateliers de céramique : cours pour adultes et enfants toute l'année",
    slug: { _type: "slug", current: "ateliers-ceramique-cours-adultes-enfants" },
    datePublication: "2025-01-08T10:00:00.000Z",
    resume: "Découvrez nos cours de poterie pour tous les âges et tous les niveaux. Tournage, modelage, émaillage... Apprenez l'art de la céramique à Sadirac.",
    categorie: "atelier",
    publie: true,
    enVedette: true,
    contenu: [
      { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "L'AGAP (Association des Gens et Amis de la Poterie) propose tout au long de l'année des cours et stages de céramique pour les enfants dès 6 ans, les adolescents et les adultes." }] },
      { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Cours pour adultes" }] },
      { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Nos cours adultes sont dispensés par des céramistes professionnels passionnés. Vous apprendrez les techniques fondamentales : préparation de la terre, tournage, modelage, décoration aux engobes, émaillage et cuisson." }] },
      { _type: "block", _key: "b4", style: "h2", children: [{ _type: "span", _key: "s4", text: "Ateliers enfants et ados" }] },
      { _type: "block", _key: "b5", style: "normal", children: [{ _type: "span", _key: "s5", text: "Dès 6 ans, les enfants peuvent s'initier à la poterie dans nos ateliers adaptés. Ils découvrent le plaisir de modeler, de créer avec leurs mains, et repartent avec leurs créations." }] },
      { _type: "block", _key: "b6", style: "h2", children: [{ _type: "span", _key: "s6", text: "Stages intensifs" }] },
      { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Pendant les vacances scolaires, nous proposons des stages intensifs sur plusieurs jours : tournage, modelage, raku, techniques de décoration..." }] },
      { _type: "block", _key: "b8", style: "h2", children: [{ _type: "span", _key: "s8", text: "Inscriptions" }] },
      { _type: "block", _key: "b9", style: "normal", children: [{ _type: "span", _key: "s9", text: "Les inscriptions sont ouvertes toute l'année. Contactez-nous au 05 56 30 60 03. Maison de la Poterie, Place Fouragnan, 33670 Sadirac." }] },
    ],
  },
  {
    _type: "actualite",
    titre: "Parcours pédagogiques : accueil des scolaires et groupes",
    slug: { _type: "slug", current: "parcours-pedagogiques-scolaires-groupes" },
    datePublication: "2025-01-05T10:00:00.000Z",
    resume: "La Maison de la Poterie accueille les classes et groupes pour des visites guidées et ateliers adaptés.",
    categorie: "musee",
    publie: true,
    enVedette: false,
    contenu: [
      { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "La Maison de la Poterie de Sadirac propose des parcours pédagogiques adaptés aux scolaires, de la maternelle au lycée, ainsi qu'aux groupes et centres de loisirs." }] },
      { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Visite du musée" }] },
      { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Les élèves découvrent l'histoire de la poterie à Sadirac à travers notre collection de plus de 200 céramiques issues de fouilles archéologiques. Du XIVe au XIXe siècle, ils remontent le temps." }] },
      { _type: "block", _key: "b4", style: "h2", children: [{ _type: "span", _key: "s4", text: "Atelier pratique" }] },
      { _type: "block", _key: "b5", style: "normal", children: [{ _type: "span", _key: "s5", text: "Après la visite, place à la pratique ! Les enfants mettent les mains dans la terre et réalisent leur propre création en argile. Chaque enfant repart avec sa création après cuisson." }] },
      { _type: "block", _key: "b6", style: "h2", children: [{ _type: "span", _key: "s6", text: "Réservation" }] },
      { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Les visites et ateliers se font sur réservation. Nous accueillons les groupes toute l'année, du mardi au samedi." }] },
    ],
  },
  {
    _type: "actualite",
    titre: "Le fonds archéologique : plus de 200 céramiques du XIVe au XIXe siècle",
    slug: { _type: "slug", current: "fonds-archeologique-collection-ceramiques" },
    datePublication: "2024-12-20T10:00:00.000Z",
    resume: "Découvrez notre collection exceptionnelle de céramiques anciennes issues des fouilles de Pierre Régaldo-Saint Blancard.",
    categorie: "musee",
    publie: true,
    enVedette: false,
    contenu: [
      { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "La Maison de la Poterie de Sadirac abrite une collection archéologique exceptionnelle : plus de 200 vases et céramiques datant du XIVe au XIXe siècle." }] },
      { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Les fouilles de Pierre Régaldo" }] },
      { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Ces pièces remarquables ont été découvertes lors de fouilles archéologiques menées par Pierre Régaldo-Saint Blancard, archéologue spécialiste de la céramique." }] },
      { _type: "block", _key: "b4", style: "h2", children: [{ _type: "span", _key: "s4", text: "Une collection variée" }] },
      { _type: "block", _key: "b5", style: "normal", children: [{ _type: "span", _key: "s5", text: "La collection présente une grande diversité de formes : pots à conserver, cruches, jattes, écuelles, pichets, gargoulettes... Ces objets du quotidien témoignent de la vie des habitants de la région." }] },
      { _type: "block", _key: "b6", style: "h2", children: [{ _type: "span", _key: "s6", text: "Visite du musée" }] },
      { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Le musée, entièrement rénové en 2007, présente cette collection dans un parcours muséographique moderne et accessible." }] },
    ],
  },
  {
    _type: "actualite",
    titre: "Expositions temporaires : découvrez les céramistes contemporains",
    slug: { _type: "slug", current: "expositions-temporaires-ceramistes-contemporains" },
    datePublication: "2024-12-15T10:00:00.000Z",
    resume: "Tout au long de l'année, la Maison de la Poterie accueille des expositions de céramistes contemporains.",
    categorie: "exposition",
    publie: true,
    enVedette: false,
    contenu: [
      { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "La Maison de la Poterie de Sadirac n'est pas seulement un musée tourné vers le passé. Tout au long de l'année, nous accueillons des expositions de céramistes contemporains." }] },
      { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Une programmation riche" }] },
      { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Chaque année, plusieurs expositions se succèdent dans nos espaces. L'exposition de l'invité d'honneur du Festival Céramique en Fête, visible tout l'été, est le temps fort de notre programmation." }] },
      { _type: "block", _key: "b4", style: "h2", children: [{ _type: "span", _key: "s4", text: "Le fonds contemporain" }] },
      { _type: "block", _key: "b5", style: "normal", children: [{ _type: "span", _key: "s5", text: "Au fil des années, la Maison de la Poterie a constitué un fonds contemporain important grâce aux dons des artistes exposés." }] },
      { _type: "block", _key: "b6", style: "h2", children: [{ _type: "span", _key: "s6", text: "Informations pratiques" }] },
      { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Les expositions sont accessibles du mardi au samedi de 14h à 18h. Entrée libre." }] },
    ],
  },
  {
    _type: "actualite",
    titre: "Le raku : une technique de cuisson spectaculaire",
    slug: { _type: "slug", current: "technique-raku-cuisson-ceramique" },
    datePublication: "2024-11-20T10:00:00.000Z",
    resume: "Découvrez le raku, cette technique de cuisson japonaise spectaculaire que nous pratiquons lors du Festival et de nos stages.",
    categorie: "atelier",
    publie: true,
    enVedette: false,
    contenu: [
      { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "Le raku est une technique de cuisson d'origine japonaise qui produit des résultats spectaculaires et imprévisibles." }] },
      { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Origines du raku" }] },
      { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Le raku est né au Japon au XVIe siècle, lié à la cérémonie du thé. Le mot \"raku\" signifie \"bonheur\" ou \"plaisir\"." }] },
      { _type: "block", _key: "b4", style: "h2", children: [{ _type: "span", _key: "s4", text: "Une cuisson spectaculaire" }] },
      { _type: "block", _key: "b5", style: "normal", children: [{ _type: "span", _key: "s5", text: "La pièce émaillée est placée dans un four porté à 1000°C. Une fois l'émail en fusion, elle est sortie incandescente et plongée dans un lit de matières combustibles. L'enfumage crée des effets uniques : craquelures, reflets métalliques, zones noires." }] },
      { _type: "block", _key: "b6", style: "h2", children: [{ _type: "span", _key: "s6", text: "Nos stages raku" }] },
      { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Nous proposons régulièrement des stages raku pour découvrir cette technique. Un moment magique, souvent nocturne, où le feu révèle la beauté de vos créations." }] },
    ],
  },
  {
    _type: "actualite",
    titre: "Rejoignez l'AGAP : devenez adhérent de l'association",
    slug: { _type: "slug", current: "adhesion-agap-association-poterie" },
    datePublication: "2024-11-15T10:00:00.000Z",
    resume: "Soutenez la Maison de la Poterie en adhérant à l'AGAP. Entrée gratuite au musée, tarifs réduits sur les cours, invitations aux vernissages...",
    categorie: "association",
    publie: true,
    enVedette: false,
    contenu: [
      { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "L'AGAP (Association des Gens et Amis de la Poterie) anime la Maison de la Poterie de Sadirac depuis sa création. En devenant adhérent, vous soutenez notre action." }] },
      { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Les avantages adhérents" }] },
      { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Entrée gratuite au musée, tarifs réduits sur les cours et stages, invitations aux vernissages et événements privés, newsletter de l'association." }] },
      { _type: "block", _key: "b4", style: "h2", children: [{ _type: "span", _key: "s4", text: "Comment adhérer ?" }] },
      { _type: "block", _key: "b5", style: "normal", children: [{ _type: "span", _key: "s5", text: "L'adhésion est valable pour l'année civile. Adhésion individuelle : 15€, adhésion famille : 25€." }] },
    ],
  },
  {
    _type: "actualite",
    titre: "Sadirac, membre de l'Association Française des Cités de la Céramique",
    slug: { _type: "slug", current: "sadirac-cite-ceramique-afcc" },
    datePublication: "2024-11-10T10:00:00.000Z",
    resume: "Sadirac fait partie des villages français reconnus pour leur patrimoine céramique. Découvrez ce label prestigieux.",
    categorie: "association",
    publie: true,
    enVedette: false,
    contenu: [
      { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "Sadirac est membre de l'Association Française des Cités de la Céramique (AfCC), une reconnaissance officielle de son patrimoine potier exceptionnel." }] },
      { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "L'Association Française des Cités de la Céramique" }] },
      { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "L'AfCC regroupe les communes françaises qui possèdent un patrimoine céramique remarquable : Vallauris, Limoges, Sèvres, Moustiers-Sainte-Marie, Malicorne... et Sadirac." }] },
      { _type: "block", _key: "b4", style: "h2", children: [{ _type: "span", _key: "s4", text: "Un patrimoine vivant" }] },
      { _type: "block", _key: "b5", style: "normal", children: [{ _type: "span", _key: "s5", text: "À Sadirac, ce patrimoine n'est pas figé dans le passé. Une dizaine d'artistes potiers font vivre le savoir-faire local." }] },
    ],
  },
];

async function seedArticles() {
  console.log("🚀 Injection des articles SEO dans Sanity...\n");

  for (const article of articles) {
    try {
      const existing = await client.fetch(
        `*[_type == "actualite" && slug.current == $slug][0]`,
        { slug: article.slug.current }
      );

      if (existing) {
        console.log(`⏭️  Article existant: ${article.titre}`);
        continue;
      }

      await client.create(article);
      console.log(`✅ Créé: ${article.titre}`);
    } catch (error) {
      console.error(`❌ Erreur pour "${article.titre}":`, error.message);
    }
  }

  console.log("\n✨ Injection terminée !");
}

seedArticles();
