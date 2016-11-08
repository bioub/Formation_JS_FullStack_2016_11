// Module JavaScript : objectif est de limiter la portée des identifiants (variables ou fonctions)
// à un seul fichier
// Ci dessous : Module IIFE (Immediately Invoked Function Expression)
(function() {
    'use strict';

    
}());


(function() {
    'use strict';
    
    // Différentes syntaxes pour déclarer des fonctions

    // function declaration (pas conseillée parce se sera systématiquement la dernière)
    function hello() {
        console.log('Hello 1');
    }

    hello(); // Hello 2

    function hello() {
        console.log('Hello 2');
    }

    // function expression
    var lambda = function() {
        console.log('lambda 1');
    };

    lambda(); // lambda 1

    var lambda = function() {
        console.log('lambda 2');
    };

    lambda(); // lambda 2

    // Mieux en ES6
    const alpha = function() {
        console.log('alpha 1');
    };

    /* On ne peut la redéclarer
    const alpha = function() {
        console.log('alpha 2');
    };
    */

    // Paramètres
    var addition = function(a, b) {
        return a + b;
    };

    // Pas de contrainte sur les paramètres
    console.log(addition(1, 2)); // 3
    console.log(addition(1, '2')); // '12'
    console.log(addition(1, 2, 3, 4)); // 3
    console.log(addition(1)); // NaN

    // Convertir
    var addition = function(a, b) {
        return Number(a) + Number(b);
    };

    console.log(addition(1, '2')); // 3

    // Valider
    var addition = function(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('a et b doivent être number');
        }

        return a + b;
    };

    // Exceptions ne fonctionnent que pour du code synchrone
    try {
        console.log(addition(1, '2')); // ...
    }
    catch (e) {
        console.log('Erreur : ' + e.message);
    }

    // Récupérer les paramètres supplémentaires
    var addition = function(a, b) {
        var somme = Number(a) + Number(b);

        for (var i=2; i<arguments.length; i++) {
            somme += Number(arguments[i]);
        }

        return somme;
    };

    console.log(addition(1, 2, 3, 4)); // 10

    // En ES6 REST Parameter
    var addition = function(a, b, ...c) {
        var somme = Number(a) + Number(b);

        for (var i=0; i<c.length; i++) {
            somme += Number(c[i]);
        }

        return somme;
    };
    console.log(addition(1, 2, 3, 4)); // 10

    // Valeur par défaut
    var addition = function(a, b) {
        b = b || 0;
        return Number(a) + Number(b);
    };
    console.log(addition(1)); // 1

    // Valeur par défaut (ES6)
    var addition = function(a, b = 0) {
        return Number(a) + Number(b);
    };
    console.log(addition(1)); // 1

    // On peut imbriquer les fonctions
    // Une fonction a pour portée la fonction dans laquelle on l'a déclarée
    // On a toujours accès aux portées supérieures
    var externe = function(paramExterne) {

        var interne = function(paramInterne) {
            // paramExterne et addition sont accessibles (scopes supérieurs)
            console.log(paramExterne);
            console.log(addition(1, 2));
        };

        interne();
        console.log(typeof paramInterne); // undefined
    };

    externe('Coucou');
    console.log(typeof externe); // function
    console.log(typeof interne); // undefined


    // Sans closure
    for (var i=0; i<3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 0);
    }

    // 3 3 3

    // Avec une closure
    // 2 prérequis :
    // 1/ 2 fonctions imbriquées
    // 2/ la fonction interne puisse être appelée en dehors (return, event/callback)
    var rememberClosure = function(paramClosure) {
        // portée de closure (sauvegardée au moment du passage dans fonction externe)
        return function() {
            console.log(paramClosure);
        };
    };

    var logBonjour = rememberClosure('Bonjour');
    logBonjour(); // Bonjour

    var logCoucou = rememberClosure('Coucou');
    logCoucou(); // Bonjour

    for (var i=0; i<3; i++) {
        setTimeout(rememberClosure(i), 0);
    }

    // Objet
    var contact = {
        prenom: 'Romain'
    };

    console.log(contact.prenom); // Romain

    global.prenom = 'global';

    var hello = function(quelquun) {
        //return 'Bonjour' + quelquun + ', je m\'appelle ' + this.prenom;
        return `Bonjour ${quelquun}, je m'appelle ${this.prenom}`; // Template String ES6
    };

    console.log(hello('Jean')); // Bonjour Jean, je m'appelle global
    console.log(hello.call(contact, 'Jean')); // Bonjour Jean, je m'appelle Romain
    console.log(hello.apply(contact, ['Jean'])); // Bonjour Jean, je m'appelle Romain
    console.log(hello.bind(contact)('Jean')); // Bonjour Jean, je m'appelle Romain
}());