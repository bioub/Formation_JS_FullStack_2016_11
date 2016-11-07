// Ex : Jeu du plus ou mons
// 1- Générer un entier aléatoire entre 0 et 100 inclus (API Math sur MDN)
// 2- Demander et récupérer la saisie d'un entier (API readline de Node)
// et afficher si l'entier recherché est plus grand, plus petit ou trouvé
// 3- Pouvoir trouver en plusieurs tentatives
// 4- Stocker chaque tentative dans un tableau et les réafficher entre chaque tour (API Array sur MDN)
// 5- Afficher une erreur et rejouer si la saisie n'est pas un nombre

const Jeu = require('./jeu');

var jeu = new Jeu({
    min: 0,
    max: 10
});

jeu.jouer();


