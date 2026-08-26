const PROGRAMS = {
  theo: {
    name: "Théo",
    badge: "🏋️‍♂️",
    goal: "Prise de masse & Renforcement",
    targets: {
      calories: 2500,
      protein: 160,
      carbs: 250,
      fat: 70
    },
    meals: [
      { id: "t1", name: "Skyr (300g) + Miel + Muesli", calories: 380, protein: 34, carbs: 48, fat: 4 },
      { id: "t2", name: "Poulet (180g) + Riz Basmati + Légumes & Épices", calories: 650, protein: 52, carbs: 75, fat: 12 },
      { id: "t3", name: "Shake Protéine + Beurre de Cacahuète (20g)", calories: 350, protein: 32, carbs: 18, fat: 14 },
      { id: "t4", name: "Omelette 3 œufs + Pain Complet + Avocat", calories: 550, protein: 28, carbs: 40, fat: 28 }
    ],
    workoutRoutine: [
      { day: "Lundi", title: "Pectoraux & Triceps", detail: "Développé couché, Dips, Écartés + Gainage (4x1 min)" },
      { day: "Mardi", title: "Dos & Biceps", detail: "Tractions, Tirage vertical, Curl haltères + Tapis incliné 15 min" },
      { day: "Mercredi", title: "Repos ou Cardio Léger", detail: "Marche active ou récupération" },
      { day: "Jeudi", title: "Épaules & Core", detail: "Développé militaire, Élévations latérales + Circuit Abdos" },
      { day: "Vendredi", title: "Jambes & Force", detail: "Squat, Presse à cuisses, Fentes + Gainage" },
      { day: "Samedi", title: "Haut du Corps (Sculpt)", detail: "Super-sets haut du corps + Tapis incliné 15 min" },
      { day: "Dimanche", title: "Repos Complet", detail: "Récupération & étirements" }
    ]
  },
  suzanne: {
    name: "Suzanne",
    badge: "🏃‍♀️",
    goal: "Toning, Cardio & Forme",
    targets: {
      calories: 1900,
      protein: 110,
      carbs: 200,
      fat: 55
    },
    meals: [
      { id: "s1", name: "Bowl Oatmeal Avoine, Fruits Frais & Chia", calories: 340, protein: 14, carbs: 54, fat: 7 },
      { id: "s2", name: "Pavé de Saumon, Quinoa & Avocat", calories: 560, protein: 36, carbs: 42, fat: 22 },
      { id: "s3", name: "Fromage Blanc 0%, Miel & Amandes", calories: 230, protein: 20, carbs: 16, fat: 9 },
      { id: "s4", name: "Salade Poulet Grillé, Patate Douce & Féta", calories: 480, protein: 38, carbs: 45, fat: 14 }
    ],
    workoutRoutine: [
      { day: "Lundi", title: "Bas du Corps & Fessiers", detail: "Hip Thrust, Fentes bulgares, Soulevé de terre jambes tendues" },
      { day: "Mardi", title: "HIIT & Cardio Incliné", detail: "20 min Tapis incliné + Circuit Cardio au poids du corps" },
      { day: "Mercredi", title: "Repos & Mobilité", detail: "Stretching léger & marche" },
      { day: "Jeudi", title: "Upper Body & Core", detail: "Tirage poulie, Développé haltères, Gainage & Obliques" },
      { day: "Vendredi", title: "Full Body Sculpt", detail: "Circuit renforcement global léger & tonification" },
      { day: "Samedi", title: "Pilates / Core & Stabilité", detail: "Gainage dynamique, travail de la posture" },
      { day: "Dimanche", title: "Repos Complet", detail: "Repos & bien-être" }
    ]
  }
};
