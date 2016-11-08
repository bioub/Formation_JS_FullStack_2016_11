'use strict';

import {Horloge} from './horloge';

var div = document.querySelector('#horloge');
var horloge = new Horloge(div);
horloge.update();