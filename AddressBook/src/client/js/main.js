require(['horloge', 'app/app.module'], function(Horloge, app) {
    'use strict';

    console.log(app); // app.module

    var div = document.querySelector('#horloge');
    var horloge = new Horloge(div);
    horloge.update();
});
