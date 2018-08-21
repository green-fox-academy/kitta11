import {Tree} from "./tree"
import {Flower} from "./flower"

'use strict';

export class Garden {
  flowerList: Flower [];
  treeList: Tree [];

addFlower(flowerName){
  this.flowerList.push(flowerName)
}

addTree(treeName){
  this.treeList.push(treeName)
}

}

