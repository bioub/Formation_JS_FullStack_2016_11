(function(Horloge) {
    'use strict';

    var div = document.querySelector('#horloge');
    var horloge = new Horloge(div);
    horloge.update();
}(Horloge));