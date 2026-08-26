/* ================= DONNÉES DU PROGRAMME ================= */

const TARGET = { kcal: 2350, p: 190, g: 220, l: 75 };

const TIPS = [
  "Skyr vs Fromage blanc 0% : passe aux marques distributeur (Lidl/Aldi/Carrefour) ou alterne avec le fromage blanc 0%, 2x moins cher pour une quantité de protéines quasi équivalente.",
  "Œufs & thon : tes meilleures sources de protéines à bas coût. Un pack de 30 œufs ou des boîtes de thon en lot restent imbattables.",
  "Surgelés & conserves : légumes surgelés et riz/lentilles en conserve font gagner un temps précieux sans gaspillage.",
  "Beurre de cacahuète en gros : un pot de 1kg pur 100% cacahuète en ligne (Prozis, MyProtein, Koro...) revient à 6-8€/kg au lieu de 15€/kg en supermarché.",
  "Sauces légères : la crème fluide 4-5% MG apporte la même texture que la crème 30% pour 3x moins de calories.",
  "Sauce blanche maison : mélange 100g de skyr avec ail haché, jus de citron, sel, poivre et ciboulette/paprika pour une sauce hyperprotéinée façon kebab."
];

const MEALS = [
  {
    id: "petit-dej",
    label: "1 · Petit-déjeuner",
    target: { kcal: 550, p: 45, g: 60, l: 15 },
    options: [
      { name: "Skyr Miel Muesli", tag: "Coup de cœur", prep: "2 min · direct", desc: "300g Skyr 0% + 60g muesli bio sans sucres ajoutés + 15g miel + 15g beurre de cacahuète. Riche en caséine, idéal pour rassasier un grand gabarit pendant des heures." },
      { name: "Omelette & Toast PB", tag: "Économique", prep: "5 min · poêle", desc: "3 œufs entiers battus + 2 tranches de pain complet grillé avec 15g beurre de cacahuète + 1 banane." },
      { name: "Bowl Express Avoine", tag: "Rapide", prep: "2 min · bol", desc: "250g fromage blanc 0% + 60g flocons d'avoine + 1 scoop de whey (optionnel) + 15g beurre de cacahuète mélangé." },
      { name: "Pancakes Prot' Avoine-Banane", tag: "Idée maison", prep: "8 min · poêle", desc: "60g flocons d'avoine mixés + 1 banane écrasée + 2 œufs + 1 scoop whey, cuits à la poêle sans matière grasse. Nappe de 10g miel." }
    ]
  },
  {
    id: "dejeuner",
    label: "2 · Déjeuner",
    target: { kcal: 650, p: 50, g: 70, l: 18 },
    options: [
      { name: "Poulet Rice Express", tag: "Top budget", prep: "8 min · poêle", desc: "160g escalope de poulet ou dinde + 250g riz basmati cuit + 200g poêlée de légumes surgelés + 10g huile d'olive." },
      { name: "Assiette Thon & Patate Douce", tag: "Sans cuisson longue", prep: "6 min · micro-ondes", desc: "1 boîte de thon au naturel (140g égoutté) + 250g patate douce en dés + haricots verts surgelés + 15g mayonnaise allégée." },
      { name: "Steak Haché & Pâtes Complètes", tag: "Classique", prep: "8 min · casserole", desc: "1-2 steaks hachés 5% MG (125g) + 180g pâtes complètes cuites + sauce tomate basilic + légumes au choix." },
      { name: "Poulet Curry Onctueux", tag: "Plat en sauce", prep: "10 min · poêle", desc: "170g poulet sauté avec oignon, ail, curry, cumin + 70g crème légère 4% (ou skyr) + 220g riz basmati + courgettes/poivrons." },
      { name: "Chili Con Carne Rapide", tag: "Épices & budget", prep: "10 min · poêle", desc: "160g steak haché 5% + oignon, ail, paprika, piment + 150g haricots rouges + pulpe de tomate + 150g riz cuit." },
      { name: "Pâtes Poulet Paprika Crème", tag: "Gourmand", prep: "10 min · casserole", desc: "160g dinde/poulet + 180g pâtes complètes + oignon, ail + 80g crème légère 4% + paprika doux & poivre." }
    ]
  },
  {
    id: "collation",
    label: "3 · Collation / Pre-Workout",
    target: { kcal: 350, p: 35, g: 35, l: 10 },
    options: [
      { name: "Skyr Gourmand PB", tag: "Top énergie", prep: "1 min · direct", desc: "200g skyr 0% + 15g beurre de cacahuète + 1 pomme ou 1 banane coupée en morceaux." },
      { name: "Shaker & Tartine Nomade", tag: "Rapide", prep: "1 min · shaker", desc: "1 scoop de whey (30g) dans eau ou lait d'amande + 1 tranche de pain complet avec 15g beurre de cacahuète." },
      { name: "Fromage Blanc Fruits Rouges", tag: "Idée maison", prep: "1 min · direct", desc: "250g fromage blanc 0% + fruits rouges surgelés + 10g miel + 10g amandes effilées." }
    ]
  },
  {
    id: "diner",
    label: "4 · Dîner",
    target: { kcal: 800, p: 60, g: 55, l: 30 },
    options: [
      { name: "Pavé de Saumon & Lentilles", tag: "Riche en oméga-3", prep: "7 min · poêle", desc: "180g pavé de saumon poêlé sans matière grasse + 200g lentilles cuites en conserve + brocolis + 10g huile d'olive." },
      { name: "Pavé de Saumon Sauce Aneth-Ail", tag: "Version onctueuse", prep: "10 min · poêle", desc: "180g saumon poêlé + sauce 60g crème légère 4% + jus de citron + ail pressé + aneth + 200g pommes de terre + épinards." },
      { name: "Omelette Géante & Pommes de Terre", tag: "Petit prix", prep: "8 min · poêle", desc: "4 œufs entiers + 50g blanc de dinde en dés + 250g pommes de terre vapeur + salade verte, dressing huile d'olive/vinaigre." },
      { name: "Poêlée Mexicaine au Haché", tag: "Épicé", prep: "8 min · poêle", desc: "180g steak haché 5% émietté + 150g haricots rouges + 100g maïs + poivrons/oignons + épices mexicaines." },
      { name: "Dahl de Lentilles Coral & Poulet", tag: "Épices & onctueux", prep: "12 min · casserole", desc: "150g blanc de poulet + 180g lentilles corail cuites au lait de coco léger + ail, gingembre, curcuma, garam masala + 150g patate douce." },
      { name: "Cabillaud, Riz & Sauce Curry Léger", tag: "Idée maison", prep: "12 min · poêle", desc: "180g cabillaud + 200g riz cuit + sauce 60g crème légère 4% + curry doux + épinards frais fondus." }
    ]
  }
];

const SESSIONS = [
  {
    id: "jambes",
    title: "Jambes",
    tags: ["Quadriceps", "Ischios", "Adducteurs"],
    groups: [
      { label: "Échauffement", items: [
        { name: "Échauffement général", sets: "5-10 min", note: "Mobilité hanches / chevilles, montées de genoux.", tags: ["Échauffement"] }
      ]},
      { label: "Mouvements de force", items: [
        { name: "Squat", sets: "2 séries échauffement + 3 séries lourdes", docteurFitnessUrl: "https://www.docteur-fitness.com/exercice-squat", tags: ["Quadriceps"] },
        { name: "Presse inclinée", sets: "1 série échauffement + 3 séries lourdes", docteurFitnessUrl: "https://www.docteur-fitness.com/presse-a-cuisses", tags: ["Quadriceps"] },
        { name: "Gobelet squat", sets: "3 x 8 reps", docteurFitnessUrl: "https://www.docteur-fitness.com/goblet-squat", tags: ["Quadriceps"] }
      ]},
      { label: "Isolation", items: [
        { name: "Leg extension", sets: "3 x 12 reps + 8 reps dégressif", docteurFitnessUrl: "https://www.docteur-fitness.com/leg-extension", tags: ["Quadriceps"] },
        { name: "Leg curl", sets: "4 x 12/10 reps", docteurFitnessUrl: "https://www.docteur-fitness.com/leg-curl-allonge", tags: ["Ischios"] },
        { name: "Adducteur", sets: "3 x 8 reps lourd", docteurFitnessUrl: "https://www.docteur-fitness.com/adducteurs-a-la-machine", tags: ["Adducteurs"] },
        { name: "Abducteur", sets: "3 x 7-7-7-7 reps", docteurFitnessUrl: "https://www.docteur-fitness.com/abducteurs-a-la-machine", tags: ["Adducteurs"] }
      ]}
    ]
  },
  {
    id: "dos-biceps",
    title: "Dos & Biceps",
    tags: ["Dos", "Biceps", "Lombaires"],
    groups: [
      { label: "Échauffement", items: [
        { name: "Échauffement général", sets: "5-10 min", note: "Rotations d'épaules, activation scapulaire.", tags: ["Échauffement"] }
      ]},
      { label: "Dos", items: [
        { name: "Traction", sets: "4 séries max + 1/2 série en grippe", docteurFitnessUrl: "https://www.docteur-fitness.com/tractions-prise-en-pronation", tags: ["Dos"] },
        { name: "Tirage vertical", sets: "4 x 12 reps ou 3 x 8 reps lourd", note: "Prise neutre ou serrée.", docteurFitnessUrl: "https://www.docteur-fitness.com/tirage-vertical-poitrine", tags: ["Dos"] },
        { name: "Tirage horizontal unilatéral", sets: "3 x 10/8 reps", docteurFitnessUrl: "https://www.docteur-fitness.com/rowing-haltere-unilateral", tags: ["Dos"] },
        { name: "Face pull", sets: "3 x 12/10 reps", docteurFitnessUrl: "https://www.docteur-fitness.com/face-pull", tags: ["Dos"] },
        { name: "Pull-over", sets: "3 x 12/10 reps", docteurFitnessUrl: "https://www.docteur-fitness.com/pull-over-a-la-poulie-haute", tags: ["Dos"] }
      ]},
      { label: "Biceps & avant-bras", items: [
        { name: "Double biceps", sets: "4 x 10/8 reps dégressif", docteurFitnessUrl: "https://www.docteur-fitness.com/curl-biceps-a-la-poulie-haute", tags: ["Biceps"] },
        { name: "Biceps poulie basse", sets: "4 x 10/8 reps dégressif", docteurFitnessUrl: "https://www.docteur-fitness.com/curl-biceps-poulie-basse", tags: ["Biceps"] },
        { name: "Curl marteau", sets: "3 x 10/8 reps", docteurFitnessUrl: "https://www.docteur-fitness.com/curl-marteau", tags: ["Biceps"] },
        { name: "Curl inversé", sets: "3 x 12-15 reps, charge légère", note: "Ajout coach : cible les extenseurs de l'avant-bras, complémentaire des curls (fléchisseurs). Placé en fin de séance.", badge: "Nouveau", docteurFitnessUrl: "https://www.docteur-fitness.com/curl-inverse-a-la-barre", tags: ["Biceps"] }
      ]},
      { label: "Lombaires", items: [
        { name: "Extension lombaire", sets: "3 x 10-8-max reps", note: "+ étirements lombaires en fin de série.", docteurFitnessUrl: "https://www.docteur-fitness.com/extensions-lumbales-au-banc", tags: ["Lombaires"] }
      ]}
    ]
  },
  {
    id: "pecs",
    title: "Pecs & Épaules/Triceps",
    tags: ["Pecs", "Épaules", "Triceps"],
    note: "4 séries à poids léger (12-10 reps) OU 3 séries à poids lourd (10-8 reps). Choisis 3-4 exercices pecs, puis la variante Épaules ou Triceps du jour.",
    variant: true,
    groups: [
      { label: "Pecs (base commune)", items: [
        { name: "Développé couché avec haltères", sets: "3-4 séries · voir schéma", docteurFitnessUrl: "https://www.docteur-fitness.com/developpe-couche-halteres", tags: ["Pecs"] },
        { name: "Écarté couché avec haltères", sets: "3-4 séries · voir schéma", docteurFitnessUrl: "https://www.docteur-fitness.com/ecarte-couche-halteres", tags: ["Pecs"] },
        { name: "Développé incliné machine convergente", sets: "3-4 séries · voir schéma", docteurFitnessUrl: "https://www.docteur-fitness.com/developpe-incline-a-la-machine", tags: ["Pecs"] },
        { name: "Pec-deck / Butterfly", sets: "3-4 séries · voir schéma", docteurFitnessUrl: "https://www.docteur-fitness.com/pec-deck", tags: ["Pecs"] },
        { name: "Développé couché Smith machine", sets: "3-4 séries · voir schéma", docteurFitnessUrl: "https://www.docteur-fitness.com/developpe-couche-smith-machine", tags: ["Pecs"] },
        { name: "Dips inclinés", sets: "3-4 séries · voir schéma", docteurFitnessUrl: "https://www.docteur-fitness.com/dips", tags: ["Pecs"] }
      ]},
      { label: "Variante Épaules", variantKey: "epaules", items: [
        { name: "Élévation latérale haltères", sets: "3-4 séries · voir schéma", note: "Deltoïde latéral.", docteurFitnessUrl: "https://www.docteur-fitness.com/elevations-laterales-halteres", tags: ["Épaules"] },
        { name: "Développé assis avec haltères", sets: "3-4 séries · voir schéma", note: "Deltoïde antérieur.", docteurFitnessUrl: "https://www.docteur-fitness.com/developpe-epaules-halteres", tags: ["Épaules"] },
        { name: "Pec-deck inversé", sets: "3-4 séries · voir schéma", note: "Deltoïde postérieur.", docteurFitnessUrl: "https://www.docteur-fitness.com/oiseau-a-la-machine-pec-deck", tags: ["Épaules"] },
        { name: "Rotation externe", sets: "3 x 12-15 reps", note: "Santé de la coiffe des rotateurs.", docteurFitnessUrl: "https://www.docteur-fitness.com/rotations-externes-a-la-poulie", tags: ["Épaules"] }
      ]},
      { label: "Variante Triceps", variantKey: "triceps", items: [
        { name: "Extension des avant-bras couché, haltères", sets: "3-4 séries · voir schéma", docteurFitnessUrl: "https://www.docteur-fitness.com/barre-au-front-halteres", tags: ["Triceps"] },
        { name: "Extension verticale alternée, haltères", sets: "3-4 séries · voir schéma", docteurFitnessUrl: "https://www.docteur-fitness.com/extension-triceps-unilaterale-haltere", tags: ["Triceps"] },
        { name: "Extension verticale à deux mains, haltères", sets: "3-4 séries · voir schéma", docteurFitnessUrl: "https://www.docteur-fitness.com/extension-triceps-deux-mains-haltere", tags: ["Triceps"] },
        { name: "Extension verticale à la poulie haute", sets: "3-4 séries · voir schéma", docteurFitnessUrl: "https://www.docteur-fitness.com/extension-triceps-poulie-haute-corde", tags: ["Triceps"] }
      ]}
    ]
  },
  {
    id: "fessiers",
    title: "Fessiers",
    tags: ["Fessiers", "Ischios"],
    groups: [
      { label: "Programme", items: [
        { name: "Hip Thrust Machine", sets: "3-4 x 10-12 reps", badge: "Suggestion coach", note: "Séries/reps non précisées dans tes notes originales — base de départ à ajuster.", docteurFitnessUrl: "https://www.docteur-fitness.com/hip-thrust-a-la-machine", tags: ["Fessiers"] },
        { name: "Fente bulgare avec haltère", sets: "3 x 10-12 reps / jambe", badge: "Suggestion coach", docteurFitnessUrl: "https://www.docteur-fitness.com/fentes-bulgares", tags: ["Fessiers"] },
        { name: "Step up poulie", sets: "3 x 10-12 reps / jambe", badge: "Suggestion coach", docteurFitnessUrl: "https://www.docteur-fitness.com/step-up", tags: ["Fessiers"] },
        { name: "RDL Smith machine", sets: "3 x 10 reps", badge: "Suggestion coach", note: "Charnière de hanche, tension ischios/fessiers.", docteurFitnessUrl: "https://www.docteur-fitness.com/souleve-de-terre-jambes-tendues", tags: ["Ischios"] }
      ]}
    ]
  },
  {
    id: "abdos",
    title: "Abdos",
    tags: ["Abdos", "Gainage"],
    groups: [
      { label: "Isolation", items: [
        { name: "Crunch poulie", sets: "3 x 10 reps", docteurFitnessUrl: "https://www.docteur-fitness.com/crunch-a-la-poulie-haute", tags: ["Abdos"] },
        { name: "Flexions latérales à la poulie", sets: "3 x 10 reps", docteurFitnessUrl: "https://www.docteur-fitness.com/flexion-laterale-a-la-poulie", tags: ["Abdos"] }
      ]},
      { label: "Circuit (x3 tours)", items: [
        { name: "Relevés de jambes", sets: "20 reps", docteurFitnessUrl: "https://www.docteur-fitness.com/releve-de-jambes-suspendu", tags: ["Abdos"] },
        { name: "Battement de jambes", sets: "20 reps", docteurFitnessUrl: "https://www.docteur-fitness.com/battements-de-jambes", tags: ["Abdos"] },
        { name: "Planche", sets: "1 min", docteurFitnessUrl: "https://www.docteur-fitness.com/planche-gainage", tags: ["Gainage"] }
      ]}
    ]
  }
];
