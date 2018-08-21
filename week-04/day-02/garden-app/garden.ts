import {Tree} from "./tree"
import {Flower} from "./flower"

'use strict';

export class Garden {
  flowerList: Flower [];
  treeList: Tree [];
constructor(){
  this.flowerList = [];
  this.treeList = [];
}

addFlower(name){
  let newFlower: Flower = new Flower(name)
  this.flowerList.push(newFlower)
}

addTree(name){
  let newTree: Tree = new Tree (name)
  this.flowerList.push(newTree)
}

}

