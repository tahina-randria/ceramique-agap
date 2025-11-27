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
    slug: "retour-ceramique-en-fete-2024-yuko-kuramatsu",
    updates: {
      resume: "Retour sur l'exposition exceptionnelle de Yuko Kuramatsu, céramiste japonaise de renommée internationale, à la Maison de la Poterie de Sadirac en 2024. Son travail unique de porcelaine inspiré par la nature a captivé les visiteurs.",
      contenu: [
        { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "La Maison de la Poterie de Sadirac a eu l'honneur d'accueillir en 2024 Yuko Kuramatsu, artiste céramiste japonaise dont le travail fascine les amateurs d'art du monde entier. Cette exposition, qui a attiré plus de 2000 visiteurs, restera comme l'un des moments forts de notre programmation culturelle." }] },
        { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Yuko Kuramatsu : une artiste entre deux mondes" }] },
        { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Née au Japon, Yuko Kuramatsu a choisi de s'installer en France où elle a développé un style unique, à la croisée des traditions céramiques orientales et occidentales. Son parcours l'a menée des ateliers traditionnels de Kyoto aux écoles d'art européennes, forgeant une sensibilité artistique rare." }] },
        { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Son travail se caractérise par l'utilisation de la porcelaine, matériau noble et exigeant qu'elle maîtrise avec une virtuosité remarquable. Ses pièces, d'une finesse extrême, semblent presque translucides. Les formes organiques qu'elle crée évoquent des éléments naturels – pétales de fleurs, vagues de l'océan, écorces d'arbres – tout en conservant une abstraction poétique." }] },
        { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Une exposition immersive à la Maison de la Poterie" }] },
        { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Pour cette exposition à Sadirac, Yuko Kuramatsu avait sélectionné une trentaine d'œuvres représentatives de son travail des dix dernières années. La scénographie, conçue en collaboration avec l'artiste, mettait en valeur la délicatesse de chaque pièce par un jeu subtil de lumières et de reflets." }] },
        { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Les visiteurs ont pu découvrir ses célèbres 'bols-paysages', ces récipients dont l'intérieur évoque des horizons lointains, ainsi que ses sculptures murales composées de centaines d'éléments en porcelaine assemblés en installations monumentales. Le dialogue entre ces œuvres contemporaines et notre collection archéologique offrait un témoignage émouvant de la permanence de l'art céramique à travers les siècles." }] },
        { _type: "block", _key: "b8", style: "h2", children: [{ _type: "span", _key: "s8", text: "Rencontres et ateliers avec l'artiste" }] },
        { _type: "block", _key: "b9", style: "normal", children: [{ _type: "span", _key: "s9", text: "Fidèle à notre mission de transmission, l'exposition s'est accompagnée de plusieurs temps forts permettant au public de rencontrer Yuko Kuramatsu. Lors du vernissage, l'artiste a partagé son parcours et sa philosophie créative devant un public conquis. Elle est également intervenue dans nos ateliers pour une masterclass exceptionnelle sur le travail de la porcelaine." }] },
        { _type: "block", _key: "b10", style: "normal", children: [{ _type: "span", _key: "s10", text: "Si cette exposition vous a donné envie de découvrir le travail de la porcelaine, sachez que nos stages de céramique proposent régulièrement des initiations à ce matériau. Notre programme d'expositions temporaires continue de mettre en lumière des artistes de talent tout au long de l'année." }] },
        { _type: "block", _key: "b11", style: "h2", children: [{ _type: "span", _key: "s11", text: "La Maison de la Poterie, lieu d'exposition pour la céramique contemporaine" }] },
        { _type: "block", _key: "b12", style: "normal", children: [{ _type: "span", _key: "s12", text: "Depuis sa création, la Maison de la Poterie s'efforce de faire dialoguer patrimoine et création contemporaine. Nos expositions temporaires accueillent chaque année des céramistes de renom, offrant aux visiteurs de l'Entre-deux-Mers un accès à l'art céramique international sans avoir à se déplacer jusqu'à Bordeaux." }] },
        { _type: "block", _key: "b13", style: "normal", children: [{ _type: "span", _key: "s13", text: "Pour ne manquer aucune de nos prochaines expositions et rencontrer les artistes qui font la céramique d'aujourd'hui, abonnez-vous à notre newsletter ou suivez-nous sur les réseaux sociaux. Vous pouvez également devenir adhérent de l'AGAP et bénéficier d'invitations aux vernissages et événements privés. Rendez-vous au prochain festival Céramique en Fête pour découvrir notre nouvel invité d'honneur !" }] },
      ],
    },
  },
  {
    slug: "parcours-pedagogiques-scolaires-groupes",
    updates: {
      resume: "La Maison de la Poterie de Sadirac accueille les classes de la maternelle au lycée pour des parcours pédagogiques adaptés à chaque niveau. Visite du musée, atelier de modelage et découverte de l'histoire locale : une sortie enrichissante et créative.",
      contenu: [
        { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "Enseignants de Gironde et de Nouvelle-Aquitaine, vous cherchez une sortie scolaire alliant découverte du patrimoine, pratique artistique et apprentissages transversaux ? La Maison de la Poterie de Sadirac propose des parcours pédagogiques adaptés à tous les niveaux, de la maternelle au lycée. Chaque année, nous accueillons plus de 2000 élèves pour des journées inoubliables." }] },
        { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Un lieu pédagogique unique en Gironde" }] },
        { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "La Maison de la Poterie offre un cadre exceptionnel pour l'éducation artistique et culturelle. Notre musée présente plus de 200 céramiques archéologiques datant du XIVe au XIXe siècle, témoins de l'histoire fascinante de Sadirac, village qui comptait 150 potiers au XVIIIe siècle. Un patrimoine local vivant, idéal pour ancrer les apprentissages dans le concret." }] },
        { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Nos locaux comprennent également des ateliers de céramique entièrement équipés (tours de potier, fours, matériel de modelage) ainsi qu'un espace extérieur avec les vestiges d'un four à bois du XIXe siècle. Les élèves sont ainsi immergés dans un environnement authentique qui donne du sens à leurs découvertes." }] },
        { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Des parcours adaptés à chaque cycle" }] },
        { _type: "block", _key: "b6", style: "h3", children: [{ _type: "span", _key: "s6", text: "Cycle 1 (Maternelle) : Éveil sensoriel et découverte" }] },
        { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Pour les plus petits, nous avons conçu un parcours axé sur l'éveil des sens et la motricité fine. Les enfants découvrent le musée à travers un conte sur la vie des potiers, puis s'initient au modelage en réalisant un petit objet qu'ils ramèneront chez eux après cuisson. Durée : 1h30. Tarif : 5€ par élève." }] },
        { _type: "block", _key: "b8", style: "h3", children: [{ _type: "span", _key: "s8", text: "Cycles 2 et 3 (Élémentaire) : Histoire et pratique" }] },
        { _type: "block", _key: "b9", style: "normal", children: [{ _type: "span", _key: "s9", text: "Le parcours élémentaire combine visite guidée du musée et atelier pratique. Les élèves découvrent l'histoire de la poterie à Sadirac, le métier de potier autrefois, les techniques de fabrication. Ils réalisent ensuite leur propre création en modelage ou s'initient au tournage (CM). Durée : 2h30. Tarif : 7€ par élève." }] },
        { _type: "block", _key: "b10", style: "h3", children: [{ _type: "span", _key: "s10", text: "Cycles 3 et 4 (Collège) : Approfondissement et technique" }] },
        { _type: "block", _key: "b11", style: "normal", children: [{ _type: "span", _key: "s11", text: "Pour les collégiens, nous proposons des ateliers plus techniques permettant d'approfondir une pratique. Au programme : tournage, décoration aux engobes, émaillage ou initiation au raku. La visite du musée aborde les aspects économiques et sociaux de l'industrie potière. Durée : 3h. Tarif : 9€ par élève." }] },
        { _type: "block", _key: "b12", style: "h3", children: [{ _type: "span", _key: "s12", text: "Lycée : Projets artistiques et culturels" }] },
        { _type: "block", _key: "b13", style: "normal", children: [{ _type: "span", _key: "s13", text: "Nous accompagnons les lycées dans leurs projets d'éducation artistique et culturelle. Nous pouvons construire ensemble des parcours sur plusieurs séances, en lien avec les programmes d'arts plastiques, d'histoire ou de sciences. Contactez-nous pour étudier votre projet." }] },
        { _type: "block", _key: "b14", style: "h2", children: [{ _type: "span", _key: "s14", text: "Informations pratiques pour les enseignants" }] },
        { _type: "block", _key: "b15", style: "normal", children: [{ _type: "span", _key: "s15", text: "Nos parcours se déroulent toute l'année scolaire, du mardi au vendredi, sur réservation. Nous pouvons accueillir jusqu'à deux classes par demi-journée (maximum 60 élèves). L'accompagnement par un adulte pour 8 enfants est requis en maternelle, 10 en élémentaire." }] },
        { _type: "block", _key: "b16", style: "normal", children: [{ _type: "span", _key: "s16", text: "Gratuité pour les accompagnateurs et les élèves en situation de handicap. Un espace pique-nique couvert est disponible sur réservation. Parking bus gratuit à proximité. La Maison de la Poterie est accessible aux personnes à mobilité réduite." }] },
        { _type: "block", _key: "b17", style: "normal", children: [{ _type: "span", _key: "s17", text: "Pour réserver ou obtenir des renseignements complémentaires, contactez-nous au 05 56 30 60 03 ou par email. Nous vous enverrons un dossier pédagogique complet pour préparer votre visite. À bientôt à la Maison de la Poterie !" }] },
      ],
    },
  },
  {
    slug: "fonds-archeologique-collection-ceramiques",
    updates: {
      resume: "Découvrez le fonds archéologique exceptionnel du Musée de la Poterie de Sadirac : plus de 200 céramiques des XIVe au XIXe siècles, témoins de 600 ans de tradition potière. Des pièces rares issues des fouilles de Pierre Régaldo-Saint Blancard.",
      contenu: [
        { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "Le Musée de la Poterie de Sadirac abrite un trésor méconnu : l'une des plus importantes collections de céramiques archéologiques du Sud-Ouest de la France. Plus de 200 pièces, datant du XIVe au XIXe siècle, témoignent de six siècles de tradition potière dans ce village de l'Entre-deux-Mers. Un patrimoine exceptionnel à découvrir absolument." }] },
        { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Les fouilles de Pierre Régaldo-Saint Blancard" }] },
        { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Notre collection doit beaucoup à l'archéologue Pierre Régaldo-Saint Blancard. Dans les années 1980-90, ce chercheur passionné a mené des fouilles systématiques sur les sites des anciens fours de potiers de Sadirac. Ses découvertes ont révélé l'ampleur insoupçonnée de l'activité potière locale et permis de reconstituer l'histoire de ce savoir-faire." }] },
        { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Les fouilles ont mis au jour des milliers de tessons et des centaines de pièces entières ou reconstituables. Cruches, pichets, jattes, écuelles, pots à conserver, gargoulettes... Toute la production utilitaire des potiers sadiracais est représentée, offrant un panorama complet de la céramique traditionnelle bordelaise." }] },
        { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Du Moyen Âge à la Révolution industrielle" }] },
        { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Les pièces les plus anciennes de notre collection remontent au XIVe siècle. Ces céramiques médiévales, sobres et fonctionnelles, témoignent des débuts de l'organisation professionnelle des potiers de Sadirac. On y observe déjà l'utilisation de l'argile bleue locale et les premières tentatives de décoration aux engobes." }] },
        { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "L'apogée de la production se situe aux XVIIe et XVIIIe siècles. Les pièces de cette époque présentent une grande maîtrise technique : formes élégantes, émaux brillants, décors élaborés. C'est l'âge d'or de Sadirac, quand 150 potiers façonnaient l'argile et exportaient leurs créations dans le monde entier via le port de Bordeaux. L'histoire complète de cette époque fascinante est retracée dans notre parcours permanent." }] },
        { _type: "block", _key: "b8", style: "normal", children: [{ _type: "span", _key: "s8", text: "Le XIXe siècle voit le déclin progressif de l'activité face à la concurrence industrielle. Les dernières pièces de notre collection, datant des années 1850-1900, montrent la persistance d'un savoir-faire ancestral jusqu'à l'extinction des derniers fours traditionnels." }] },
        { _type: "block", _key: "b9", style: "h2", children: [{ _type: "span", _key: "s9", text: "Un parcours muséographique moderne et accessible" }] },
        { _type: "block", _key: "b10", style: "normal", children: [{ _type: "span", _key: "s10", text: "Entièrement rénové en 2007, notre musée présente cette collection dans un parcours chronologique et thématique. Des panneaux explicatifs bilingues (français/anglais) retracent l'histoire de la poterie à Sadirac. Des vidéos montrent les techniques de fabrication traditionnelles : préparation de la terre, tournage, décoration, cuisson au four à bois." }] },
        { _type: "block", _key: "b11", style: "normal", children: [{ _type: "span", _key: "s11", text: "Le musée est accessible aux personnes à mobilité réduite. Un livret de visite en grands caractères est disponible sur demande. Pour les groupes et scolaires, nous proposons des visites guidées adaptées à chaque public. Découvrez nos parcours pédagogiques spécialement conçus pour les classes." }] },
        { _type: "block", _key: "b12", style: "h2", children: [{ _type: "span", _key: "s12", text: "Informations pratiques - Visiter le musée" }] },
        { _type: "block", _key: "b13", style: "normal", children: [{ _type: "span", _key: "s13", text: "Le Musée de la Poterie est ouvert du mercredi au dimanche, de 14h à 18h (10h-18h pendant Céramique en Fête). Tarifs : 4€ adultes, 2€ réduit, gratuit pour les moins de 12 ans et les adhérents de l'AGAP. Visites guidées sur réservation pour les groupes." }] },
        { _type: "block", _key: "b14", style: "normal", children: [{ _type: "span", _key: "s14", text: "Adresse : Maison de la Poterie, Place Fouragnan, 33670 Sadirac. Parking gratuit. Accessible en bus (ligne 404, arrêt Sadirac Centre). Pour toute information, contactez-nous au 05 56 30 60 03. Nous serons heureux de vous accueillir pour une plongée dans 600 ans d'histoire céramique !" }] },
      ],
    },
  },
  {
    slug: "expositions-temporaires-ceramistes-contemporains",
    updates: {
      resume: "Découvrez le programme des expositions temporaires de la Maison de la Poterie de Sadirac. Chaque année, des céramistes de renommée internationale présentent leurs créations dans notre espace dédié à l'art contemporain.",
      contenu: [
        { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "Depuis sa création, la Maison de la Poterie de Sadirac fait dialoguer patrimoine et création contemporaine. Nos expositions temporaires accueillent chaque année plusieurs céramistes de talent, offrant aux visiteurs de l'Entre-deux-Mers un accès privilégié à l'art céramique d'aujourd'hui. Un programme riche et varié qui fait de Sadirac un lieu de référence pour les amateurs de céramique." }] },
        { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Notre programmation artistique" }] },
        { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Chaque année, nous organisons trois à quatre expositions temporaires d'une durée de deux à trois mois chacune. Notre comité de sélection, composé de membres de l'AGAP et de professionnels de la céramique, veille à proposer une programmation diversifiée : céramique utilitaire, sculpture, installation, porcelaine, grès, faïence, raku..." }] },
        { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Le point d'orgue de notre saison est l'exposition de l'invité d'honneur du festival Céramique en Fête. Chaque année en juin, un céramiste de renommée nationale ou internationale est mis à l'honneur dans une rétrospective de son travail. En 2025, nous accueillerons Jean-Nicolas Gérard, maître de la terre vernissée provençale." }] },
        { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Artistes accueillis ces dernières années" }] },
        { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Notre programmation a eu l'honneur d'accueillir de nombreux artistes reconnus. Parmi les expositions récentes : Yuko Kuramatsu (porcelaine, Japon/France), Jean-François Fouilhoux (grès, Limousin), Isabelle Cornière (faïence contemporaine), Michel Gardelle (sculptures animalières), Sophie Gallé-Soas (céramique végétale)..." }] },
        { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Ces expositions permettent aux visiteurs de découvrir la diversité extraordinaire de la création céramique contemporaine. Du bol d'usage quotidien à la sculpture monumentale, de la porcelaine la plus fine au grès le plus brut, toutes les expressions de cet art millénaire sont représentées." }] },
        { _type: "block", _key: "b8", style: "h2", children: [{ _type: "span", _key: "s8", text: "Rencontres et événements autour des expositions" }] },
        { _type: "block", _key: "b9", style: "normal", children: [{ _type: "span", _key: "s9", text: "Chaque exposition s'accompagne d'un vernissage ouvert au public, occasion de rencontrer l'artiste et de découvrir son travail dans une ambiance conviviale. Les adhérents de l'AGAP bénéficient d'invitations aux vernissages et événements privés. Pensez à nous rejoindre pour ne rien manquer !" }] },
        { _type: "block", _key: "b10", style: "normal", children: [{ _type: "span", _key: "s10", text: "Nous organisons également des ateliers et masterclasses en lien avec les expositions. Ces moments privilégiés permettent aux participants de nos cours de céramique d'approfondir leur pratique au contact d'artistes confirmés. Consultez notre programme d'ateliers pour connaître les prochaines dates." }] },
        { _type: "block", _key: "b11", style: "h2", children: [{ _type: "span", _key: "s11", text: "Proposer une exposition" }] },
        { _type: "block", _key: "b12", style: "normal", children: [{ _type: "span", _key: "s12", text: "Vous êtes céramiste professionnel et souhaitez exposer à la Maison de la Poterie ? Envoyez-nous votre dossier artistique (CV, démarche, photos des œuvres) par courrier ou email. Notre comité de sélection étudie les candidatures tout au long de l'année et établit la programmation avec un an d'avance." }] },
        { _type: "block", _key: "b13", style: "h2", children: [{ _type: "span", _key: "s13", text: "Suivre notre actualité" }] },
        { _type: "block", _key: "b14", style: "normal", children: [{ _type: "span", _key: "s14", text: "Pour ne manquer aucune de nos expositions et être informé des vernissages, inscrivez-vous à notre newsletter ou suivez-nous sur les réseaux sociaux. Vous pouvez également consulter régulièrement notre page Actualités. À bientôt à la Maison de la Poterie pour découvrir nos prochaines expositions !" }] },
      ],
    },
  },
  {
    slug: "technique-raku-cuisson-ceramique",
    updates: {
      resume: "Découvrez le raku, technique de cuisson japonaise spectaculaire pratiquée à la Maison de la Poterie de Sadirac. Un art ancestral du XVIe siècle adapté par Bernard Leach, à découvrir lors de nos stages et du festival Céramique en Fête.",
      contenu: [
        { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "Le raku est sans doute la technique de cuisson céramique la plus spectaculaire et la plus fascinante. À la Maison de la Poterie de Sadirac, nous perpétuons cet art ancestral japonais lors de nos stages et démonstrations. Une expérience sensorielle unique que nous vous invitons à découvrir." }] },
        { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Qu'est-ce que le raku ? Histoire et philosophie" }] },
        { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Le raku (楽焼, « cuisson du bonheur ») est né au Japon au XVIe siècle dans le cadre de la cérémonie du thé. La famille Raku, potiers depuis quinze générations, a donné son nom à cette technique. À l'origine, le raku servait à créer des bols à thé (chawan) aux formes irrégulières et aux émaux sobres, en accord avec l'esthétique wabi-sabi qui célèbre l'imperfection et l'impermanence." }] },
        { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Au XXe siècle, le céramiste britannique Bernard Leach, pionnier du mouvement des potiers studio, adapte le raku occidental en y ajoutant l'enfumage. Cette technique, que nous pratiquons à Sadirac, consiste à plonger les pièces incandescentes sortant du four dans de la sciure ou des copeaux de bois. Le carbone pénètre l'émail craquelé, créant des effets de noir intense et des motifs aléatoires d'une grande beauté." }] },
        { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Le processus de cuisson raku étape par étape" }] },
        { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "La cuisson raku est un moment intense et captivant. Tout commence par l'émaillage des pièces biscuitées (déjà cuites une première fois). On utilise des émaux spéciaux, formulés pour résister au choc thermique violent qu'ils vont subir. Les pièces sont ensuite placées dans un petit four à gaz chauffé à environ 1000°C." }] },
        { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Quand l'émail est fondu et brillant (après 20 à 30 minutes), vient le moment magique : à l'aide de longues pinces, on extrait les pièces incandescentes du four. En quelques secondes, elles passent de 1000°C à la température ambiante, puis sont plongées dans un bac rempli de sciure qui s'enflamme instantanément. La pièce est ensuite recouverte pour créer une atmosphère réductrice." }] },
        { _type: "block", _key: "b8", style: "normal", children: [{ _type: "span", _key: "s8", text: "Après quelques minutes d'enfumage, on retire la pièce encore chaude et on la plonge dans l'eau pour figer les couleurs. C'est le moment de la révélation : sous les cendres et la suie, apparaissent des couleurs métalliques, des reflets cuivrés, des craquelures noires... Chaque pièce est unique, le résultat toujours imprévisible." }] },
        { _type: "block", _key: "b9", style: "h2", children: [{ _type: "span", _key: "s9", text: "Le raku à la Maison de la Poterie de Sadirac" }] },
        { _type: "block", _key: "b10", style: "normal", children: [{ _type: "span", _key: "s10", text: "Nous proposons des stages d'initiation au raku plusieurs fois par an pendant les vacances scolaires. Ces stages de deux jours permettent de réaliser plusieurs pièces en modelage, de les émailler et de participer activement à la cuisson. Une expérience inoubliable, accessible aux débutants ! Consultez notre programme d'ateliers pour les prochaines dates." }] },
        { _type: "block", _key: "b11", style: "normal", children: [{ _type: "span", _key: "s11", text: "Chaque année lors du festival Céramique en Fête, nous organisons une cuisson raku nocturne. Le samedi soir, quand la nuit tombe, les flammes du four illuminent la place Fouragnan. Des centaines de visiteurs assistent à ce spectacle fascinant. Si vous n'avez jamais vu une cuisson raku, c'est l'occasion idéale !" }] },
        { _type: "block", _key: "b12", style: "h2", children: [{ _type: "span", _key: "s12", text: "Une technique exigeante mais accessible" }] },
        { _type: "block", _key: "b13", style: "normal", children: [{ _type: "span", _key: "s13", text: "Le raku est une technique exigeante qui demande des équipements spécifiques (four à gaz, pinces longues, équipements de protection) et une bonne connaissance des risques liés à la manipulation de pièces incandescentes. C'est pourquoi nous recommandons de commencer par nos stages encadrés avant de se lancer seul." }] },
        { _type: "block", _key: "b14", style: "normal", children: [{ _type: "span", _key: "s14", text: "Attention : les pièces en raku ne sont pas étanches et ne conviennent pas pour un usage alimentaire. Elles sont destinées à la décoration. Si vous souhaitez créer de la vaisselle, nos cours de céramique classique vous initieront aux techniques de cuisson haute température qui permettent d'obtenir des pièces parfaitement fonctionnelles." }] },
        { _type: "block", _key: "b15", style: "normal", children: [{ _type: "span", _key: "s15", text: "Envie de découvrir le raku ? Contactez-nous pour vous inscrire à notre prochain stage ou venez assister à la cuisson nocturne lors du festival Céramique en Fête ! Une expérience qui transforme à jamais le regard que l'on porte sur la céramique." }] },
      ],
    },
  },
  {
    slug: "adhesion-agap-association-poterie",
    updates: {
      resume: "Rejoignez l'AGAP (Association des Gens et Amis de la Poterie) et soutenez la préservation du patrimoine potier de Sadirac. Avantages adhérents : tarifs réduits sur cours et stages, accès gratuit au musée, invitations aux vernissages.",
      contenu: [
        { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "Vous aimez la céramique ? Vous êtes sensible à la préservation du patrimoine local ? Vous souhaitez soutenir une association dynamique qui fait vivre la Maison de la Poterie de Sadirac ? Rejoignez l'AGAP ! Notre association, créée en 1989, compte aujourd'hui plus de 200 adhérents passionnés." }] },
        { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "L'AGAP : 35 ans au service du patrimoine" }] },
        { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "L'Association des Gens et Amis de la Poterie a été fondée en 1989 par une poignée de passionnés refusant de voir mourir la mémoire potière de Sadirac. Grâce à leur engagement, les vestiges du four Fouragnan ont été sauvegardés, les fouilles archéologiques ont pu être menées, et le musée a vu le jour." }] },
        { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Aujourd'hui, l'AGAP poursuit sa triple mission : conserver le patrimoine céramique de Sadirac à travers notre musée et sa collection archéologique, transmettre les savoir-faire par nos ateliers et stages, et animer le territoire avec nos événements et expositions. Le festival Céramique en Fête, organisé chaque année depuis 1988, est le point d'orgue de cette action culturelle." }] },
        { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Les avantages de l'adhésion" }] },
        { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "En devenant adhérent de l'AGAP, vous bénéficiez de nombreux avantages. Accès gratuit et illimité au musée de la poterie pour vous et les membres de votre foyer. Tarifs réduits sur nos cours de céramique hebdomadaires (ateliers adultes et enfants) et sur tous nos stages. Invitation aux vernissages des expositions temporaires et aux événements privés." }] },
        { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Vous recevez également notre newsletter mensuelle avec toute l'actualité de l'association, les dates des stages et expositions à venir, et des articles sur la céramique. Enfin, vous pouvez participer à l'assemblée générale annuelle et donner votre avis sur les orientations de l'association." }] },
        { _type: "block", _key: "b8", style: "h2", children: [{ _type: "span", _key: "s8", text: "Tarifs et modalités d'adhésion" }] },
        { _type: "block", _key: "b9", style: "normal", children: [{ _type: "span", _key: "s9", text: "L'adhésion annuelle est de 20€ par personne ou 30€ par foyer (valable pour tous les membres du même foyer). Elle court de septembre à août. Une adhésion de soutien à 50€ est également possible pour ceux qui souhaitent apporter une contribution supplémentaire à nos actions." }] },
        { _type: "block", _key: "b10", style: "normal", children: [{ _type: "span", _key: "s10", text: "L'AGAP étant une association loi 1901 reconnue d'intérêt général, votre adhésion vous ouvre droit à une réduction d'impôt de 66% dans la limite de 20% du revenu imposable. Une adhésion de 30€ ne vous coûte donc que 10,20€ après déduction fiscale !" }] },
        { _type: "block", _key: "b11", style: "h2", children: [{ _type: "span", _key: "s11", text: "Comment adhérer ?" }] },
        { _type: "block", _key: "b12", style: "normal", children: [{ _type: "span", _key: "s12", text: "Vous pouvez adhérer directement à la Maison de la Poterie aux heures d'ouverture (mercredi-dimanche, 14h-18h). Règlement par chèque, espèces ou carte bancaire. Vous pouvez également adhérer par courrier en nous envoyant le bulletin d'adhésion téléchargeable sur notre site accompagné de votre règlement." }] },
        { _type: "block", _key: "b13", style: "normal", children: [{ _type: "span", _key: "s13", text: "Pour toute question sur l'adhésion, contactez-nous au 05 56 30 60 03 ou par email. Vous pouvez également nous retrouver lors du festival Céramique en Fête ou à l'occasion de nos vernissages. Nous serons heureux de vous accueillir parmi nous !" }] },
        { _type: "block", _key: "b14", style: "h2", children: [{ _type: "span", _key: "s14", text: "S'engager bénévolement" }] },
        { _type: "block", _key: "b15", style: "normal", children: [{ _type: "span", _key: "s15", text: "Au-delà de l'adhésion, vous pouvez vous engager comme bénévole. L'AGAP a toujours besoin de bonnes volontés pour l'accueil du musée, l'organisation du festival, l'accompagnement des groupes scolaires ou la communication. Quel que soit votre disponibilité et vos compétences, il y a une place pour vous !" }] },
        { _type: "block", _key: "b16", style: "normal", children: [{ _type: "span", _key: "s16", text: "Rejoindre l'AGAP, c'est intégrer une communauté de passionnés de céramique, participer à la vie culturelle de l'Entre-deux-Mers et contribuer à préserver un patrimoine unique. À bientôt parmi nous !" }] },
      ],
    },
  },
  {
    slug: "ouverture-des-inscriptions-aux-ateliers-d-ete-2025",
    updates: {
      resume: "Les inscriptions aux ateliers et stages d'été 2025 sont ouvertes à la Maison de la Poterie de Sadirac ! Stages de tournage, modelage, raku pour enfants et adultes. Places limitées, réservez dès maintenant pour profiter de l'été créatif.",
      contenu: [
        { _type: "block", _key: "b1", style: "normal", children: [{ _type: "span", _key: "s1", text: "Bonne nouvelle pour tous les amoureux de la céramique : les inscriptions aux ateliers et stages d'été 2025 sont officiellement ouvertes à la Maison de la Poterie de Sadirac ! Que vous soyez débutant curieux ou praticien expérimenté, enfant ou adulte, notre programme estival vous réserve de belles surprises créatives." }] },
        { _type: "block", _key: "b2", style: "h2", children: [{ _type: "span", _key: "s2", text: "Les stages d'été : immersion créative" }] },
        { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Pendant les vacances d'été, nous proposons des stages intensifs de 1 à 3 jours permettant de se plonger dans la pratique de la céramique. Ces stages sont l'occasion idéale de progresser rapidement grâce à une pratique concentrée et un accompagnement personnalisé par nos céramistes professionnels." }] },
        { _type: "block", _key: "b4", style: "h3", children: [{ _type: "span", _key: "s4", text: "Stage de tournage (2 jours)" }] },
        { _type: "block", _key: "b5", style: "normal", children: [{ _type: "span", _key: "s5", text: "Le stage phare de l'été ! Pendant deux jours, vous apprendrez les bases du tournage sur tour de potier. Centrage de la balle de terre, montée des parois, façonnage de bols, vases et assiettes... Vous repartirez avec plusieurs pièces que nous cuirons et émaillerons pour vous. Plusieurs sessions en juillet et août." }] },
        { _type: "block", _key: "b6", style: "h3", children: [{ _type: "span", _key: "s6", text: "Stage de raku (2 jours)" }] },
        { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Vivez l'expérience spectaculaire de la cuisson raku ! Après avoir modelé et émaillé vos pièces le premier jour, vous assisterez et participerez à la cuisson le lendemain. Un moment magique quand les pièces incandescentes sortent du four à 1000°C... Une technique japonaise ancestrale à découvrir absolument." }] },
        { _type: "block", _key: "b8", style: "h3", children: [{ _type: "span", _key: "s8", text: "Stages enfants (6-12 ans)" }] },
        { _type: "block", _key: "b9", style: "normal", children: [{ _type: "span", _key: "s9", text: "Chaque semaine de juillet, nous proposons des stages de 3 demi-journées pour les enfants. Modelage d'animaux, création de bols personnalisés, décoration aux engobes... Les petits artistes repartent avec leurs créations après cuisson. Un atelier créatif et ludique pour occuper les vacances !" }] },
        { _type: "block", _key: "b10", style: "h2", children: [{ _type: "span", _key: "s10", text: "Les ateliers hebdomadaires continuent" }] },
        { _type: "block", _key: "b11", style: "normal", children: [{ _type: "span", _key: "s11", text: "Nos cours réguliers pour adultes et enfants se poursuivent pendant l'été avec des horaires adaptés. C'est l'occasion de commencer ou de poursuivre votre apprentissage dans une ambiance détendue et conviviale. Consultez notre page Ateliers pour découvrir tous nos créneaux disponibles." }] },
        { _type: "block", _key: "b12", style: "h2", children: [{ _type: "span", _key: "s12", text: "Comment s'inscrire ?" }] },
        { _type: "block", _key: "b13", style: "normal", children: [{ _type: "span", _key: "s13", text: "Les places sont limitées à 8-10 personnes par stage pour garantir un accompagnement de qualité. Nous vous conseillons de réserver rapidement, car les stages de l'été sont très demandés ! Inscription par téléphone au 05 56 30 60 03, par email ou directement à la Maison de la Poterie aux heures d'ouverture." }] },
        { _type: "block", _key: "b14", style: "normal", children: [{ _type: "span", _key: "s14", text: "Les adhérents de l'AGAP bénéficient de tarifs préférentiels sur tous les stages. Si vous n'êtes pas encore adhérent, c'est le moment de nous rejoindre ! L'adhésion vous donne également accès gratuit au musée et aux vernissages." }] },
        { _type: "block", _key: "b15", style: "h2", children: [{ _type: "span", _key: "s15", text: "Un été créatif à Sadirac" }] },
        { _type: "block", _key: "b16", style: "normal", children: [{ _type: "span", _key: "s16", text: "Profitez de votre passage pour visiter notre musée et sa collection de plus de 200 céramiques archéologiques. Découvrez l'histoire fascinante des potiers de Sadirac qui, au XVIIIe siècle, étaient 150 à façonner l'argile dans ce village de l'Entre-deux-Mers." }] },
        { _type: "block", _key: "b17", style: "normal", children: [{ _type: "span", _key: "s17", text: "La Maison de la Poterie est située à seulement 20 minutes de Bordeaux, dans un cadre verdoyant idéal pour une pause créative estivale. Entre vignobles et bastides, offrez-vous une escapade artistique au cœur du patrimoine céramique de la région. Nous vous attendons cet été !" }] },
      ],
    },
  },
];

async function updateArticles() {
  console.log("🔄 Mise à jour des articles SEO (partie 2)...\n");

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
