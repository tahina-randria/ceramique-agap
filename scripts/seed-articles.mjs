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
    titre: "38ème Festival Céramique en Fête 2025 : Jean-Nicolas Gérard invité d'honneur",
    slug: { _type: "slug", current: "festival-ceramique-en-fete-2025-jean-nicolas-gerard" },
    datePublication: "2025-01-15T10:00:00.000Z",
    resume: "Les 7 et 8 juin 2025, la Maison de la Poterie de Sadirac accueille la 38ème édition du festival international Céramique en Fête avec Jean-Nicolas Gérard, maître de la terre vernissée, comme invité d'honneur.",
    categorie: "evenement",
    contenu: [
      {
        _type: "block",
        _key: "intro1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Le festival international Céramique en Fête revient pour sa 38ème édition les samedi 7 et dimanche 8 juin 2025 à Sadirac, au cœur de l'Entre-deux-Mers. Cette année, c'est Jean-Nicolas Gérard, céramiste de renommée internationale et maître de la terre vernissée depuis plus de 40 ans, qui sera l'invité d'honneur.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-1",
        style: "h2",
        children: [{ _type: "span", _key: "s2", text: "Un marché de potiers d'exception" }],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Plus de 40 céramistes professionnels venus de toute la France et d'Europe exposeront leurs créations sous la Halle André Lapaillerie. Collectionneurs et amateurs pourront découvrir une grande diversité de styles et techniques : grès, porcelaine, faïence, raku, terre vernissée...",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-2",
        style: "h2",
        children: [{ _type: "span", _key: "s4", text: "Programme des animations" }],
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "Le festival propose de nombreuses animations gratuites : démonstrations de tournage, ateliers modelage pour enfants, cuisson raku en direct, allumage du four à bois traditionnel, conférences sur l'histoire de la poterie sadiracaise, et le fameux concours du « Pichet » dont le vainqueur rejoint la collection permanente du musée.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-3",
        style: "h2",
        children: [{ _type: "span", _key: "s6", text: "Exposition Jean-Nicolas Gérard" }],
      },
      {
        _type: "block",
        _key: "p4",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s7",
            text: "L'exposition « Terre vernissée, geste libre » sera visible à la Maison de la Poterie du 7 juin au 12 juillet 2025. Vernissage le samedi 7 juin à 11h. Jean-Nicolas Gérard animera également un stage exceptionnel du 2 au 6 juin pour les céramistes souhaitant approfondir la technique de la terre vernissée et la cuisson au four à bois.",
          },
        ],
      },
      {
        _type: "block",
        _key: "p5",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s8",
            text: "Entrée gratuite. Samedi 10h-19h, Dimanche 10h-17h. Place Fouragnan, 33670 Sadirac.",
          },
        ],
      },
    ],
  },
  {
    _type: "actualite",
    titre: "L'histoire de Sadirac : 700 ans de tradition potière en Gironde",
    slug: { _type: "slug", current: "histoire-sadirac-700-ans-tradition-potiere-gironde" },
    datePublication: "2025-01-10T10:00:00.000Z",
    resume: "Découvrez l'histoire exceptionnelle de Sadirac, village de l'Entre-deux-Mers qui fut l'un des plus grands centres de production céramique du Sud-Ouest, avec 150 familles de potiers au XVIIIe siècle.",
    categorie: "musee",
    contenu: [
      {
        _type: "block",
        _key: "intro1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "À 20 minutes de Bordeaux, le village de Sadirac possède une histoire céramique unique qui remonte à l'Antiquité. C'est la richesse exceptionnelle de son sous-sol en argile bleue qui a fait de ce petit village de l'Entre-deux-Mers l'un des centres potiers les plus importants du Sud-Ouest de la France.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-1",
        style: "h2",
        children: [{ _type: "span", _key: "s2", text: "L'âge d'or de la poterie sadiracaise" }],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Du XIVe au XIXe siècle, Sadirac connaît un essor remarquable. Au milieu du XVIIIe siècle, le village compte 150 familles de potiers – soit la moitié de sa population – qui alimentent une cinquantaine de fours monumentaux. La poterie Fouragnan, au cœur du village, rassemble à elle seule une quarantaine d'ateliers.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-2",
        style: "h2",
        children: [{ _type: "span", _key: "s4", text: "Les moules à pain de sucre : témoins du commerce triangulaire" }],
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "La production la plus emblématique de Sadirac reste les moules à pain de sucre, ces formes coniques utilisées dans les raffineries pour transformer le sucre brut des Antilles. Exportés depuis le Port de la Lune à Bordeaux, ces moules témoignent du rôle méconnu des potiers sadiracais dans l'économie coloniale. La collection de la Maison de la Poterie conserve des exemplaires uniques de cette production.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-3",
        style: "h2",
        children: [{ _type: "span", _key: "s6", text: "Un patrimoine préservé" }],
      },
      {
        _type: "block",
        _key: "p4",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s7",
            text: "Aujourd'hui, la Maison de la Poterie, créée autour des vestiges d'un four du XIXe siècle, abrite plus de 500 pièces issues de fouilles archéologiques menées par Pierre Régaldo. Le musée, rénové en 2007, retrace cette histoire à travers quatre thématiques : l'argile de l'Entre-deux-Mers, le village potier, le commerce triangulaire et les techniques artisanales.",
          },
        ],
      },
      {
        _type: "block",
        _key: "p5",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s8",
            text: "Sadirac est membre de l'Association Française des Cités de la Céramique (AfCC) et perpétue sa tradition grâce à une dizaine d'artistes potiers en activité.",
          },
        ],
      },
    ],
  },
  {
    _type: "actualite",
    titre: "Ateliers de poterie pour enfants : inscriptions ouvertes à Sadirac",
    slug: { _type: "slug", current: "ateliers-poterie-enfants-inscriptions-sadirac" },
    datePublication: "2025-01-08T10:00:00.000Z",
    resume: "La Maison de la Poterie de Sadirac propose des ateliers hebdomadaires de céramique pour les enfants dès 6 ans, encadrés par la céramiste Laure Carpené. Modelage, décoration et initiation au tour.",
    categorie: "atelier",
    contenu: [
      {
        _type: "block",
        _key: "intro1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Vous cherchez une activité créative et manuelle pour votre enfant ? Les ateliers de céramique pour enfants de la Maison de la Poterie de Sadirac sont faits pour lui ! Encadrés par Laure Carpené, céramiste professionnelle, ces cours permettent aux enfants de découvrir l'art de la poterie dans un cadre unique.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-1",
        style: "h2",
        children: [{ _type: "span", _key: "s2", text: "Un programme adapté aux enfants" }],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Les ateliers ont lieu chaque mercredi de 14h à 16h et accueillent un maximum de 10 enfants à partir de 6 ans. Au fil des séances, les jeunes céramistes explorent différentes techniques : modelage à la main, travail aux colombins, décoration avec engobes et oxydes, et même une initiation au tour de potier.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-2",
        style: "h2",
        children: [{ _type: "span", _key: "s4", text: "Tarifs et inscriptions" }],
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "Le trimestre (10 séances) est proposé à 120€, matériel, cuisson et émaillage inclus. Chaque enfant repart avec ses créations émaillées ! Pour vous inscrire, contactez directement Laure Carpené : laurecarpene@hotmail.com ou 06 22 80 33 68.",
          },
        ],
      },
      {
        _type: "block",
        _key: "p4",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s6",
            text: "Les places étant limitées, nous vous conseillons de réserver rapidement pour le prochain trimestre.",
          },
        ],
      },
    ],
  },
  {
    _type: "actualite",
    titre: "Stages de céramique 2025 : le programme complet",
    slug: { _type: "slug", current: "stages-ceramique-2025-programme-complet" },
    datePublication: "2025-01-05T10:00:00.000Z",
    resume: "Nerikomi, Raku, tournage, sculpture animalière... Découvrez tous les stages de céramique proposés en 2025 à la Maison de la Poterie de Sadirac, animés par des céramistes professionnels.",
    categorie: "atelier",
    contenu: [
      {
        _type: "block",
        _key: "intro1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "La Maison de la Poterie de Sadirac propose en 2025 une programmation riche de stages intensifs pour tous les niveaux. Que vous soyez débutant curieux ou céramiste confirmé, ces formations vous permettront d'approfondir votre pratique aux côtés d'artistes reconnus.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-1",
        style: "h2",
        children: [{ _type: "span", _key: "s2", text: "Février : Mouler pour Créer et Cuisson Raku" }],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Du 24 au 28 février, Marie Heughebaert anime le stage « Mouler pour Créer » (400€) consacré aux techniques de moulage en plâtre. Les 2 et 16 février, Jérémy Coleman propose deux sessions de cuisson Raku (115€ + adhésion), cette technique japonaise spectaculaire où les pièces sont sorties incandescentes du four.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-2",
        style: "h2",
        children: [{ _type: "span", _key: "s4", text: "Mars : Nerikomi avec Yuko Karamatsu" }],
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "Du 16 au 20 mars, la céramiste japonaise Yuko Karamatsu, invitée d'honneur 2024, revient pour un stage exceptionnel de Nerikomi (400€). Cette technique ancestrale consiste à assembler des porcelaines teintées dans la masse pour créer des motifs géométriques d'une grande finesse. 8 places maximum.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-3",
        style: "h2",
        children: [{ _type: "span", _key: "s6", text: "Avril-Mai : Tournage et Sculpture animalière" }],
      },
      {
        _type: "block",
        _key: "p4",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s7",
            text: "Les 26-27 avril, Laure Carpené propose un stage de tournage (170€ les 2 jours) pour débutants et intermédiaires. Du 28 avril au 2 mai, Gaëlle Borracherro anime un stage de sculpture animalière (350€) axé sur l'observation et le modelage des formes animales.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-4",
        style: "h2",
        children: [{ _type: "span", _key: "s8", text: "Juin : Stage exceptionnel avec Jean-Nicolas Gérard" }],
      },
      {
        _type: "block",
        _key: "p5",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s9",
            text: "Du 2 au 6 juin, Jean-Nicolas Gérard, invité d'honneur du festival 2025, anime un stage de terre vernissée avec cuisson au four à bois (400€). Une occasion unique d'apprendre auprès d'un maître internationalement reconnu. Réservation indispensable.",
          },
        ],
      },
      {
        _type: "block",
        _key: "p6",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s10",
            text: "Contact et réservations : centreceramique33@gmail.com ou 07 81 32 42 94",
          },
        ],
      },
    ],
  },
  {
    _type: "actualite",
    titre: "Visites scolaires : la céramique au service de la pédagogie",
    slug: { _type: "slug", current: "visites-scolaires-ceramique-pedagogie-pass-culture" },
    datePublication: "2025-01-03T10:00:00.000Z",
    resume: "De la maternelle au lycée, la Maison de la Poterie de Sadirac propose des parcours pédagogiques adaptés à chaque niveau. Éligible Pass Culture et référencé sur ADAGE.",
    categorie: "association",
    contenu: [
      {
        _type: "block",
        _key: "intro1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Enseignants, la Maison de la Poterie de Sadirac vous accueille avec vos classes pour des parcours pédagogiques alliant découverte du patrimoine et pratique artistique. Nos ateliers sont éligibles au Pass Culture et référencés sur la plateforme ADAGE.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-1",
        style: "h2",
        children: [{ _type: "span", _key: "s2", text: "4 parcours adaptés à chaque âge" }],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Maternelle (3-6 ans) : exploration sensorielle de l'argile et création tactile. Primaire (6-11 ans) : visite guidée du musée, découverte des outils du potier et modelage. Collège (11-15 ans) : histoire de la céramique sadiracaise, démonstration de tournage et initiation pratique. Lycée (15-18 ans) : conférence sur l'histoire de l'art céramique, rencontre avec un artiste et atelier créatif libre.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-2",
        style: "h2",
        children: [{ _type: "span", _key: "s4", text: "Liens avec les programmes scolaires" }],
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "Nos parcours s'inscrivent dans les programmes d'histoire (commerce triangulaire, vie quotidienne au Moyen Âge), d'arts plastiques, de sciences (géologie, chimie des émaux), de technologie (process de fabrication) et d'éducation au développement durable. Un dossier pédagogique complet est fourni aux enseignants.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-3",
        style: "h2",
        children: [{ _type: "span", _key: "s6", text: "Informations pratiques" }],
      },
      {
        _type: "block",
        _key: "p4",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s7",
            text: "Durée : 2 heures. Tarif : 17€ par élève (groupe de 10-24). Forfait 420€ pour les groupes de plus de 24 élèves. Réservations du mardi au vendredi, de 9h à 17h30. Contact : centreceramique33@gmail.com",
          },
        ],
      },
    ],
  },
  {
    _type: "actualite",
    titre: "Cours de poterie adultes : tournage, modelage et raku à Sadirac",
    slug: { _type: "slug", current: "cours-poterie-adultes-tournage-modelage-raku-sadirac" },
    datePublication: "2025-01-01T10:00:00.000Z",
    resume: "Trois céramistes professionnels animent les ateliers adultes de la Maison de la Poterie : Jérémy Coleman (tournage, raku), Eukeni Callejo (modelage, sculpture) et Laure Carpené (céramique utilitaire).",
    categorie: "atelier",
    contenu: [
      {
        _type: "block",
        _key: "intro1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Envie de vous initier à la poterie ou de perfectionner votre technique ? La Maison de la Poterie de Sadirac propose des ateliers hebdomadaires pour adultes, animés par trois céramistes aux spécialités complémentaires. Une approche diversifiée pour explorer toutes les facettes de la céramique.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-1",
        style: "h2",
        children: [{ _type: "span", _key: "s2", text: "Jérémy Coleman : Tournage et Raku" }],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Spécialiste du tour et de la cuisson raku, Jérémy Coleman propose des cours les lundis et mardis soir (18h30-21h30) ainsi que le samedi matin. Le raku, technique japonaise où les pièces sont extraites du four à 1000°C puis enfumées, produit des effets de surface uniques. Contact : jerry.coleman@orange.fr",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-2",
        style: "h2",
        children: [{ _type: "span", _key: "s4", text: "Eukeni Callejo : Modelage et Sculpture" }],
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "Artiste d'origine basque, Eukeni Callejo enseigne les techniques de modelage et sculpture céramique. Ses cours ont lieu le samedi matin et le lundi matin. Il accompagne les élèves dans la réalisation de pièces figuratives ou abstraites, du croquis à la finition. Contact : eukenicallejo@gmail.com",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-3",
        style: "h2",
        children: [{ _type: "span", _key: "s6", text: "Laure Carpené : Céramique utilitaire" }],
      },
      {
        _type: "block",
        _key: "p4",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s7",
            text: "Laure Carpené propose des ateliers axés sur la création de pièces fonctionnelles : bols, tasses, plats... Ses cours ont lieu le vendredi matin et après-midi. Elle enseigne les gestes précis pour réaliser des objets du quotidien beaux et utiles. Contact : laurecarpene@hotmail.com",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-4",
        style: "h2",
        children: [{ _type: "span", _key: "s8", text: "Tarifs et inscription" }],
      },
      {
        _type: "block",
        _key: "p5",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s9",
            text: "140€ par trimestre (6 séances de 3h par mois). Terre, cuisson et émaux : 5€/kg. Adhésion AGAP obligatoire : 10€ (résidents CCC) ou 20€ (hors CCC). Réservez votre place : centreceramique33@gmail.com",
          },
        ],
      },
    ],
  },
  {
    _type: "actualite",
    titre: "Les collections du musée : 500 pièces témoins de l'histoire",
    slug: { _type: "slug", current: "collections-musee-poterie-sadirac-500-pieces" },
    datePublication: "2024-12-20T10:00:00.000Z",
    resume: "Cruches, moules à sucre, outils de potier... Les collections permanentes de la Maison de la Poterie de Sadirac comptent plus de 500 pièces du XIVe au XXe siècle, issues de fouilles archéologiques.",
    categorie: "musee",
    contenu: [
      {
        _type: "block",
        _key: "intro1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "La Maison de la Poterie de Sadirac conserve une collection exceptionnelle de plus de 500 pièces céramiques, fruit des fouilles archéologiques menées par Pierre Régaldo sur le territoire de la commune. Un patrimoine unique qui témoigne de sept siècles de production potière.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-1",
        style: "h2",
        children: [{ _type: "span", _key: "s2", text: "Poteries utilitaires (XVIIe-XIXe siècle)" }],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Cruches à vin, jarres à huile, pichets vernissés, terrines de cuisine... Ces objets du quotidien étaient exportés dans tout le Sud-Ouest. La pièce emblématique reste la casserole à anse bifide, typiquement sadiracaise, reconnaissable à sa poignée fendue.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-2",
        style: "h2",
        children: [{ _type: "span", _key: "s4", text: "Moules à pain de sucre : un témoignage unique" }],
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "La collection de moules à pain de sucre constitue l'un des ensembles les plus importants de France. Ces formes coniques servaient au raffinage du sucre brut des Antilles dans les raffineries bordelaises. Ils témoignent du rôle méconnu de Sadirac dans l'économie du commerce triangulaire.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-3",
        style: "h2",
        children: [{ _type: "span", _key: "s6", text: "Pièces décoratives et outils du potier" }],
      },
      {
        _type: "block",
        _key: "p4",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s7",
            text: "Avec le déclin du commerce au XIXe siècle, les potiers se tournent vers la production décorative : vases, cache-pots, pièces de mariage. Le musée expose également les outils traditionnels : tours, estèques, ébauchoirs, moules en plâtre, qui permettent de comprendre les gestes ancestraux.",
          },
        ],
      },
      {
        _type: "block",
        _key: "p5",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s8",
            text: "Entrée gratuite. Ouvert du mercredi au dimanche, 14h-18h. Place Fouragnan, Sadirac.",
          },
        ],
      },
    ],
  },
  {
    _type: "actualite",
    titre: "Le four à bois : cœur battant de la Maison de la Poterie",
    slug: { _type: "slug", current: "four-a-bois-traditionnel-maison-poterie-sadirac" },
    datePublication: "2024-12-15T10:00:00.000Z",
    resume: "Reconstitué à l'identique des fours monumentaux du XVIIIe siècle, le four à bois de la Maison de la Poterie est allumé chaque année lors du festival Céramique en Fête.",
    categorie: "musee",
    contenu: [
      {
        _type: "block",
        _key: "intro1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Au cœur de la Maison de la Poterie se dresse un four à bois traditionnel, fidèle reconstitution des imposants fours qui jalonnaient autrefois le paysage sadiracais. Au XVIIIe siècle, une cinquantaine de ces fours monumentaux fonctionnaient simultanément dans le village.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-1",
        style: "h2",
        children: [{ _type: "span", _key: "s2", text: "Une cuisson ancestrale" }],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "La cuisson au bois est un art exigeant. Pendant 24 à 48 heures, le feu doit être alimenté sans interruption pour atteindre les 1280°C nécessaires au grès. Les cendres volantes se déposent sur les pièces et créent des effets de glaçure naturelle impossibles à reproduire en four électrique.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-2",
        style: "h2",
        children: [{ _type: "span", _key: "s4", text: "Une expérience à vivre lors du festival" }],
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "Chaque année, lors du festival Céramique en Fête (premier week-end de juin), le four est allumé pour une cuisson collective. Les visiteurs peuvent assister à l'enfournement le samedi, veiller sur les flammes, et participer au défournement le dimanche après-midi – moment magique où les pièces encore fumantes sont révélées.",
          },
        ],
      },
      {
        _type: "block",
        _key: "p4",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s6",
            text: "En 2025, Jean-Nicolas Gérard, maître de la terre vernissée et invité d'honneur, supervisera la cuisson. Une occasion exceptionnelle d'observer un savoir-faire traditionnel en action.",
          },
        ],
      },
    ],
  },
  {
    _type: "actualite",
    titre: "Devenir membre de l'AGAP : soutenez la céramique à Sadirac",
    slug: { _type: "slug", current: "adhesion-agap-membre-association-poterie-sadirac" },
    datePublication: "2024-12-10T10:00:00.000Z",
    resume: "Depuis 1989, l'Association des Gens et Amis de la Poterie (AGAP) œuvre pour préserver et transmettre le patrimoine céramique de Sadirac. Rejoignez les 20 bénévoles actifs !",
    categorie: "association",
    contenu: [
      {
        _type: "block",
        _key: "intro1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "L'AGAP – Association des Gens et Amis de la Poterie – anime depuis 35 ans la Maison de la Poterie de Sadirac. Portée par 20 bénévoles passionnés, l'association poursuit trois missions : conserver les collections, transmettre les savoir-faire et valoriser la création contemporaine.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-1",
        style: "h2",
        children: [{ _type: "span", _key: "s2", text: "Les avantages de l'adhésion" }],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "En devenant membre, vous bénéficiez de tarifs préférentiels sur les ateliers et stages, d'invitations aux vernissages et événements privés, d'un accès prioritaire aux informations (newsletter exclusive) et vous soutenez une association locale œuvrant pour le patrimoine.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-2",
        style: "h2",
        children: [{ _type: "span", _key: "s4", text: "Tarifs d'adhésion 2025" }],
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "Enfant : 15€ (résidents CCC) / 20€ (hors CCC). Adulte : 15€ (CCC) / 25€ (hors CCC). Famille : 30€ (CCC) / 45€ (hors CCC). Adhésion stage : 5€ (1-2 jours) / 10€ (stages longs). Paiement par virement, chèque ou carte sur place.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-3",
        style: "h2",
        children: [{ _type: "span", _key: "s6", text: "Le bureau de l'association" }],
      },
      {
        _type: "block",
        _key: "p4",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s7",
            text: "Président : Jean-François Bourlard. Co-Présidente : Gaëlle Borrachero. Trésorières : Anne-Marie Millera et Sylvie Manchado. Secrétaire : Laure Carpené. Chargée de développement : Odile Garat. Contact : centreceramique33@gmail.com",
          },
        ],
      },
    ],
  },
  {
    _type: "actualite",
    titre: "Yuko Karamatsu : retour sur l'exposition 2024",
    slug: { _type: "slug", current: "yuko-karamatsu-exposition-2024-nerikomi-sadirac" },
    datePublication: "2024-12-05T10:00:00.000Z",
    resume: "Du 8 juin au 13 juillet 2024, la céramiste japonaise Yuko Karamatsu, invitée d'honneur du 37ème festival, a exposé ses créations en porcelaine Nerikomi à la Maison de la Poterie.",
    categorie: "exposition",
    contenu: [
      {
        _type: "block",
        _key: "intro1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "L'été 2024 aura été marqué par l'exposition exceptionnelle de Yuko Karamatsu, céramiste poitevine d'origine japonaise, invitée d'honneur de la 37ème édition de Céramique en Fête. Son travail de porcelaine Nerikomi a fasciné plus de 800 visiteurs.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-1",
        style: "h2",
        children: [{ _type: "span", _key: "s2", text: "Le Nerikomi : une technique d'exception" }],
      },
      {
        _type: "block",
        _key: "p2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Le Nerikomi est une technique japonaise ancestrale qui consiste à assembler des porcelaines colorées dans la masse avec des pigments, puis à les trancher pour révéler des motifs géométriques. Chaque pièce nécessite des heures de travail minutieux. Les couleurs traversent l'épaisseur de la céramique, créant des effets impossibles à obtenir par simple décor de surface.",
          },
        ],
      },
      {
        _type: "block",
        _key: "h2-2",
        style: "h2",
        children: [{ _type: "span", _key: "s4", text: "Un parcours remarquable" }],
      },
      {
        _type: "block",
        _key: "p3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "Yuko Karamatsu a débuté la céramique en 2012. Son travail, qui mêle rigueur japonaise et sensibilité européenne, lui a valu de nombreuses récompenses. Elle revient à Sadirac du 16 au 20 mars 2025 pour animer un stage Nerikomi de 5 jours – une occasion rare d'apprendre cette technique exigeante auprès d'une maître.",
          },
        ],
      },
    ],
  },
];

async function seedArticles() {
  console.log("🚀 Injection des articles SEO dans Sanity...\n");

  for (const article of articles) {
    try {
      const result = await client.create(article);
      console.log(`✅ Créé: "${article.titre}" (${result._id})`);
    } catch (error) {
      console.error(`❌ Erreur pour "${article.titre}":`, error.message);
    }
  }

  console.log("\n✨ Injection terminée !");
}

seedArticles();
