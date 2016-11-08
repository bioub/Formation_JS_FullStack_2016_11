'use strict';

import moment from 'moment';

export let formatHeure = 'HH:mm:ss';

export class Horloge {

    constructor(container) {
        this.container = container;
        setInterval(this.update.bind(this), 1000);
    }

    update() {
        this.container.innerHTML = moment().format(formatHeure);
    }

}
