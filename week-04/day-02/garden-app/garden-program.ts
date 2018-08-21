import {Garden} from "./garden";
import {Tree} from "./tree"
import {Flower} from "./flower"

'use strict';
let myGarden: Garden = new Garden();
myGarden.addFlower('blue');
myGarden.addFlower('yellow');
myGarden.addTree('purple');
myGarden.addTree('orange');

console.log(myGarden);
myGarden.watering(40);
myGarden.watering(70);


