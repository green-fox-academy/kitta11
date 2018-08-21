import {Garden} from "./garden";
import {Tree} from "./tree"
import {Flower} from "./flower"

'use strict';
let myGarden: Garden = new Garden();
myGarden.addFlower('blue');
myGarden.addFlower('yellow');
myGarden.addTree('purple');
myGarden.addTree('orange');

myGarden.waterNeedStatus();
myGarden.watering(40);
myGarden.watering(70);


