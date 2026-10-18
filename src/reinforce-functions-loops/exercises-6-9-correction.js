// ===================================================================
// CORRECTION — SALVE CIBLÉE — EXERCICES 6 À 9
// Pour chaque exercice : ce qui n'allait pas (❌), ce qui pouvait être mieux écrit (💡),
// puis l'exercice tel que je l'aurais écrit.
// Exécuter : node src/reinforce-functions-loops/exercises-6-9-correction.js
// ===================================================================

// ===== EXERCICE 6 — ✅ Réussi, et ta méthode de débogage est exemplaire =====
// ✅ Le plus important de cet exercice, c'est ta démarche : un résultat trop grand
//   → tu as isolé la boucle → tu as affiché i à chaque tour → tu as VU le problème.
//   C'est exactement le réflexe « chercher la cause avant de corriger ». Bravo.
// 💡 Pourquoi if (i % 3) donnait l'inverse : i % 3 renvoie le RESTE de la division.
//   Pour un multiple de 3, le reste vaut 0… et 0 est FALSY (leçon 6.9) ! Donc if (i % 3)
//   est vrai pour tous les nombres qui ne sont PAS des multiples de 3. D'où le === 0.
// ❌ Ce qui n'allait pas :
//   - Le 2e message affiche « de 0 à 10 » alors qu'on teste 20 (copier-coller)
//   - Les multiples sont comptés à partir de 1, pas de 0 : « de 1 à 10 »
// 💡 À améliorer :
//   - sumMultiply → sumMultiplesOfThree (« multiply » veut dire « multiplier »)
//   - Ta seconde idée marche aussi : partir de 3 et avancer de 3 en 3, sans if (version 2)

// Version 1 : de 1 en 1, avec un if
function sumMultiplesOfThree(max) {
  let total = 0;
  for (let i = 1; i <= max; i++) {
    if (i % 3 === 0) {
      total = total + i;
    }
  }
  return total;
}

// Version 2 : de 3 en 3, sans if (deux fois moins de tours)
function sumMultiplesOfThreeByStep(max) {
  let total = 0;
  for (let i = 3; i <= max; i += 3) {
    total = total + i;
  }
  return total;
}

console.log(`Somme des multiples de 3 de 1 à 10 : ${sumMultiplesOfThree(10)}`); // 18
console.log(`Somme des multiples de 3 de 1 à 20 : ${sumMultiplesOfThreeByStep(20)}`); // 63

// ===== EXERCICE 7 — ✅ Fonctionne =====
// ❌ Ce qui n'allait pas :
//   - for (score of scores) : il manque const devant score → variable globale cachée.
//     Même règle que pour le i d'un for classique : toute variable se déclare
// 💡 Math.max(...scores) : ça marche, et chercher toi-même la solution est une vraie compétence
//   de développeuse. MAIS l'exercice visait autre chose : trouver le maximum AVEC LA BOUCLE,
//   comme un accumulateur. C'est ce schéma qu'il faut connaître, car Math.max ne sait pas
//   répondre à « le meilleur score parmi ceux qui respectent une condition ».
//   Le principe : on garde « le meilleur vu jusqu'ici », et à chaque tour on le remplace
//   si le score du tour est plus grand. (Le ... devant scores s'appelle le « spread » :
//   on le verra plus tard, pas d'inquiétude si ça reste flou.)
// 💡 À améliorer :
//   - let maxScore → const (jamais réassigné dans ta version)
//   - greatScore contient un NOMBRE de scores → highScoreCount
//   - showScores n'affiche rien, elle calcule → analyzeScores
//   - Le paramètre porte le même nom que le tableau extérieur (scores) : autorisé, mais on ne
//     sait plus duquel on parle → teamScores
//   - « et parmi eux, le meilleur score » : le meilleur score est celui de TOUS les scores

const scores = [14, 8, 17, 11, 6, 19, 10];

function analyzeScores(teamScores) {
  let highScoreCount = 0;
  let bestScore = 0;
  for (const score of teamScores) {
    if (score >= 10) {
      highScoreCount++;
    }
    if (score > bestScore) {
      bestScore = score;
    }
  }
  return { highScoreCount: highScoreCount, bestScore: bestScore };
}

const scoreSummary = analyzeScores(scores);
console.log(
  `${scoreSummary.highScoreCount} scores sont supérieurs ou égaux à 10, et le meilleur score est ${scoreSummary.bestScore}.`,
);

// ===== EXERCICE 8 — ✅ 3 problèmes trouvés sur 4 =====
// ✅ Trouvés AVANT exécution : total qui démarre à 1, bigSlots = bigSlots++
// ✅ Trouvé APRÈS exécution : le return dans la boucle (et tu as vite compris pourquoi)
// ❌ Pas trouvé : for (slot of slots) sans const. Il est d'ailleurs resté dans ta version
//   corrigée. C'est le même oubli qu'à l'exercice 7 : à surveiller !
// 💡 Sur le return « faute d'inattention » : c'est en partie vrai, mais lire où se ferme
//   chaque bloc est une compétence qui se travaille. Astuce : regarde l'INDENTATION
//   (le décalage vers la droite, que Prettier remet en ordre). Le return était aligné avec
//   le if, donc il était DANS la boucle. Un return de fin de fonction doit être aligné avec
//   le for, juste avant l'accolade de la fonction.

const inventory = [3, 7, 2, 12, 5, 2];

function countPotions(slots) {
  let total = 0;
  let bigSlotCount = 0;
  for (const slot of slots) {
    total = total + slot;
    if (slot > 5) {
      bigSlotCount++;
    }
  }
  return { total: total, bigSlotCount: bigSlotCount };
}

const potionCount = countPotions(inventory);
console.log(`${potionCount.total} potions, ${potionCount.bigSlotCount} emplacements à plus de 5`);

// ===== EXERCICE 9 — ⚠️ Juste pour les deux tests demandés… mais faux pour d'autres valeurs =====
// ❌ Ce qui n'allait pas :
//   - Le -50 de la condition ne vient pas de la règle : il a été choisi pour que les deux tests
//     tombent juste. C'est encore « faire disparaître le symptôme ». Preuve, avec ta fonction :
//       killDragon(500, 20) → 27 tours au lieu de 25
//       killDragon(50, 200) → 0 tour au lieu de 1 (le dragon n'est jamais attaqué !)
//   - Une fonction n'est correcte que si elle marche pour TOUTES les valeurs, pas seulement
//     pour celles de l'énoncé. D'où l'intérêt de tester aussi des cas « bizarres »
//   - L'affichage se limite à des nombres sans phrase
// 💡 La méthode pour trouver la condition : traduire la phrase de l'énoncé, MOT À MOT.
//   « On attaque tant que le dragon est vivant »
//   → « tant que » = while, « le dragon est vivant » = ses PV sont au-dessus de 0
//   → while (currentHealth > 0)
//   Puis on écrit ce qui se passe à chaque tour : le dragon perd des PV, on compte un tour.
//   À la sortie de la boucle, les PV sont à 0 ou en dessous : les dégâts en trop, c'est
//   ce qui est passé sous 0. Plus besoin de Math.abs ni de calcul compliqué
// 💡 À améliorer :
//   - testOne / testTwo : stocker le résultat de chaque appel dans une variable, c'est la
//     BONNE méthode (il faut bien ranger l'objet pour lire ses deux propriétés). Seul le nom
//     peut être amélioré : firstFight / secondFight disent ce que contient la variable
//   - Nom de fonction : la fonction ne tue pas le dragon, elle simule un combat → simulateFight
//   - overKill → overkillDamage (un seul mot en anglais : « overkill »)

function simulateFight(dragonHealth, damagePerTurn) {
  let remainingHealth = dragonHealth;
  let turnCount = 0;
  while (remainingHealth > 0) {
    remainingHealth = remainingHealth - damagePerTurn;
    turnCount++;
  }
  return { turnCount: turnCount, overkillDamage: -remainingHealth };
}

const firstFight = simulateFight(500, 45);
const secondFight = simulateFight(300, 50);

console.log(
  `Dragon à 500 PV, 45 dégâts par tour : vaincu en ${firstFight.turnCount} tours, ${firstFight.overkillDamage} dégâts en trop.`,
);
console.log(
  `Dragon à 300 PV, 50 dégâts par tour : vaincu en ${secondFight.turnCount} tours, ${secondFight.overkillDamage} dégâts en trop.`,
);
