'use strict';

var Horloge = require('./horloge');

var div = document.querySelector('#horloge');
var horloge = new Horloge(div);
horloge.update();