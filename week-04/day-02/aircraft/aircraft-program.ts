import {Aircraft} from "./aircraft";
import {F16} from "./f16";
import {F35} from "./f35";
import {Carrier} from "./carrier";

'use strict';

let myCarrier: Carrier = new Carrier(200, 1200);
myCarrier.addF16();
myCarrier.addF16();
myCarrier.addF35()
myCarrier.addF35()
myCarrier.fill();

let myEnemyCarrier: Carrier = new Carrier(200, 300)
myEnemyCarrier.addF16()
myEnemyCarrier.addF16()
myEnemyCarrier.addF35()
myEnemyCarrier.fill()


myCarrier.fight(myEnemyCarrier);
// myCarrier.geStatus()
// myEnemyCarrier.geStatus();
myEnemyCarrier.fight(myCarrier);
myCarrier.geStatus()
myEnemyCarrier.geStatus();
