(function(exports, moment) {
    'use strict';

    var formatHeure = 'HH:mm:ss';

    var Horloge = function(container) {
        this.container = container;
        setInterval(this.update.bind(this), 1000);
    };

    Horloge.prototype.update = function() {
        this.container.innerHTML = moment().format(formatHeure);
    };

    // revient à écrirer window.Horloge = Horloge;
    // window est l'objet global du navigateur
    // créer une propriété sur l'objet global
    // revient à créer une variable globale
    exports.Horloge = Horloge;

}(window, moment));