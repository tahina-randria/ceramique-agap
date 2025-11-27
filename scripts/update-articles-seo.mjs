import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "o34ifnc2",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

// Articles mis à jour avec contenu SEO optimisé (plus long, maillage interne intégré)
const articlesUpdates = [
  {
    slug: "38eme-festival-ceramique-en-fete-2025",
    updates: {
      resume: "Le 38ème Festival international Céramique en Fête se tiendra les 7 et 8 juin 2025 à Sadirac avec Jean-Nicolas Gérard comme invité d'honneur. Plus de 40 céramistes professionnels venus de toute la France et d'Europe vous attendent sous la Halle André Lapaillerie pour un week-end festif : marché des potiers, démonstrations de tournage, cuisson raku nocturne, ateliers enfants gratuits et concert.",
      contenu: [
        { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "La Maison de la Poterie de Sadirac est heureuse de vous annoncer la 38ème édition du Festival international Céramique en Fête, le rendez-vous incontournable des amoureux de la céramique en Gironde. Ce festival, labellisé \"Scènes d'été en Gironde\", se déroulera les samedi 7 et dimanche 8 juin 2025 sous la majestueuse Halle André Lapaillerie, au cœur de l'Entre-deux-Mers." }] },
        { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Jean-Nicolas Gérard, céramiste d'exception et invité d'honneur 2025" }] },
        { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Cette année, nous avons l'immense privilège d'accueillir Jean-Nicolas Gérard, figure majeure de la céramique contemporaine française. Né en 1954 à Brazzaville (Congo), cet artiste s'est installé en Provence en 1983 où il a fondé son atelier dans le village de Valensole, sur le célèbre plateau lavandier des Alpes-de-Haute-Provence." }] },
        { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Formé aux Beaux-Arts d'Aix-en-Provence auprès de Jean Biagini, Jean-Nicolas Gérard s'est spécialisé dans la terre vernissée, une technique traditionnelle méditerranéenne. Son style unique se caractérise par des pièces d'usage destinées à la table – plats, bols, assiettes – aux dimensions parfois généreuses. Ses décors expressifs, faits de grands aplats d'engobes colorés et de lignes tracées au stylet, évoquent une écriture mystérieuse, à mi-chemin entre calligraphie et peinture gestuelle." }] },
        { _type: "block", _key: "b5", style: "normal", children: [{ _type: "span", _key: "s5", text: "L'exposition personnelle de Jean-Nicolas Gérard sera visible à la Maison de la Poterie du 7 juin au 12 juillet 2025. Le vernissage officiel aura lieu le samedi 7 juin à 11h sous la Halle André Lapaillerie, en présence de l'artiste. Une occasion rare de rencontrer ce créateur et de découvrir son univers singulier inspiré par la nature et l'art japonais." }] },
        { _type: "block", _key: "b6", style: "h2", children: [{ _type: "span", _key: "s6", text: "Programme complet du week-end festif" }] },
        { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Le marché des potiers rassemblera plus de 40 céramistes professionnels venus de France, d'Espagne, du Portugal et d'autres pays européens. Chacun présentera son travail unique : grès, porcelaine, faïence, terre vernissée, raku... Toutes les techniques et tous les styles seront représentés, de la poterie utilitaire aux sculptures contemporaines." }] },
        { _type: "block", _key: "b8", style: "h3", children: [{ _type: "span", _key: "s8", text: "Animations et démonstrations" }] },
        { _type: "block", _key: "b9", style: "normal", children: [{ _type: "span", _key: "s9", text: "Tout au long du week-end, des démonstrations de tournage permettront aux visiteurs d'observer le travail fascinant des potiers sur leur tour. Le samedi soir, ne manquez pas la cuisson raku nocturne : un moment magique où les pièces incandescentes sortent du four à 1000°C pour être plongées dans les flammes. Découvrez également cette technique ancestrale lors de nos stages dédiés au raku." }] },
        { _type: "block", _key: "b10", style: "normal", children: [{ _type: "span", _key: "s10", text: "Les ateliers enfants gratuits accueilleront les plus jeunes (dès 6 ans) pour une initiation au modelage. Chaque enfant repartira avec sa création ! Si cette expérience donne envie de poursuivre, nos ateliers hebdomadaires accueillent les enfants tout au long de l'année." }] },
        { _type: "block", _key: "b11", style: "h2", children: [{ _type: "span", _key: "s11", text: "Un festival ancré dans 600 ans d'histoire potière" }] },
        { _type: "block", _key: "b12", style: "normal", children: [{ _type: "span", _key: "s12", text: "Céramique en Fête n'est pas qu'un marché : c'est la célébration d'un patrimoine exceptionnel. Sadirac, village de l'Entre-deux-Mers à 20 minutes de Bordeaux, fut l'un des plus grands centres potiers du Sud-Ouest. Au XVIIIe siècle, 150 familles de potiers y travaillaient l'argile bleue du sous-sol, exportant leurs créations dans le monde entier depuis le Port de la Lune." }] },
        { _type: "block", _key: "b13", style: "normal", children: [{ _type: "span", _key: "s13", text: "Profitez du festival pour découvrir notre musée et sa collection de plus de 200 céramiques archéologiques datant du XIVe au XIXe siècle, témoins de cette histoire fascinante. Sadirac est membre de l'Association Française des Cités de la Céramique (AfCC), aux côtés de Vallauris, Limoges ou Sèvres." }] },
        { _type: "block", _key: "b14", style: "h2", children: [{ _type: "span", _key: "s14", text: "Informations pratiques - Céramique en Fête 2025" }] },
        { _type: "block", _key: "b15", style: "normal", children: [{ _type: "span", _key: "s15", text: "Dates : Samedi 7 et dimanche 8 juin 2025. Horaires : 10h-19h. Lieu : Halle André Lapaillerie, Place Fouragnan, 33670 Sadirac. Entrée libre et gratuite. Restauration sur place avec produits locaux. Parking gratuit à proximité. Le festival est accessible en transport en commun (ligne 404, arrêt Sadirac Centre)." }] },
        { _type: "block", _key: "b16", style: "normal", children: [{ _type: "span", _key: "s16", text: "Pour toute information complémentaire, contactez-nous au 05 56 30 60 03 ou par email. Vous pouvez également nous suivre sur les réseaux sociaux pour ne rien manquer de l'actualité du festival. À très bientôt à Sadirac pour cette 38ème édition exceptionnelle !" }] },
      ],
    },
  },
  {
    slug: "histoire-poterie-sadirac-tradition",
    updates: {
      resume: "Découvrez l'histoire exceptionnelle de Sadirac, village de l'Entre-deux-Mers où 150 potiers façonnaient l'argile bleue au XVIIIe siècle. De l'Antiquité à nos jours, 600 ans de tradition céramique préservés par la Maison de la Poterie et l'AGAP.",
      contenu: [
        { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "À seulement 20 minutes de Bordeaux, niché au cœur de l'Entre-deux-Mers, le village de Sadirac recèle un patrimoine exceptionnel méconnu. Ici, la poterie n'est pas qu'un artisanat : c'est l'âme même du village, une tradition qui remonte à l'Antiquité et qui perdure depuis le XIVe siècle de manière ininterrompue. Bienvenue dans l'histoire fascinante d'un des plus grands centres potiers du Sud-Ouest de la France." }] },
        { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "L'argile bleue : le trésor du sous-sol sadiracais" }] },
        { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Le destin potier de Sadirac tient à une particularité géologique : son sous-sol recèle une argile bleue d'une qualité exceptionnelle. Cette terre, prisée des potiers pour sa plasticité remarquable et sa résistance au feu, se travaille avec une facilité rare. Elle a permis aux artisans locaux de produire des céramiques réputées dans toute la région et au-delà." }] },
        { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Les premières traces d'activité potière remontent à l'époque gallo-romaine. Mais c'est à partir du XIVe siècle que la production s'organise véritablement, avec l'installation de familles de potiers qui transmettront leur savoir-faire de génération en génération pendant plus de 600 ans." }] },
        { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "L'apogée au XVIIIe siècle : Sadirac, capitale de la poterie" }] },
        { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Au milieu du XVIIIe siècle, Sadirac atteint son apogée. Le village compte alors 150 potiers en activité – soit la moitié de sa population ! Ces artisans utilisent une cinquantaine de fours monumentaux, dont certains vestiges sont encore visibles aujourd'hui. La production est considérable : pots à conserver les aliments, cruches, jattes, écuelles, pichets, gargoulettes..." }] },
        { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Les poteries de Sadirac s'exportent alors dans le monde entier. Elles transitent par le Port de la Lune à Bordeaux, d'où elles embarquent vers les colonies françaises et les comptoirs commerciaux. Au XVIIIe siècle, Sadirac jouit d'une réputation internationale dans le domaine de la céramique utilitaire." }] },
        { _type: "block", _key: "b8", style: "h2", children: [{ _type: "span", _key: "s8", text: "Les grandes familles potières et leurs ateliers" }] },
        { _type: "block", _key: "b9", style: "normal", children: [{ _type: "span", _key: "s9", text: "La poterie Fouragnan, située au cœur du village sur la place qui porte aujourd'hui son nom, comptait à elle seule une quarantaine d'ateliers au XIXe siècle. C'est autour de ses vestiges que la Maison de la Poterie a été créée, préservant la mémoire de ces artisans. La propriété du Maine de Labadie, autre foyer majeur de l'industrie potière, est célèbre pour avoir accueilli le roi Louis XIII en 1615." }] },
        { _type: "block", _key: "b10", style: "normal", children: [{ _type: "span", _key: "s10", text: "Ces familles de potiers formaient une communauté soudée, avec ses traditions, ses fêtes et son organisation professionnelle. Le métier se transmettait de père en fils, les secrets de fabrication et d'émaillage constituant un patrimoine familial jalousement gardé." }] },
        { _type: "block", _key: "b11", style: "h2", children: [{ _type: "span", _key: "s11", text: "Le déclin et la renaissance au XXe siècle" }] },
        { _type: "block", _key: "b12", style: "normal", children: [{ _type: "span", _key: "s12", text: "La révolution industrielle et l'arrivée des contenants en métal puis en plastique portent un coup fatal à l'activité potière traditionnelle. Les fours s'éteignent progressivement au cours du XIXe siècle. Le dernier potier professionnel de Sadirac cesse son activité dans les années 1950. Un patrimoine séculaire semble condamné à l'oubli." }] },
        { _type: "block", _key: "b13", style: "normal", children: [{ _type: "span", _key: "s13", text: "Mais en 1989, une poignée de passionnés refuse de laisser mourir cette mémoire. Ils fondent l'AGAP (Association des Gens et Amis de la Poterie) et créent la Maison de la Poterie autour des vestiges d'un four du XIXe siècle. Grâce aux fouilles archéologiques menées par Pierre Régaldo-Saint Blancard, plus de 200 pièces sont exhumées et restaurées. Découvrez ces trésors dans notre collection permanente." }] },
        { _type: "block", _key: "b14", style: "h2", children: [{ _type: "span", _key: "s14", text: "Sadirac aujourd'hui : un patrimoine vivant" }] },
        { _type: "block", _key: "b15", style: "normal", children: [{ _type: "span", _key: "s15", text: "Entièrement rénové en 2007, le musée de la Maison de la Poterie présente cette collection exceptionnelle dans un parcours muséographique moderne et accessible à tous. Des panneaux explicatifs et des vidéos retracent l'histoire de la poterie à Sadirac et expliquent les techniques de fabrication traditionnelles." }] },
        { _type: "block", _key: "b16", style: "normal", children: [{ _type: "span", _key: "s16", text: "Mais Sadirac ne se contente pas de regarder vers le passé. Aujourd'hui, une dizaine d'artistes potiers ont choisi de s'installer dans le village, faisant revivre le savoir-faire local. Nos ateliers et stages permettent à tous, enfants comme adultes, de s'initier à cet art ancestral. Le festival Céramique en Fête, chaque année en juin, rassemble plus de 40 céramistes professionnels et attire des milliers de visiteurs." }] },
        { _type: "block", _key: "b17", style: "normal", children: [{ _type: "span", _key: "s17", text: "Sadirac est membre de l'Association Française des Cités de la Céramique (AfCC), aux côtés de prestigieuses villes comme Vallauris, Limoges, Sèvres ou Moustiers-Sainte-Marie. Une reconnaissance nationale qui témoigne de l'importance de son patrimoine potier. Venez découvrir cette histoire exceptionnelle en visitant notre musée !" }] },
      ],
    },
  },
  {
    slug: "ateliers-ceramique-cours-adultes-enfants",
    updates: {
      resume: "Découvrez nos cours de poterie pour tous les âges et tous les niveaux à la Maison de la Poterie de Sadirac. Tournage, modelage, émaillage, décoration aux engobes... Apprenez l'art de la céramique avec des céramistes professionnels passionnés dans un cadre historique exceptionnel.",
      contenu: [
        { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "Vous rêvez de mettre les mains dans la terre, de façonner l'argile, de créer des objets uniques ? L'AGAP (Association des Gens et Amis de la Poterie) vous accueille tout au long de l'année à la Maison de la Poterie de Sadirac pour des cours et stages de céramique. Enfants dès 6 ans, adolescents, adultes débutants ou confirmés : chacun trouve sa place dans nos ateliers animés par des céramistes professionnels." }] },
        { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Les ateliers adultes : du débutant au confirmé" }] },
        { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Nos cours pour adultes se déroulent en petits groupes de 8 à 10 personnes maximum, permettant un accompagnement personnalisé. Les séances hebdomadaires durent 2h30 et sont proposées en journée ou en soirée selon les créneaux. Le tarif trimestriel est de 140€, matériaux et cuissons inclus." }] },
        { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Au programme : apprentissage des techniques fondamentales de la céramique. Vous commencerez par la préparation de la terre (pétrissage, battage) avant de vous initier au tournage sur tour de potier. Cette technique ancestrale, transmise depuis des siècles à Sadirac, demande patience et pratique mais procure un plaisir incomparable. Vous apprendrez également le modelage (technique de la plaque, du colombin), la décoration aux engobes et l'émaillage." }] },
        { _type: "block", _key: "b5", style: "normal", children: [{ _type: "span", _key: "s5", text: "Nos céramistes professionnels vous guident pas à pas, respectant le rythme de chacun. L'ambiance conviviale des ateliers favorise les échanges entre participants. Beaucoup de nos élèves tissent des liens d'amitié qui dépassent le cadre des cours !" }] },
        { _type: "block", _key: "b6", style: "h2", children: [{ _type: "span", _key: "s6", text: "Les ateliers enfants et adolescents : créativité et épanouissement" }] },
        { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Dès 6 ans, les enfants peuvent s'initier à la poterie dans nos ateliers spécialement adaptés. Les séances durent 1h30 et le tarif trimestriel est de 120€. Les groupes sont constitués par tranches d'âge pour que chaque enfant évolue avec des camarades de son niveau." }] },
        { _type: "block", _key: "b8", style: "normal", children: [{ _type: "span", _key: "s8", text: "La poterie est une activité idéale pour le développement de l'enfant : elle stimule la motricité fine, la créativité, la patience et la concentration. Manipuler la terre, la façonner, voir sa création prendre forme puis être cuite et émaillée... quelle fierté pour un enfant de ramener à la maison un objet entièrement réalisé de ses mains !" }] },
        { _type: "block", _key: "b9", style: "normal", children: [{ _type: "span", _key: "s9", text: "Nos animateurs adaptent les techniques aux capacités de chaque âge : les plus jeunes travaillent principalement en modelage, les adolescents peuvent s'initier au tournage. Et pourquoi pas ensuite s'inscrire aux parcours pédagogiques avec leur classe ?" }] },
        { _type: "block", _key: "b10", style: "h2", children: [{ _type: "span", _key: "s10", text: "Les stages intensifs : progresser rapidement" }] },
        { _type: "block", _key: "b11", style: "normal", children: [{ _type: "span", _key: "s11", text: "Pendant les vacances scolaires, nous proposons des stages intensifs de 1 à 2 jours pour ceux qui souhaitent approfondir une technique particulière ou découvrir la céramique de manière immersive. Ces stages thématiques permettent une progression rapide grâce à une pratique concentrée." }] },
        { _type: "block", _key: "b12", style: "normal", children: [{ _type: "span", _key: "s12", text: "Parmi nos stages les plus populaires : le stage de tournage (2 jours) pour maîtriser les bases de cette technique fascinante, le stage de modelage pour réaliser des sculptures ou des pièces décoratives, et le stage de raku pour découvrir cette technique de cuisson japonaise spectaculaire. Consultez notre programme de stages pour connaître les prochaines dates." }] },
        { _type: "block", _key: "b13", style: "h2", children: [{ _type: "span", _key: "s13", text: "Un cadre exceptionnel chargé d'histoire" }] },
        { _type: "block", _key: "b14", style: "normal", children: [{ _type: "span", _key: "s14", text: "Apprendre la poterie à la Maison de la Poterie de Sadirac, c'est s'inscrire dans une histoire de plus de 600 ans. Vous travaillez dans un lieu où des générations de potiers ont façonné l'argile avant vous. Le musée, accessible gratuitement aux participants des ateliers, retrace cette histoire passionnante à travers plus de 200 pièces archéologiques." }] },
        { _type: "block", _key: "b15", style: "normal", children: [{ _type: "span", _key: "s15", text: "En devenant adhérent de l'AGAP, vous bénéficiez en plus de tarifs préférentiels sur les cours et stages, d'invitations aux vernissages et événements privés, et vous soutenez notre mission de préservation et transmission du patrimoine potier." }] },
        { _type: "block", _key: "b16", style: "h2", children: [{ _type: "span", _key: "s16", text: "Comment s'inscrire ?" }] },
        { _type: "block", _key: "b17", style: "normal", children: [{ _type: "span", _key: "s17", text: "Les inscriptions sont ouvertes toute l'année sous réserve de places disponibles. Pour vous inscrire ou obtenir des renseignements sur les créneaux et disponibilités, contactez-nous au 05 56 30 60 03 ou par email. Vous pouvez également passer à la Maison de la Poterie, Place Fouragnan, 33670 Sadirac, aux heures d'ouverture du musée (mercredi au dimanche, 14h-18h). Nous serons heureux de vous faire visiter nos ateliers et de répondre à toutes vos questions. À bientôt à Sadirac !" }] },
      ],
    },
  },
];

async function updateArticles() {
  console.log("🔄 Mise à jour des articles SEO...\n");

  for (const articleUpdate of articlesUpdates) {
    try {
      const existing = await client.fetch(
        `*[_type == "actualite" && slug.current == $slug][0]{ _id }`,
        { slug: articleUpdate.slug }
      );

      if (!existing) {
        console.log(`⚠️  Article non trouvé: ${articleUpdate.slug}`);
        continue;
      }

      await client.patch(existing._id).set(articleUpdate.updates).commit();
      console.log(`✅ Mis à jour: ${articleUpdate.slug}`);
    } catch (error) {
      console.error(`❌ Erreur pour "${articleUpdate.slug}":`, error.message);
    }
  }

  console.log("\n✨ Mise à jour terminée !");
}

updateArticles();
