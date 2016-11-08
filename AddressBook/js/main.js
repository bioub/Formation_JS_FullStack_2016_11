require.config({
    paths: {
        moment: '../../node_modules/moment/moment',
        horloge: './horloge'
    }
});

require(['horloge'], function(Horloge) {
    'use strict';

    var div = document.querySelector('#horloge');
    var horloge = new Horloge(div);
    horloge.update();
});
