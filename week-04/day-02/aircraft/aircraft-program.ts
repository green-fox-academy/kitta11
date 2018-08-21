import {Aircraft} from "./aircraft";
import {F16} from "./f16";
import {F35} from "./f35";
import {Carrier} from "./carrier";

'use strict';

let myCarrier: Carrier = new Carrier(200, 3000);
myCarrier.addF16();
myCarrier.addF16();
myCarrier.addF35()
myCarrier.addF35()
myCarrier.fill();
// console.log(myCarrier);

let myEnemyCarrier: Carrier = new Carrier(200, 3000)
myEnemyCarrier.addF16()
myEnemyCarrier.addF16()
myEnemyCarrier.addF35()
myEnemyCarrier.fill()
// console.log(myEnemyCarrier);

myCarrier.fight(myEnemyCarrier);
console.log(myCarrier);
console.log(myEnemyCarrier);
