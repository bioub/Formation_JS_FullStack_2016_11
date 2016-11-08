const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
};

class Jeu {
    constructor(options) {
        options = options || {};
        this.$$min = options.min || 0;
        this.$$max = options.max || 100;
        this.$$entierAlea = getRandomIntInclusive(this.$$min, this.$$max);
        this.$$essais = [];
    }
    jouer() {
        var that = this;
        rl.question('Saisir un entier : ', function(answer) {

            let entierSaisi = parseInt(answer);

            if (Number.isNaN(entierSaisi)) {
                console.log('Erreur : il faut saisir un nombre');
                return that.jouer();
            }

            that.$$essais.push(entierSaisi);

            if (entierSaisi < that.$$entierAlea) {
                console.log('Trop petit');
                return that.jouer();
            }

            if (entierSaisi > that.$$entierAlea) {
                console.log('Trop grand');
                return that.jouer();
            }

            console.log('Gagné');
            rl.close();
        });
    }
}

module.exports = Jeu;