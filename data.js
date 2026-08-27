/* ==========================================================================
   DONNÉES GLOBALES DE L'APPLICATION (MULTI-PROFILS)
   ========================================================================== */

const APP_DATA = {
  profiles: {
    // ==========================================
    // PROFIL 1 : THÉO (Profil d'origine)
    // ==========================================
    theo: {
      meta: { 
        name: "Théo", 
        info: "1m95 · 95kg · 5x muscu + 2-3x tapis incliné/sem." 
      },
      TARGET: { kcal: 2350, p: 190, g: 220, l: 75 },
      TIPS: [
        "Varier les sources de glucides complexes (riz, patate douce, avoine) pour éviter la lassitude.",
        "Boire au moins 3 litres d'eau par jour, surtout avec un apport élevé en protéines.",
        "Ne pas négliger les lipides : essentiels pour la santé hormonale et articulaire.",
        "Préparer ses repas à l'avance (batch cooking) pour tenir le déficit sans craquer."
      ],
      MEALS: [
        {
          id: 'm1',
          label: 'Petit-déjeuner / Collation 1',
          target: { kcal: 500, p: 40, g: 50, l: 15 },
          options: [
            { name: 'Bowl Skyr & Muesli', tag: 'Idée maison', prep: '3 min · bol', desc: '350g skyr 0% + 60g muesli avoine + 20g beurre de cacahuète + 1 fruit' },
            { name: 'Pancakes Protéinés', tag: 'Gourmand', prep: '10 min · poêle', desc: '80g flocons d’avoine mixés + 30g whey + 2 œufs + 100ml lait écrémé' },
            { name: 'Omelette Salée & Pain', tag: 'Salé', prep: '8 min · poêle', desc: '3 œufs entiers + 100g blancs de poulet en dés + 2 tranches pain complet' }
          ]
        },
        {
          id: 'm2',
          label: 'Déjeuner',
          target: { kcal: 700, p: 60, g: 70, l: 20 },
          options: [
            { name: 'Poulet, Riz & Légumes', tag: 'Classique', prep: '15 min · poêle', desc: '180g blanc de poulet + 80g riz basmati cru + brocolis + 1 càs huile d’olive' },
            { name: 'Bœuf Haché & Patate Douce', tag: 'Réconfortant', prep: '15 min · poêle', desc: '160g steak haché 5% + 250g patates douces au four + haricots verts' },
            { name: 'Pavé de Saumon & Pâtes', tag: 'Complet', prep: '15 min · casserole', desc: '150g pavé de saumon + 70g pâtes semi-complètes + épinards frais' }
          ]
        },
        {
          id: 'm3',
          label: 'Collation / Pre-Workout',
          target: { kcal: 350, p: 30, g: 35, l: 10 },
          options: [
            { name: 'Shaker Whey & Avoine', tag: 'Rapide', prep: '2 min · shaker', desc: '40g whey isolate + 50g poudre d’avoine instantanée + eau ou lait' },
            { name: 'Fromage Blanc & Amandes', tag: 'Frais', prep: '2 min · bol', desc: '250g fromage blanc 0% + 20g amandes entières + 1 cuillère de miel' },
            { name: 'Sandwich Dinde & Fromage', tag: 'Sur le pouce', prep: '3 min · montage', desc: '2 tranches pain de mie complet + 80g blanc de dinde + 30g emmental léger' }
          ]
        },
        {
          id: 'm4',
          label: 'Dîner',
          target: { kcal: 800, p: 60, g: 65, l: 30 },
          options: [
            { name: 'Blancs de Dinde & Quinoa', tag: 'Léger', prep: '20 min · poêle', desc: '200g escalopes de dinde + 70g quinoa cru + ratatouille de légumes' },
            { name: 'Steak de Bœuf & Purée', tag: 'Traditionnel', prep: '15 min · casserole', desc: '180g bœuf 5% + 300g purée de pommes de terre maison + salade verte' },
            { name: 'Omelette Riche & Salade', tag: 'Économique', prep: '10 min · poêle', desc: '4 œufs + 80g thon en boîte + 50g feta + grande salade composée' }
          ]
        }
      ]
    },

    // ==========================================
    // PROFIL 2 : SUZANNE (Nouveau profil)
    // ==========================================
    suzanne: {
      meta: { 
        name: "Suzanne", 
        info: "1m69 · 43kg · 3-4x muscu/sem. · Prise de poids" 
      },
      TARGET: { kcal: 2300, p: 100, g: 295, l: 80 },
      TIPS: [
        "Miser sur des aliments denses en calories mais faciles à digérer (oléagineux, fruits secs, huiles de qualité).",
        "Ne pas sauter de repas : la régularité est la clé absolue pour une prise de poids saine et progressive.",
        "Associer systématiquement une source de protéines à chaque repas pour soutenir la construction musculaire.",
        "Boire des calories si l'appétit est parfois limité (smoothies enrichis au beurre de cacahuète ou flacons d'avoine)."
      ],
      MEALS: [
        {
          id: 's_m1',
          label: 'Petit-déjeuner / Collation 1',
          target: { kcal: 400, p: 20, g: 50, l: 15 },
          options: [
            { name: 'Skyr Miel Muesli', tag: 'Liquide express', prep: '2 min · shaker', desc: '300g skyr 0% + 60g muesli bio + 15g miel + 15g beurre de cacahuète' },
            { name: 'Tartines Avocat et Œufs', tag: 'Salé', prep: '5 min · poêle', desc: '2 tranches pain complet + 1/2 avocat + 2 œufs + filet huile d’olive' },
            { name: 'Le Bol Croquant aux Oléagineux', tag: 'Frais', prep: '2 min · bol', desc: '200g fromage blanc/skyr + amandes/noix + pépites chocolat noir + fruits rouges' },
            { name: 'Pancakes Express à l’Avoine', tag: 'Idée maison', prep: '10 min · poêle', desc: '50g flocons d’avoine mixés + 2 œufs + 1 banane + miel' }
          ]
        },
        {
          id: 's_m2',
          label: 'Déjeuner',
          target: { kcal: 750, p: 30, g: 100, l: 25 },
          options: [
            { name: 'Bowl Poulet, Riz et Avocat', tag: 'Complet', prep: '15 min · poêle', desc: '120g poulet + 100g riz cru + 1/2 avocat + maïs + haricots rouges + 2 càs huile d’olive' },
            { name: 'Pâtes au Saumon et à la Crème', tag: 'Gourmand', prep: '12 min · casserole', desc: '100g pâtes crues + pavé de saumon + 3 càs crème fraîche entière + épinards' },
            { name: 'Curry de Pois Chiches et Lait de Coco', tag: 'Végétarien', prep: '20 min · casserole', desc: '150g pois chiches + 80g riz thaï cru + patate douce + 100ml lait de coco entier + curry' },
            { name: 'Wraps Bœuf et Houmous', tag: 'Sur le pouce', prep: '10 min · poêle', desc: '2 wraps + 120g bœuf haché 15% MG + houmous + crudités + fromage râpé' }
          ]
        },
        {
          id: 's_m3',
          label: 'Collation 2 / Pre-Workout',
          target: { kcal: 400, p: 20, g: 45, l: 15 },
          options: [
            { name: 'Smoothie Banane & Beurre de Cacahuète', tag: 'Liquide express', prep: '3 min · blender', desc: '250ml lait entier + 1 banane + 30g avoine en poudre + 20g beurre de cacahuète' },
            { name: 'Porridge Gourmand Chocolat', tag: 'Chaud', prep: '5 min · casserole', desc: '50g flocons d’avoine + 200ml lait + 1 carré de chocolat noir fondu + compote' },
            { name: 'Sandwich Complet Dinde & Fromage', tag: 'Salé', prep: '3 min · montage', desc: '2 tranches de pain de mie complet + 60g blanc de dinde + 30g emmental + un fruit' },
            { name: 'Bowl Fromage Blanc & Granola', tag: 'Frais', prep: '2 min · bol', desc: '200g fromage blanc + 50g granola croquant + 1 poignée de fruits secs' }
          ]
        },
        {
          id: 's_m4',
          label: 'Dîner',
          target: { kcal: 750, p: 30, g: 100, l: 25 },
          options: [
            { name: 'Poulet Crème Moutarde et Pommes de Terre', tag: 'Réconfortant', prep: '20 min · poêle', desc: '120g poulet aux oignons + 3 càs crème fraîche + moutarde + 250g pommes de terre rissolées + haricots verts' },
            { name: 'Burger Maison et Frites de Patate Douce', tag: 'Plaisir', prep: '20 min · four', desc: 'Pain burger + steak 15% + cheddar + sauce + frites de patate douce au four' },
            { name: 'Risotto Crémeux et Dinde', tag: 'Plat en sauce', prep: '25 min · casserole', desc: '80g riz à risotto au bouillon + mascarpone/parmesan + champignons + escalopes de dinde' },
            { name: 'Omelette Pommes de Terre et Fromage', tag: 'Économique', prep: '10 min · poêle', desc: 'Omelette 4 œufs + dés de pommes de terre rissolées + gruyère + salade' }
          ]
        }
      ]
    }
  },

  // ==========================================
  // SÉANCES DE SPORT GLOBALES (Avec liens Docteur-Fitness)
  // ==========================================
  sessions: [
    {
      id: "jambes",
      title: "Jambes (Quads / Ischios / Mollets)",
      tags: ["Quadriceps", "Ischios", "Mollets"],
      note: "Séance exigeante, privilégier l'amplitude complète et le contrôle de la phase excentrique.",
      groups: [
        {
          label: "Quadriceps & Chaîne Antérieure",
          items: [
            { name: "Squat Barre (ou Goblet Squat)", sets: "4 séries · 6-8 reps", tags: ["Quadriceps"], note: "Descente contrôlée, buste fier.", docteurFitnessUrl: "https://www.docteur-fitness.com/squat" },
            { name: "Leg Press Inclinée", sets: "3 séries · 8-10 reps", tags: ["Quadriceps"], note: "Pieds bas sur la plateforme pour cibler les quads.", docteurFitnessUrl: "https://www.docteur-fitness.com/presse-a-cuisses-inclinee" },
            { name: "Leg Extension", sets: "3 séries · 12-15 reps", tags: ["Quadriceps"], note: "Pause de 1 seconde en contraction haute.", docteurFitnessUrl: "https://www.docteur-fitness.com/leg-extension" }
          ]
        },
        {
          label: "Ischios & Fessiers",
          items: [
            { name: "Souverain / Soulevé de Terre Roumain", sets: "4 séries · 8-10 reps", tags: ["Ischios"], note: "Garder les jambes semi-tendues, dos bien droit.", docteurFitnessUrl: "https://www.docteur-fitness.com/souleve-de-terre-roumain" },
            { name: "Leg Curl Allongé", sets: "3 séries / 10-12 reps", tags: ["Ischios"], note: "Ne pas décoller les fessiers du siège.", docteurFitnessUrl: "https://www.docteur-fitness.com/leg-curl" }
          ]
        },
        {
          label: "Mollets",
          items: [
            { name: "Extension Mollets Debout (Smith Machine)", sets: "4 séries · 12-15 reps", tags: ["Mollets"], note: "Étirement maximal en bas, contraction forte en haut.", docteurFitnessUrl: "https://www.docteur-fitness.com/extensions-des-mollets-debout-a-la-smith-machine" }
          ]
        }
      ]
    },
    {
      id: "dos_biceps",
      title: "Dos & Biceps",
      tags: ["Dos", "Biceps", "Arrière d'épaule"],
      note: "Attention à bien initier le tirage avec les coudes et non avec les mains pour maximiser le recrutement du grand dorsal.",
      groups: [
         {
          label: "Échauffement",
          items: [
            { name: "Traction", sets: "4 séries · 6-8 reps", tags: ["Dos"], note: "Prise large, poitrine sortie vers la barre.", docteurFitnessUrl: "https://www.docteur-fitness.com/traction" },
          ]
        },
         {
          label: "Largeur & Épaisseur du Dos",
          items: [
            { name: "Tirage Vertical", sets: "3 séries · 12-15 reps", tags: ["Dos"], note: "Prise large, poitrine sortie vers la barre.", docteurFitnessUrl: "https://www.docteur-fitness.com/tirage-vertical-poitrine" },
            { name: "Tirage Horizontal poulie basse", sets: "3 séries · 10-12 reps", tags: ["Dos"], note: "Garder le dos fixe, serrer les omoplates en fin de mouvement.", docteurFitnessUrl: "https://www.docteur-fitness.com/tirage-horizontal" },
            { name: "Pull-over à la poulie", sets: "4 séries · 8-10 reps", tags: ["Dos"], note: "Tirer vers les hanches.", docteurFitnessUrl: "https://www.docteur-fitness.com/pull-over-a-la-poulie" },
            { name: "Face Pull Assis", sets: "3 séries · 12-15 reps", tags: ["Dos"], note: "Idéal pour l'isolation des grands dorsaux.", docteurFitnessUrl: "https://smartworkout.app/fr/bibliotheque-d-exercices/epaules/tirage-visage-assis" }
          ]
        },
        {
          label: "Isolation Biceps",
          items: [
            { name: "Curl à la Barre", sets: "3 séries · 12-15 reps", tags: ["Biceps"], note: "Bras bien en arrière pour un étirement maximal.", docteurFitnessUrl: "https://www.docteur-fitness.com/curl-a-la-barre" },
            { name: "Curl Marteau Assis", sets: "3 séries · 10-12 reps", tags: ["Biceps"], note: "Évite tout balancement du corps.", docteurFitnessUrl: "https://smartworkout.app/fr/bibliotheque-d-exercices/biceps/curl-marteau-assis" }
          ]
        },
        {
          label: "Avant Bras",
          items: [
            { name: "Curl Inversé à la Barre", sets: "3 séries · 10-12 reps", tags: ["Biceps"], note: "Bras bien en arrière pour un étirement maximal.", docteurFitnessUrl: "https://www.docteur-fitness.com/curl-inverse-a-la-barre" },
            { name: "Curl Poignet", sets: "3 séries · 10-12 reps", tags: ["Biceps"], note: "Évite tout balancement du corps.", docteurFitnessUrl: "https://smartworkout.app/fr/bibliotheque-d-exercices/avant-bras/flexion-du-poignet-a-un-bras-avec-haltere" },
            { name: "Curl Poignet Inversé", sets: "3 séries · 10-12 reps", tags: ["Biceps"], note: "Évite tout balancement du corps.", docteurFitnessUrl: "https://smartworkout.app/fr/bibliotheque-d-exercices/avant-bras/curl-inverse-du-poignet-avec-haltere-a-un-bras" }
           ]
         },
         {
          label: "Bas du Dos",
          items: [
            { name: "Extension Lombaire", sets: "3 séries · 10-12 reps", tags: ["Biceps"], note: "Bras bien en arrière pour un étirement maximal.", docteurFitnessUrl: "https://www.docteur-fitness.com/extension-lombaire-au-banc-a-45" }
           ]
         }
      ]
    },
    {
      id: "pecs_epaules",
      title: "Pecs & Épaules / Triceps",
      tags: ["Pectoraux", "Épaules", "Triceps"],
      note: "Séance haut du corps polyvalente. Utilise l'option de variante ci-dessous selon ton focus.",
      variant: true,
      groups: [
        {
          label: "Développement Pectoral",
          items: [
            { name: "Développé Couché Incliné (Haltères ou Barre)", sets: "4 séries · 6-8 reps", tags: ["Pectoraux"], note: "Cible le faisceau claviculaire (haut des pecs).", docteurFitnessUrl: "https://www.docteur-fitness.com/developpe-incline-a-la-barre" },
            { name: "Développé Couché Décliné (ou Dips)", sets: "3 séries · 8-10 reps", tags: ["Pectoraux"], note: "Excellente contraction sur le bas des pecs.", docteurFitnessUrl: "https://www.docteur-fitness.com/dips" },
            { name: "Écartés Poulie Vis-à-Vis", sets: "3 séries · 12-15 reps", tags: ["Pectoraux"], note: "Garder une légère flexion des coudes constante.", docteurFitnessUrl: "https://www.docteur-fitness.com/ecartes-poulie-vis-a-vis" }
          ]
        },
        {
          label: "Épaules & Triceps (Option 1 : Focus Épaules)",
          variantKey: "epaules",
          items: [
            { name: "Développé Militaire aux Haltères", sets: "3 séries · 8-10 reps", tags: ["Épaules"], note: "Gardes les abdos fermés, pas de cambrure excessive.", docteurFitnessUrl: "https://www.docteur-fitness.com/developpe-militaire" },
            { name: "Élévations Latérales aux Haltères", sets: "4 séries · 12-15 reps", tags: ["Épaules"], note: "Mouvement fluide, emmener les coudes vers le haut.", docteurFitnessUrl: "https://www.docteur-fitness.com/elevations-laterales-halteres" },
            { name: "Extension Triceps à la Poulie Haute", sets: "3 séries · 10-12 reps", tags: ["Triceps"], note: "Coudes serrés le long du corps.", docteurFitnessUrl: "https://www.docteur-fitness.com/extensions-triceps-poulie" }
          ]
        },
        {
          label: "Épaules & Triceps (Option 2 : Focus Triceps)",
          variantKey: "triceps",
          items: [
            { name: "Développé Militaire aux Haltères", sets: "3 séries · 8-10 reps", tags: ["Épaules"], note: "Gardes les abdos fermés, pas de cambrure excessive.", docteurFitnessUrl: "https://www.docteur-fitness.com/developpe-militaire" },
            { name: "Extension Triceps Nuque (Haltère ou Poulie)", sets: "3 séries · 10-12 reps", tags: ["Triceps"], note: "Étirement complet de la longue portion.", docteurFitnessUrl: "https://www.docteur-fitness.com/extension-triceps-nuque" },
            { name: "Dips sur Banc (ou Machine)", sets: "3 séries · 10-12 reps", tags: ["Triceps"], note: "Garder le buste droit pour cibler en priorité les triceps.", docteurFitnessUrl: "https://www.docteur-fitness.com/dips" }
          ]
        }
      ]
    },
    {
      id: "fessiers",
      title: "Fessiers & Ischios",
      tags: ["Fessiers", "Ischios"],
      note: "Focus bas du corps axé sur la chaîne postérieure et le galbe.",
      groups: [
        {
          label: "Cible Fessiers",
          items: [
            { name: "Hip Thrust à la Barre", sets: "4 séries · 10-12 reps", tags: ["Fessiers"], note: "Bien contracter les fessiers, pause de 1 seconde en haut.", docteurFitnessUrl: "https://www.docteur-fitness.com/hip-thrust" },
            { name: "Fentes Bulgarie (Haltères)", sets: "3 séries · 10 reps / jambe", tags: ["Fessiers"], note: "Inclinaison du buste légèrement vers l'avant pour cibler les fessiers, éloigner le poid vers l'avant.", docteurFitnessUrl: "https://www.docteur-fitness.com/fentes-bulgares" },
            { name: "Step Up Poulie", sets: "3 séries · 12 reps", tags: ["Fessiers"], note: "Banc en face de la poulie, poulie régler au plus bas, pousser la jambe en arrière à la descente.", docteurFitnessUrl: "https://smartworkout.app/fr/bibliotheque-d-exercices/fessiers/fente-arriere-avec-halteres-sur-marche" },
            { name: "RDL", sets: "4 séries · 10-12 reps", tags: ["Fessiers"], note: "Pied largeur de hanche, pousser le hanches le plus possible vers l'arrière et remonter juste après, ne pas cambrer le dos.", docteurFitnessUrl: "https://smartworkout.app/fr/bibliotheque-d-exercices/fessiers/souleve-de-terre-roumain" }
          ]
        },
        {
          label: "Finition Abducteur",
          items: [
            { name: "Abduction à la Machine", sets: "2 séries · dégressif", tags: ["Fessiers"], note: "Se pencher en avant.", docteurFitnessUrl: "https://smartworkout.app/fr/bibliotheque-d-exercices/fessiers/abduction-de-la-hanche-assis" }
          ]
        }
      ]
    },
    {
      id: "abdos",
      title: "Abdos & Core",
      tags: ["Abdominaux", "Core"],
      note: "À placer en fin de séance ou en jour dédié. Vise la contraction maximale plutôt que la vitesse.",
      groups: [
        {
          label: "Renforcement Profond & Grand Droits",
          items: [
            { name: "Crunch à la Poulie Haute", sets: "3 séries · 12-15 reps", tags: ["Abdominaux"], note: "Enrouler la colonne vertébrale, ne pas tirer avec les bras.", docteurFitnessUrl: "https://www.docteur-fitness.com/crunch-a-la-poulie" },
            { name: "Flexion latérale poid libre", sets: "3 séries · 10-12 reps", tags: ["Abdominaux"], note: "Éviter l'élan, amener les genoux haut vers la poitrine.", docteurFitnessUrl: "https://www.docteur-fitness.com/flexions-laterales-avec-haltere" }
          ]
        },
        {
          label: "Circuit x3",
          items: [
            { name: "Relevé de Jambes Assis", sets: " 20 reps", tags: ["Core"], note: "Éviter l'élan, amener les genoux haut vers la poitrine.", docteurFitnessUrl: "https://www.docteur-fitness.com/releve-de-jambes-assis" },
            { name: "Ciseaux", sets: "20 reps", tags: ["Core"], note: "Bassin rétroversé, abdos et fessiers contractés à fond.", docteurFitnessUrl: "https://www.docteur-fitness.com/ciseaux" },
            { name: "Planche", sets: "1 min", tags: ["Core"], note: "Anti-rotation stricte pour renforcer les obliques.", docteurFitnessUrl: "https://www.docteur-fitness.com/planche" }
          ]
        }
      ]
    }
  ]
};

// ==========================================================================
// VARIABLES DE LIAISON DYNAMIQUES (pour compatibilité avec le script interface)
// ==========================================================================
let TARGET, MEALS, TIPS;
const SESSIONS = APP_DATA.sessions;

// Fonction utilitaire appelée lors de la sélection du profil dans l'interface
function loadProfile(profileKey) {
  const profileData = APP_DATA.profiles[profileKey];
  if (!profileData) return;
  
  TARGET = profileData.TARGET;
  MEALS = profileData.MEALS;
  TIPS = profileData.TIPS;
}
