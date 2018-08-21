import {Aircraft} from "./aircraft";
import {F16} from "./f16";
import {F35} from "./f35";
import {Carrier} from "./carrier";

'use strict';

let myCarrier: Carrier = new Carrier(40, 20);
myCarrier.addF16();
myCarrier.addF35()

console.log(myCarrier);

myCarrier.fill();
console.log(myCarrier);

