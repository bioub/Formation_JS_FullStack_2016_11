define(['moment'], function(moment) {
    'use strict';

    var formatHeure = 'HH:mm:ss';

    var Horloge = function(container) {
        this.container = container;
        setInterval(this.update.bind(this), 1000);
    };

    Horloge.prototype.update = function() {
        this.container.innerHTML = moment().format(formatHeure);
    };

    return Horloge;
});
